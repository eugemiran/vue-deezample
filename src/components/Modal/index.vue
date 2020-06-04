<template>
  <portal :to="MODALS">
    <div class="modal" @click="onClose">
      <div class="modal__container shadow" @click.stop>
        <div class="modal__header">
          <Button class="mt-1 mr-2" type="primary" :onClick="onClose">X</Button>
        </div>
        <div class="modal__body">
          <slot />
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
import Button from "@/components/Button";
import { MODALS } from "@/constants/portals";

export default {
  props: {
    onClose: Function
  },
  components: {
    Button
  },
  created() {
    this.MODALS = MODALS;
  }
};
</script>

<style lang="scss">
@import "@/styles/constants";

.modal {
  background: rgba($black, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &__container {
    background: $white;
    border-radius: 5px;
    height: 15rem;
    margin-top: 10rem;
    width: 20rem;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    button {
      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
    }
  }

  &__body {
  }
}
</style>
