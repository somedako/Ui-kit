<script setup>
import { ref } from "vue";
import Progress from "@/components/Progress/Progress.vue";
import ProgressRounded from "@/components/Progress/ProgressRounded.vue";
import Typography from "@/components/Typography.vue";
import ButtonClaz from "@/components/Buttons/ButtonClaz.vue";

const percent = ref(10);
const percentError = ref(45);
const percentBar = ref(100);
const error = ref(true);

const addPercent = () => {
  percent.value += 10;
  if (percent.value > 100) {
    percent.value = 100;
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <Typography tagName="h3" size="s" class="title">ProgressBar</Typography>
      <ButtonClaz class="btn-progress" @click="addPercent"></ButtonClaz>
      <Progress :percent="percent" />
      <Progress :percent="percentBar" />
      <Progress :percent="percentError" :error="error" />
    </div>

    <div class="right">
      <ProgressRounded :percent="percent" />
      <ProgressRounded :percent="percentError" :error="error" />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: space-around;
}
.title {
  margin-bottom: 20px;
}

.btn-progress {
  margin-bottom: 20px;
}
</style>
