<script setup>
import { ref } from "vue";

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
  { name: "Icon", href: "/icon" },
  { name: "Input", href: "/input" },
  { name: "Progress", href: "/progress" },
  {
    name: "RadioButton, Checkbox, Switch, Slider, RangeButton",
    href: "/radio",
  },
  { name: "DropDown", href: "/dropdown" },
  { name: "Textarea", href: "/textarea" },
  { name: "Indicator", href: "/indicator" },
  { name: "Stepper", href: "/stepper" },
  { name: "Alert", href: "/alert" },
  { name: "Accordion", href: "/accordion" },
  { name: "Tabs", href: "/tabs" },
  { name: "Tags", href: "/tags" },
  { name: "Burger", href: "/burger" },
  { name: "Tooltip", href: "/tooltip" },
]);
</script>

<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <RouterLink
      class="sidebar__link"
      v-for="link in links"
      :to="link.href"
      :key="link.name"
      >{{ link.name }}</RouterLink
    >
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: max-content;
  height: 100vh;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 10px 10px 10px 20px;
  transition: 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0);
  }
  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    color: #5d70ff;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: 700;

    &:hover {
      border-color: #5d70ff;
    }
  }
}
</style>
