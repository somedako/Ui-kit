<script setup>
import { ref } from "vue";
import Typography from "../Typography.vue";
import Icon from "../Icon.vue";
const props = defineProps({
  title: { type: String, required: true },
  ariaTitle: { type: String, required: true },
});
const showPanel = ref(false);
const togglePanel = (event) => {
  showPanel.value = !showPanel.value;
};
</script>

<template>
  <div class="panel">
    <div
      :arial-controls="'accordion-content-' + ariaTitle"
      @click.prevent="togglePanel"
      class="panel-header"
    >
      <Typography tagName="h4" size="m" medium> {{ title }}</Typography>
      <Transition> </Transition>
      <div class="panel-icon" v-if="showPanel">
        <Icon type="chevron-up" />
        <Typography tagName="span" size="s" medium>Roll Up</Typography>
      </div>
      <div class="panel-icon" v-else>
        <Icon type="chevron-down" />
        <Typography tagName="span" size="s" medium="">Edit</Typography>
      </div>
    </div>

    <Transition name="fade">
      <div
        :aria-hidden="!showPanel"
        :id="'content-' + ariaTitle"
        v-if="showPanel"
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.panel {
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    cursor: pointer;
    width: 100%;
    border-top: 2px solid $gray-disabled;

    .panel-icon {
      display: flex;
      align-items: center;
      color: $orange-primary-light;
      gap: 8px;
    }
  }
}

.panel:last-child {
  border-bottom: 2px solid $gray-disabled;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
</style>
