export default function FadeInCard(props) {
    const wrapperClassName = "bg-backgroundColor" +
        " m-4 p-6 rounded-2xl shadow-lg " +
        "border-2 border-primary " +
        "text-primary";

    return (
        <div className={wrapperClassName}>
            {props.childComponent}
        </div>
    )
}