import { changeLocale } from "../../contexts/changeLocaleProvider";

export function Home() {
  return (
    <>
      <section className="home">
        <div className="homeBox">
          <div className="homeText">
            <h1
              className="homeTitle"
              dangerouslySetInnerHTML={{
                __html: changeLocale("home", "title"),
              }}
            />
            <br/>
            <p className="homeSubTitle">{changeLocale("home", "subtitle")}</p>
          </div>
          <div className="imgHomeContent">
              <img className="imgHome" src="imageHome.png" />
          </div>
        </div>
      </section>
    </>
  );
}
