<template>
  <v-select
    :items="items"
    v-model="language"
    :label="$t('lang.language')"
  ></v-select>
</template>

<script>
export default {
  name: "LanguageSelect",
  data() {
    return {
      language: "en",
    };
  },
  computed: {
    items() {
      return [
        { text: this.$t("lang.en"), value: "en" },
        { text: this.$t("lang.ru"), value: "ru" },
      ];
    },
  },
  watch: {
    language() {
      this.$i18n.locale = this.language;
    },
  },
};
</script>