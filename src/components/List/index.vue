<template>
  <div class="list" :class="{ list__empty: isEmpty }">
    <span v-if="isEmpty">The list is empty</span>

    <ListItem v-for="(element, i) in elements" :key="element.id + i" :element="{...element, picture: element.pictureMedium}" />
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  data: () => ({}),
  components: {
    ListItem
  },
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  computed: {
    isEmpty() {
      return !this.$props.elements || this.$props.elements.length === 0;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/constants";

.list {
  background: rgba($salmon, 0.8);
  border-bottom: 1px solid $white;
  border-left: 1px solid $white;
  border-right: 1px solid $white;
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-height: 30rem;
  overflow-y: scroll;

  &__empty {
    display: flex;
    span {
      margin: auto;
    }
  }
}
</style>
