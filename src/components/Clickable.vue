<script setup>
import { ref } from "vue";
import Icon from "@/components/Icon.vue";
const active = ref(false);
</script>

<template>
  <div class="tooltip-box">
    <div
      :class="['icon-tooltip', { active: active }]"
      @click="active = !active"
    >
      <Icon type="help-circle" />
    </div>
    <div :class="['tooltip', { active: active }]">
      <div class="tooltip-close" @click="active = false">
        <Icon type="x" />
      </div>

      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";
.tooltip-box {
  position: relative;
  display: inline-block;
}

.icon-tooltip {
  position: relative;
  transition: all 0.2s linear;
  z-index: 4;
}

.icon-tooltip > svg path {
  stroke: $gray-sub-text;
}

.icon-tooltip.active > svg path {
  stroke: $orange-primary-light;
}
.icon-tooltip > svg circle {
  fill: $gray-sub-text;
}

.icon-tooltip.active > svg circle {
  fill: $orange-primary-light;
}

.icon-tooltip:hover > svg circle {
  fill: $orange-primary-light;
}

.icon-tooltip:hover > svg path {
  stroke: $orange-primary-light;
}

.tooltip.active + .icon-tooltip > svg path {
  stroke: $orange-primary-light;
}

.tooltip.active + .icon-tooltip > svg circle {
  fill: $orange-primary-light;
}

.tooltip.active {
  opacity: 1;
}

.tooltip {
  color: $black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  padding: 20px;
  border-radius: $radius-m;
  width: 300px;
  min-height: 194px;
  max-height: 337px;
  left: -75%;
  top: -68%;
  box-shadow: $hard-drop-shadow;
  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;

  background: transparent;
}

.tooltip-close {
  align-self: flex-end;
}

@media (max-width: 768px) {
  .tooltip {
    width: 260px;
    min-height: 305px;
  }
}
</style>
