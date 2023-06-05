<template>
  <div id="app">
    <HeaderPage />
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
import HeaderPage from "@/components/common/HeaderPage.vue";
export default {
  name: "App",
  components: {
    HeaderPage
  }
};
</script>
