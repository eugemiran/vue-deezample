<template>
  <div id="app">
    <NavBar />
    <router-view />
    <portal-target :name="MODALS" />
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar";
import { MODALS } from "@/constants/portals";

export default {
  components: {
    NavBar
  },
  created() {
    this.MODALS = MODALS;
  }
};
</script>
<style lang="scss">
@import "@/styles/constants";
#app {
  color: $dark-blue;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
