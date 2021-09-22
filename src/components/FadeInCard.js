export default function FadeInCard(props) {
    const wrapperClassName = "bg-" + props.colorConfig.secondary + props.colorConfig.secondaryNum +
        " m-4 p-6 rounded-2xl shadow-lg " +
        "border-2 border-" + props.colorConfig.primary + props.colorConfig.primaryNum + " " +
        "text-" + props.colorConfig.primary + props.colorConfig.primaryNum + " ";

    return (
        <div className={wrapperClassName}>
            {props.childComponent}
        </div>
    )
}