import React from "react";
import AboutPage from "./AboutPage";
import HowItsMadePage from "./HowItsMadePage";
import ContactMePage from "./ContactMePage";
import ExperiencePage from "./ExperiencePage";
import Tab from "./Tab";

const Tabs = (props) => {
    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <div className="flex flex-wrap">
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
                            colorConfig={props.colorConfig}
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
                            colorConfig={props.colorConfig}
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
                            colorConfig={props.colorConfig}
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
                            colorConfig={props.colorConfig}
                            key={"Contact-Me-Tab"}
                        />

                    </ul>
                    <div className={"relative flex flex-col min-w-0 break-words bg-" + props.colorConfig.bg + "-" + props.colorConfig.bgNum + " w-full mb-6 rounded "}>
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <AboutPage colorConfig={props.colorConfig}/>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <HowItsMadePage colorConfig={props.colorConfig}/>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                                    <ExperiencePage colorConfig={props.colorConfig}/>
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                                    <ContactMePage colorConfig={props.colorConfig}/>
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
