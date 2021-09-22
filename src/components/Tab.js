import React from "react";

export default function Tab(props){
    const tabNum = props.tabNum;
    let onClick = props.onclick;
    let tabActive = props.tabActive;

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

    // e => {
    //     e.preventDefault();
    //     setOpenTab(1);
    // }

    return (
        <li className="-mb-px mx-1 ml-2 last:mr-0 flex-auto text-center">
            <a
                className={
                    tabCss +
                    (tabActive
                            ? tabActiveCss
                            : tabInactiveCss
                    )
                }
                onClick={onClick}
                data-toggle="tab"
                href="#link1"
                role="tablist"
            >
                {props.tabHeader}
            </a>
        </li>
    )
}