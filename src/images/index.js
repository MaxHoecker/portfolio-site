import storyContent from "./../siteText/HowItsMade.json"

console.log("storyContent", storyContent.content[1]);

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
        allImages: [
            "",
            require(`./howItsMade/${storyContent.content[1].images[0].src}`).default,
            require(`./howItsMade/${storyContent.content[1].images[1].src}`).default,
            require(`./howItsMade/${storyContent.content[2].images[0].src}`).default,
            require(`./howItsMade/${storyContent.content[3].images[0].src}`).default,
            require(`./howItsMade/${storyContent.content[4].images[0].src}`).default,
            require(`./howItsMade/${storyContent.content[5].images[0].src}`).default,
            require(`./howItsMade/${storyContent.content[6].images[0].src}`).default,
            require(`./howItsMade/${storyContent.content[7].images[0].src}`).default,
            require(`./howItsMade/${storyContent.content[8].images[0].src}`).default,
        ]
    },
};

export default images;