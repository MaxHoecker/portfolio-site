import React from "react";

export default function Tab(props){
    let onClick = props.onclick;
    let tabActive = props.tabActive;

    const tabCss = "text-xs font-bold uppercase px-5 py-3 " +
        "rounded " +
        "block " +
        "leading-normal " +
        "border-2 border-primary " +
        "hover:bg-gray-200 " +
        "focus:bg-backgroundColor ";

    const tabActiveCss = "text-primary bg-backgroundColor ";

    const tabInactiveCss = "text-primary bg-backgroundColor";

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