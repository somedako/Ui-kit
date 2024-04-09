<script setup>
import Icon from "./Icon.vue";
import Typography from "./Typography.vue";

const props = defineProps({
  count: {
    type: Number,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  size: {
    type: String,
    default: "l",
  },
});

const emits = defineEmits(["increment", "decrement"]);
</script>

<template>
  <div :class="['stapper-wrapper', `size__${size}`, { disabled: disabled }]">
    <button
      @click="emits('increment')"
      :class="['stapper-btn', { disabled: disabled }]"
      :disabled="disabled"
    >
      <Icon type="plus" />
    </button>
    <Typography class="stapper-count" tag-name="span" size="m" medium>{{
      !disabled && count < 10
        ? `0${count}`
        : (disabled && count < 10) || (disabled && count >= 10)
        ? `0${0}`
        : count
    }}</Typography>
    <button
      @click="emits('decrement')"
      :class="['stapper-btn', { disabled: disabled }]"
      :disabled="disabled"
    >
      <Icon type="minus" />
    </button>
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";
.stapper-wrapper {
  padding: 2px;
  border: 3px solid $orange-primary-light;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.disabled {
    border: 3px solid $gray-disabled;
    cursor: default;

    & > .stapper-count {
      color: $gray-disabled;
    }
  }

  &.size__l {
    width: 110px;
    height: 40px;
  }

  &.size__s {
    padding: 0;
    width: 96px;
    height: 32px;
  }

  .stapper-btn {
    display: block;
    background: transparent;
    border-radius: $radius-s;
    width: 100%;
    height: 100%;
    max-width: 28px;
    max-height: 28px;
    outline: none;
    border: none;
    transition: background 0.2s linear;

    &.disabled {
      cursor: default;
      pointer-events: none;
      & > svg path {
        stroke: $gray-disabled;
      }
    }

    &:hover {
      background: $orange-primary-light;
      & > svg path {
        stroke: $white;
      }
    }
  }
}
</style>
