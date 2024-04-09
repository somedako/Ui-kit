<script setup>
import Burger from "./Burger.vue";
</script>

<template>
  <Burger class="burger-primal" />
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.burger-primal {
  background: $orange-primary-light;
  transition: background 0.2s linear, border 0.2s linear;

  &:hover {
    background: $orange-hover;
  }

  &:focus {
    border: 3px solid $orange-hover;
  }

  &:active {
    background: $black;
    border: 3px solid $black;
  }
}
</style>
