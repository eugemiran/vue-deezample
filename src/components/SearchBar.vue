<template>
  <div class="search-bar">
    <label class="search-bar__label">Find your {{ entity }} !</label>
    <input
      class="search-bar__input"
      :placeholder="`Enter your ${entity}`"
      v-model="text"
      v-on:keyup.enter="onClick"
    />
    <button class="search-bar__button" type="button" @click="onClick" :disabled="isDiabled">OK!</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    entity: String,
    onSearch: Function,
    loading: Boolean
  },
  data: () => ({
    text: ""
  }),
  computed: {
    isDiabled() {
      if (this.text.trim() === "" || this.$props.loading) {
        return true;
      }
      return false;
    }
  },
  methods: {
    onClick() {
      if (this.text.trim() !== "" || !this.$props.loading) {
        this.$props.onSearch(this.text);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/constants";

.search-bar {
  background: $mercury;
  border: 1px solid $salmon;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  &__label {
    font-size: 20px;
  }

  &__input {
    flex: 0.8;
  }

  &__button {
    flex: 0.1;
  }
}
</style>
