import { changeLocale } from "../contexts/changeLocaleProvider";

export function Services() {

    return (
        <section className="services">
            <div className="imageService" />
            <div className="servicesBox">
                <div className="servicesText">
                    <h2 className="serviceTitle">{changeLocale('services', 'title')}</h2>
                    <p className="serviceSubTitle">{changeLocale('services', 'subtitle')}</p>
                    <div className="overflowServices">
                        <h2 className="textTitle">{changeLocale('services', 'myservices')}</h2>
                        <div className="myServicesBox">
                            <div className="myServiceCard">
                                <h2 className="myServiceCardTitle">{changeLocale('services', 'systemdevelopment')}</h2>
                                <p className="myServiceCardText">{changeLocale('services', 'systemdevelopmenttext')}</p>
                            </div>
                            <div className="myServiceCard">
                                <h2 className="myServiceCardTitle">{changeLocale('services', 'mobiledevelopment')}</h2>
                                <p className="myServiceCardText">{changeLocale('services', 'mobiledevelopmenttext')}</p>
                            </div>
                            <div className="myServiceCard">
                                <h2 className="myServiceCardTitle">{changeLocale('services', 'integration')}</h2>
                                <p className="myServiceCardText">{changeLocale('services', 'integrationtext')}</p>
                            </div>
                        </div>
                        <h2 className="textTitle">{changeLocale('services', 'developmentcicle')}</h2>
                        <div className="myServicesBox">
                            <div className="myServiceCard">
                                <h2 className="myServiceCardTitle">{changeLocale('services', 'blueprint')}</h2>
                                <p className="myServiceCardText">{changeLocale('services', 'blueprinttext')}</p>
                            </div>
                            <div className="myServiceCard">
                                <h2 className="myServiceCardTitle">{changeLocale('services', 'development')}</h2>
                                <p className="myServiceCardText">{changeLocale('services', 'developmenttext')}</p>
                            </div>
                            <div className="myServiceCard">
                                <h2 className="myServiceCardTitle">{changeLocale('services', 'support')}</h2>
                                <p className="myServiceCardText">{changeLocale('services', 'supporttext')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}