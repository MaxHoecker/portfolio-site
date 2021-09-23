import React from "react";
import AboutPage from "./AboutPage";
import HowItsMadePage from "./HowItsMadePage";
import ContactMePage from "./ContactMePage";
import ExperiencePage from "./ExperiencePage";
import Tab from "./Tab";

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <div className="flex flex-wrap bg-backgroundColor-dark">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <Tab
                            onclick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            tabNum={1}
                            tabActive={openTab === 1}
                            tabHeader={"About"}
                            key={"About-Tab"}
                        />

                        <Tab
                            onclick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            tabNum={2}
                            tabActive={openTab === 2}
                            tabHeader={"How It's Made"}
                            key={"How-Its-Made-Tab"}
                        />

                        <Tab
                            onclick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            tabNum={3}
                            tabActive={openTab === 3}
                            tabHeader={"Experience"}
                            key={"Experience-Tab"}
                        />

                        <Tab
                            onclick={e => {
                                e.preventDefault();
                                setOpenTab(4);
                            }}
                            tabNum={4}
                            tabActive={openTab === 4}
                            tabHeader={"Contact Me"}
                            key={"Contact-Me-Tab"}
                        />

                    </ul>
                    <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 rounded bg-backgroundColor-dark"}>
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <AboutPage />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <HowItsMadePage />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                                    <ExperiencePage />
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                                    <ContactMePage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender(props) {
    return (
        <>
            <Tabs colorConfig = {props.colorConfig} />
        </>
    );
}
