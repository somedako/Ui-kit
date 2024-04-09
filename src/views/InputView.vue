<script setup>
import { ref } from "vue";
import InputEmail from "@/components/Inputs/InputEmail.vue";
import InputSearch from "@/components/Inputs/InputSearch.vue";
import Typography from "@/components/Typography.vue";

const email = ref("");
const search = ref("");
</script>

<template>
  <Typography tagName="h3" size="s">Input</Typography>
  <div class="wrapper">
    <div class="large">
      <InputEmail v-model="email" name="email" label="E-mail" type="email" />

      <InputSearch
        v-model="search"
        name="search"
        placeholder="Поиск по пользователям"
      />
    </div>

    <div class="small">
      <InputEmail
        v-model="email"
        name="email"
        label="E-mail"
        type="email"
        size="s"
      />

      <InputSearch
        v-model="search"
        name="search"
        placeholder="Поиск по пользователям"
        size="s"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
