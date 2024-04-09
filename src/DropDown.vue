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
    selectedOption.value?.name || selectedOption.value || "Выберите профессию"
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
  <div class="dropdown-wrapper" ref="dropDown">
    <div
      :class="['dropdown-selected-option', { active: selectedOption }]"
      @click="isDropDownVisible = true"
    >
      <Typography
        class="dropdown-selected-option__text"
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
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";
.dropdown-wrapper {
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  max-width: 328px;

  .dropdown-selected-option {
    padding: 14px;
    display: flex;
    width: 100%;
    align-items: center;
    box-shadow: $hard-drop-shadow;
    background: $off-white;
    border-radius: 32px;
    justify-content: space-between;
    & > svg {
      pointer-events: none;
    }

    &.active {
      background: none;
      border: 3px solid $orange-primary-light;

      &:hover > .dropdown-selected-option__text {
        color: $gray-sub-text;
      }

      & > .dropdown-selected-option__text {
        color: $black;
      }
    }

    &:hover {
      background: transparent;
      border-radius: $radius-xl;
      color: $gray-sub-text;
    }

    &__text {
      color: $orange-primary-light;
      &:hover {
        color: $orange-primary-light;
      }
    }
  }

  .options-wrapper {
    max-height: 289px;
    overflow-y: auto;
    margin-right: 20px;
    padding-right: 10px;
    box-shadow: $hard-drop-shadow;

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
    transition: background 0.2s linear, color 0.2s linear;
    border-radius: $radius-s;
    display: flex;
    gap: 13px;
    align-items: center;

    &:last-child:hover {
      border-radius: 30px;
    }

    &:hover {
      background: $off-white;
    }

    &:active {
      background: $orange-primary-light;
      color: $white;
    }
  }
}

dropdown-selected-option active


// .dropdown-wrapper.active {
//   border: 3px solid $orange-primary-light;
// }

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
