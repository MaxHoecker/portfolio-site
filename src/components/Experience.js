import {Collapse} from 'react-collapse';
import React, {UseState} from 'react';
import Alerter from "../wrappers/Alerter";

export default function Experience(props){
    const [isOpen, setIsOpen] = React.useState(props.isOpened);
    const wrappercss = "";

    let child = (
        <div className={wrappercss}>
            <div>
                {props.image}
                <h1>
                    {props.title}
                </h1>
            </div>
            <Collapse isOpened={isOpen} >
                {props.child}
            </Collapse>
        </div>
    );


    return (
        <Alerter children={child} callback={setIsOpen}/>
    )
}