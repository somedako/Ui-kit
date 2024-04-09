<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";

const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
    <LayoutHeader />
    <LayoutSidebar :openSidebar="isOpenMenu" />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles/fonts.scss";
@import "./styles/global.scss";
#app {
  font-family: "Montseratt", sans-serif;
  -webkit-font-smoothing: antialised;
  -moz-osx-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;

  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: #5d70ff;
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
