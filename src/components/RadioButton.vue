<script setup>
import Typography from "./Typography.vue";
const props = defineProps({
  size: {
    type: String,
    default: "l",
  },

  checked: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <label>
    <input type="radio" class="radio" :checked="checked" :disabled="disabled" />
    <Typography
      tagName="span"
      size="s"
      :class="[
        'custom-radio',
        `size__${size}`,
        { 'custom-radio__disabled': disabled },
      ]"
    ></Typography>
  </label>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/fonts.scss";
.radio {
  display: none;
}

.custom-radio {
  position: relative;
  display: inline-block;
  border: 3px solid $orange-primary-light;
  border-radius: 50%;
  cursor: pointer;

  &__disabled {
    cursor: default;
    border: 3px solid $gray-disabled;
  }

  &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background: $orange-primary-light;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s ease-in;
  }

  &.size__l {
    width: 40px;
    height: 40px;
    &::before {
      width: 23px;
      height: 23px;
    }
  }

  &.size__s {
    width: 32px;
    height: 32px;
    &::before {
      width: 18px;
      height: 18px;
    }
  }
}

.radio:checked + .custom-radio::before {
  opacity: 1;
}

.radio:checked + .custom-radio.custom-radio__disabled::before {
  opacity: 1;
  background: $gray-disabled;
}
</style>
