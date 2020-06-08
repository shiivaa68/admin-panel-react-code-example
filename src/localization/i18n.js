import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { fa } from './';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('fa'),
  init: () => {},
  cacheUserLanguage: () => {}
};

i18next
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'fa',
    resources: {
      fa: {
        translation: fa,
      }
    },
  });

export default i18next;
