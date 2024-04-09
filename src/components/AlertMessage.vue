<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Typography from "./Typography.vue";
import Icon from "./Icon.vue";

const width = ref(0);
const onResize = () => (width.value = window.innerWidth);

onMounted(() => window.addEventListener("resize", onResize));
onBeforeUnmount(() => window.removeEventListener("resize", onResize));
</script>

<template>
  <div class="alert-message">
    <div class="alert-icon">
      <Icon type="alert-triangle" />
    </div>

    <div class="alert-desc">
      <Typography class="alert-text" tagName="span" size="m" medium
        ><slot
      /></Typography>
      <button class="alert-btn">
        <Typography tagName="p" size="m" bold>{{
          width >= 1200 ? "Продолжить" : "Заполнить"
        }}</Typography>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";
.alert-message {
  display: flex;
  gap: 40px;
  box-shadow: $hard-drop-shadow;
  max-height: max-content;
  background: $rose;
  border-radius: $radius-m;
  padding: 9px 100px 21px 20px;

  .alert-icon,
  .alert-text,
  .alert-btn {
    justify-self: flex-start;
  }

  .alert-icon {
    margin-top: 5px;
  }

  .alert-desc {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;
    flex: 1;
    .alert-btn {
      justify-self: flex-start;
      min-height: 56px;
      align-self: center;
      background: $orange-primary-light;
      color: $white;
      display: flex;
      justify-content: center;
      border: none;
      cursor: pointer;
      align-items: center;
      width: 100%;
      max-width: 198px;
      border-radius: $radius-m;
      border: 3px solid transparent;
      transition: 0.2s linear;
      &:hover {
        background-color: $orange-hover;
      }

      &:focus {
        border: 3px solid $orange-hover;
      }

      &:active {
        background-color: $black;
        border: 3px solid $black;
      }
    }

    .alert-text {
      max-width: 595px;
      justify-self: flex-start;
    }
  }
}

@media (max-width: 768px) {
  .alert-message {
    padding: 20px;
  }
}

@media (max-width: 400px) {
  .alert-message {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
