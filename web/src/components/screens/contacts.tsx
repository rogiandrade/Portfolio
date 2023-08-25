import { changeLocale } from "../../contexts/changeLocaleProvider";

export function Contacts() {

    return (
        <section className="contacts">
            <div className="contactsBox">
                <div className="containerLogo">
                    <div className="logoContacts" />
                    <p className="logoText">{changeLocale('contacts', 'titlelogo')}</p>
                </div>
                <div className="containerContacts">
                    <div className="containerContactsTexts">
                        <h1 className="contactsTitle">{changeLocale('contacts', 'titlecontact')}</h1>
                        <p className="contactsSubTitle">{changeLocale('contacts', 'subtitlecontact')}</p>
                    </div>
                    <div className="containerContactsSocialMedia">
                        <a
                            href="mailto:devigorandrade@gmail.com?subject=Hello Igor, I came by your Website and [YOUR MESSAGE]"
                            className="contactsSocialMedia"
                        >
                            <img className="contactsImage" src="at.svg" alt="at" /> E-MAIL
                        </a>
                        <a
                            href="https://www.instagram.com/dev.igorandrade/"
                            className="contactsSocialMedia"
                        >
                            <img className="contactsImage" src="instagram-logo.svg" alt="instagram" /> INSTAGRAM
                        </a>
                        <a
                            href="https://www.linkedin.com/in/igor-andrade-18808323b/"
                            className="contactsSocialMedia"
                        >
                            <img className="contactsImage" src="linkedin-logo.svg" alt="linkedin" /> LINKEDIN
                        </a>
                        <a
                            href="https://discord.gg/yHJYVEVX4V"
                            className="contactsSocialMedia"
                        >
                            <img className="contactsImage" src="discord-logo.svg" alt="discord" /> DISCORD
                        </a>
                        <a
                            href="https://github.com/rogiandrade"
                            className="contactsSocialMedia"
                        >
                            <img className="contactsImage" src="github-logo.svg" alt="github" /> GITHUB
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}