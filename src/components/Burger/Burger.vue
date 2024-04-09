<script setup>
import { ref } from "vue";
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
const change = ref(false);
</script>

<template>
  <button
    :class="['burger', { disabled: disabled }]"
    @click="change = !change"
    :disabled="disabled"
  >
    <div :class="['bar1', { change: change }]"></div>
    <div :class="['bar2', { change: change }]"></div>
    <div :class="['bar3', { change: change }]"></div>
  </button>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.burger {
  display: flex;
  flex-direction: column;
  gap: 11px;
  border: 3px solid transparent;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  max-width: 64px;
  min-height: 64px;
  border-radius: $radius-m;

  &.disabled {
    cursor: default;
    pointer-events: none;
    background: $gray-disabled;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 100%;
    height: 100%;
    max-width: 32px;
    background: $white;
    min-height: 0.16em;
    transition: 0.4s;
  }

  .bar1.change {
    transform: rotate(-45deg) translate(-10px, 10px);
  }

  .bar2.change {
    opacity: 0;
  }

  .bar3.change {
    transform: rotate(45deg) translate(-8px, -8px);
  }
}

@media (max-width: 768px) {
  .burger {
    gap: 9px;
    max-width: 48px;
    min-height: 48px;
  }
  .burger > .bar1,
  .burger > .bar2,
  .burger > .bar3 {
    max-width: 24px;
  }

  .burger > .bar1.change {
    transform: rotate(-45deg) translate(-9px, 9px);
  }

  .burger > .bar2.change {
    opacity: 0;
  }

  .burger > .bar3.change {
    transform: rotate(45deg) translate(-6px, -7px);
  }
}
</style>
