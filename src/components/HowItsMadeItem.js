import React from "react";

export default function HowItsMadeItem(props) {

    let images = []
    let imageIndex = 0;
    let textLines = []

    console.log("props", props)

    props.content?.images.forEach(storyItemImage => {
        images.push(
            <img className={storyItemImage?.tailwindCSS} src={props.imageResources[imageIndex]} alt={storyItemImage?.alt}/>
        );
        imageIndex ++;
    })

    props.content?.text.forEach(storyItemText => {
        textLines.push(
            <>{storyItemText}<br/></>
        );
    })

    return(
        <div>
            <div className={props.content?.imageWrapper}>
                {images}
            </div>
            <p>
                {textLines}
            </p>
        </div>
    )
}