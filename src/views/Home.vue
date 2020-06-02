<template>
  <div class="home">
    <div class="home__main">
      <SearchBar :entity="entity" :onSearch="onSearch" :loading="isLoading" />
      <span v-if="isLoading">LOADING...</span>
      <span v-if="isError && !isLoading">Oops, something went wrong. Try again later...</span>
      <List v-if="!isLoading && artists && artists.length !== 0" :elements="artists" />
    </div>
  </div>
</template>

<script>
import { SEARCH_ARTIST } from "@/store/actions";
import List from "@/components/List";
import SearchBar from "@/components/SearchBar";
import { SEARCH_OPTIONS } from "@/constants/search";

export default {
  name: "Home",
  components: {
    List,
    SearchBar
  },
  data: () => ({
    entity: SEARCH_OPTIONS.ALBUM
  }),
  computed: {
    artists() {
      return this.$store.getters.artists;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    isError() {
      return this.$store.getters.isError;
    }
  },
  methods: {
    onSearch(artist) {
      this.$store.dispatch(SEARCH_ARTIST, { artist });
    }
  }
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
