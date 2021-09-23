export default function ContactMePage() {

    const contactCss = "text-primary m-4";

    return (
        <div className={"bg-backgroundColor m-4 p-6 rounded-2xl text-primary whitespace-pre-wrap"}>
            <p>
                Feel free to reach out to me about anything
            </p>

            <div className={contactCss}>
                <h2>
                    Email:
                </h2>
                <p className={"whitespace-pre-wrap"}>
                    mjh9131@rit.edu (preferred) <br/>
                    hoecker.max@gmail.com
                </p>
            </div>

            <div className={contactCss}>
                <h2>
                    Linkedin:
                </h2>
                <p>
                    https://linkedin.com/in/MaxHoecker
                </p>
            </div>

            <div className={contactCss}>
                <h2>
                    Github:
                </h2>
                <p>
                    https://github.com/MaxHoecker
                </p>
            </div>


        </div>
    );
}