import ptBRData from '../locales/pt-br.json';
import enUSData from '../locales/en-us.json';
import frEUData from '../locales/fr-eu.json';
import esEUData from '../locales/es-eu.json';
import { useHeader } from './headerProvider';

interface TranslationObject {
    header: {
        [key: string]: string;
    };
    home: {
        title: string;
        subtitle: string;
    };
    about: {
        title: string;
        text: string[];
    };
    services: {
        title: string;
        subtitle: string;
        myservices: string;
        systemdevelopment: string;
        systemdevelopmenttext: string;
        mobiledevelopment: string;
        mobiledevelopmenttext: string;
        integration: string;
        integrationtext: string;
        developmentcicle: string;
        blueprint: string;
        blueprinttext: string;
        development: string;
        developmenttext: string;
        support: string;
        supporttext: string;
    };
    projects: {
        title: string;
        subtitle: string;
        vlinsresume: string;
        habitresume: string;
        pokedevresume: string;
        blissresume: string;
    };
}

const ptBR: TranslationObject = ptBRData;
const enUS: TranslationObject = enUSData;
const frEU: TranslationObject = frEUData;
const esEU: TranslationObject = esEUData;

export function changeLocale(page: keyof TranslationObject, index: keyof TranslationObject[typeof page]) {
    const { locale } = useHeader();

    switch (locale) {
        case 'en-us':
            return enUS[page][index];

        case 'fr-eu':
            return frEU[page][index];

        case 'es-eu':
            return esEU[page][index];

        default:
            return ptBR[page][index];
    }
}
