import ptBR from '../locales/pt-br.json';
import enUS from '../locales/en-us.json';
import frEU from '../locales/fr-eu.json';
import esEU from '../locales/es-eu.json';
import { useHeader } from './headerProvider';


export function changeLocale(page: string, index: string) {


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
