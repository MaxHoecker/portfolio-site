import storyContent from "./../siteText/HowItsMade.json"

console.log("storyContent", storyContent.content[1]);

const images = {
    aboutMe: {
        niagra: require("./aboutMe/niagra.jpg")
    },
    experience: {
        initials: require('./experience/initials.png'),
        scanpower: require('./experience/Scanpower.png'),
        si: require('./experience/SILogo.jpg')
    },
    howItsMade: {
        allImages: [
            "",
            require(("./howItsMade/"+storyContent.content[1].images[0].src)),
            require(("./howItsMade/"+storyContent.content[1].images[1].src)),
            require("./howItsMade/"+storyContent.content[2].images[0].src),
            require("./howItsMade/"+storyContent.content[3].images[0].src),
            require("./howItsMade/"+storyContent.content[4].images[0].src),
            require("./howItsMade/"+storyContent.content[5].images[0].src),
            require("./howItsMade/"+storyContent.content[6].images[0].src),
            require("./howItsMade/"+storyContent.content[7].images[0].src),
            require("./howItsMade/"+storyContent.content[8].images[0].src),

        ]
    },
};

export default images;