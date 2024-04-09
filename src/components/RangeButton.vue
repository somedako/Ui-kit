<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const thumb = ref(null);
const input = ref(null);
const line = ref(null);
const rangeInput = ref(50);
const inputMax = ref(100);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const thumbPosition = computed(() => rangeInput.value / inputMax.value);

const rangeInputSlider = () => {
  const space = input.value.offsetWidth - thumb.value.offsetWidth;
  thumb.value.style.left = thumbPosition.value * space + "px";
  line.value.style.width = rangeInput.value + "%";
  input.value.addEventListener("input", rangeInputSlider);
};

onMounted(() => {
  input.value.addEventListener("input", rangeInputSlider);
});

onBeforeUnmount(() => {
  input.value.removeEventListener("input", rangeInputSlider);
});
</script>
<template>
  <div :class="['range', { range__disable: disabled }]">
    <div class="range__content">
      <div class="range__slider">
        <div class="range__slider-line" ref="line"></div>
      </div>
      <div class="range__thumb" ref="thumb">
        <div class="range__value">
          <span class="range__value-number" id="number">{{ rangeInput }}%</span>
        </div>
      </div>
      <input
        type="range"
        min="0"
        v-model="rangeInput"
        :disabled="disabled"
        :max="inputMax"
        :value="rangeInput"
        step="1"
        :class="['range__input', { range__disable: disabled }]"
        ref="input"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.range {
  height: 8px;
  width: 100%;
  max-width: 260px;
  display: grid;

  &__content {
    position: relative;
    width: 100%;
    display: grid;
    place-items: center;

    .range__slider {
      width: 100%;
      height: 8px;
      background: $off-white;
      border-radius: 4px;
      overflow: hidden;

      &-line {
        width: 100%;
        height: 100%;
        background: $orange-primary-light;
        width: 50%;
      }
    }

    .range__thumb {
      width: 24px;
      height: 24px;
      background-color: $orange-primary-light;
      border: 4px solid $white;
      border-radius: 50%;
      position: absolute;

      .range__value {
        width: 48px;
        height: 28px;
        background: $white;
        position: absolute;
        box-shadow: $hard-drop-shadow;
        top: -33px;
        left: -16px;
        display: grid;
        place-items: center;

        .range__value-number {
          color: $orange-primary-light;
          font-size: 16px;
        }
      }
    }
  }
}

.range__input::-webkit-slider-thumb:hover {
  cursor: pointer;
}

.range__input {
  appearance: none;
  width: 100%;
  height: 8px;
  cursor: pointer;
  position: absolute;
  // bottom: 0;
  opacity: 0;

  &__disable {
    cursor: default;
    pointer-events: none;

    &::-webkit-slider-thumb {
      background-color: $off-white;
    }

    &::-moz-range-thumb {
      background-color: $off-white;
    }
  }
}

.range.range__disable {
  .range__slider {
    cursor: default;
    &-line {
      background: $off-white;
    }
  }

  .range__thumb {
    background-color: $off-white;
    .range__value-number {
      color: $gray-sub-text;
    }
  }
}
</style>
