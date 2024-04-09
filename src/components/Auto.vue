<script setup>
const props = defineProps({
  size: {},
  right: {
    type: Boolean,
  },

  left: {
    type: Boolean,
  },

  topLeft: {
    type: Boolean,
  },

  topRight: {
    type: Boolean,
  },

  size: {
    type: String,
  },
});
</script>

<template>
  <div class="auto-box">
    <div :class="['auto', `size__${size}`]">
      <div
        :class="[
          'text',
          { size__s: size === 's' },
          { left: left },
          { right: right },
          { 'top-left': topLeft },
          { 'top-right': topRight },
        ]"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
.auto-box {
  position: relative;
  max-width: 224px;
  height: max-content;
}

.auto {
  color: $black;
  text-align: left;
  padding: 18px 22px;
  border-radius: $radius-m;
  background: $off-white;
}

.auto.size__s {
  padding: 12px;
  width: 186px;
}

.text::after {
  content: " ";
  position: absolute;
  top: 100%;
  border-width: 8px;
  border-style: solid;
  border-color: $off-white transparent transparent transparent;
}

.text.right::after {
  left: 25%;
}

.text.right::after {
  left: 65%;
}

.text.top-left::after {
  top: -15%;
  border-color: transparent transparent $off-white transparent;
}

.text.size__s.top-left::after {
  top: -33%;
}

.text.size__s.top-right::after {
  border-color: transparent transparent $off-white transparent;
  left: 65%;
  top: -33%;
}
</style>
