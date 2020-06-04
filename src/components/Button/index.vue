<template>
  <button
    :class="{
      'btn-primary': type === 'primary',
      'btn-secondary': type === 'secondary'
    }"
    type="button"
    @click="onClick"
    :disabled="disabled"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: Function,
    disabled: Boolean,
    type: String
  }
};
</script>

<style lang="scss">
@import "@/styles/constants";

.btn-secondary {
  background: $white;

  &:hover:enabled {
    background: rgba($tangerine, 0.7);
    border: 1px solid $white;
    color: $white;
  }
}

.btn-primary {
  background: $white;

  &:hover:enabled {
    background: rgba($atoll, 0.2);
  }
}
</style>
