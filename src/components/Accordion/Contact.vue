<script setup>
import Typography from "@/components/Typography.vue";
import InputEmail from "@/components/Inputs/InputEmail.vue";
</script>
<template>
  <div class="wrapper">
    <Typography tagName="p" size="s" medium
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
      repellat beatae placeat fugit assumenda? Corrupti maiores libero
      consequuntur beatae possimus iure blanditiis. Optio sequi soluta,
      praesentium obcaecati error beatae dolore?</Typography
    >
    <InputEmail name="email" label="E-mail" type="email" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;
}
</style>
