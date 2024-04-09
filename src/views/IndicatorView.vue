<script setup>
import { ref } from "vue";
import Indicator from "@/components/Indicator.vue";
import IndicatorRounded from "@/components/IndicatorRounded.vue";
const arr = ref([1, 2, 3]);
const currentElementIndex = ref(0);

const showElement = (elementIndex) => {
  currentElementIndex.value = elementIndex;
};
</script>

<template>
  <div class="wrapper">
    <div>
      <Indicator
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
      />

      <Indicator
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        type="middle"
      />

      <Indicator
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        type="dot"
      />
    </div>

    <div>
      <Indicator
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        size="s"
      />

      <Indicator
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        type="middle"
        size="s"
      />

      <Indicator
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        type="dot"
        size="s"
      />
    </div>

    <div>
      <IndicatorRounded
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        color="green"
      />

      <IndicatorRounded
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        color="green"
        size="s"
      />

      <IndicatorRounded
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
      />

      <IndicatorRounded
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        color="white"
      />

      <IndicatorRounded
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        color="gray"
      />

      <IndicatorRounded
        :elements="arr"
        :currentElementIndex="currentElementIndex"
        :showElement="showElement"
        color="red"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-around;
  }
}
</style>
