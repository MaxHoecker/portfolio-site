import {Collapse} from 'react-collapse';
import React from 'react';
import Alerter from "../wrappers/Alerter";

export default function Experience(props){
    const [isOpen, setIsOpen] = React.useState(props.isOpened);
    const wrapperCSS = "bg-backgroundColor-light border-2 border-secondary max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-auto";
    const imageCSS = "h-48 w-full object-cover md:w-18";
    let contentCSS = "text-primary";

    if(isOpen){
        contentCSS = "text-primary border-t-2 border-secondary p-6"
    }

    let child = (
        <div className={wrapperCSS}>
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className={imageCSS} src={props.image || ""} alt={props.alt} />
                </div>
                <div className="p-8 m-auto">
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-secondary hover:underline">
                        {props.title}
                    </a>

                </div>
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