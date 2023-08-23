import jsonptBR from '../locales/pt-br.json';
import jsonenUS from '../locales/en-us.json';
import jsonfrEU from '../locales/fr-eu.json';
import jsonesEU from '../locales/es-eu.json';
import { useHeader } from './headerProvider';

export function changeLocale(page: any, index: any) {

    const ptBR = jsonptBR as any
    const enUS = jsonenUS as any
    const frEU = jsonfrEU as any
    const esEU = jsonesEU as any

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