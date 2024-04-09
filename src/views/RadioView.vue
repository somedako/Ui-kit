<script setup>
import Typography from "@/components/Typography.vue";
import RadioButton from "@/components/RadioButton.vue";
import Checkbox from "@/components/Checkbox.vue";
import Switch from "@/components/Switch.vue";
import RangeButton from "@/components/RangeButton.vue";
</script>

<template>
  <Typography tagName="h3" size="s" class="title">RadioButton</Typography>
  <div class="wrapper">
    <RadioButton />
    <RadioButton disabled />
    <RadioButton size="s" />
    <RadioButton size="s" disabled checked />
  </div>

  <Typography tagName="h3" size="s" class="title">Checkbox</Typography>
  <div class="wrapper">
    <Checkbox />
    <Checkbox disabled />
    <Checkbox size="s" />
    <Checkbox size="s" disabled checked />
  </div>

  <Typography tagName="h3" size="s" class="title">Switch</Typography>
  <div class="wrapper">
    <Switch />
    <Switch disabled />
    <Switch size="s" />
    <Switch size="s" disabled checked />
  </div>

  <Typography tagName="h3" size="s" class="title">Slider</Typography>
  <div class="wrapper">
    <RangeButton />
    <RangeButton disabled />
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";
.wrapper {
  display: flex;
  margin-bottom: 20px;
}
</style>
