<script setup>
import Typography from "../Typography.vue";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  size: {
    type: String,
    default: "l",
    validations: function (value) {
      return ["l", "s"].includes(value);
    },
  },
});
</script>

<template>
  <button :class="['button', `size_${size}`]" :disabled="disabled">
    <div class="button__inner">
      <!-- <slot v-if="loading" name="leftIcon"></slot> -->
      <slot v-if="!loading" name="leftIcon"></slot>
      <Typography tagName="p" size="m" bold><slot /></Typography>
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.button {
  display: flex;
  justify-content: center;
  background-color: $orange-primary-light;
  border: none;
  cursor: pointer;
  align-items: center;
  width: 100%;
  max-width: 249px;
  border-radius: $radius-m;
  border: 3px solid transparent;
  transition: 0.2s linear;

  &.size_l {
    padding: 11px 29px;
    height: 64px;
  }

  &.size_s {
    padding: 11px 25px;
    height: 56px;
  }

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  &:disabled {
    background-color: $gray-disabled;
    cursor: default;
    &:hover {
      background-color: $gray-disabled;
    }

    &:active {
      border: 3px solid $gray-disabled;
    }
  }
}

@media (max-width: 768px) {
  .button {
    border-radius: 12px;
    max-width: 204px;
    &.size_l {
      padding: 11px 30px;
    }

    &.size_s {
      padding: 5px 15px;
    }
  }
}
</style>
