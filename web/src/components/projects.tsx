import { changeLocale } from "../contexts/changeLocaleProvider";
import { NavigationMenuBliss, NavigationMenuHabits, NavigationMenuPokeDev, NavigationMenuVLins } from "./nav/navigationMenu";


export function Projects() {

    return (
        <section className="projects">
            <div className="projectsBox">
                <div className="projectsHeader">
                    <h1 className="projectsTitle">{changeLocale('projects', 'title')}</h1>
                    <p className="projectsSubTitle" dangerouslySetInnerHTML={{ __html: changeLocale('projects', 'subtitle') }} />
                </div>
                <div className="projectsContent">
                    <div className="projectsContentCard">
                        <div className="projectsCardImages" />
                        <div className="projectsCardsContent">
                            <h2 className="projectsCardtitle">VLins Website</h2>
                            <p className="projectsCardSubTitle">{changeLocale('projects', 'vlinsresume')}</p>
                            <div>{NavigationMenuVLins()}</div>
                        </div>
                    </div>
                    <div className="projectsContentCard">
                        <div className="projectsCardImages" />
                        <div className="projectsCardsContent">
                            <h2 className="projectsCardtitle">Habits</h2>
                            <p className="projectsCardSubTitle">{changeLocale('projects', 'habitresume')}</p>
                            <div>{NavigationMenuHabits()}</div>
                        </div>
                    </div>
                    <div className="projectsContentCard">
                        <div className="projectsCardImages" />
                        <div className="projectsCardsContent">
                            <h2 className="projectsCardtitle">PokeDev</h2>
                            <p className="projectsCardSubTitle">{changeLocale('projects', 'pokedevresume')}</p>
                            <div>{NavigationMenuPokeDev()}</div>
                        </div>
                    </div>
                    <div className="projectsContentCard">
                        <div className="projectsCardImages" />
                        <div className="projectsCardsContent">
                            <h2 className="projectsCardtitle">Bliss Application</h2>
                            <p className="projectsCardSubTitle">{changeLocale('projects', 'blissresume')}</p>
                            <div>{NavigationMenuBliss()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}