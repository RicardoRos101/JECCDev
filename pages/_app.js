import { appWithTranslation } from 'next-i18next';
import '../i18n';


function jeccdev({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(jeccdev);
