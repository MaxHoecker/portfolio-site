import { useEffect, useState } from 'react';

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function hasScrolledTo(el) {
    if (!el) return false;
    const top = getOffset(el).top;
    const offset = window.innerHeight;
    return top - offset <= window.pageYOffset;
}

export default function useTriggerOnScroll(ref, onTrigger) {
    const [triggered, setTriggered] = useState(false);
    useEffect(() => {
        function onScroll() {

            const viewed = hasScrolledTo(ref.current);
            if (viewed && !triggered) {
                window.removeEventListener('scroll', onScroll);
                setTriggered(true);
                onTrigger(true);
            } else if (!viewed && triggered) {
                window.removeEventListener('scroll', onScroll);
                setTriggered(false);
                onTrigger(false);
            }
        }

        onScroll();
        setTimeout(() => {
            window.addEventListener('scroll', onScroll);
        }, 100);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [ref, onTrigger, triggered]);
}