import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
// import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(XHR)
	// .use(Cache)
	.use(LanguageDetector)
	.init({
		wait: true, // globally set to wait for loaded translations in translate hoc
		fallbackLng: "en",
		// have a common namespace used around the full app
		ns: ['common'],
		defaultNS: 'common',
		//debug: true,
		preload: ['en','cn'],
		/*cache: {
		 enabled: true
		 },*/
		interpolation: {
			escapeValue: false, // not needed for react!!
			formatSeparator: ',',
			format: function (value, format, lng) {
				if (format === 'uppercase') return value.toUpperCase();
				return value;
			}
		}
	}, function (t) {
		//console.log('i18n is initialized.');
	});


export default i18n;
