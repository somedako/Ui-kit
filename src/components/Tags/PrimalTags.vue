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
    :class="['primal-tag', { leftIcon: favorites }, { rightIcon: close }]"
  >
    <template v-if="close" #rightIcon
      ><div class="primal-svg"><Icon type="x-circle" /></div
    ></template>
    Тотсамыйтег
    <template v-if="favorites" #leftIcom
      ><div class="primal-svg"><Icon type="star" /></div
    ></template>
  </BaseTags>
</template>

<style lang="scss">
@import "../../styles/global.scss";
.primal-tag {
  background: $orange-primary-light;
  color: $white;

  &.leftIcon {
    padding: 10px 20px;
  }

  &.rightIcon {
    padding: 10px 20px;
  }

  .primal-svg {
    display: flex;
    & > svg path {
      stroke: $white;
    }
  }
}
</style>
