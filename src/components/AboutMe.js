import niagara from "./../images/index"
import aboutMeText from "./../siteText/AboutMe.json"

export default function AboutMe() {

    let aboutMeLines = []
    aboutMeText.lines.forEach(element => aboutMeLines.push(<>{element}<br/></>))

    return(
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary"}>
            <img className={"md:h-80 object-scale-down mx-auto my-4 rounded shadow-lg"} src={niagara.aboutMe.niagra} alt={"Me in front of niagara falls"} />
            <h2 className={"text-secondary text-xl"}>
                Hi, I'm Max.<br/>
            </h2>
            <p>
                {aboutMeLines}
            </p>
        </div>
    )
}

