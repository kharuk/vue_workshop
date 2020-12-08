import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { required, email, max } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import enMessages from 'vee-validate/dist/locale/en.json';
import ruMessages from 'vee-validate/dist/locale/ru.json';

import en from '../i18n/en.json';
import ru from '../i18n/ru.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  messages: {
    en: {
      ...en,
      validation: enMessages.messages,
    },
    ru: {
      ...ru,
      validation: ruMessages.messages,
    },
  },
  locale: 'en',
  fallbackLocale: 'en',
});

extend('required', {
  ...required,
  message: i18n.t('validation.required'),
});

extend('email', {
  ...email,
  message: i18n.t('validation.email'),
});

extend('max', {
  ...max,
  message: (_, length) => i18n.t('validation.max', length),
});

export default i18n;
