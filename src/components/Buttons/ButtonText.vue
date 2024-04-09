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
  border: 3px solid transparent;
  &:hover {
    color: $orange-hover;
  }

  &:focus {
    border: 3px solid $rose;
    color: $orange-hover;
    background-color: $rose;
  }

  &:active {
    background-color: transparent;
    border: 3px solid transparent;
    color: $black;
  }

  &:disabled {
    color: $gray-disabled;
    background: transparent;
    border: 3px solid transparent;
    &:hover {
      background-color: transparent;
    }
    &:active {
      border: 3px solid transparent;
    }
  }
}
</style>
