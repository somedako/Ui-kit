<script setup>
import { ref } from "vue";
import Tabs from "@/components/Tabs.vue";

const tabs = ["Вкладка 1", "Вкладка 2", "Вкладка 3"];
const selectedTab = ref(0);

const showElement = (elementIndex) => {
  selectedTab.value = elementIndex;
};
</script>

<template>
  <div class="wrapper">
    <div>
      <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        :showElement="showElement"
      />

      <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        :showElement="showElement"
        type="bg"
      />
      <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        :showElement="showElement"
        type="rounded"
      />
    </div>

    <div>
      <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        :showElement="showElement"
        size="s"
      />

      <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        :showElement="showElement"
        type="bg"
        size="s"
      />
      <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        :showElement="showElement"
        type="rounded"
        size="s"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    gap: 50px;
    flex-direction: column;
  }
}
</style>
