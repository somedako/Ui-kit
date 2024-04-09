<script setup>
import Icon from "./Icon.vue";
import Typography from "./Typography.vue";
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },

  error: {
    type: Boolean,
  },

  modelValue: {
    default: null,
  },
});

const emits = defineEmits(["update:modelValue", "cleanTextarea"]);
</script>

<template>
  <div class="wrap">
    <textarea
      :value="modelValue"
      @input="emits('update:modelValue', $event.target.value)"
      :class="[
        'textarea',
        { textarea__disabled: disabled },
        { textarea__error: error },
      ]"
      :disabled="disabled"
      placeholder="Текст сообщения"
    ></textarea>

    <div class="pull-tab"></div>
    <div
      :class="['icon', { icon__error: error }]"
      @click="emits('cleanTextarea', '')"
      v-show="props.modelValue !== '' && !disabled"
    >
      <Icon type="x-circle" />
    </div>
    <Typography
      :class="['subtetx', { subtetx__error: error }]"
      v-show="props.modelValue === '' || error"
      tag-name="span"
      size="s"
      >Не более 3000 знаков</Typography
    >
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";

.wrap {
  width: 100%;
  max-width: 332px;
  position: relative;
  display: inline-block;

  .icon {
    position: absolute;
    top: 13px;
    right: 11px;

    &__error > svg path {
      stroke: $error;
    }
  }

  &::after {
    content: "";
    border-top: 2px solid transparent;
    width: 16px;
    transform: rotate(-45deg);
    background: transparent;
    position: absolute;
    right: 11px;
    bottom: 20px;
    pointer-events: none;
    border-radius: 25%;
  }

  .textarea {
    position: relative;
    width: 100%;
    max-width: 332px;
    min-height: 182px;
    max-height: 332px;
    padding: 17px 37px 17px 23px;
    resize: vertical;
    border: 2px solid transparent;
    background: $off-white;
    border-radius: $radius-m;
    border: none;
    font-family: "Montserrat Medium", sans-serif;

    &__error {
      border: 2px solid $error;
      background: transparent;
    }

    &__disabled {
      background: $gray-disabled;
      cursor: default;
    }

    &::-webkit-resizer {
      display: none;
    }

    &:focus {
      border: 2px solid $orange-primary-light;
      background: transparent;
    }

    &::placeholder {
      color: $orange-primary-light;
    }
  }

  .pull-tab {
    border-top: 2px solid transparent;
    width: 10px;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 16px;
    right: 9px;
    pointer-events: none;
    border-radius: 25%;
  }
}

.subtetx {
  color: $gray-sub-text;
  position: absolute;
  left: 0;
  bottom: -25px;

  &__error {
    color: $error;
  }
}

.textarea.textarea.textarea__disabled::placeholder {
  color: $gray-sub-text;
}

.textarea:has(.textarea__error)::placeholder {
  color: $error;
}

.textarea.textarea__error:focus {
  border-color: $error;
}

.textarea.textarea__error:focus + .pull-tab,
.wrap:has(.textarea.textarea__error:focus):after {
  border-color: $error;
}

.textarea:focus + .pull-tab,
.wrap:has(.textarea:focus):after {
  border-color: $orange-primary-light;
}

@media (max-width: 768px) {
  .wrap {
    height: 140px;
  }

  .textarea {
    min-height: 140px;
    max-height: 160px;
  }
}
</style>
