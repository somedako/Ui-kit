<script setup>
import BaseButton from "./BaseButton.vue";
import Icon from "../Icon.vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <BaseButton class="button__outline"
    ><template v-if="loading" #leftIcon><Icon type="orange-loader" /></template
    >{{ loading ? "Загрузка" : "Регистрация" }}</BaseButton
  >
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.button__outline {
  background-color: transparent;
  color: $orange-primary-light;
  border: 3px solid $orange-primary-light;
  &:hover {
    background-color: $orange-hover;
  }

  &:focus {
    border: 3px solid $orange-hover;
    color: $orange-hover;
    background-color: $rose;
  }

  &:active {
    background-color: $white;
    border: 3px solid $black;
    color: $black;
  }

  &:disabled {
    color: $gray-disabled;
    background: transparent;
    border: 3px solid $gray-disabled;
    &:hover {
      background-color: transparent;
    }
  }
}
</style>
