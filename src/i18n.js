import i18n from 'i18next';
import languagedetector from 'i18next-browser-languagedetector';
import {
    initReactI18next
} from 'react-i18next';

i18n
    .use(languagedetector)
    .use(initReactI18next)
    .init({
        debug: true, // pratique pour voir les événements dans la console pendant le développement
        lng: 'en',
        fallbackLng: 'en',
        resources: {
            en: {
                translations: { // namespace par défaut, on peut avoir autant de namespaces que l'on souhaite
                    'home.hello': 'Hello! Welcome to my app!'
                },
            },
        },
    });

export default i18n;