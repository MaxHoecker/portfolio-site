import ExperienceItem from "./ExperienceItem";
import SI from "./../images/experience/SILogo.jpg";
import Scanpower from "./../images/experience/Scanpower.png";
import initials from "./../images/experience/initials.png"

export default function Experience() {

    const Website = (
        <div>
            <p>
                If you'd like an in-depth explanation of why I worked on this site and what I did, you can find it on the "How It's Made" tab.<br/>
                So instead I'll list off here things I'd like to add to the site in the future:<br/>
                -More responsive<br/>
                -More animations<br/>
                -More of my smaller projects<br/>
            </p>
        </div>
    );

    const ScanPower = (
        <div>
            <ul className={"list-disc"}>
                <li>
                    Full-stack development that was done remotely, utilizing mainly PHP, PostgreSQL, and JavaScript.
                </li>
                <li>
                    Maintained constant communication with the rest of the DevOps team throughout every workday.
                </li>
                <li>
                    Established automated testing in their system from the ground up, enabling them to reach 30% code coverage within 8-months.
                </li>
                <li>
                    Integrated customer feedback into the system's design.
                </li>
            </ul>
        </div>
    );

    const SupplementalInstruction = (
        <div>
            <ul className={"list-disc"}>
                <li>
                    Facilitated sessions twice a week to review computer science content for transfer students.
                </li>
                <li>
                    Adapted to different learning styles for students attending Supplemental Instruction review sessions.
                </li>
                <li>
                    Collaborated with peer Supplemental Instructors via Slack and in weekly training sessions to integrate new learning techniques into my sessions.
                </li>
                <li>
                    Was accountable for maintaining the attendance of my review sessions and incorporating different marketing strategies.
                </li>
            </ul>
            Tools: Python, Java, GitHub, Slack, Discord, IntelliJ
        </div>
    );

    return(
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary"}>
            <ExperienceItem image={initials} title={"This website"} child={Website}/>
            <br/>
            <ExperienceItem image={Scanpower} title={"ScanPower"} child={ScanPower}/>
            <br/>
            {/*<ExperienceItem image={""} title={"Senior Project Website"} child={SeniorProject}/>*/}
            {/*<br/>*/}
            <ExperienceItem image={SI} title={"Supplemental Instruction"} child={SupplementalInstruction}/>

        </div>
    )
}

