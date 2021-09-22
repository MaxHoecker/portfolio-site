import github from './../images/github.svg';

export default function Header() {
    let classNameText = "text-center text-4xl";

    return(
        <div className={"p-10"}>
            <h1 className={classNameText}>Max Hoecker</h1>
            {/*<img class="fill-current w-6 h-6" src={github} alt="github" />*/}
            {
                // resume link?
            }
        </div>

    )
}

