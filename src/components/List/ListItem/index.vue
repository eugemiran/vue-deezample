<template>
  <div class="list-item pt-2" @click="onClick">
    <div
      class="list-item__picture"
      :style="{ 'background-image': `url(${element.picture}`, 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': '10rem' }"
    />
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
    },
    onClick: Function
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

  &__picture {
    height: 10rem;
  }
}
</style>