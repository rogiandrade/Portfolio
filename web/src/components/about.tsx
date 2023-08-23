import { changeLocale } from "../contexts/changeLocaleProvider";

export function About() {
    const aboutTitle = changeLocale('about', 'title');
    const aboutText = changeLocale('about', 'text');

    return (
        <section className="about">
            <div className="aboutBox">
                <div className="imgAbout" />
                <div className="aboutTexts">
                    <h2 className="titles">{aboutTitle}</h2>
                    <div>
                        {aboutText.map((value: string, index: number) => (
                            <p className="contentTexts" key={index}>
                                {value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}