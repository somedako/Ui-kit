<script setup>
import Typography from "@/components/Typography.vue";
</script>

<template>
  <Typography tagName="h3" size="s" class="typography_title"
    >Typography</Typography
  >
  <div class="wrapper">
    <div class="text">
      <Typography tagName="p" size="l" bold>Какой-то текст</Typography>
      <Typography tagName="p" size="m" semiBold>Какой-то текст</Typography>
      <Typography tagName="p" size="s" medium>Какой-то текст</Typography>
      <Typography tagName="span" size="l">Какой-то текст</Typography>
      <Typography tagName="span" size="m">Какой-то текст</Typography>
      <Typography tagName="span" size="s">Какой-то текст</Typography>
    </div>

    <div class="title">
      <Typography tagName="h1" size="l" bold>Какой-то текст</Typography>
      <Typography tagName="h2" size="m" semiBold>Какой-то текст</Typography>
      <Typography tagName="h3" size="s" medium>Какой-то текст</Typography>
      <Typography tagName="h1" size="l">Какой-то текст</Typography>
      <Typography tagName="h2" size="m">Какой-то текст</Typography>
      <Typography tagName="h3" size="s">Какой-то текст</Typography>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.typography_title {
  margin-bottom: 20px;
}

.wrapper {
  display: flex;
  justify-content: space-around;

  .text,
  .title {
    display: flex;
    flex-direction: column;
  }
}
</style>
