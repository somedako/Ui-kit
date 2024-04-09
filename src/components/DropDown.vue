<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import Typography from "./Typography.vue";
import Icon from "./Icon.vue";
import Checkbox from "./Checkbox.vue";
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },

  checkbox: {
    type: Boolean,
    default: false,
  },

  modelValue: {
    default: null,
  },
});

const dropDown = ref(null);

const isDropDownVisible = ref(false);

const emits = defineEmits(["update:modelValue"]);

const selectedOption = ref(null);

const mappedSelectedOption = computed(() => {
  return (
    selectedOption.value?.name || selectedOption.value || "Роль пользователя*"
  );
});

const toggleOptionSelect = (option) => {
  selectedOption.value = option;
  emits("update:modelValue", option);
  setTimeout(() => {
    isDropDownVisible.value = false;
  }, 300);
};

const closeDropdown = (element) => {
  if (!dropDown.value.contains(element.target)) {
    isDropDownVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropdown);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", closeDropdown);
});
</script>

<template>
  <div
    :class="[
      'dropdown-wrapper',
      { active: selectedOption },
      { 'active-color': isDropDownVisible },
    ]"
    ref="dropDown"
  >
    <div
      :class="['dropdown-selected-option', { active: isDropDownVisible }]"
      @click="isDropDownVisible = true"
    >
      <Typography
        :class="[
          'dropdown-selected-option__text',
          { active: isDropDownVisible },
        ]"
        tag-name="p"
        bold
        size="s"
        >{{ mappedSelectedOption }}</Typography
      >
      <Icon v-if="isDropDownVisible" type="chevron-up" />
      <Icon v-else type="chevron-down" />
    </div>
    <transition name="slide-fade">
      <div class="options-wrapper" v-if="isDropDownVisible">
        <div
          class="option"
          v-for="(option, index) in props.options"
          :key="index"
          @click="toggleOptionSelect(option)"
        >
          <Icon v-if="option.icon" :type="option?.icon" />
          <Checkbox v-else-if="checkbox" />
          <Typography class="dropdown-text" tag-name="p" size="s" bold>{{
            option.name || option
          }}</Typography>
        </div>
      </div>
    </transition>
    <slot name="Dropdon-helpText" />
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";
.dropdown-wrapper {
  margin-top: 25px;
  padding: 1rem;
  background: $off-white;
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 395px;
  font-family: "Montseratt", sans-serif;
  color: $orange-primary-light;
  box-shadow: $hard-drop-shadow;
  border-radius: $radius-xl;

  &.active-color {
    background: none;
  }

  .dropdown-selected-option {
    padding: 5px 18px;
    display: flex;
    align-items: center;
    color: $orange-primary-light;
    border-radius: $radius-xl;
    background: $off-white;
    border: 3px solid transparent;
    justify-content: space-between;
    transition: all 0.2s linear;

    &.active {
      background: none;
    }

    & > svg {
      pointer-events: none;
    }

    &:hover {
      background: $off-white;
      border-radius: $radius-xl;
    }

    &__text {
      color: $orange-primary-light;

      &.active {
        color: $gray-sub-text;
      }
    }
  }

  .options-wrapper {
    max-height: 298px;
    overflow-y: auto;
    margin-right: 20px;
    padding-right: 10px;

    position: relative;
    z-index: 6;
    padding-bottom: 20px;
    border: 3px solid transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-moz-scrollbar-thumb {
      background: $orange-primary-light;
      border-radius: 5px;
    }
    &::-moz-scrollbar-track {
      background-color: $off-white;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: $orange-primary-light;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: $off-white;
      border-radius: 5px;
    }
  }

  .option {
    padding: 18px 18px 18px 20px;
    transition: all 0.1s linear;
    border-radius: $radius-s;
    display: flex;
    color: $black;
    align-items: center;
    gap: 10px;

    &:hover {
      background: $off-white;
      color: $black;
    }

    &:active {
      background: $orange-primary-light;
      color: $white;
      & > svg path {
        stroke: $white;
      }
    }
  }
}

.dropdown-wrapper.active {
  border: 3px solid $orange-primary-light;
  box-shadow: none;
  background: none;
}

.dropdown-wrapper.active .dropdown-selected-option {
  background: $white;
}

.dropdown-wrapper.active .dropdown-selected-option__text {
  color: $black;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-form,
.slide-fade-leave-to {
  transform: translateY(-4px);
  opacity: 0;
}

::-moz-scrollbar-button,
::-webkit-scrollbar-button {
  width: 0px;
}
</style>
