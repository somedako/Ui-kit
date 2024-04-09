<script setup>
import Clickable from "@/components/Clickable.vue";
import Auto from "@/components/Auto.vue";
import Typography from "@/components/Typography.vue";
</script>

<template>
  <div class="wrapper">
    <div>
      <Clickable>
        <template #content>
          <Typography tagName="h5" size="s" bold>Источник</Typography>
          <Typography tagName="p" size="s" medium
            >Источник, из которого пользователь перешел на данный шаг
            воронки:</Typography
          >
          <ul>
            <li>user</li>
            <li>sms</li>
            <li>bot</li>
            <li>e-mai</li>
          </ul>
          <a href="">подробнее >></a>
        </template>
      </Clickable>
    </div>

    <div>
      <Auto
        ><template #content>
          <Typography tagName="h4" size="s" bold>Внимание</Typography>
          <Typography tagName="p" size="s"
            >Будьте осторожны и спасибо за внимание</Typography
          >
        </template></Auto
      >

      <Auto left size="s"
        ><template #content>
          <Typography tagName="p" size="s">Будьте осторожны</Typography>
        </template></Auto
      >

      <Auto right size="s"
        ><template #content>
          <Typography tagName="p" size="s">Будьте осторожны</Typography>
        </template></Auto
      >

      <Auto topLeft
        ><template #content>
          <Typography tagName="h4" size="s" bold>Внимание</Typography>
          <Typography tagName="p" size="s"
            >Будьте осторожны и спасибо завнимание</Typography
          >
        </template></Auto
      >

      <Auto topRight
        ><template #content>
          <Typography tagName="h4" size="s" bold>Внимание</Typography>
          <Typography tagName="p" size="s"
            >Будьте осторожны и спасибо завнимание</Typography
          >
        </template></Auto
      >

      <Auto topRight size="s"
        ><template #content>
          <Typography tagName="p" size="s">Будьте осторожны</Typography>
        </template></Auto
      >

      <Auto topLeft size="s"
        ><template #content>
          <Typography tagName="p" size="s">Будьте осторожны</Typography>
        </template></Auto
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 20px;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
