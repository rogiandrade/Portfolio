import { changeLocale } from "../contexts/changeLocaleProvider";

export function About() {

    return (
        <section className="about">
            <div className="aboutBox">
                <div className="imgAbout" />
                <div className="aboutTexts">
                    <h2 className="titles">{changeLocale('about', 'title')}</h2>
                    {
                        changeLocale('about', 'text').map((value: string) => 
                            <p className="contentTexts">
                                {value}
                            </p>
                        )
                    }
                </div>
            </div>
        </section >
    )

}