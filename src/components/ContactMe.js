export default function ContactMe() {

    const contactCss = "text-primary m-4";
    const headerCss = "text-secondary text-xl";
    const contactInfoLinkCss = "ml-4 hover:text-secondary";
    const contactInfoNoLinkCss = "ml-4";

    return (
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary whitespace-pre-wrap"}>
            <p>
                Feel free to reach out to me about anything
            </p>

            <div className={contactCss}>
                <h2 className={headerCss}>
                    Email:
                </h2>
                <p className={contactInfoNoLinkCss}>
                    mjh9131@rit.edu (preferred) <br/>
                    hoecker.max@gmail.com
                </p>
            </div>

            <div className={contactCss}>
                <h2 className={headerCss}>
                    Linkedin:
                </h2>
                <a className={contactInfoLinkCss} href="https://linkedin.com/in/MaxHoecker">
                    https://github.com/MaxHoecker
                </a>
            </div>

            <div className={contactCss}>
                <h2 className={headerCss}>
                    Github:
                </h2>
                <a className={contactInfoLinkCss} href="https://github.com/MaxHoecker">
                    https://github.com/MaxHoecker
                </a>
            </div>


        </div>
    );
}