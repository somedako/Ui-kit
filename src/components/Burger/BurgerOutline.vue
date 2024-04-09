<script setup>
import Burger from "./Burger.vue";
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Burger :class="['burger-outline', { disabled: disabled }]" />
</template>

<style lang="scss">
@import "../../styles/global.scss";

.burger-outline {
  background: transparent;
  transition: background 0.2s linear, border 0.2s linear;
  border: 3px solid $orange-primary-light !important;

  &.disabled {
    background: transparent !important;
    border: 3px solid $gray-disabled !important;
    & > div {
      background: $gray-disabled !important;
    }
  }

  &:hover {
    border: 3px solid $orange-hover;
  }

  &:active {
    background: $white !important;
    border: 3px solid $black;
  }

  &:focus {
    background: $rose;
  }

  & > div {
    background: $orange-primary-light !important;
  }

  &:hover > div {
    background: $orange-hover !important;
  }

  &:active > div {
    background: $black !important;
  }
}
</style>
