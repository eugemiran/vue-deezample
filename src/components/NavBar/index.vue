<template>
  <div class="nav">
    <div class="nav__wrapper">
      <div class="nav__logo" />
      <div class="nav__menu">
        <router-link class="nav__menu__item" to="/">Home</router-link>|
        <router-link class="nav__menu__item" to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/styles/constants";

.nav {
  background: $tangerine;
  display: flex;
  height: 4rem;

  &__wrapper {
    display: flex;
    margin: auto;
    width: 70rem;
  }
  &__logo {
    flex: 1;
    height: 100%;
  }

  &__menu {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    &__item {
      margin: 0 1rem;
    }
    :last-child {
      margin-right: 0;
    }
  }
}
</style>
