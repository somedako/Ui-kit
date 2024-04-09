<script setup>
import Typography from "./Typography.vue";
const props = defineProps({
  names: {
    type: Array,
    required: true,
  },

  size: {
    type: String,
    default: "l",
  },

  showElement: { type: Function },
  selectedTab: {
    type: Number,
  },

  type: {
    type: String,
    default: "line",
  },
});
</script>

<template>
  <div class="tab-nav">
    <div class="tab-nav__items">
      <Typography
        v-for="(tab, index) in names"
        :class="[
          'tab-nav__item',
          `size__${size}`,
          { line: type === 'line' },
          { bg: type === 'bg' },
          { rounded: type === 'rounded' },
          { selected: selectedTab === index },
        ]"
        tagName="span"
        @click="showElement(index)"
        size="l"
        bold
        :key="index"
        >{{ tab }}</Typography
      >
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";

.tab {
  &-nav {
    &__items {
      display: flex;
      cursor: pointer;
      width: 100%;
      max-width: 550px;

      .tab-nav__item {
        width: 100%;

        text-align: center;

        &.size__l {
          max-width: 189px;
          & + .line {
            height: 46px;
          }

          & + .rounded {
            height: 52px;
          }

          & + .bg {
            height: 56px;
          }
        }

        &.size__s {
          font-size: 20px;
          line-height: 140%;
          max-width: 162px;

          & + .line {
            height: 36px;
          }

          & + .bg {
            height: 48px;
          }

          & + .rounded {
            height: 45px;
          }
        }

        &.line {
          border-bottom: 4px solid $gray-disabled;

          &.selected {
            color: $orange-primary-light;
            border-bottom: 4px solid $orange-primary-light;
          }
        }

        &.bg {
          background: transparent;
          padding: 10px;
          &.selected {
            border-radius: $radius-l;
            background: $orange-primary-light;
            color: $white;
          }
        }

        &.rounded {
          color: $orange-primary-light;
          position: relative;
          &.selected {
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              background: $orange-primary-light;
              border-radius: 50%;
              width: 16px;
              height: 16px;
              transform: translateX(-50%);
            }
          }
        }
      }
    }
  }
}
</style>
