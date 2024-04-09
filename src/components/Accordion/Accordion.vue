<script setup></script>
<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.accordion {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 355px;
  width: 100%;
  max-width: 1030px;
}
</style>
