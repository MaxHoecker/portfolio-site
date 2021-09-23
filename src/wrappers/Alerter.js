import {useRef} from 'react';
import {useInsideAlerter} from './../hooks/useInsideAlerter';
import {useOutsideAlerter} from './../hooks/useOutsideAlerter';

/**
 * Component that alerts if you click outside of it
 */
export default function Alerter(props) {
    const wrapperRef = useRef(null);
    useInsideAlerter(wrapperRef, props.callback);
    useOutsideAlerter(wrapperRef, props.callback);

    return <div ref={wrapperRef}>{props.children}</div>;
}