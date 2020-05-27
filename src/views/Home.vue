<template>
  <div class="home">
    <div class="home__main">
      <SearchBar :entity="entity" />
      <div class="results"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar";
import { SEARCH_OPTIONS } from "@/constants/search";

export default {
  name: "Home",
  components: {
    SearchBar
  },
  data: () => ({
    entity: SEARCH_OPTIONS.ALBUM
  })
};
</script>

<style lang="scss">
@import "@/styles/constants";

.home {
  background: rgba($salmon, 0.5);
  display: flex;
  flex: 1;

  &__main {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30vh;
    width: 40rem;
  }
}
</style>
