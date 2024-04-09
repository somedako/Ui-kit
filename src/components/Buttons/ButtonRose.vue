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
  <BaseButton class="button__rose"
    ><template v-if="loading" #leftIcon><Icon type="orange-loader" /></template
    >{{ loading ? "Загрузка" : "Регистрация" }}</BaseButton
  >
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.button__rose {
  background: $rose;
  color: $orange-primary-light;
  &:hover {
    color: $orange-hover;
  }

  &:focus {
    border: 3px solid $orange-hover;
  }

  &:active {
    background-color: $orange-primary-light;
    color: $white;
    border: 3px solid $orange-primary-light;
  }
}
</style>
