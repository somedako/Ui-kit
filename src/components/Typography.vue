<script setup>
const props = defineProps({
  tagName: {
    type: String,
    required: true,
    validator: function (value) {
      return ["span", "p", "h1", "h2", "h3", "h4"].includes(value);
    },
  },

  bold: {
    type: Boolean,
  },

  semiBold: {
    type: Boolean,
  },
  medium: {
    type: Boolean,
  },

  size: {
    type: String,
    required: true,
    validator: function (value) {
      return ["s", "m", "l"].includes(value);
    },
  },
});
</script>

<template>
  <component
    :is="props.tagName"
    :class="[
      'typography',
      `size_${size}`,
      `tag_${tagName}`,
      bold ? 'bold' : '',
      semiBold ? 'semibold' : '',
      medium ? 'medium' : '',
    ]"
    ><slot></slot
  ></component>
</template>

<style lang="scss">
@import "../styles/fonts.scss";
@import "../styles/global.scss";

.typography {
  font-family: "Montserrat", sans-serif;
}

.medium {
  font-family: "Montserrat Medium", sans-serif;
}

.semibold {
  font-family: "Montserrat SemiBold", sans-serif;
}

.bold {
  font-family: "Montserrat Bold", sans-serif;
}

.size_s {
  font-size: 16px;
  line-height: 137%;
}
.size_m {
  font-size: 20px;
  line-height: 140%;
}

.size_l {
  font-size: 25px;
  line-height: 144%;
}

.tag_h1 {
  font-size: 48px;
}
.tag_h2 {
  font-size: 38px;
}
.tag_h3 {
  font-size: 32px;
}

@media (max-width: 768px) {
  .size_s {
    font-size: 13px;
    line-height: 150%;
  }
  .size_m {
    font-size: 16px;
    line-height: 150%;
  }

  .size_l {
    font-size: 20px;
    line-height: 140%;
  }

  .tag_h1 {
    font-size: 38px;
  }
  .tag_h2 {
    font-size: 32px;
  }
  .tag_h3 {
    font-size: 25px;
  }
}
</style>
