import Experience from "./Experience";

export default function ExperiencePage() {

    const website = (
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

    return(
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary"}>
            <Experience image={""} title={"This website"} child={website}/>
            <br/>
            ScanPower<br/>
            <br/>
            Malachowsky<br/>
            <br/>
            Supplemental Instruction<br/>
        </div>
    )
}

