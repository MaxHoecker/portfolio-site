import React, {useRef} from "react";
import {forwardRef} from "react";
import AboutMe from "./AboutMe";
import HowItsMade from "./HowItsMade";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Tab from "./Tab";
import Header from "./Header";

const PageContent = forwardRef((props, ref) => {
    const {aboutMeRef, contactMeRef, experienceRef, howItsMadeRef} = ref.current;
    return (
        <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 rounded bg-backgroundColor-dark"}>
            <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                    <div ref={aboutMeRef}>
                        <AboutMe />
                    </div>
                    <div ref={contactMeRef}>
                        <ContactMe />
                    </div>
                    <div ref={experienceRef}>
                        <Experience />
                    </div>
                    <div ref={howItsMadeRef}>
                        <HowItsMade />
                    </div>
                </div>
            </div>
        </div>
    );
})

export default function MainPageRender() {
    const aboutMeRef = useRef();
    const contactMeRef = useRef();
    const experienceRef = useRef();
    const howItsMadeRef = useRef();
    const allRefs = useRef({
        aboutMeRef,
        contactMeRef,
        experienceRef,
        howItsMadeRef,
    })

    const scrollToRef = (selectedRef) => {
        selectedRef.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className="flex flex-wrap bg-backgroundColor-dark">
            <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row top-0 z-50 sticky"
                    role="tablist"
                >
                    <Tab
                        onclick={e => {
                            e.preventDefault();
                            scrollToRef(aboutMeRef)
                        }}
                        tabNum={1}
                        tabHeader={"About"}
                        key={"About-Tab"}
                    />
                    <Tab
                        onclick={e => {
                            e.preventDefault();
                            scrollToRef(contactMeRef)
                        }}
                        tabNum={4}
                        tabHeader={"Contact Me"}
                        key={"Contact-Me-Tab"}
                    />
                    <Tab
                        onclick={e => {
                            e.preventDefault();
                            scrollToRef(experienceRef)
                        }}
                        tabNum={3}
                        tabHeader={"Experience"}
                        key={"Experience-Tab"}
                    />
                    <Tab
                        onclick={e => {
                            e.preventDefault();
                            scrollToRef(howItsMadeRef)
                        }}
                        tabNum={2}
                        tabHeader={"How It's Made"}
                        key={"How-Its-Made-Tab"}
                    />
                </ul>
                <Header />
                <PageContent ref={allRefs}/>
            </div>
        </div>
    );
}
