<script setup>
import { ref } from "vue";
import Stepper from "@/components/Stepper.vue";

const count = ref(1);
</script>

<template>
  <div class="wrapper">
    <Stepper
      @increment="count++"
      @decrement="count > 0 && count--"
      :count="count"
    />

    <Stepper
      @increment="count++"
      @decrement="count > 0 && count--"
      :count="count"
      disabled
    />

    <Stepper
      @increment="count++"
      @decrement="count > 0 && count--"
      :count="count"
      size="s"
    />
    <Stepper
      @increment="count++"
      @decrement="count > 0 && count--"
      :count="count"
      size="s"
      disabled
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
</style>
