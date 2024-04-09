<script setup>
import BaseButton from "./BaseButton.vue";
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },

  setLoading: {
    type: Function,
  },
});
</script>

<template>
  <BaseButton @click="setLoading" class="button__primal">
    Нажми на меня!</BaseButton
  >
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.button__primal {
  background: $orange-primary-light;
  color: $white;
  &:hover {
    background-color: $orange-hover;
  }

  &:focus {
    border: 3px solid $orange-hover;
  }

  &:active {
    background-color: $black;
    border: 3px solid $black;
  }
}
</style>
