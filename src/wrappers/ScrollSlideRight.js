import { useState, useRef } from 'react';
import useTriggerOnScroll from '../hooks/useTriggerOnScroll';
import Slide from './SlideRight';


export default function ScrollSlideRight(props) {
    const { className = '', children } = props;
    const el = useRef();
    const [show, setShow] = useState(false);
    useTriggerOnScroll(el, (triggered) => {
        setShow(triggered);
    });

    return (
        <div className={className} ref={el}>
            <Slide show={show}>{children}</Slide>
        </div>
    );


}