import Experience from "./Experience";

export default function ExperiencePage() {

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
            <p>
                ScanPower
            </p>
        </div>
    );

    const SeniorProject =(
        <div>
            <p>
                Senior Project Website
            </p>
        </div>
    );

    const SupplementalInstruction = (
        <div>
            <p>
                Supplemental Instruction
            </p>
        </div>
    );

    return(
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary"}>
            <Experience image={""} title={"This website"} child={Website}/>
            <br/>
            <Experience image={""} title={"ScanPower"} child={ScanPower}/>
            <br/>
            <Experience image={""} title={"Senior Project Website"} child={SeniorProject}/>
            <br/>
            <Experience image={""} title={"Supplemental Instruction"} child={SupplementalInstruction}/>

        </div>
    )
}

