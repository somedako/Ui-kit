<script setup>
import { ref, computed } from "vue";
import Textarea from "@/components/Textarea.vue";

const text = ref("");
const error = ref(false);

const isError = computed(() => {
  if (text.value.length >= 30) {
    return (error.value = true);
  }
});

const clean = () => {
  text.value = "";
};
</script>

<template>
  <div class="wrapper">
    <Textarea @cleanTextarea="clean" v-model="text" :error="isError" />
    <Textarea @cleanTextarea="clean" disabled />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
