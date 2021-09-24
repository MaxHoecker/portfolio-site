import {Collapse} from 'react-collapse';
import React, {UseState} from 'react';
import Alerter from "../wrappers/Alerter";

export default function Experience(props){
    const [isOpen, setIsOpen] = React.useState(props.isOpened);
    const wrapperCSS = "bg-backgroundColor";
    const contentCSS = "";

    let child = (
        <div className={wrapperCSS}>
            <div>
                {props.image}
                <h1>
                    {props.title}
                </h1>
            </div>
            <div className={contentCSS}>
                <Collapse key={props.title} isOpened={isOpen}>
                    {props.child}
                </Collapse>
            </div>

        </div>
    );


    return (
        <Alerter children={child} callback={setIsOpen}/>
    )
}