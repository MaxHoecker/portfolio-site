import contactMe from "./../siteText/ContactMe.json"

export default function ContactMe() {

    const wrapperCss = "bg-backgroundColor m-4 p-6 rounded-2xl text-primary whitespace-pre-wrap";
    const contactCss = "text-primary m-4";
    const headerCss = "text-secondary text-xl";
    const contactInfoLinkCss = "ml-4 hover:text-secondary";
    const contactInfoNoLinkCss = "ml-4";

    let contactItems = []

    const contactItem = (props) => {
        let addressCss = props.link ? contactInfoLinkCss : contactInfoNoLinkCss;
        let contents = []

        props.content.forEach((address) => {
            if (props.link) {
                contents.push(
                    <a className={addressCss} href={address} target="_blank" rel="noopener noreferrer">
                        {address}
                        <br/>
                    </a>
                )
            }
            else {
                contents.push(
                    <p className={addressCss}>
                        {address}
                        <br/>
                    </p>
                )
            }
        })

        return (
            <div className={contactCss}>
                <h2 className={headerCss}>
                    {props.header}
                </h2>
                {contents}
            </div>
        )
    }

    for (const value of Object.values(contactMe)) {
        contactItems.push(contactItem(value))
    }

    return (
        <div className={wrapperCss}>
            <p>
                Feel free to reach out to me about anything
            </p>
            {contactItems}
        </div>
    );
}