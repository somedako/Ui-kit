<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "l",
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  checked: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <label :class="['switch', `size__${size}`]">
    <input type="checkbox" :checked="checked" :disabled="disabled" />
    <span :class="['slider', { slider__disabled: disabled }]"></span>
  </label>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.switch {
  position: relative;
  display: inline-block;

  &.size__l {
    width: 80px;
    height: 40px;
  }

  &.size__s {
    width: 64px;
    height: 32px;
  }

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  border: 3px solid $orange-primary-light;
  transition: 0.4s;

  &__disabled {
    cursor: default;
    border: 3px solid $gray-disabled;
  }

  &::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    border-radius: 50%;
    border: 2px solid $orange-primary-light;
    transition: 0.4s;
  }
}

input:checked + .slider {
  background-color: transparent;
}

input:checked + .slider:before {
  transform: translateX(38px);
  background: $orange-primary-light;
}

.switch.size__s > input:checked + .slider:before {
  transform: translateX(28px);
}

.switch.size__s > .slider:before {
  width: 18px;
  height: 18px;
  bottom: 2px;
}

.slider.slider__disabled::before {
  border: 2px solid $gray-disabled;
}

input:checked + .slider.slider__disabled:before {
  transform: translateX(38px);
  background: $gray-disabled;
}
</style>
