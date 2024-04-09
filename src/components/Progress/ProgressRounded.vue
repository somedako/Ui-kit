<script setup>
import Typography from "../Typography.vue";
const props = defineProps({
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
  <div class="progress-circle">
    <div v-if="percent < 100 && !error" class="progress-circle-percent">
      <Typography tagName="span" size="s" medium>{{ percent }}%</Typography>
    </div>

    <div
      v-else-if="(percent === 100) & !error"
      class="progress-circle-percent success"
    >
      <Typography tagName="span" size="s" medium>Готово</Typography>
    </div>

    <div v-else class="progress-circle-percent error">
      <Typography tagName="span" size="s" medium>Ошибка</Typography>
    </div>

    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      class="progress-circle-svg"
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="#e6e6e6"
        stroke-width="8"
      />
      <circle
        :class="[
          'progress-circle-line',
          { success: percent === 100 && !error },
          { error: error },
        ]"
        :style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="#ff7c1e"
        stroke-width="8"
        pathLength="100"
      />
    </svg>
  </div>
</template>

<style lang="scss">
@import "../../styles/global.scss";

.progress {
  &-circle {
    cursor: default;
    position: relative;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
    &-svg {
      transform: rotate(-90deg);
    }
    &-percent {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    &-line {
      stroke-dasharray: 100;
      transition: 0.5s;

      &.success {
        stroke: $success;
      }

      &.error {
        stroke: $error;
      }
    }
  }
}

@media (max-width: 768px) {
  .progress-circle,
  .progress-circle-svg {
    width: 60px;
    height: 60px;
  }

  .progress-circle-percent.success > span {
    opacity: 0;
  }

  .progress-circle-percent.error > span {
    opacity: 0;
  }

  .progress-circle-percent.success {
    background-image: url("../../assets/check.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .progress-circle-percent.error {
    background-image: url("../../assets/alert-octagon.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
