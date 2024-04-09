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
  <Burger :class="['burger-rose', { disabled: disabled }]" />
</template>

<style lang="scss">
@import "../../styles/global.scss";
.burger-rose {
  background: $rose;
  transition: background 0.2s linear, border 0.2s linear;
  &.disabled {
    & > div {
      background: $white !important;
    }
  }

  &:active {
    background: $orange-primary-light;
  }

  &:focus {
    border: 3px solid $orange-hover;
  }

  & > div {
    background: $orange-primary-light !important;
  }

  &:hover > div {
    background: $orange-hover !important;
  }

  &:active > div {
    background: $white !important;
  }
}
</style>
