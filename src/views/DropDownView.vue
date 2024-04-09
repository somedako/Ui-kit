<script setup>
import { ref } from "vue";
import DropDown from "@/components/DropDown.vue";
import Typography from "@/components/Typography.vue";

const options = ref([
  { name: "Профессия 1", value: 1 },
  { name: "Профессия 2", value: 2 },
  { name: "Профессия 3", value: 3 },
  { name: "Профессия 4", value: 4 },
  { name: "Профессия 5", value: 5 },
  { name: "Профессия 6", value: 6 },
  { name: "Профессия 7", value: 7 },
  { name: "Профессия 8", value: 8 },
  { name: "Профессия 9", value: 9 },
  { name: "Профессия 10", value: 10 },
]);

const optionsWithIcon = ref([
  { name: "Профессия 1", value: 1, icon: "chrome" },
  { name: "Профессия 2", value: 2, icon: "box" },
  { name: "Профессия 3", value: 3, icon: "briefcase" },
  { name: "Профессия 4", value: 4, icon: "clipboard" },
  { name: "Профессия 5", value: 5, icon: "time-icon" },
]);

const selectedOption = ref(null);
</script>

<template>
  <div class="wrapper">
    <Typography tag-name="h2" size="s"
      >Выбранный вариант: {{ selectedOption }}</Typography
    >
    <DropDown :options="options" v-model="selectedOption" />
    <DropDown :options="optionsWithIcon" v-model="selectedOption" />
    <DropDown :options="options" v-model="selectedOption" checkbox />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
