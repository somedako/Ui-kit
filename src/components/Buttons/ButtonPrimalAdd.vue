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
  <BaseButton class="button__primal">
    <template v-if="loading" #leftIcon><Icon type="white-loader" /></template>
    <template v-else-if="!loading" #leftIcon
      ><Icon type="white-square"
    /></template>
    {{ loading ? "Загрузка" : "Добавить комманду" }}
  </BaseButton>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.button__primal {
  background: $orange-primary-light;
  color: $white;
  max-width: 316px;
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
