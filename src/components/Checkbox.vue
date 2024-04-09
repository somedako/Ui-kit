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
    <input
      type="checkbox"
      class="checkbox"
      :checked="checked"
      :disabled="disabled"
    />
    <Typography
      tagName="span"
      size="s"
      :class="[
        'custom-checkbox',
        `size__${size}`,
        { 'custom-checkbox__disabled': disabled },
      ]"
    ></Typography>
  </label>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
.checkbox {
  display: none;
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  background: transparent;
  border: 3px solid $orange-primary-light;
  border-radius: 10px;
  cursor: pointer;

  &__disabled {
    cursor: default;
    border: 3px solid $gray-disabled;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 37px;
    height: 37px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $orange-primary-light url("../assets/checkbox-check.svg") center
      no-repeat;
    opacity: 0;
    transition: 0.2s;
  }

  &.size__l {
    width: 37px;
    height: 37px;
    &::before {
      border-radius: 10px;
    }
  }

  &.size__s {
    width: 32px;
    height: 32px;
    border-radius: 10px;

    &::before {
      width: 32px;
      height: 32px;
      border-radius: 10px;
    }
  }
}

.checkbox:checked + .custom-checkbox::before {
  opacity: 1;
}

.checkbox:checked + .custom-checkbox.custom-checkbox__disabled::before {
  opacity: 1;
  background: $gray-disabled url("../assets/checkbox-check.svg") center
    no-repeat;
}
</style>
