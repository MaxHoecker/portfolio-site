import React from "react";
import Homepage from "./Homepage";
import ProjectsPage from "./ProjectsPage";
import AboutMePage from "./AboutMePage";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);

    const tabCss = "text-xs font-bold uppercase px-5 py-3 " +
        "rounded " +
        "block " +
        "leading-normal " +
        "border-2 border-" + color + "-600 " +
        "hover:bg-gray-200 " +
        "focus:bg-" + color + "-600 ";

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
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Home
                            </a>
                        </li>
                        <li className="-mb-px mx-1 flex-auto text-center">
                            <a
                                className={
                                    tabCss +
                                    (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
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
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                About Me
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded ">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <Homepage />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <ProjectsPage />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <AboutMePage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>
            <Tabs color="blue" />
        </>
    );
}
