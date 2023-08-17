import { changeLocale } from "../contexts/changeLocaleProvider";

export function About() {

    return (
        <section className="about">
            <div className="aboutBox">
                <div className="imgAbout" />
                <div className="AboutTexts">
                    <h2 className="titles">{changeLocale('about', 'title')}</h2>
                    {
                        changeLocale('about', 'text').map((value: string) => 
                            <p className="conteintTexts">
                                {value}
                            </p>
                        )
                    }
                </div>
            </div>
        </section >
    )

}