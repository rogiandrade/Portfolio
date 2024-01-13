import { changeLocale } from "../../contexts/changeLocaleProvider";

export function Projects() {
  return (
    <section className="projects">
      <div className="projectsBox">
        <div className="projectsHeader">
          <h1 className="projectsTitle">{changeLocale("projects", "title")}</h1>
          <p
            className="projectsSubTitle"
            dangerouslySetInnerHTML={{
              __html: changeLocale("projects", "subtitle"),
            }}
          />
        </div>
        <div className="projectsContent">
          <div className="developing">
            <h1 className="developingTitle">Developing...</h1>
            <div className="developingProject">
              <h2 className="developingProjectName">Feels App</h2>
              <p className="developingProjectResume">
              {changeLocale('projects', 'feelsappresume')}
              </p>
            </div>
            <div className="developingProject">
              <h2 className="developingProjectName">Woodwork</h2>
              <p className="developingProjectResume">
              {changeLocale('projects', 'woodworkresume')}
              </p>
            </div>
            <div className="developingProject">
              <h2 className="developingProjectName">Poke Dev</h2>
              <p className="developingProjectResume">
              {changeLocale('projects', 'pokedevresume')}
              </p>
            </div>
          </div>
          <div className="developed">
            <h1 className="developedTitle">Developed.</h1>
            <div className="developedProject">
              <h2 className="developedProjectName">Dra. Verônica Lins</h2>
              <p className="developedProjectResume">
              {changeLocale('projects', 'vlinsresume')}
              </p>
            </div>
            <div className="developedProject">
              <h2 className="developedProjectName">Habits</h2>
              <p className="developedProjectResume">
              {changeLocale('projects', 'habitresume')}
              </p>
            </div>
            <div className="developedProject">
              <h2 className="developedProjectName">Bliss Aplication.</h2>
              <p className="developedProjectResume">
              {changeLocale('projects', 'blissresume')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
