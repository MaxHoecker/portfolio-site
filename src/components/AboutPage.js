import niagara from "./../images/aboutpage/niagra.jpg"

export default function AboutPage() {
    return(
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary"}>
            <img className={"md:h-80 object-scale-down mx-auto my-4 rounded shadow-lg"} src={niagara} alt={"Me in front of niagara falls"} />
            <h2 className={"text-secondary text-xl"}>
                Hi, I'm Max.<br/>
            </h2>
            <p>
                <br/>
                <br/>
                So, what are some notable things about me? Well my top 4 things I like to do are tennis, video gaming, travelling, and just hanging with my friends.<br/>
                I come from a small town in Maine called Boothbay, where my passion for STEM was nurtured by a supportive community.<br/>
                I currently attend Rochester Institute of Technology as a 4th year software engineer.<br/>
                <br/>
                I absolutely love coding and am very excited to be coding full-time when I graduate.<br/>
                And I've been on one co-op, it was this past Summer/Fall of 2020 and I'm currently looking for a co-op for the spring semester.<br/>
            </p>
        </div>

    )
}

