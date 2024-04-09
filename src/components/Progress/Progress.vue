<script setup>
import Typography from "../Typography.vue";
const props = defineProps({
  maxWidth: {
    type: String,
    default: "260px",
  },
  percent: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "black",
  },
  error: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="progress-container" :style="[{ 'max-width': maxWidth }]">
    <div class="progress">
      <div
        :class="[
          'progress-bar',
          {
            'progress-bar__success': percent === 100 && !error,
            'progress-bar__error': error,
          },
        ]"
        :style="[{ width: `${percent}%` }]"
      ></div>
    </div>
    <Typography
      v-if="percent < 100 && !error"
      class="percent"
      tagName="span"
      size="s"
      medium
      >{{ percent }}%</Typography
    >

    <Typography
      v-else-if="percent === 100 && !error"
      class="percent success"
      tagName="span"
      size="s"
      medium
      >Готово</Typography
    >

    <Typography v-else class="percent error" tagName="span" size="s" medium
      >Ошибка</Typography
    >
  </div>
</template>

<style lang="scss">
@import "../../styles/global.scss";
.progress {
  height: 10px;
  border-radius: 4px;
  background: $off-white;
  &-container {
    margin-bottom: 20px;
    overflow: hidden;
  }

  &-bar {
    width: 25%;
    height: 100%;
    border-radius: 4px;
    background: $orange-primary-light;
    transition: 0.5s;

    &__success {
      background: $success;
    }

    &__error {
      background: $error;
    }
  }
}

.percent {
  margin-top: 2px;
  display: block;
  text-align: center;
}

.success {
  color: $success;
}

.error {
  color: $error;
}
</style>
