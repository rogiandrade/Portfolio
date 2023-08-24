import { changeLocale } from "../../contexts/changeLocaleProvider";

export function Home() {

    return (
        <>
            <section className="home">
                <div className="homeBox">
                    <div className="homeText">
                        <h1
                            className="homeTitle"
                            dangerouslySetInnerHTML={{ __html: changeLocale('home', 'title') }} />
                        <p className="homeSubTitle">{changeLocale('home', 'subtitle')}</p>
                    </div>
                    <img className="imgHome" src="profile-pic.png" alt="logo" />
                </div>
            </section>
        </>
    )

}