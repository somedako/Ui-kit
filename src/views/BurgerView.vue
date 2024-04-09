<script setup>
import BurgerPrimal from "@/components/Burger/BurgerPrimal.vue";
import BurgerRose from "@/components/Burger/BurgerRose.vue";
import BurgerOutline from "@/components/Burger/BurgerOutline.vue";
import BurgerTransparent from "@/components/Burger/BurgerTransparent.vue";
</script>
<template>
  <div class="wrapper">
    <BurgerPrimal />
    <BurgerRose />
    <BurgerOutline />
    <BurgerTransparent />

    <BurgerPrimal disabled />
    <BurgerRose disabled />
    <BurgerOutline disabled />
    <BurgerTransparent disabled />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
