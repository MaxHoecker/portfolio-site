import FadeInCard from "./FadeInCard";
import React from "react";

import storyContent from "./../siteText/HowItsMade.json";
import images from "../images/imageIndex";

import HowItsMadeItem from "./HowItsMadeItem";


export default function HowItsMade(){


    let itemList = []
    let index = 0;

    for (const value of Object.values(images.howItsMade.allImages)){
        let childComponent = <HowItsMadeItem content={storyContent.content[index]} imageResources={value}/>
        let fadeInWrapper = <FadeInCard childComponent={childComponent} />
        itemList.push(fadeInWrapper)

        index ++;
    }

    return(
        <div className={"overflow-x-hidden w-fill"}>
            {itemList}
        </div>
    )
}