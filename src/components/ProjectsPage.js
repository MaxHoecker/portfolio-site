import FadeInCard from "./FadeInCard";
import React from "react";
import awsInstanceImage from "./../images/awsLaunchInstance.PNG"

export default function ProjectsPage(props){
    let cardList=[];

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
            {/*<img src={awsInstanceImage} alt={"AWS instance launch screen"}/>*/}
            <p>
                Now I need to set up the project that will be the code that actually runs <br/>
                So I went to my favorite ide for web development(Webstorm) and made a new React based project, and linked it up to a remote git repository <br/>
                When making a site choosing a css framework to use can significantly cut down on development time <br/>
                I decided to go with Tailwind because it's lightweight and allows a lot of customization very rapidly <br/>
                After choosing a css framework I now have to do all the grunt work including writing this text you're reading and putting in these images you're looking at <br/>
            </p>
        </div>
    );

    cardList.push(
        <FadeInCard childComponent={RunningMachine} colorConfig={props.colorConfig}/>
    );
    cardList.push(
        <FadeInCard childComponent={AWSCard} colorConfig={props.colorConfig}/>
    );
    cardList.push(
        <FadeInCard childComponent={MakingTheProject} colorConfig={props.colorConfig}/>
    );



    return(
        <div>
            {cardList}
        </div>
    )
}