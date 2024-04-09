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
  <Burger :class="['burger-transparent', { disabled: disabled }]" />
</template>

<style lang="scss">
@import "../../styles/global.scss";
.burger-transparent {
  background: transparent;
  transition: background 0.2s linear, border 0.2s linear;
  border: 3px solid transparent !important;

  &.disabled {
    background: transparent !important;
    & > div {
      background: $gray-disabled !important;
    }
  }

  & > div {
    background: $orange-primary-light !important;
  }

  &:hover > div {
    background: $orange-hover !important;
  }

  &:focus {
    background: $rose;
  }

  &:active {
    background: transparent;
  }

  &:active > div {
    background: $black !important;
  }
}
</style>
