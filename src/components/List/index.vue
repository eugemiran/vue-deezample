<template>
  <div class="list">
    <ListItem v-for="(element, i) in elements" :key="element.id + i" :element="element" />
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
  max-height: 15rem;
  overflow-y: scroll;
}
</style>
