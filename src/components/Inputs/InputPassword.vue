<script setup>
import { ref } from 'vue'
import Icon from '../Icon.vue'
import Typography from '../Typography.vue'
defineProps({
  required: {
    type: Boolean,
    default:  true
  },

  name: {
    type: String,
    required: true
  },

  placeholder: {
    type: String
  },

  size: {
    type: String,
    default: 'l',
    validations: function (value) {
      return ['l', 's'].includes(value)
    }
  },

  label: {
    type: String
  },

  pattern: {
    type: String
  },

  disabled: {
    type: Boolean,
    default: false
  },

  modelValue: {
    type: String,
    default: ''
  }
})

const toggleIcon = ref(true)
const passwordFieldType = ref('password')
const showPassword = () => {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
  toggleIcon.value = !toggleIcon.value
}
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="input__item">
    <input
      :class="['input-password', `size_${size}`, { active: modelValue.length > 0 }]"
      :name="name"
      :id="name"
      :type="passwordFieldType"
      :placeholder="placeholder"
      :value="modelValue"
      :pattern="pattern"
      :required="required"
      @input="emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <div v-show="modelValue" class="input__icon" @click="showPassword">
      <Icon v-if="toggleIcon" type="show-password" />
      <Icon v-else type="hide-password" />
    </div>

    <label
      v-show="modelValue"
      :for="name"
      :class="['input__label', { active: modelValue.length > 0 }]"
      >{{ label }}</label
    >

    <Typography tagName="span" size="s" class="success__message"
      ><slot name="textSuccess"
    /></Typography>
    <Typography tagName="span" size="s" class="help__text"><slot name="helpText" /></Typography>
    <Typography tagName="span" size="s" class="error__message"
      ><slot name="textError"
    /></Typography>
  </div>
</template>

<style lang="scss">
@import '../../styles/global.scss';
.input__item {
  position: relative;

  .input-password {
    border-radius: $radius-m;
    background: $off-white;
    border: 3px solid transparent;
    position: relative;
    color: $orange-primary-light;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 20px;
    transition: all 0.2s linear;
    position: relative;

    &.size_l {
      padding: 0 15px 0 16px;
      min-height: 64px;

      &.active {
        padding-top: 10px;
      }
    }

    &.size_s {
      padding: 0 11px 0 25px;
      min-height: 56px;
      &.active {
        padding-top: 7px;
      }
    }

    &::placeholder {
      color: $orange-primary-light;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      line-height: 140%;
      font-size: 20px;
    }

    &:focus {
      background: transparent;
      border: 3px solid $orange-primary-light;
    }

    &:invalid:not(:placeholder-shown) {
      border: 3px solid $error;
    }

    &:valid:not(:placeholder-shown) {
      border: 3px solid $success;
    }
  }

  .input__label {
    position: absolute;
    display: none;
    top: 5px;
    left: 20px;
    z-index: 10;
    color: $orange-primary-light;
    font-size: 14px;
    line-height: 138%;
    user-select: none;

    &.active {
      display: inline-block;
    }
  }
}

.searchInput {
  padding: 0 15px 0 45px !important;
}

.help__text,
.error__message,
.success__message {
  font-size: 14px;
  line-height: 22px;
  padding-left: 10px;
}

.success__message {
  display: none;
  color: $success;
}

.help__text {
  color: $gray-sub-text;
  display: inline-block;
}

.error__message {
  color: $error;
  display: none;
}

input:not(:placeholder-shown):valid ~ .success__message {
  display: inline-block;
}

input:not(:placeholder-shown):valid ~ .help__text {
  display: none;
}

input:not(:placeholder-shown):invalid ~ .help__text {
  display: none;
}

input:not(:placeholder-shown):valid ~ .input__label {
  color: $success;
}

input:not(:placeholder-shown):invalid ~ .error__message {
  display: inline-block;
}
input:not(:placeholder-shown):invalid ~ .input__label {
  color: $error;
}

.input.disabled {
  background: $gray-disabled;
  color: $gray-sub-text;
  cursor: default;

  &::placeholder {
    color: $gray-sub-text;
  }

  &:focus {
    background: $gray-disabled;
    border: 3px solid transparent;
  }
}

.left__icon.disabled > svg {
  cursor: default;
  & path {
    stroke: $gray-sub-text;
  }
}

input:not(:placeholder-shown):valid ~ .input__icon > svg > path {
  stroke: $success;
}

input:not(:placeholder-shown):invalid ~ .input__icon > svg > path {
  stroke: $error;
}

.left__icon {
  position: absolute;
  z-index: 2;
  bottom: 32px;
  left: 14px;
}

.input.size_s + .input__icon {
  top: 15px;
}

.input__icon {
  position: absolute;
  top: 21px;
  right: 15px;
}

@media (max-width: 768px) {
  .input__item .input-password {
    font-size: 16px;
  }
  .input__item .input.size_l {
    min-height: 56px;
  }

  .input__item .input.size_s {
    min-height: 48px;
  }

  .input__item .input-password::placeholder {
    font-size: 16px;
  }

  .input__icon {
    top: 19%;
  }

  .left__icon {
    bottom: 43%;
  }
}
</style>
