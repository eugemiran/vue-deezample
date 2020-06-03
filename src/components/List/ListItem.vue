<template>
  <div class="list-item">
    <div class="list-item__picture" />
    <div class="list-item__info">
      <p class="list-item__info__title">{{ element.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/constants";

.list-item {
  background: rgba($salmon, 1);
  border-bottom: 1px solid $white;
  border-top: 1px solid $white;
  &:hover {
    background: rgba($white, 0.5);
  }
}
</style>