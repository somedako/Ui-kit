<script setup>
import Typography from "@/components/Typography.vue";

const props = defineProps({
  favorites: {
    type: Boolean,
    default: false,
  },

  close: {
    type: Boolean,
    default: false,
  },

  size: {
    type: String,
    default: "l",
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="['tag', `size__${size}`, { disabled: disabled }]">
    <slot v-if="favorites" name="leftIcom" />
    <Typography tagName="span" size="m" medium><slot /></Typography>
    <slot v-if="close" name="rightIcon" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.tag {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: $radius-l;
  width: 100%;
  height: 100%;
  &.size__l {
    gap: 10px;
    max-width: 208px;
    max-height: 48px;
  }

  &.size__m {
    gap: 6px;
    max-width: 173px;
    max-height: 40px;
    & > span {
      font-size: 16px;
    }
  }

  &.size__s {
    gap: 6px;
    max-width: 173px;
    max-height: 32px;
    & > span {
      font-size: 16px;
    }
  }

  &.disabled {
    color: $white;
    cursor: default;
    pointer-events: none;
    background: $gray-disabled;
  }
}
</style>
