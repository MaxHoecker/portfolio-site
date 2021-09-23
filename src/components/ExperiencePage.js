import Experience from "./Experience";

export default function ExperiencePage() {

    return(
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary"}>
            <Experience image={"Hi"} title={"this is the title"} child={<div>Hello</div>}/>
            This site<br/>
            ScanPower<br/>
            Malachowsky<br/>
            Supplemental Instruction<br/>
        </div>
    )
}

