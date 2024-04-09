<script setup>
import BaseTags from "./BaseTags.vue";
import Icon from "../Icon.vue";
const props = defineProps({
  close: {
    type: Boolean,
    default: false,
  },

  favorites: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <BaseTags
    close
    favorites
    :class="['rose-tag', { leftIcon: favorites }, { rightIcon: close }]"
  >
    <template v-if="close" #rightIcon
      ><div class="rose-svg"><Icon type="x-circle" /></div
    ></template>
    Тотсамыйтег
    <template v-if="favorites" #leftIcom
      ><div class="rose-svg"><Icon type="star" /></div
    ></template>
  </BaseTags>
</template>

<style lang="scss">
@import "../../styles/global.scss";
.rose-tag {
  background: $rose;
  color: $orange-primary-light;

  &.leftIcon {
    padding: 10px 20px;
  }

  &.rightIcon {
    padding: 10px 20px;
  }

  .rose-svg {
    display: flex;
    & > svg path {
      stroke: $orange-primary-light;
    }
  }
}
</style>
