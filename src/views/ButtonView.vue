<script setup>
import { ref } from "vue";

import ButtonPrimal from "@/components/Buttons/ButtonPrimal.vue";
import ButtonPrimalAdd from "@/components/Buttons/ButtonPrimalAdd.vue";
import ButtonRose from "@/components/Buttons/ButtonRose.vue";
import ButtonOutline from "@/components/Buttons/ButtonOutline.vue";
import ButtonText from "@/components/Buttons/ButtonText.vue";
import Typography from "@/components/Typography.vue";
import ButtonClaz from "@/components/Buttons/ButtonClaz.vue";

const loading = ref(false);

const setLoading = () => {
  loading.value = !loading.value;
};
</script>

<template>
  <Typography tagName="h3" size="s">Buttons</Typography>
  <div class="wrapper">
    <div>
      <ButtonPrimalAdd disabled />
      <ButtonPrimalAdd :loading="loading" />
      <ButtonPrimal :loading="loading" />
      <ButtonPrimal disabled />
      <ButtonRose :loading="loading" />
      <ButtonOutline :loading="loading" />
      <ButtonText :loading="loading" />
    </div>

    <div>
      <Typography tagName="h3" size="m" bold>Нажми на меня!</Typography>
      <ButtonClaz :setLoading="setLoading" />
    </div>

    <div>
      <ButtonPrimalAdd size="s" disabled />
      <ButtonPrimalAdd size="s" :loading="loading" />
      <ButtonPrimal size="s" :loading="loading" />
      <ButtonPrimal size="s" disabled />
      <ButtonRose size="s" :loading="loading" />
      <ButtonOutline size="s" :loading="loading" />
      <ButtonText size="s" :loading="loading" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
}

.wrapper {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;

  gap: 30px;
  @media (max-width: 767px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    max-width: 319px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
