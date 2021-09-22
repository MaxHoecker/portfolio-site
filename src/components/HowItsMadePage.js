import FadeInCard from "./FadeInCard";
import React from "react";
import awsInstanceImage from "./../images/awsLaunchInstance.PNG"
import newProject from "./../images/reactAppStart.PNG"
import siteText from "./../images/siteText.PNG"
import earlySiteLook from "./../images/EarlySiteLook.PNG"
import ScrollSlideLeft from "../wrappers/ScrollSlideLeft";
import ScrollSlideRight from "../wrappers/ScrollSlideRight";


export default function HowItsMadePage(props){
    let cardList=[];

    const Prelude = (
        <div>
            <p>
                You may be wondering, What is this mysterious tab called "how it's made" and why does it exist?<br/>
                Basically, I was looking at different places to apply for spring co-ops and in their application they would have a field for "personal website"<br/>
                so I thought, why haven't I made a site of my own?<br/>
                I certainly know how to<br/>
                What should I put on this site?<br/>
                How about the steps I went through to make it?<br/>
                And thus my journey begins...<br/>
            </p>
        </div>
    )


    const RunningMachine = (
        <div>
            {/*<img src={awsInstanceImage} alt={"AWS instance launch screen"}/>*/}
            <p>
                So I know that there's two main pieces I'll need, some code that makes up the site, and a machine for the site to be hosted on. <br/>
                In terms of having a machine to run the site on I knew I had two main options, hosting it on a cloud instance or on a raspberry pie I have lying around. <br/>
                I decided to go for making a vm instance on AWS for mostly the learning experience <br/>
            </p>
        </div>
    );

    const AWSCard = (
        <div>
            <img src={awsInstanceImage} alt={"AWS instance launch screen"}/>
            <p>
                So I made an AWS account, booted up a micro ec2-instance on the free tier, set up sshing into the VM, and allowed http and https protocols in the security groups
            </p>
        </div>
    );


    const MakingTheProject = (
        <div>
            <img src={newProject} alt={"empty Webstorm Project"}/>
            <p>
                Now I need to set up the project that will be the code that actually runs <br/>
                So I went to my favorite ide for web development(Webstorm) and made a new React based project, and linked it up to a remote git repository <br/>
                When making a site choosing a css framework to use can significantly cut down on development time <br/>
                I decided to go with Tailwind because it's lightweight and allows a lot of customization very rapidly <br/>
            </p>
        </div>
    );

    const GruntWork = (
        <div>
            <img src={siteText} alt={"inception type picture of the text"}/>
            <p>
                After choosing a css framework I now have to do all the grunt work including writing this text you're reading and putting in these images you're looking at <br/>
            </p>
        </div>
    );

    cardList.push(
        <ScrollSlideRight key={"Prelude-Transition"} children={<FadeInCard key={"Prelude"} childComponent={Prelude} colorConfig={props.colorConfig}/>}/>
    );
    cardList.push(
        <ScrollSlideLeft key={"Running-Machine-Transition"} children={<FadeInCard key={"Running-Machine"} childComponent={RunningMachine} colorConfig={props.colorConfig}/>}/>
    );
    cardList.push(
        <ScrollSlideRight key={"AWS-Transition"} children={<FadeInCard key={"AWS"} childComponent={AWSCard} colorConfig={props.colorConfig}/>}/>
    );
    cardList.push(
        <ScrollSlideLeft key={"Making-The-Project-Transition"} children={<FadeInCard key={"Making-The-Project"} childComponent={MakingTheProject} colorConfig={props.colorConfig}/>}/>
    );
    cardList.push(
        <ScrollSlideRight key={"GruntWork-Transition"} children={<FadeInCard key={"GruntWork"} childComponent={GruntWork} colorConfig={props.colorConfig}/>}/>
    );



    return(
        <div>
            {cardList}
        </div>
    )
}