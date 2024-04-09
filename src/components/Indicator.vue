<script setup>
const props = defineProps({
  elements: { type: Array },
  currentElementIndex: { type: Number },
  showElement: { type: Function },
  size: {
    type: String,
    default: "l",
  },

  type: {
    type: String,
    default: "default",
    validator: function (value) {
      return ["default", "middle", "dot"].includes(value);
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
        { default: type === 'default' },
        { middle: type === 'middle' },
        { dot: type === 'dot' },
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
    border-radius: 4px;
    background: $off-white;
    cursor: pointer;
    position: relative;

    &.default {
      width: 32px;
    }

    &.middle {
      width: 16px;
    }

    &.dot {
      width: 8px;
      height: 8px;
    }

    &.size__l {
      height: 8px;
    }

    &.size__s {
      height: 4px;
    }

    &__selected {
      cursor: default;
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
    height: 4px !important;
  }
}
</style>
