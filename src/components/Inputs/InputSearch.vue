<script setup>
import BaseInput from "./BaseInput.vue";
import Icon from "../Icon.vue";
</script>

<template>
  <BaseInput class="input__search"
    ><template #seacrh><Icon type="search" /></template
    ><template #textSuccess>Все отлично</template
    ><template #textError>Неверная информация</template>
  </BaseInput>
</template>

<style lang="scss">
@import "../../styles/global.scss";
.input__search {
  input::placeholder {
    color: $gray-sub-text;
  }
}
</style>
