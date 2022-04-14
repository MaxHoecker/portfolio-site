import FadeInCard from "./FadeInCard";
import React from "react";

import storyContent from "./../siteText/HowItsMade.json";
import images from "../images/index";

import ScrollSlideLeft from "../wrappers/ScrollSlideLeft";
import ScrollSlideRight from "../wrappers/ScrollSlideRight";
import HowItsMadeItem from "./HowItsMadeItem";


export default function HowItsMadePage(){
    let cardList=[];



    const RunningMachine = (
        <HowItsMadeItem content={storyContent.content[0]} imageResources={[images.howItsMade.allImages[0]]}/>
    );

    const AWSCard = (
        <HowItsMadeItem content={storyContent.content[1]} imageResources={[images.howItsMade.allImages[1],images.howItsMade.allImages[2]]}/>
    );
    //
    // const MakingTheProject = (
    //     <HowItsMadeItem content={storyContent.content[2]} imageResources={[images.howItsMade.allImages[3]]}/>
    // );
    //
    // const GruntWork = (
    //     <HowItsMadeItem content={storyContent.content[3]} imageResources={[images.howItsMade.allImages[4]]}/>
    // );
    //
    // const EarlySite = (
    //     <HowItsMadeItem content={storyContent.content[4]} imageResources={[images.howItsMade.allImages[5]]}/>
    // );
    //
    // const PullingTheProject = (
    //     <HowItsMadeItem content={storyContent.content[5]} imageResources={[images.howItsMade.allImages[6]]}/>
    // );
    //
    // const Nginx = (
    //     <HowItsMadeItem content={storyContent.content[6]} imageResources={[images.howItsMade.allImages[7]]}/>
    // );
    //
    // const Namecheap = (
    //     <HowItsMadeItem content={storyContent.content[7]} imageResources={[images.howItsMade.allImages[8]]}/>
    // );


    //
    //     And just like that, bada-bing bada-boom I have a website!

    cardList.push(
        <ScrollSlideLeft key={"Running-Machine-Transition"} children={<FadeInCard key={"Running-Machine"} childComponent={RunningMachine} />}/>
    );
    cardList.push(
        <ScrollSlideRight key={"AWS-Transition"} children={<FadeInCard key={"AWS"} childComponent={AWSCard} />}/>
    );
    // cardList.push(
    //     <ScrollSlideLeft key={"Making-The-Project-Transition"} children={<FadeInCard key={"Making-The-Project"} childComponent={MakingTheProject} />}/>
    // );
    // cardList.push(
    //     <ScrollSlideRight key={"GruntWork-Transition"} children={<FadeInCard key={"GruntWork"} childComponent={GruntWork} />}/>
    // );
    // cardList.push(
    //     <ScrollSlideLeft key={"EarlySite-Transition"} children={<FadeInCard key={"EarlySite"} childComponent={EarlySite} />}/>
    // );
    // cardList.push(
    //     <ScrollSlideRight key={"PullingTheProject-Transition"} children={<FadeInCard key={"PullingTheProject"} childComponent={PullingTheProject} />}/>
    // );
    // cardList.push(
    //     <ScrollSlideLeft key={"Nginx-Transition"} children={<FadeInCard key={"Nginx"} childComponent={Nginx} />}/>
    // );
    // cardList.push(
    //     <ScrollSlideRight key={"Namecheap-Transition"} children={<FadeInCard key={"Namecheap"} childComponent={Namecheap} />}/>
    // );

    return(
        <div className={"overflow-x-hidden w-fill"}>
            {cardList}
        </div>
    )
}