<script setup>
import PrimalTag from "@/components/Tags/PrimalTags.vue";
import TagsRose from "@/components/Tags/TagsRose.vue";
</script>
<template>
  <div class="wrapper">
    <PrimalTag>Тотсамыйтег</PrimalTag>
    <PrimalTag close>Тотсамыйтег</PrimalTag>
    <PrimalTag favorites>Тотсамыйтег</PrimalTag>
    <PrimalTag disabled>Тотсамыйтег</PrimalTag>

    <TagsRose>Тотсамыйтег</TagsRose>
    <TagsRose close>Тотсамыйтег</TagsRose>
    <TagsRose favorites>Тотсамыйтег</TagsRose>
    <TagsRose disabled>Тотсамыйтег</TagsRose>

    <PrimalTag size="m">Тотсамыйтег</PrimalTag>
    <PrimalTag size="m" close>Тотсамыйтег</PrimalTag>
    <PrimalTag size="m" favorites>Тотсамыйтег</PrimalTag>
    <PrimalTag size="m" disabled>Тотсамыйтег</PrimalTag>

    <TagsRose size="s">Тотсамыйтег</TagsRose>
    <TagsRose size="s" close>Тотсамыйтег</TagsRose>
    <TagsRose size="s" favorites>Тотсамыйтег</TagsRose>
    <TagsRose size="s" disabled>Тотсамыйтег</TagsRose>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
