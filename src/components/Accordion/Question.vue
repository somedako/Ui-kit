<script setup>
import Typography from "../Typography.vue";
</script>
<template>
  <div class="wrapper">
    <Typography tagName="p" size="s" medium> I have no idea</Typography>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  flex-direction: column;
  gap: 24px;
}
</style>
