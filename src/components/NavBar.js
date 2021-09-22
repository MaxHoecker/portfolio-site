import React from "react";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactMePage from "./ContactMePage";

const Tabs = (props) => {
    const [openTab, setOpenTab] = React.useState(1);

    const tabCss = "text-xs font-bold uppercase px-5 py-3 " +
        "rounded " +
        "block " +
        "leading-normal " +
        "border-2 border-" + props.colorConfig.primary + props.colorConfig.primaryNum + " " +
        "hover:bg-gray-200 " +
        "focus:bg-" + props.colorConfig.primary + props.colorConfig.primaryNum + " ";

    const tabActiveCss = "text-" + props.colorConfig.secondary + props.colorConfig.secondaryNum +
        " bg-" + props.colorConfig.primary + props.colorConfig.primaryNum + " ";

    const tabInactiveCss = "text-" + props.colorConfig.primary + props.colorConfig.primaryNum +
        " bg-" + props.colorConfig.secondary + props.colorConfig.secondaryNum + " ";

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mx-1 ml-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    tabCss +
                                    (openTab === 1
                                        ? tabActiveCss
                                        : tabInactiveCss
                                    )
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                About
                            </a>
                        </li>
                        <li className="-mb-px mx-1 flex-auto text-center">
                            <a
                                className={
                                    tabCss +
                                    (openTab === 2
                                            ? tabActiveCss
                                            : tabInactiveCss
                                    )
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Projects
                            </a>
                        </li>
                        <li className="-mb-px mx-1 mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    tabCss +
                                    (openTab === 3
                                        ? tabActiveCss
                                        : tabInactiveCss
                                    )
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                    <div className={"relative flex flex-col min-w-0 break-words bg-" + props.colorConfig.bg + "-" + props.colorConfig.bgNum + " w-full mb-6 rounded "}>
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <AboutPage colorConfig={props.colorConfig}/>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <ProjectsPage colorConfig={props.colorConfig}/>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
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
