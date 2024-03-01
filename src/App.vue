<template>
  <router-view
    @reqChangeLanguage="changeLanguage"
    :language="language"
  ></router-view>
</template>

<script>
export default {
  data() {
    return {
      language: "id",
    };
  },
  methods: {
    changeLanguage() {
      if (this.language == "id") {
        this.language = "en";
      } else {
        this.language = "id";
      }
    },
  },
};
</script>

<style></style>
