import storyContent from "./../siteText/HowItsMade.json"

const images = {
    aboutMe: {
        niagra: require("./aboutMe/niagra.jpg").default
    },
    experience: {
        initials: require('./experience/initials.png').default,
        scanpower: require('./experience/Scanpower.png').default,
        si: require('./experience/SILogo.jpg').default
    },
    howItsMade: {
        allImages: {
            intro: [""],
            hosting: [
                require(`./howItsMade/Raspi.png`).default,
                require(`./howItsMade/aws.svg.png`).default
            ],
            aws: [require(`./howItsMade/awsLaunchInstance.PNG`).default],
            newProject: [require(`./howItsMade/reactAppStart.PNG`).default],
            siteText: [require(`./howItsMade/siteText.PNG`).default],
            earlyLook: [require(`./howItsMade/EarlySiteLook.PNG`).default],
            reactBuild: [require(`./howItsMade/BuildForServer.PNG`).default],
            nginxLanding: [require(`./howItsMade/NginxLandingPage.PNG`).default],
            namecheap: [require(`./howItsMade/Namecheap-Logo.wine.svg`).default]
        }
    },
};

export default images;