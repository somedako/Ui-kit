<script setup>
const props = defineProps({
  elements: { type: Array },
  currentElementIndex: { type: Number },
  showElement: { type: Function },
  size: {
    type: String,
    default: "l",
  },

  color: {
    type: String,
    default: "orange",
    validator: function (value) {
      return ["orange", "green", "gray", "white", "red"].includes(value);
    },
  },
});
</script>

<template>
  <ul class="indicator-list">
    <li
      v-for="(_, index) in elements"
      :key="index"
      :class="[
        'indicator-el',
        `size__${size}`,
        { green: color === 'green' },
        { orange: color === 'orange' },
        { gray: color === 'gray' },
        { white: color === 'white' },
        { red: color === 'red' },
        { 'indicator-el__selected': currentElementIndex === index },
      ]"
    >
      <button
        class="indicator-btn"
        @click="showElement(index)"
        :disabled="currentElementIndex === index"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.indicator-list {
  gap: 6px;
  display: flex;

  .indicator-el {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: $off-white;
    cursor: pointer;
    position: relative;

    &.size__l {
      width: 18px;
      height: 18px;
    }

    &.size__s {
      width: 12px;
      height: 12px;
    }

    &__selected {
      cursor: default;
    }

    &__selected.green {
      background: $success;
    }

    &__selected.gray {
      background: $gray-sub-text;
    }

    &__selected.white {
      background: $off-white;
    }

    &__selected.red {
      background: $error;
    }

    &__selected.orange {
      background: $orange-primary-light;
    }
  }

  .indicator-btn {
    position: absolute;
    left: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    border: none;
  }
}

@media (max-width: 768px) {
  .size__l {
    height: 12px !important;
    width: 12px !important;
  }
}
</style>
