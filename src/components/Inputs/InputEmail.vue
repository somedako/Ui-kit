<script setup>
import BaseInput from "./BaseInput.vue";
</script>

<template>
  <BaseInput
    ><template #helpText
      >Мы отправим вам письмо со ссылкой для подтверждения данной
      почты</template
    ><template #textSuccess>Верный адрес</template
    ><template #textError>Неполный адрес</template></BaseInput
  >
</template>

<style lang="scss" scoped></style>
