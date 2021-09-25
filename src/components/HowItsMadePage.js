import FadeInCard from "./FadeInCard";
import React from "react";

import raspi from "./../images/howitsmade/Raspi.png"
import awsLogo from "./../images/howitsmade/aws.svg.png"
import awsInstanceImage from "./../images/howitsmade/awsLaunchInstance.PNG"
import newProject from "./../images/howitsmade/reactAppStart.PNG"
import siteText from "./../images/howitsmade/siteText.PNG"
import earlySiteLook from "./../images/howitsmade/EarlySiteLook.PNG"
import pullingProject from "./../images/howitsmade/BuildForServer.PNG"
import nginxSetup from "./../images/howitsmade/NginxLandingPage.PNG"
import namecheap from "./../images/howitsmade/Namecheap-Logo.wine.svg"


import ScrollSlideLeft from "../wrappers/ScrollSlideLeft";
import ScrollSlideRight from "../wrappers/ScrollSlideRight";


export default function HowItsMadePage(){
    let cardList=[];

    const Prelude = (
        <div>
            <p>
                You may be wondering, What is this mysterious tab called "how it's made" and why does it exist?<br/>
                Basically, I was looking at different places to apply for spring co-ops and in their application they would have a field for "personal website"<br/>
                so I thought, why haven't I made a site of my own?<br/>
                I certainly know how to<br/>
                <br/>
                When thinking about what to put on the site I had an idea. <br/>
                What about the steps I went through to make it?<br/>
                And thus my journey begins...<br/>
            </p>
        </div>
    )


    const RunningMachine = (
        <div>
            <div className={"object-scale-down flex justify-center h-48 w-full m-2"}>
                <img className={"float-left h-full"} src={raspi} alt={"AWS instance launch screen"}/>
                <img className={"float-right h-full"} src={awsLogo} alt={"AWS instance launch screen"}/>
            </div>

            <p>
                So I know that there's two main pieces I'll need, some code that makes up the site, and a machine for the site to be hosted on. <br/>
                In terms of having a machine to run the site on I knew I had two main options, hosting it on a cloud instance or on a raspberry pi I have lying around. <br/>
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

    const EarlySite = (
        <div>
            <img src={earlySiteLook} alt={"image of the site early on in development"}/>
            <p>
                Here's what the site looked like really early on (I sure hope it looks better now)
            </p>
        </div>
    );

    const PullingTheProject = (
        <div>
            <img src={pullingProject} alt={"terminal view"}/>
            <p>
                After some work on the site's looks I wanted to make it so that I could actually run the code I've been writing on the VM I had booted up on AWS. <br/>
                So after connecting to the Virtual Machine I installed git, made a folder for the website to be contained within, <br/>
                pulled the repository from github, installed nodejs and npm, installed dependencies, and then made a production build of the app
            </p>
        </div>
    );

    const Nginx = (
        <div>
            <img src={nginxSetup} alt={"view of what the nginx landing page looks like"}/>
            <p>
                After a bit of pain editing the Virtual Machine's security groups again, and messing with installation commands and config files,<br/>
                I eventually got it so that the nginx landing page would appear when I went to the VM's public ip address
            </p>
        </div>
    );

    const Namecheap = (
        <div>
            <img src={namecheap} alt={"namecheap's logo"}/>
            <p>
                Now I just need to buy a domain name for my site. I used Namecheap and decided on the domain max-hoecker.com because unfortunately maxhoecker.com was already taken by my doppelganger <br/>
                After buying the domain I just had to make an A record and point it to the ip address of the virtual machine.
            </p>
        </div>
    );


    //
    //     And just like that, bada-bing bada-boom I have a website!

    cardList.push(
        <ScrollSlideRight key={"Prelude-Transition"} children={<FadeInCard key={"Prelude"} childComponent={Prelude} />}/>
    );
    cardList.push(
        <ScrollSlideLeft key={"Running-Machine-Transition"} children={<FadeInCard key={"Running-Machine"} childComponent={RunningMachine} />}/>
    );
    cardList.push(
        <ScrollSlideRight key={"AWS-Transition"} children={<FadeInCard key={"AWS"} childComponent={AWSCard} />}/>
    );
    cardList.push(
        <ScrollSlideLeft key={"Making-The-Project-Transition"} children={<FadeInCard key={"Making-The-Project"} childComponent={MakingTheProject} />}/>
    );
    cardList.push(
        <ScrollSlideRight key={"GruntWork-Transition"} children={<FadeInCard key={"GruntWork"} childComponent={GruntWork} />}/>
    );
    cardList.push(
        <ScrollSlideLeft key={"EarlySite-Transition"} children={<FadeInCard key={"EarlySite"} childComponent={EarlySite} />}/>
    );
    cardList.push(
        <ScrollSlideRight key={"PullingTheProject-Transition"} children={<FadeInCard key={"PullingTheProject"} childComponent={PullingTheProject} />}/>
    );
    cardList.push(
        <ScrollSlideLeft key={"Nginx-Transition"} children={<FadeInCard key={"Nginx"} childComponent={Nginx} />}/>
    );
    cardList.push(
        <ScrollSlideRight key={"Namecheap-Transition"} children={<FadeInCard key={"Namecheap"} childComponent={Namecheap} />}/>
    );

    return(
        <div className={"overflow-x-hidden w-fill"}>
            {cardList}
        </div>
    )
}