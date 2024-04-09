<script setup>
const props = defineProps({
  classPos: {
    type: String,
  },
  type: {
    type: String,
    require: true,
    validator: function (value) {
      return [
        "white-square",
        "white-loader",
        "orange-loader",
        "done",
        "facebook",
        "instagram",
        "telegram",
        "twitter",
        "sad-smile",
        "sorrow-smile",
        "gloom-smile",
        "smile",
        "happy-smile",
        "cloud-drizzle",
        "cloud-lightning",
        "cloud-off",
        "cloud-rain",
        "cloud-snow",
        "cloud",
        "droplet",
        "medic",
        "moon",
        "sun",
        "sunrise",
        "sunset",
        "thermometer",
        "umbrella",
        "wind",
        "zap",
        "activity",
        "anchor",
        "at-sign",
        "award",
        "bold",
        "briefcase",
        "circle",
        "codepen",
        "command",
        "compass",
        "flag",
        "hash",
        "heart",
        "italic",
        "life-buoy",
        "octagon",
        "percent",
        "pocket",
        "shield",
        "slack",
        "slash",
        "square",
        "star",
        "student",
        "target",
        "text-star",
        "time-icon",
        "triangle",
        "type",
        "underline",
        "airplay",
        "aperture",
        "bar-chart-2",
        "bar-chart",
        "battery-charging",
        "battery",
        "bluetooth",
        "cast",
        "chrome",
        "cpu",
        "credit-card",
        "disc",
        "feather",
        "film",
        "github",
        "gitlab",
        "grid",
        "layout",
        "mic-off",
        "mic",
        "monitor",
        "music",
        "printer",
        "radio",
        "save",
        "server",
        "sidebar",
        "smartphone",
        "speaker",
        "tablet",
        "tv",
        "video",
        "voicemail",
        "volume-1",
        "volume-2",
        "volume-x",
        "volume",
        "watch",
        "wifi-off",
        "wifi",
        "copy",
        "crosshair",
        "delete",
        "download-cloud",
        "download",
        "edit-2",
        "edit-3",
        "edit",
        "inbox",
        "layers",
        "link-2",
        "link",
        "log-in",
        "log-out",
        "map-pin",
        "map",
        "minus-circle",
        "minus-square",
        "minus",
        "more-horizontal",
        "more-vertical",
        "paperclip",
        "plus-circle",
        "plus-square",
        "plus",
        "share",
        "upload-cloud",
        "upload",
        "user-check",
        "user-minus",
        "user-plus",
        "user-x",
        "user",
        "users",
        "users",
        "video-off",
        "x-square",
        "x",
        "alert-circle",
        "alert-octagon",
        "alert-triangle",
        "book",
        "bookmark",
        "box",
        "calendar",
        "clipboard",
        "clock",
        "fast-forward",
        "file-minus",
        "file-plus",
        "file-text",
        "file",
        "filter",
        "folder",
        "globe",
        "headphones",
        "help-circle",
        "hide-password",
        "image",
        "info",
        "lock",
        "package",
        "pause",
        "play-circle",
        "play",
        "search",
        "show-password",
        "skip-back",
        "skip-forward",
        "unlock",
        "zoom-in",
        "zoom-out",
        "arrow-down-left",
        "arrow-down-right",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "arrow-up-left",
        "arrow-up-right",
        "arrow-up",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "chevron-up",
        "chevrons-down",
        "chevrons-left",
        "chevrons-right",
        "chevrons-up",
        "corner-down-left",
        "corner-down-right",
        "corner-left-down",
        "corner-left-up",
        "corner-right-up",
        "corner-right-down",
        "corner-up-left",
        "corner-up-right",
        "maximize-2",
        "maximize",
        "minimize-2",
        "power",
        "minimize",
        "move",
        "navigation-2",
        "navigation",
        "pie-chart",
        "refresh-ccw",
        "refresh-cw",
        "rotate-ccw",
        "rotate-cw",
        "shuffle",
        "trending-down",
        "trending-up",
        "align-center",
        "align-justify",
        "align-left",
        "align-right",
        "bell-off",
        "bell",
        "check-circle",
        "check-square",
        "check",
        "crop",
        "home",
        "list",
        "loader",
        "mail",
        "menu",
        "message-circle",
        "message-square",
        "phone-call",
        "phone-forwarded",
        "phone-incoming",
        "phone-missed",
        "phone-off",
        "phone-outgoing",
        "phone",
        "scissors",
        "send",
        "settings",
        "share-2",
        "shopping-cart",
        "sliders",
        "tag",
        "thumbs-down",
        "thumbs-up",
        "toggle-left",
        "toggle-right",
        "trash-2",
        "trash",
        "repeat",
        "camera",
        "camera-off",
        "external-link",
        "x-circle",
        "rewind",
        "pause-circle",
        "stop-circle",
        "x-circle-success",
        "x-circle-error",
        "search-gray",
      ].includes(value);
    },
  },
});

const { type } = props;
</script>

<template>
  <svg
    v-if="type === 'search-gray'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
      stroke="#A6A6A6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.9998 21L15.7998 15.8"
      stroke="#A6A6A6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'x-circle-error'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FA3C6A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9L9 15"
      stroke="#FA3C6A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 9L15 15"
      stroke="#FA3C6A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'x-circle-success'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#0CB08A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9L9 15"
      stroke="#0CB08A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 9L15 15"
      stroke="#0CB08A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'corner-right-down'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 15L15 20L20 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 4H11C13.2091 4 15 5.79086 15 8V20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'stop-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 9H15V15H9V9Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'pause-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 15V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 15V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'rewind'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 19L2 12L11 5V19V19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 19L13 12L22 5V19V19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'x-circle'"
    id="my-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9L9 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 9L15 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'external-link'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 3H21V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14L21 3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'camera'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23 19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V8C1 6.89543 1.89543 6 3 6H7L9 3H15L17 6H21C22.1046 6 23 6.89543 23 8V19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'camera-off'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L23 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 22C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20V22ZM1 19H0H1ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5V7ZM9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4V2ZM15 3L15.8321 2.4453C15.6466 2.1671 15.3344 2 15 2V3ZM17 6L16.1679 6.5547C16.3534 6.8329 16.6656 7 17 7V6ZM22 17.34C22 17.8923 22.4477 18.34 23 18.34C23.5523 18.34 24 17.8923 24 17.34H22ZM16.1053 15.8447C16.4172 15.3889 16.3005 14.7666 15.8447 14.4547C15.3889 14.1428 14.7666 14.2595 14.4547 14.7153L16.1053 15.8447ZM11.1841 16.9414L10.9854 17.9215L11.1841 16.9414ZM8.0586 13.8159L7.07854 14.0146L8.0586 13.8159ZM10.2847 10.5453C10.7405 10.2334 10.8572 9.61108 10.5453 9.15529C10.2334 8.69949 9.61108 8.58283 9.15529 8.89471L10.2847 10.5453ZM21 20H3V22H21V20ZM3 20C2.44772 20 2 19.5523 2 19H0C0 20.6569 1.34315 22 3 22V20ZM2 19V8H0V19H2ZM2 8C2 7.44772 2.44772 7 3 7V5C1.34315 5 0 6.34315 0 8H2ZM3 7H6V5H3V7ZM9 4H15V2H9V4ZM14.1679 3.5547L16.1679 6.5547L17.8321 5.4453L15.8321 2.4453L14.1679 3.5547ZM17 7H21V5H17V7ZM21 7C21.5523 7 22 7.44772 22 8H24C24 6.34315 22.6569 5 21 5V7ZM22 8V17.34H24V8H22ZM14.4547 14.7153C13.774 15.7101 12.5641 16.2008 11.3828 15.9613L10.9854 17.9215C12.9542 18.3206 14.9708 17.5027 16.1053 15.8447L14.4547 14.7153ZM11.3828 15.9613C10.2014 15.7218 9.27816 14.7986 9.03866 13.6172L7.07854 14.0146C7.47771 15.9835 9.01649 17.5223 10.9854 17.9215L11.3828 15.9613ZM9.03866 13.6172C8.79916 12.4359 9.28994 11.226 10.2847 10.5453L9.15529 8.89471C7.49734 10.0292 6.67937 12.0458 7.07854 14.0146L9.03866 13.6172Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'trash'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6H5H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 6C20 5.44772 19.5523 5 19 5C18.4477 5 18 5.44772 18 6H20ZM6 6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6H6ZM7 6C7 6.55228 7.44772 7 8 7C8.55228 7 9 6.55228 9 6H7ZM15 6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6H15ZM18 6V20H20V6H18ZM18 20C18 20.5523 17.5523 21 17 21V23C18.6569 23 20 21.6569 20 20H18ZM17 21H7V23H17V21ZM7 21C6.44772 21 6 20.5523 6 20H4C4 21.6569 5.34315 23 7 23V21ZM6 20V6H4V20H6ZM9 6V4H7V6H9ZM9 4C9 3.44772 9.44772 3 10 3V1C8.34315 1 7 2.34315 7 4H9ZM10 3H14V1H10V3ZM14 3C14.5523 3 15 3.44772 15 4H17C17 2.34315 15.6569 1 14 1V3ZM15 4V6H17V4H15Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'trash-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6H5H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 6C20 5.44772 19.5523 5 19 5C18.4477 5 18 5.44772 18 6H20ZM6 6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6H6ZM7 6C7 6.55228 7.44772 7 8 7C8.55228 7 9 6.55228 9 6H7ZM15 6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6H15ZM18 6V20H20V6H18ZM18 20C18 20.5523 17.5523 21 17 21V23C18.6569 23 20 21.6569 20 20H18ZM17 21H7V23H17V21ZM7 21C6.44772 21 6 20.5523 6 20H4C4 21.6569 5.34315 23 7 23V21ZM6 20V6H4V20H6ZM9 6V4H7V6H9ZM9 4C9 3.44772 9.44772 3 10 3V1C8.34315 1 7 2.34315 7 4H9ZM10 3H14V1H10V3ZM14 3C14.5523 3 15 3.44772 15 4H17C17 2.34315 15.6569 1 14 1V3ZM15 4V6H17V4H15Z"
      fill="#FF7C1E"
    />
    <path
      d="M10 11V17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 11V17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'toggle-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 12C1 8.13401 4.13401 5 8 5H16C19.866 5 23 8.13401 23 12V12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12V12Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'toggle-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 12C1 8.13401 4.13401 5 8 5H16C19.866 5 23 8.13401 23 12V12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12V12Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 15C9.65685 15 11 13.6569 11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'thumbs-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 9H13C13 9.55228 13.4477 10 14 10V9ZM11 2V1C10.6048 1 10.2467 1.23273 10.0862 1.59386L11 2ZM7 11L6.08619 10.5939C6.02936 10.7217 6 10.8601 6 11H7ZM7 22H6C6 22.5523 6.44772 23 7 23V22ZM18.28 22L18.2913 21H18.28V22ZM20.28 20.3L19.2916 20.1484L19.2913 20.1501L20.28 20.3ZM21.66 11.3L22.6484 11.4516L22.6487 11.4501L21.66 11.3ZM21.1919 9.68751L21.9465 9.03134V9.03134L21.1919 9.68751ZM19.66 9V10.0001L19.6713 9.99994L19.66 9ZM7 22V23C7.55228 23 8 22.5523 8 22H7ZM7 11H8C8 10.4477 7.55228 10 7 10V11ZM15 9V5H13V9H15ZM15 5C15 2.79086 13.2091 1 11 1V3C12.1046 3 13 3.89543 13 5H15ZM10.0862 1.59386L6.08619 10.5939L7.91381 11.4061L11.9138 2.40614L10.0862 1.59386ZM6 11V22H8V11H6ZM7 23H18.28V21H7V23ZM18.2687 22.9999C19.7646 23.0168 21.0444 21.929 21.2687 20.4499L19.2913 20.1501C19.2165 20.6431 18.7899 21.0057 18.2913 21.0001L18.2687 22.9999ZM21.2684 20.4516L22.6484 11.4516L20.6716 11.1484L19.2916 20.1484L21.2684 20.4516ZM22.6487 11.4501C22.7808 10.5798 22.524 9.69553 21.9465 9.03134L20.4373 10.3437C20.6298 10.5651 20.7154 10.8599 20.6713 11.1499L22.6487 11.4501ZM21.9465 9.03134C21.3689 8.36714 20.5288 7.9901 19.6487 8.00006L19.6713 9.99994C19.9647 9.99661 20.2447 10.1223 20.4373 10.3437L21.9465 9.03134ZM19.66 8H14V10H19.66V8ZM7 21H4V23H7V21ZM4 21C3.44772 21 3 20.5523 3 20H1C1 21.6569 2.34315 23 4 23V21ZM3 20V13H1V20H3ZM3 13C3 12.4477 3.44772 12 4 12V10C2.34315 10 1 11.3431 1 13H3ZM4 12H7V10H4V12ZM6 11V22H8V11H6Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'thumbs-down'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99998 15H11C11 14.4477 10.5523 14 9.99998 14V15ZM13 22V23C13.3952 23 13.7533 22.7673 13.9138 22.4061L13 22ZM17 13L17.9138 13.4061C17.9706 13.2783 18 13.1399 18 13H17ZM17 2H18C18 1.44772 17.5523 1 17 1V2ZM5.71998 2L5.70868 3H5.71998V2ZM3.71998 3.7L4.70843 3.85156L4.70868 3.84994L3.71998 3.7ZM2.33998 12.7L1.35153 12.5484L1.35131 12.5499L2.33998 12.7ZM2.80813 14.3125L2.05352 14.9687H2.05352L2.80813 14.3125ZM4.33998 15V13.9999L4.32866 14.0001L4.33998 15ZM17 2V1C16.4477 1 16 1.44772 16 2H17ZM19.67 2V3C19.6759 3 19.6818 2.99995 19.6877 2.99984L19.67 2ZM22 4H23C23 3.95517 22.997 3.91039 22.991 3.86596L22 4ZM22 11L22.991 11.134C22.997 11.0896 23 11.0448 23 11H22ZM19.67 13L19.6877 12.0002C19.6818 12.0001 19.6759 12 19.67 12L19.67 13ZM17 13H16C16 13.5523 16.4477 14 17 14V13ZM8.99998 15V19H11V15H8.99998ZM8.99998 19C8.99998 21.2091 10.7908 23 13 23V21C11.8954 21 11 20.1046 11 19H8.99998ZM13.9138 22.4061L17.9138 13.4061L16.0862 12.5939L12.0862 21.5939L13.9138 22.4061ZM18 13V2H16V13H18ZM17 1H5.71998V3H17V1ZM5.73129 1.00006C4.23536 0.983153 2.9556 2.07095 2.73129 3.55006L4.70868 3.84994C4.78345 3.3569 5.21004 2.9943 5.70868 2.99994L5.73129 1.00006ZM2.73154 3.54844L1.35154 12.5484L3.32843 12.8516L4.70843 3.85156L2.73154 3.54844ZM1.35131 12.5499C1.21922 13.4202 1.47596 14.3045 2.05352 14.9687L3.56273 13.6563C3.37021 13.4349 3.28463 13.1401 3.32866 12.8501L1.35131 12.5499ZM2.05352 14.9687C2.63108 15.6329 3.47118 16.0099 4.35131 15.9999L4.32866 14.0001C4.03528 14.0034 3.75525 13.8777 3.56273 13.6563L2.05352 14.9687ZM4.33998 16H9.99998V14H4.33998V16ZM17 3H19.67V1H17V3ZM19.6877 2.99984C20.352 2.98809 20.9199 3.47558 21.009 4.13404L22.991 3.86596C22.7659 2.20222 21.3309 0.97047 19.6523 1.00016L19.6877 2.99984ZM21 4V11H23V4H21ZM21.009 10.866C20.9199 11.5244 20.352 12.0119 19.6877 12.0002L19.6523 13.9998C21.3309 14.0295 22.7659 12.7978 22.991 11.134L21.009 10.866ZM19.67 12H17V14H19.67V12ZM18 13V2H16V13H18Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'tag'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.59 13.41L13.42 20.58C13.0449 20.9556 12.5358 21.1666 12.005 21.1666C11.4742 21.1666 10.9651 20.9556 10.59 20.58L2 12V2H12L20.59 10.59C21.3654 11.3701 21.3654 12.6299 20.59 13.41Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="8.5" cy="8.5" r="1.5" fill="#FF7C1E" />
  </svg>

  <svg
    v-if="type === 'sliders'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 21V14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 10V3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 21V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 21V16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 12V3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 14H7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 8H15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 16H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'shopping-cart'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 23C9.10457 23 10 22.1046 10 21C10 19.8954 9.10457 19 8 19C6.89543 19 6 19.8954 6 21C6 22.1046 6.89543 23 8 23Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 23C21.1046 23 22 22.1046 22 21C22 19.8954 21.1046 19 20 19C18.8954 19 18 19.8954 18 21C18 22.1046 18.8954 23 20 23Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.67 6H23L21.32 14.39C21.1313 15.3402 20.2886 16.0186 19.32 16H8.75C7.73948 16.0086 6.88134 15.262 6.75 14.26L5.23 2.74C5.09962 1.7456 4.25291 1.00152 3.25 1H1"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'share-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.59003 13.51L15.42 17.49"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.41 6.51001L8.59003 10.49"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'settings'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23582 20.3766 5.705 20.3766C5.17418 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95235 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87235 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23582 3.62343 5.705C3.62343 5.17418 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09418 3.70343 5.625 3.70343C6.15582 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95235 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87235 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'send'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 12L2 20L3.7647 12L2 4L22 12Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 12H4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'scissors'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 4L8.12 15.88"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.47 14.48L20 20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.12 8.12L12 12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'phone'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.9999 16.92V19.92C21.0022 20.4831 20.767 21.0211 20.352 21.4018C19.937 21.7825 19.3808 21.9707 18.8199 21.92C15.7428 21.5856 12.7869 20.5341 10.1899 18.85C7.77377 17.3146 5.72528 15.2661 4.18994 12.85C2.49992 10.2412 1.44818 7.27097 1.11994 4.17998C1.06941 3.62085 1.25621 3.06623 1.63471 2.6516C2.0132 2.23697 2.54853 2.0005 3.10994 1.99998H6.10994C7.1138 1.9901 7.96944 2.72594 8.10994 3.71998C8.23656 4.68004 8.47139 5.6227 8.80994 6.52998C9.08468 7.26085 8.90896 8.08478 8.35994 8.63998L7.08994 9.90998C8.5135 12.4135 10.5864 14.4864 13.0899 15.91L14.3599 14.64C14.9151 14.091 15.7391 13.9152 16.4699 14.19C17.3772 14.5285 18.3199 14.7634 19.2799 14.89C20.2855 15.0318 21.0251 15.9048 20.9999 16.92Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'phone-outgoing'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 8V2H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9L22 2"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.9999 17.92V20.92C21.0022 21.4831 20.767 22.0211 20.352 22.4018C19.937 22.7825 19.3808 22.9707 18.8199 22.92C15.7428 22.5856 12.7869 21.5341 10.1899 19.85C7.77377 18.3146 5.72528 16.2661 4.18994 13.85C2.49992 11.2412 1.44818 8.27097 1.11994 5.17998C1.06941 4.62085 1.25621 4.06623 1.63471 3.6516C2.0132 3.23697 2.54853 3.0005 3.10994 2.99998H6.10994C7.1138 2.9901 7.96944 3.72594 8.10994 4.71998C8.23656 5.68004 8.47139 6.6227 8.80994 7.52998C9.08468 8.26085 8.90896 9.08478 8.35994 9.63998L7.08994 10.91C8.5135 13.4135 10.5864 15.4864 13.0899 16.91L14.3599 15.64C14.9151 15.091 15.7391 14.9152 16.4699 15.19C17.3772 15.5285 18.3199 15.7634 19.2799 15.89C20.2855 16.0318 21.0251 16.9048 20.9999 17.92Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'phone-off'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3874 12.6032C10.997 12.2125 10.3638 12.2122 9.97314 12.6026C9.58245 12.9929 9.58217 13.6261 9.97252 14.0168L11.3874 12.6032ZM14.0899 15.91L13.5956 16.7793C13.987 17.0018 14.4787 16.9354 14.797 16.6171L14.0899 15.91ZM15.3599 14.64L14.6568 13.9289L14.6528 13.9329L15.3599 14.64ZM17.4699 14.19L17.1181 15.126L17.1203 15.1269L17.4699 14.19ZM20.2799 14.89L20.4199 13.8998L20.4107 13.8986L20.2799 14.89ZM21.9999 16.89L20.9999 16.8801V16.89H21.9999ZM21.9999 19.89H20.9999L20.9999 19.894L21.9999 19.89ZM21.352 21.3718L20.676 20.635L21.352 21.3718ZM19.8199 21.89L19.7119 22.8841C19.7179 22.8848 19.7239 22.8854 19.7299 22.8859L19.8199 21.89ZM11.1899 18.82L11.7341 17.9809L11.726 17.9758L11.1899 18.82ZM8.56744 15.4433C8.17713 15.0525 7.54397 15.0522 7.15323 15.4425C6.76249 15.8328 6.76213 16.4659 7.15244 16.8567L8.56744 15.4433ZM4.35092 13.3541C4.65142 13.8175 5.27066 13.9495 5.73404 13.649C6.19742 13.3485 6.32946 12.7293 6.02896 12.2659L4.35092 13.3541ZM2.11994 4.17998L1.124 4.26998C1.12454 4.27599 1.12514 4.282 1.12579 4.288L2.11994 4.17998ZM2.63471 2.6516L3.37326 3.32579V3.32579L2.63471 2.6516ZM4.10994 1.99998V0.999976L4.109 0.999977L4.10994 1.99998ZM7.10994 1.99998V3.00002L7.11978 2.99993L7.10994 1.99998ZM9.10994 3.71998L10.1014 3.58921L10.1001 3.58002L9.10994 3.71998ZM9.80994 6.52998L8.87304 6.87958L8.87389 6.88184L9.80994 6.52998ZM9.35994 8.63998L10.0671 9.34709L10.071 9.34311L9.35994 8.63998ZM7.38283 9.20287C6.99231 9.59339 6.99231 10.2266 7.38283 10.6171C7.77336 11.0076 8.40652 11.0076 8.79705 10.6171L7.38283 9.20287ZM9.97252 14.0168C11.0508 15.096 12.2695 16.0252 13.5956 16.7793L14.5842 15.0407C13.4141 14.3753 12.3388 13.5554 11.3874 12.6032L9.97252 14.0168ZM14.797 16.6171L16.067 15.3471L14.6528 13.9329L13.3828 15.2029L14.797 16.6171ZM16.0631 15.351C16.3407 15.0765 16.7526 14.9887 17.1181 15.126L17.8218 13.2539C16.7255 12.8418 15.4896 13.1054 14.6568 13.9289L16.0631 15.351ZM17.1203 15.1269C18.0983 15.4918 19.1143 15.7449 20.1492 15.8814L20.4107 13.8986C19.5254 13.7818 18.6562 13.5653 17.8195 13.2531L17.1203 15.1269ZM20.14 15.8801C20.637 15.9504 21.0049 16.3782 21 16.8801L22.9999 16.8998C23.0147 15.394 21.9109 14.1106 20.4199 13.8998L20.14 15.8801ZM20.9999 16.89V19.89H22.9999V16.89H20.9999ZM20.9999 19.894C21.0011 20.1756 20.8835 20.4446 20.676 20.635L22.028 22.1087C22.6505 21.5377 23.0034 20.7306 22.9999 19.8859L20.9999 19.894ZM20.676 20.635C20.4685 20.8253 20.1904 20.9194 19.9099 20.894L19.7299 22.8859C20.5712 22.9619 21.4056 22.6798 22.028 22.1087L20.676 20.635ZM19.928 20.8958C17.0063 20.5784 14.1998 19.58 11.734 17.981L10.6458 19.659C13.3741 21.4282 16.4793 22.5329 19.7119 22.8841L19.928 20.8958ZM11.726 17.9758C10.5833 17.2502 9.52403 16.4009 8.56744 15.4433L7.15244 16.8567C8.2129 17.9183 9.38715 18.8598 10.6539 19.6642L11.726 17.9758ZM6.02896 12.2659C4.42992 9.8001 3.43155 6.99363 3.11409 4.07195L1.12579 4.288C1.47705 7.52066 2.58168 10.6259 4.35092 13.3541L6.02896 12.2659ZM3.11588 4.08998C3.09062 3.81041 3.18402 3.5331 3.37326 3.32579L1.89615 1.97741C1.32841 2.59936 1.04821 3.43129 1.124 4.26998L3.11588 4.08998ZM3.37326 3.32579C3.56251 3.11847 3.83018 3.00024 4.11088 2.99998L4.109 0.999977C3.26689 1.00077 2.46389 1.35546 1.89615 1.97741L3.37326 3.32579ZM4.10994 2.99998H7.10994V0.999976H4.10994V2.99998ZM7.11978 2.99993C7.62171 2.99499 8.04953 3.36291 8.11978 3.85993L10.1001 3.58002C9.88935 2.08898 8.60589 0.985204 7.1001 1.00002L7.11978 2.99993ZM8.11853 3.85073C8.25501 4.88557 8.50813 5.90165 8.87304 6.87958L10.7468 6.18037C10.4347 5.34376 10.2181 4.47451 10.1014 3.58922L8.11853 3.85073ZM8.87389 6.88184C9.01126 7.24727 8.9234 7.65924 8.64889 7.93684L10.071 9.34311C10.8945 8.51032 11.1581 7.27443 10.746 6.17812L8.87389 6.88184ZM8.65283 7.93287L7.38283 9.20287L8.79705 10.6171L10.067 9.34708L8.65283 7.93287Z"
      fill="#FF7C1E"
    />
    <path
      d="M23 1L1 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'phone-missed'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 2L16 8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 2L22 8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.9999 17.92V20.92C21.0022 21.4831 20.767 22.0211 20.352 22.4018C19.937 22.7825 19.3808 22.9707 18.8199 22.92C15.7428 22.5856 12.7869 21.5341 10.1899 19.85C7.77377 18.3146 5.72528 16.2661 4.18994 13.85C2.49992 11.2412 1.44818 8.27097 1.11994 5.17998C1.06941 4.62085 1.25621 4.06623 1.63471 3.6516C2.0132 3.23697 2.54853 3.0005 3.10994 2.99998H6.10994C7.1138 2.9901 7.96944 3.72594 8.10994 4.71998C8.23656 5.68004 8.47139 6.6227 8.80994 7.52998C9.08468 8.26085 8.90896 9.08478 8.35994 9.63998L7.08994 10.91C8.5135 13.4135 10.5864 15.4864 13.0899 16.91L14.3599 15.64C14.9151 15.091 15.7391 14.9152 16.4699 15.19C17.3772 15.5285 18.3199 15.7634 19.2799 15.89C20.2855 16.0318 21.0251 16.9048 20.9999 17.92Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'phone-incoming'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 3V9H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 2L15 9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.9999 17.92V20.92C21.0022 21.4831 20.767 22.0211 20.352 22.4018C19.937 22.7825 19.3808 22.9707 18.8199 22.92C15.7428 22.5856 12.7869 21.5341 10.1899 19.85C7.77377 18.3146 5.72528 16.2661 4.18994 13.85C2.49992 11.2412 1.44818 8.27097 1.11994 5.17998C1.06941 4.62085 1.25621 4.06623 1.63471 3.6516C2.0132 3.23697 2.54853 3.0005 3.10994 2.99998H6.10994C7.1138 2.9901 7.96944 3.72594 8.10994 4.71998C8.23656 5.68004 8.47139 6.6227 8.80994 7.52998C9.08468 8.26085 8.90896 9.08478 8.35994 9.63998L7.08994 10.91C8.5135 13.4135 10.5864 15.4864 13.0899 16.91L14.3599 15.64C14.9151 15.091 15.7391 14.9152 16.4699 15.19C17.3772 15.5285 18.3199 15.7634 19.2799 15.89C20.2855 16.0318 21.0251 16.9048 20.9999 17.92Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'phone-forwarded'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2L22 6L18 10"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 6H22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.9999 17.92V20.92C21.0022 21.4831 20.767 22.0211 20.352 22.4018C19.937 22.7825 19.3808 22.9707 18.8199 22.92C15.7428 22.5856 12.7869 21.5341 10.1899 19.85C7.77377 18.3146 5.72528 16.2661 4.18994 13.85C2.49992 11.2412 1.44818 8.27097 1.11994 5.17998C1.06941 4.62085 1.25621 4.06623 1.63471 3.6516C2.0132 3.23697 2.54853 3.0005 3.10994 2.99998H6.10994C7.1138 2.9901 7.96944 3.72594 8.10994 4.71998C8.23656 5.68004 8.47139 6.6227 8.80994 7.52998C9.08468 8.26085 8.90896 9.08478 8.35994 9.63998L7.08994 10.91C8.5135 13.4135 10.5864 15.4864 13.0899 16.91L14.3599 15.64C14.9151 15.091 15.7391 14.9152 16.4699 15.19C17.3772 15.5285 18.3199 15.7634 19.2799 15.89C20.2855 16.0318 21.0251 16.9048 20.9999 17.92Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'phone-call'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.0499 6L14.2414 5.01851C13.8098 4.93429 13.3738 5.14198 13.1672 5.53022C12.9605 5.91847 13.0319 6.39612 13.3428 6.70711L14.0499 6ZM17.9999 9.95L17.2928 10.6571C17.6038 10.9681 18.0815 11.0394 18.4697 10.8328C18.858 10.6262 19.0657 10.1902 18.9814 9.75851L17.9999 9.95ZM14.0499 2L14.1604 1.00611C13.7381 0.959211 13.3324 1.18417 13.1485 1.5671C12.9646 1.95004 13.0427 2.40736 13.3433 2.70755L14.0499 2ZM21.9999 9.94L21.2933 10.6476C21.5938 10.9477 22.0513 11.0253 22.434 10.8409C22.8167 10.6565 23.0411 10.2505 22.9937 9.82834L21.9999 9.94ZM20.9999 17.92L20.0002 17.8952C20 17.9035 19.9999 17.9117 19.9999 17.92H20.9999ZM20.9999 20.92H19.9999L19.9999 20.9241L20.9999 20.92ZM18.8199 22.92L18.7119 23.9142C18.7179 23.9148 18.7239 23.9154 18.7299 23.9159L18.8199 22.92ZM10.1899 19.85L10.7341 19.0109L10.7263 19.006L10.1899 19.85ZM4.18994 13.85L5.03399 13.3137L5.02922 13.3063L4.18994 13.85ZM1.11994 5.18L0.123998 5.27C0.124469 5.2752 0.12498 5.2804 0.125531 5.2856L1.11994 5.18ZM1.63471 3.65162L2.37326 4.32581L1.63471 3.65162ZM3.10994 3V2L3.109 2L3.10994 3ZM6.10994 3V4.00005L6.11978 3.99995L6.10994 3ZM8.10994 4.72L9.1014 4.58924L9.1001 4.58005L8.10994 4.72ZM8.80994 7.53L7.87304 7.87961L7.87389 7.88186L8.80994 7.53ZM8.35994 9.64L9.06706 10.3471L9.07099 10.3431L8.35994 9.64ZM7.08994 10.91L6.38283 10.2029C6.06452 10.5212 5.99813 11.013 6.22065 11.4043L7.08994 10.91ZM13.0899 16.91L12.5956 17.7793C12.987 18.0018 13.4787 17.9354 13.797 17.6171L13.0899 16.91ZM14.3599 15.64L13.6568 14.9289L13.6528 14.9329L14.3599 15.64ZM16.4699 15.19L16.1181 16.1261L16.1203 16.1269L16.4699 15.19ZM19.2799 15.89L19.4196 14.8998L19.4107 14.8986L19.2799 15.89ZM13.8584 6.98149C15.4568 7.29335 16.7066 8.5431 17.0184 10.1415L18.9814 9.75851C18.5137 7.36092 16.639 5.48629 14.2414 5.01851L13.8584 6.98149ZM18.707 9.24289L14.757 5.29289L13.3428 6.70711L17.2928 10.6571L18.707 9.24289ZM13.9395 2.99389C17.6547 3.40661 20.5888 6.33703 21.0062 10.0517L22.9937 9.82834C22.4719 5.18505 18.8043 1.52202 14.1604 1.00611L13.9395 2.99389ZM22.7066 9.23245L14.7566 1.29245L13.3433 2.70755L21.2933 10.6476L22.7066 9.23245ZM19.9999 17.92V20.92H21.9999V17.92H19.9999ZM19.9999 20.9241C20.0011 21.2056 19.8835 21.4746 19.676 21.665L21.028 23.1387C21.6505 22.5677 22.0034 21.7607 21.9999 20.9159L19.9999 20.9241ZM19.676 21.665C19.4685 21.8553 19.1904 21.9494 18.9099 21.9241L18.7299 23.9159C19.5712 23.992 20.4056 23.7098 21.028 23.1387L19.676 21.665ZM18.928 21.9259C16.0063 21.6084 13.1998 20.61 10.734 19.011L9.64584 20.689C12.3741 22.4583 15.4793 23.5629 18.7119 23.9142L18.928 21.9259ZM10.7263 19.006C8.434 17.5494 6.49055 15.6059 5.03395 13.3137L3.34593 14.3863C4.96 16.9264 7.11354 19.0799 9.65362 20.694L10.7263 19.006ZM5.02922 13.3063C3.4246 10.8293 2.42601 8.00921 2.11435 5.0744L0.125531 5.2856C0.470361 8.53278 1.57524 11.6531 3.35066 14.3937L5.02922 13.3063ZM2.11588 5.09C2.09062 4.81044 2.18402 4.53313 2.37326 4.32581L0.896147 2.97743C0.328406 3.59938 0.0482084 4.43131 0.123998 5.27L2.11588 5.09ZM2.37326 4.32581C2.56251 4.11849 2.83018 4.00026 3.11088 4L3.109 2C2.26689 2.00079 1.46389 2.35548 0.896147 2.97743L2.37326 4.32581ZM3.10994 4H6.10994V2H3.10994V4ZM6.11978 3.99995C6.62171 3.99501 7.04953 4.36294 7.11978 4.85995L9.1001 4.58005C8.88935 3.089 7.60589 1.98523 6.1001 2.00005L6.11978 3.99995ZM7.11853 4.85076C7.25501 5.8856 7.50813 6.90167 7.87304 7.8796L9.74684 7.1804C9.43465 6.34378 9.21812 5.47454 9.10135 4.58924L7.11853 4.85076ZM7.87389 7.88186C8.01126 8.2473 7.9234 8.65926 7.64889 8.93686L9.07099 10.3431C9.89452 9.51035 10.1581 8.27445 9.74599 7.17814L7.87389 7.88186ZM7.65283 8.93289L6.38283 10.2029L7.79705 11.6171L9.06705 10.3471L7.65283 8.93289ZM6.22065 11.4043C7.73317 14.0643 9.93563 16.2668 12.5956 17.7793L13.5842 16.0407C11.2372 14.7061 9.29382 12.7628 7.95923 10.4157L6.22065 11.4043ZM13.797 17.6171L15.067 16.3471L13.6528 14.9329L12.3828 16.2029L13.797 17.6171ZM15.0631 16.3511C15.3407 16.0765 15.7526 15.9887 16.1181 16.1261L16.8218 14.2539C15.7255 13.8418 14.4896 14.1054 13.6568 14.9289L15.0631 16.3511ZM16.1203 16.1269C17.0983 16.4918 18.1143 16.7449 19.1492 16.8814L19.4107 14.8986C18.5254 14.7818 17.6562 14.5653 16.8195 14.2531L16.1203 16.1269ZM19.1402 16.8802C19.643 16.9511 20.0128 17.3876 20.0002 17.8952L21.9996 17.9448C22.0374 16.422 20.928 15.1126 19.4196 14.8998L19.1402 16.8802Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'message-square'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 15C21 16.1046 20.1046 17 19 17H7L3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'message-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C18.661 18.1794 15.7189 19.9988 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00125 8.28112 5.82067 5.33907 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C17.3158 3.23813 20.7619 6.68422 21 11V11.5V11.5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'menu'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'mail'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'loader'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2V6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18V22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.92999 4.92999L7.75999 7.75999"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.24 16.24L19.07 19.07"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 12H6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 12H22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.92999 19.07L7.75999 16.24"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.24 7.75999L19.07 4.92999"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'list'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 6H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 18H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 6H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 12H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 18H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'home'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 9L12 2L21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 22V12H15V22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'crop'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.13 1L6 16C6 17.1046 6.89543 18 8 18H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 6.13L16 6C17.1046 6 18 6.89543 18 8V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'check'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 7L9 18L4 13"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'check-square'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 11L11 14L22 3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 12V19C20 20.1046 19.1046 21 18 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'check-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12.07V13C20.9975 17.4287 18.0823 21.3282 13.8353 22.5839C9.58841 23.8396 5.02139 22.1523 2.61095 18.4371C0.200512 14.7218 0.520859 9.86365 3.39827 6.49708C6.27568 3.13051 11.0247 2.05753 15.07 3.86001"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 4L11 15L8 12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'bell'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 18C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16V18ZM2 16C1.44772 16 1 16.4477 1 17C1 17.5523 1.44772 18 2 18V16ZM13.73 21L14.595 21.5018C14.7744 21.1924 14.775 20.8108 14.5965 20.5009C14.418 20.191 14.0876 20 13.73 20V21ZM10.27 21V20C9.91237 20 9.58196 20.191 9.40346 20.5009C9.22497 20.8108 9.22555 21.1924 9.405 21.5018L10.27 21ZM22 16H2V18H22V16ZM2 18C4.20914 18 6 16.2091 6 14H4C4 15.1046 3.10457 16 2 16V18ZM6 14V9H4V14H6ZM6 9C6 5.68629 8.68629 3 12 3V1C7.58172 1 4 4.58172 4 9H6ZM12 3C15.3137 3 18 5.68629 18 9H20C20 4.58172 16.4183 1 12 1V3ZM18 9V14H20V9H18ZM18 14C18 16.2091 19.7909 18 22 18V16C20.8954 16 20 15.1046 20 14H18ZM12.865 20.4982C12.6861 20.8066 12.3565 20.9965 12 20.9965V22.9965C13.0696 22.9965 14.0583 22.427 14.595 21.5018L12.865 20.4982ZM12 20.9965C11.6435 20.9965 11.3139 20.8066 11.135 20.4982L9.405 21.5018C9.9417 22.427 10.9304 22.9965 12 22.9965V20.9965ZM10.27 22H13.73V20H10.27V22Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'bell-off'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.06857 2.02906C7.58758 2.30047 7.41767 2.91041 7.68908 3.3914C7.96049 3.8724 8.57043 4.0423 9.05143 3.77089L8.06857 2.02906ZM19 8.99997L18 8.99946V8.99997H19ZM18 13C18 13.5523 18.4477 14 19 14C19.5523 14 20 13.5523 20 13H18ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16V18ZM2 16C1.44772 16 1 16.4477 1 17C1 17.5523 1.44772 18 2 18V16ZM5 8.99997L6 8.99997L6 8.99871L5 8.99997ZM6.66857 6.23871C6.92193 5.74797 6.72948 5.14476 6.23874 4.8914C5.748 4.63805 5.14478 4.83049 4.89143 5.32123L6.66857 6.23871ZM14.595 21.5017C14.8721 21.024 14.7095 20.4121 14.2318 20.135C13.754 19.8579 13.1421 20.0205 12.865 20.4982L14.595 21.5017ZM11.135 20.4982C10.8579 20.0205 10.246 19.8579 9.76823 20.135C9.2905 20.4121 9.12788 21.024 9.405 21.5017L11.135 20.4982ZM9.05143 3.77089C10.9096 2.7224 13.1848 2.73953 15.0269 3.81589L16.0359 2.08905C13.5797 0.653905 10.5461 0.631063 8.06857 2.02906L9.05143 3.77089ZM15.0269 3.81589C16.8691 4.89225 18.0011 6.8659 18 8.99946L20 9.00049C20.0015 6.15573 18.4921 3.52419 16.0359 2.08905L15.0269 3.81589ZM18 8.99997V13H20V8.99997H18ZM17 16H2V18H17V16ZM2 18C4.20914 18 6 16.2091 6 14H4C4 15.1045 3.10457 16 2 16V18ZM6 14V8.99997H4V14H6ZM6 8.99871C5.99879 8.03847 6.22807 7.09196 6.66857 6.23871L4.89143 5.32123C4.30409 6.4589 3.99839 7.72091 4 9.00123L6 8.99871ZM12.865 20.4982C12.6861 20.8066 12.3565 20.9964 12 20.9964V22.9964C13.0696 22.9964 14.0583 22.427 14.595 21.5017L12.865 20.4982ZM12 20.9964C11.6435 20.9964 11.3139 20.8066 11.135 20.4982L9.405 21.5017C9.9417 22.427 10.9304 22.9964 12 22.9964V20.9964Z"
      fill="#FF7C1E"
    />
    <path
      d="M1 1L23 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'align-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10H7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 6H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 14H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 18H7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'align-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 10H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 6H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 14H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 18H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'align-justify'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 6H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 14H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 18H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'align-center'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10H6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 6H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 14H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 18H6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'trending-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 6L13.5 15.5L8.5 10.5L1 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 6H23V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'trending-down'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 18L13.5 8.5L8.5 13.5L1 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 18H23V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'shuffle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 3H20V8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 20L20 3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 16V21H15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 15L20 21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 4L8 9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'rotate-cw'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 4V10H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.49 15C18.1546 18.7798 14.4803 21.2207 10.4784 20.9866C6.47652 20.7525 3.11189 17.8997 2.22636 13.99C1.34083 10.0803 3.14789 6.05626 6.65835 4.12062C10.1688 2.18499 14.5363 2.80448 17.37 5.63998L22 9.99998"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'rotate-ccw'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4V10H8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.51 15C5.84201 18.7807 9.51384 21.2248 13.5157 20.9944C17.5176 20.7641 20.8848 17.9149 21.7742 14.0063C22.6637 10.0978 20.861 6.07208 17.3528 4.13274C13.8447 2.1934 9.47683 2.80794 6.64 5.63998L2 9.99998"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'repeat'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 1L21 5L17 9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 11V9C3 6.79086 4.79086 5 7 5H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 23L3 19L7 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 13V15C21 17.2091 19.2091 19 17 19H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'refresh-cw'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 4V10H17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 20V14H7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.56735 8.66641C2.38311 9.18705 2.65583 9.75848 3.17647 9.94272C3.69712 10.127 4.26855 9.85425 4.45279 9.3336L2.56735 8.66641ZM10.0084 3.22426L9.78767 2.24891L10.0084 3.22426ZM18.3601 5.64L17.6528 6.34693C17.6602 6.35432 17.6677 6.3616 17.6753 6.36875L18.3601 5.64ZM22.3153 10.7288C22.7178 11.1069 23.3506 11.0873 23.7288 10.6848C24.107 10.2823 24.0873 9.64944 23.6848 9.27125L22.3153 10.7288ZM1.68484 13.2712C1.28236 12.8931 0.6495 12.9127 0.271308 13.3152C-0.106884 13.7177 -0.0871948 14.3506 0.315284 14.7288L1.68484 13.2712ZM5.64006 18.36L6.34734 17.6531C6.33996 17.6457 6.33245 17.6384 6.32484 17.6312L5.64006 18.36ZM21.4328 15.3336C21.617 14.813 21.3443 14.2415 20.8237 14.0573C20.303 13.873 19.7316 14.1458 19.5473 14.6664L21.4328 15.3336ZM4.45279 9.3336C5.36913 6.7441 7.54991 4.80579 10.229 4.19961L9.78767 2.24891C6.43876 3.00665 3.71278 5.42953 2.56735 8.66641L4.45279 9.3336ZM10.229 4.19961C12.9082 3.59342 15.711 4.40413 17.6528 6.34693L19.0674 4.93307C16.6401 2.50457 13.1366 1.49118 9.78767 2.24891L10.229 4.19961ZM17.6753 6.36875L22.3153 10.7288L23.6848 9.27125L19.0448 4.91125L17.6753 6.36875ZM0.315284 14.7288L4.95528 19.0888L6.32484 17.6312L1.68484 13.2712L0.315284 14.7288ZM4.93278 19.0669C7.36006 21.4954 10.8635 22.5088 14.2125 21.7511L13.7711 19.8004C11.092 20.4066 8.28918 19.5959 6.34734 17.6531L4.93278 19.0669ZM14.2125 21.7511C17.5614 20.9934 20.2874 18.5705 21.4328 15.3336L19.5473 14.6664C18.631 17.2559 16.4502 19.1942 13.7711 19.8004L14.2125 21.7511Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'refresh-ccw'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4V10H7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 20V14H17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5473 9.3336C19.7316 9.85425 20.303 10.127 20.8237 9.94272C21.3443 9.75848 21.617 9.18705 21.4328 8.66641L19.5473 9.3336ZM13.9918 3.22426L14.2125 2.24891L13.9918 3.22426ZM5.64006 5.64L6.32484 6.36875C6.33245 6.3616 6.33996 6.35432 6.34734 6.34693L5.64006 5.64ZM0.315284 9.27125C-0.0871948 9.64944 -0.106884 10.2823 0.271308 10.6848C0.6495 11.0873 1.28236 11.1069 1.68484 10.7288L0.315284 9.27125ZM23.6848 14.7288C24.0873 14.3506 24.107 13.7177 23.7288 13.3152C23.3506 12.9127 22.7178 12.8931 22.3153 13.2712L23.6848 14.7288ZM18.3601 18.36L17.6753 17.6312C17.6677 17.6384 17.6602 17.6457 17.6528 17.6531L18.3601 18.36ZM4.45279 14.6664C4.26855 14.1458 3.69712 13.873 3.17647 14.0573C2.65583 14.2415 2.38311 14.813 2.56735 15.3336L4.45279 14.6664ZM21.4328 8.66641C20.2874 5.42953 17.5614 3.00665 14.2125 2.24891L13.7711 4.19961C16.4502 4.80579 18.631 6.7441 19.5473 9.3336L21.4328 8.66641ZM14.2125 2.24891C10.8635 1.49118 7.36006 2.50457 4.93278 4.93307L6.34734 6.34693C8.28918 4.40413 11.092 3.59342 13.7711 4.19961L14.2125 2.24891ZM4.95528 4.91125L0.315284 9.27125L1.68484 10.7288L6.32484 6.36875L4.95528 4.91125ZM22.3153 13.2712L17.6753 17.6312L19.0448 19.0888L23.6848 14.7288L22.3153 13.2712ZM17.6528 17.6531C15.711 19.5959 12.9082 20.4066 10.229 19.8004L9.78767 21.7511C13.1366 22.5088 16.6401 21.4954 19.0674 19.0669L17.6528 17.6531ZM10.229 19.8004C7.54991 19.1942 5.36913 17.2559 4.45279 14.6664L2.56735 15.3336C3.71278 18.5705 6.43876 20.9934 9.78767 21.7511L10.229 19.8004Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'pie-chart'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.21 15.89C19.4599 20.0289 15.1638 22.4921 10.7078 21.9116C6.25174 21.331 2.73016 17.8495 2.0988 13.4003C1.46745 8.95119 3.88139 4.62732 8.00001 2.83002"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2V12H22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'navigation'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 12L21 3L12 22L10 14L2 12V12Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'navigation-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 3L19 22L12 18L5 22L12 3V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'move'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 9L2 12L5 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 5L12 2L15 5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 19L12 22L9 19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 9L22 12L19 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 12H22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'minimize'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3H9ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9V7ZM21 9C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7V9ZM17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3H17ZM15 21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21H15ZM21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15V17ZM3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17V15ZM7 21C7 21.5523 7.44772 22 8 22C8.55228 22 9 21.5523 9 21H7ZM7 3V6H9V3H7ZM7 6C7 6.55228 6.55228 7 6 7V9C7.65685 9 9 7.65685 9 6H7ZM6 7H3V9H6V7ZM21 7H18V9H21V7ZM18 7C17.4477 7 17 6.55228 17 6H15C15 7.65685 16.3431 9 18 9V7ZM17 6V3H15V6H17ZM17 21V18H15V21H17ZM17 18C17 17.4477 17.4477 17 18 17V15C16.3431 15 15 16.3431 15 18H17ZM18 17H21V15H18V17ZM3 17H6V15H3V17ZM6 17C6.55228 17 7 17.4477 7 18H9C9 16.3431 7.65685 15 6 15V17ZM7 18V21H9V18H7Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'minimize-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 14H10V20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 10H14V4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 10L21 3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 21L10 14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'maximize'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2V4ZM2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8H2ZM20 8C20 8.55228 20.4477 9 21 9C21.5523 9 22 8.55228 22 8H20ZM16 2C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4V2ZM16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22V20ZM22 16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16H22ZM4 16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16H4ZM8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20V22ZM8 2H5V4H8V2ZM5 2C3.34315 2 2 3.34315 2 5H4C4 4.44772 4.44772 4 5 4V2ZM2 5V8H4V5H2ZM22 8V5H20V8H22ZM22 5C22 3.34315 20.6569 2 19 2V4C19.5523 4 20 4.44772 20 5H22ZM19 2H16V4H19V2ZM16 22H19V20H16V22ZM19 22C20.6569 22 22 20.6569 22 19H20C20 19.5523 19.5523 20 19 20V22ZM22 19V16H20V19H22ZM2 16V19H4V16H2ZM2 19C2 20.6569 3.34315 22 5 22V20C4.44772 20 4 19.5523 4 19H2ZM5 22H8V20H5V22Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'maximize-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 3H21V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 21H3V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 3L14 10"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 21L10 14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'corner-up-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 14L20 9L15 4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 20V13C4 10.7909 5.79086 9 8 9H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'corner-up-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 14L4 9L9 4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 20V13C20 10.7909 18.2091 9 16 9H4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'corner-right-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 9L15 4L20 9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 20H11C13.2091 20 15 18.2091 15 16V4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'corner-left-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 9L9 4L4 9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 20H13C10.7909 20 9 18.2091 9 16V4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'corner-left-down'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 15L9 20L4 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 4H13C10.7909 4 9 5.79086 9 8V20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'corner-down-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 10L20 15L15 20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 4V11C4 13.2091 5.79086 15 8 15H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'corner-down-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 10L4 15L9 20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 4V11C20 13.2091 18.2091 15 16 15H4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'chevrons-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 11L12 6L7 11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 18L12 13L7 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'chevrons-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 17L18 12L13 7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 17L11 12L6 7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'chevrons-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 17L6 12L11 7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 17L13 12L18 7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'chevrons-down'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13L12 18L17 13"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 6L12 11L17 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'chevron-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'chevron-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'chevron-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'chevron-down'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'arrow-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20V4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 10L12 4L18 10"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'arrow-up-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 18L18 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 6H18V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'arrow-up-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 18L6 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 6H6V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'arrow-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 6L20 12L14 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'arrow-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 12H4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 18L4 12L10 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'arrow-down'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4V20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 14L12 20L6 14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'arrow-down-right'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6L18 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 18H18V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'arrow-down-left'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 18H6V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'zoom-out'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 11H14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'zoom-in'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 8V14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 11H14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'unlock'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 13C3 11.8954 3.89543 11 5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 11V7C6.99742 4.43124 8.94175 2.27845 11.4975 2.02029C14.0533 1.76213 16.3888 3.48261 16.9 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'skip-forward'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 4L14 12L4 20V4V4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 5V19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'skip-back'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 20L9 12L19 4V20V20Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 19V5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'show-password'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'search'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 21L15.8 15.8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'power'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.36 6.64001C21.8739 10.155 21.8732 15.853 18.3586 19.3672C14.844 22.8815 9.14602 22.8815 5.63138 19.3672C2.11674 15.853 2.11612 10.155 5.63 6.64001"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'play'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 3L19 12L5 21V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'play-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 8L16 12L10 16V8Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'pause'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 4H10V20H6V4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 4H18V20H14V4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'package'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.89 1.45003L20.89 5.45003C21.5696 5.78776 21.9996 6.48108 22 7.24003V16.77C21.9996 17.529 21.5696 18.2223 20.89 18.56L12.89 22.56C12.3266 22.8419 11.6634 22.8419 11.1 22.56L3.09999 18.56C2.42098 18.2179 1.9947 17.5203 1.99999 16.76V7.24003C2.00039 6.48108 2.43033 5.78776 3.10999 5.45003L11.11 1.45003C11.6706 1.17144 12.3294 1.17144 12.89 1.45003Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.32001 6.15997L12 11L21.68 6.15997"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22.76V11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 3.5L17 8.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'lock'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 13C3 11.8954 3.89543 11 5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'info'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 16V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="8" r="1" fill="#FF7C1E" />
  </svg>
  <svg
    v-if="type === 'image'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 15L16 10L5 21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'hide-password'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5462 18.7353C18.9855 18.4005 19.0701 17.773 18.7353 17.3338C18.4005 16.8946 17.773 16.8099 17.3338 17.1447L18.5462 18.7353ZM12 20V21C12.0054 21 12.0109 21 12.0163 20.9999L12 20ZM1 12L0.118844 11.5272C-0.0347896 11.8135 -0.0397388 12.1566 0.105573 12.4472L1 12ZM6.6669 6.8548C7.10584 6.51962 7.18996 5.89207 6.85478 5.45312C6.5196 5.01418 5.89204 4.93007 5.4531 5.26525L6.6669 6.8548ZM9.67209 3.26634C9.13434 3.39222 8.80045 3.93019 8.92632 4.46794C9.05219 5.00569 9.59016 5.33958 10.1279 5.21371L9.67209 3.26634ZM12 4.00003L11.9976 5.00003H12V4.00003ZM23 12L23.8819 12.4714C24.0348 12.1854 24.0395 11.8429 23.8944 11.5528L23 12ZM20.0748 14.5462C19.7193 14.9688 19.7736 15.5996 20.1962 15.9552C20.6187 16.3108 21.2496 16.2565 21.6052 15.8339L20.0748 14.5462ZM14.8516 14.8017C15.2281 14.3977 15.2058 13.7649 14.8017 13.3884C14.3977 13.0119 13.7649 13.0342 13.3884 13.4383L14.8516 14.8017ZM9.01846 12.8172L9.98736 12.5697L9.01846 12.8172ZM10.5617 10.6116C10.9658 10.2351 10.9881 9.60236 10.6116 9.1983C10.2351 8.79425 9.60233 8.77191 9.19828 9.14841L10.5617 10.6116ZM17.3338 17.1447C15.7941 18.3183 13.9193 18.9685 11.9837 19.0002L12.0163 20.9999C14.3789 20.9613 16.6671 20.1677 18.5462 18.7353L17.3338 17.1447ZM12 19C8.89951 19 6.39552 17.2265 4.60454 15.3161C3.71817 14.3706 3.03543 13.4213 2.57441 12.7075C2.34452 12.3515 2.1714 12.0567 2.05712 11.8535C2.00002 11.752 1.95773 11.6736 1.93051 11.6222C1.9169 11.5964 1.90707 11.5775 1.90104 11.5657C1.89803 11.5599 1.89597 11.5558 1.89486 11.5537C1.89431 11.5526 1.894 11.552 1.89392 11.5518C1.89389 11.5517 1.89391 11.5518 1.894 11.552C1.89404 11.552 1.89415 11.5522 1.89417 11.5523C1.89429 11.5525 1.89443 11.5528 1 12C0.105573 12.4472 0.105741 12.4476 0.105925 12.4479C0.106007 12.4481 0.106206 12.4485 0.10637 12.4488C0.106698 12.4495 0.107087 12.4503 0.107539 12.4512C0.108442 12.4529 0.109592 12.4552 0.11099 12.458C0.113785 12.4635 0.117569 12.4709 0.122338 12.4802C0.131875 12.4988 0.145357 12.5247 0.162753 12.5576C0.19754 12.6233 0.248023 12.7168 0.313971 12.834C0.445792 13.0684 0.63985 13.3985 0.894336 13.7926C1.40207 14.5787 2.15683 15.6294 3.14546 16.684C5.10448 18.7736 8.10049 21 12 21V19ZM1.88116 12.4729C3.05763 10.2804 4.68936 8.36487 6.6669 6.8548L5.4531 5.26525C3.24891 6.94839 1.43015 9.08345 0.118844 11.5272L1.88116 12.4729ZM10.1279 5.21371C10.7408 5.07025 11.3682 4.99854 11.9976 5.00002L12.0023 3.00003C11.2179 2.99818 10.4359 3.08756 9.67209 3.26634L10.1279 5.21371ZM12 5.00003C15.1005 5.00003 17.6045 6.77359 19.3955 8.68397C20.2818 9.62943 20.9646 10.5787 21.4256 11.2926C21.6555 11.6485 21.8286 11.9434 21.9429 12.1465C22 12.248 22.0423 12.3265 22.0695 12.3779C22.0831 12.4036 22.0929 12.4226 22.099 12.4343C22.102 12.4402 22.104 12.4442 22.1051 12.4464C22.1057 12.4475 22.106 12.4481 22.1061 12.4482C22.1061 12.4483 22.1061 12.4483 22.106 12.4481C22.106 12.448 22.1059 12.4478 22.1058 12.4478C22.1057 12.4475 22.1056 12.4472 23 12C23.8944 11.5528 23.8943 11.5525 23.8941 11.5521C23.894 11.5519 23.8938 11.5515 23.8936 11.5512C23.8933 11.5506 23.8929 11.5498 23.8925 11.5489C23.8916 11.5471 23.8904 11.5448 23.889 11.5421C23.8862 11.5366 23.8824 11.5291 23.8777 11.5198C23.8681 11.5013 23.8546 11.4753 23.8372 11.4425C23.8025 11.3767 23.752 11.2833 23.686 11.166C23.5542 10.9317 23.3601 10.6015 23.1057 10.2075C22.5979 9.42134 21.8432 8.37062 20.8545 7.31608C18.8955 5.22646 15.8995 3.00003 12 3.00003V5.00003ZM22.1181 11.5286C21.5439 12.6028 20.8591 13.6142 20.0748 14.5462L21.6052 15.8339C22.479 14.7953 23.2421 13.6684 23.8819 12.4714L22.1181 11.5286ZM13.3884 13.4383C12.8898 13.9734 12.1389 14.1936 11.4303 14.0127L10.9354 15.9505C12.3526 16.3124 13.8544 15.8719 14.8516 14.8017L13.3884 13.4383ZM11.4303 14.0127C10.7217 13.8317 10.1683 13.2784 9.98736 12.5697L8.04955 13.0646C8.41149 14.4819 9.51816 15.5885 10.9354 15.9505L11.4303 14.0127ZM9.98736 12.5697C9.80639 11.8611 10.0266 11.1102 10.5617 10.6116L9.19828 9.14841C8.12813 10.1456 7.68762 11.6474 8.04955 13.0646L9.98736 12.5697Z"
      fill="#FF7C1E"
    />
    <path
      d="M1 1L23 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'help-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.08997 8.99999C9.5754 7.62004 10.9853 6.7914 12.4271 7.0387C13.8689 7.28601 14.9221 8.53714 14.92 9.99999C14.92 12 11.92 13 11.92 13"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="17" r="1" fill="#FF7C1E" />
  </svg>
  <svg
    v-if="type === 'headphones'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 14H22C22 13.4477 21.5523 13 21 13V14ZM3 14V13C2.44772 13 2 13.4477 2 14H3ZM20 19C20 19.5523 19.5523 20 19 20V22C20.6569 22 22 20.6569 22 19H20ZM19 20H18V22H19V20ZM18 20C17.4477 20 17 19.5523 17 19H15C15 20.6569 16.3431 22 18 22V20ZM17 19V16H15V19H17ZM17 16C17 15.4477 17.4477 15 18 15V13C16.3431 13 15 14.3431 15 16H17ZM18 15H21V13H18V15ZM20 14V19H22V14H20ZM2 19C2 20.6569 3.34315 22 5 22V20C4.44772 20 4 19.5523 4 19H2ZM5 22H6V20H5V22ZM6 22C7.65685 22 9 20.6569 9 19H7C7 19.5523 6.55228 20 6 20V22ZM9 19V16H7V19H9ZM9 16C9 14.3431 7.65685 13 6 13V15C6.55228 15 7 15.4477 7 16H9ZM6 13H3V15H6V13ZM2 14V19H4V14H2Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'globe'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 12H22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'folder'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H9L11 6H20C21.1046 6 22 6.89543 22 8V19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'filter'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'file'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9L13 2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 2V9H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'file-text'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 13H8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 17H8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 9H9H8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'file-plus'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 15H15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'file-minus'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 15H15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'fast-forward'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 19L22 12L13 5V19V19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 19L11 12L2 5V19V19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'clock'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 6V12L15 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'clipboard'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6H9C8.44772 6 8 5.55228 8 5V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'calendar'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 2V6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 2V6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 10H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'box'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.89 1.45003L20.89 5.45003C21.5696 5.78776 21.9996 6.48108 22 7.24003V16.77C21.9996 17.529 21.5696 18.2223 20.89 18.56L12.89 22.56C12.3266 22.8419 11.6634 22.8419 11.1 22.56L3.09999 18.56C2.42098 18.2179 1.9947 17.5203 1.99999 16.76V7.24003C2.00039 6.48108 2.43033 5.78776 3.10999 5.45003L11.11 1.45003C11.6706 1.17144 12.3294 1.17144 12.89 1.45003Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.32001 6.15997L12 11L21.68 6.15997"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22.76V11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'bookmark'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'book'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'alert-triangle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.29 4.86002L1.82002 19C1.46466 19.6154 1.46254 20.3732 1.81445 20.9905C2.16635 21.6079 2.81943 21.9922 3.53002 22H20.47C21.1806 21.9922 21.8337 21.6079 22.1856 20.9905C22.5375 20.3732 22.5354 19.6154 22.18 19L13.71 4.86002C13.3475 4.2623 12.6991 3.89728 12 3.89728C11.3009 3.89728 10.6526 4.2623 10.29 4.86002Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 10V14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="18" r="1" fill="#FF7C1E" />
  </svg>
  <svg
    v-if="type === 'alert-octagon'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="16" r="1" fill="#FF7C1E" />
  </svg>

  <svg
    v-if="type === 'alert-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="16" r="1" fill="#FF7C1E" />
  </svg>
  <svg
    v-if="type === 'x'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'x-square'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 9L15 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9L9 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'video-off'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16H17ZM1 17H0H1ZM5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4V6ZM10.66 4C10.1077 4 9.66 4.44772 9.66 5C9.66 5.55228 10.1077 6 10.66 6V4ZM16 10.34H15C15 10.6052 15.1054 10.8596 15.2929 11.0471L16 10.34ZM17 11.34L16.2929 12.0471C16.6402 12.3944 17.1882 12.4381 17.5861 12.1503L17 11.34ZM23 7H24C24 6.62434 23.7895 6.28037 23.4549 6.10947C23.1204 5.93857 22.7183 5.96958 22.4139 6.18975L23 7ZM22 17C22 17.5523 22.4477 18 23 18C23.5523 18 24 17.5523 24 17H22ZM15 16V17H17V16H15ZM15 17C15 17.5523 14.5523 18 14 18V20C15.6569 20 17 18.6569 17 17H15ZM14 18H3V20H14V18ZM3 18C2.44772 18 2 17.5523 2 17H0C0 18.6569 1.34315 20 3 20V18ZM2 17V7H0V17H2ZM2 7C2 6.44772 2.44772 6 3 6V4C1.34315 4 0 5.34315 0 7H2ZM3 6H5V4H3V6ZM10.66 6H14V4H10.66V6ZM14 6C14.5523 6 15 6.44772 15 7H17C17 5.34315 15.6569 4 14 4V6ZM15 7V10.34H17V7H15ZM15.2929 11.0471L16.2929 12.0471L17.7071 10.6329L16.7071 9.63289L15.2929 11.0471ZM17.5861 12.1503L23.5861 7.81025L22.4139 6.18975L16.4139 10.5297L17.5861 12.1503ZM22 7V17H24V7H22Z"
      fill="#FF7C1E"
    />
    <path
      d="M1 1L23 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'users'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 3.13C17.7699 3.58317 19.0078 5.178 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'user'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'user-x'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 8L23 13"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 8L18 13"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'user-plus'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 8V14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 11H17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'user-minus'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 11H17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'user-check'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 11L19 13L23 9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'upload'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 17V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 6L12 2L8 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'upload-cloud'"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 16L13 12L9 16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 12V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.39 18.39C23.3964 17.2962 24.4059 14.9813 23.8422 12.7667C23.2786 10.5521 21.2852 9.00153 19 9.00002H17.74C16.9111 5.79384 14.1924 3.4298 10.9022 3.05412C7.61199 2.67845 4.43041 4.36881 2.90009 7.30562C1.36977 10.2424 1.80709 13.8185 4.00001 16.3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 16L13 12L9 16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'share'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 6L12 2L8 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'plus'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'plus-square'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'plus-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'paperclip'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.4383 11.6622L12.2483 20.8522C9.90389 23.1967 6.10279 23.1967 3.75834 20.8522C1.41389 18.5078 1.41389 14.7067 3.75834 12.3622L12.9483 3.17222C14.5113 1.60926 17.0454 1.60926 18.6083 3.17222C20.1713 4.73519 20.1713 7.26926 18.6083 8.83222L9.40834 18.0222C8.62685 18.8037 7.35982 18.8037 6.57834 18.0222C5.79685 17.2407 5.79685 15.9737 6.57834 15.1922L15.0683 6.71222"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'more-vertical'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'more-horizontal'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'minus'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'minus-square'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'minus-circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'map'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6V6Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 2V18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 6V22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'map-pin'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10V10Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'log-out'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 16L21 12L17 8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 12H9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'log-in'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2H14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 16L15 12L11 8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 12H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'link'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13C10.869 14.1617 12.1996 14.8887 13.6466 14.9924C15.0937 15.096 16.5144 14.566 17.54 13.54L20.54 10.54C22.4349 8.57813 22.4078 5.4596 20.4791 3.53093C18.5504 1.60227 15.4319 1.57517 13.47 3.47003L11.75 5.18003"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 11C13.131 9.8383 11.8003 9.1113 10.3533 9.00766C8.90628 8.90403 7.48559 9.43399 6.45996 10.46L3.45996 13.46C1.5651 15.4219 1.59219 18.5404 3.52086 20.4691C5.44953 22.3978 8.56806 22.4249 10.53 20.53L12.24 18.82"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'link-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8V6ZM18 7V6V7ZM15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18V16ZM9 18C9.55229 18 10 17.5523 10 17C10 16.4477 9.55229 16 9 16V18ZM9 8C9.55229 8 10 7.55228 10 7C10 6.44772 9.55229 6 9 6V8ZM15 8H18V6H15V8ZM18 8C19.0609 8 20.0783 8.42143 20.8284 9.17157L22.2426 7.75736C21.1174 6.63214 19.5913 6 18 6V8ZM20.8284 9.17157C21.5786 9.92172 22 10.9391 22 12H24C24 10.4087 23.3679 8.88258 22.2426 7.75736L20.8284 9.17157ZM22 12C22 14.2091 20.2091 16 18 16V18C21.3137 18 24 15.3137 24 12H22ZM18 16H15V18H18V16ZM9 16H6V18H9V16ZM6 16C4.93913 16 3.92172 15.5786 3.17157 14.8284L1.75736 16.2426C2.88258 17.3679 4.4087 18 6 18V16ZM3.17157 14.8284C2.42143 14.0783 2 13.0609 2 12H0C0 13.5913 0.632141 15.1174 1.75736 16.2426L3.17157 14.8284ZM2 12C2 9.79086 3.79086 8 6 8V6C2.68629 6 0 8.68629 0 12H2ZM6 8H9V6H6V8Z"
      fill="#FF7C1E"
    />
    <path
      d="M8 12H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'layers'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2L2 7L12 12L22 7L12 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'inbox'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 13H16L14 16H10L8 13H2"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.47 5.19L2 13V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V13L18.53 5.19C18.2093 4.46607 17.4918 3.99946 16.7 4H7.3C6.50822 3.99946 5.79067 4.46607 5.47 5.19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'edit'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 13.66V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10.34"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 2L22 6L12 16H8V12L18 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'edit-3'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 2L18 6L7 17H3V13L14 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 22H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'edit-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 3L21 8L8 21H3V16L16 3V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'download'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 17V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12L12 16L16 12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'download-cloud'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 18L12 22L16 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 13V22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.88 19.09C22.6642 17.8354 23.4292 15.5691 22.7704 13.4899C22.1117 11.4106 20.1811 9.99833 18 10H16.74C15.9164 6.78998 13.1987 4.42012 9.90645 4.04093C6.61417 3.66173 3.42894 5.35171 1.89705 8.29046C0.365159 11.2292 0.803807 14.8082 3.00005 17.29"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'delete'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 4H8L1 12L8 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 9L12 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 9L18 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'crosshair'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12H18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 12H2"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 6V2"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22V18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'copy'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 11C9 9.89543 9.89543 9 11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'wifi'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.58008 13.5474C8.65867 10.1502 14.5815 10.1502 18.6601 13.5474"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 9.99735C7.04648 4.66755 16.1135 4.66755 22.16 9.99735"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.11011 17.1073C10.1909 15.629 12.9793 15.629 15.0601 17.1073"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="21" r="1" fill="#FF7C1E" />
  </svg>
  <svg
    v-if="type === 'wifi-off'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L23 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="20" r="1" fill="#FF7C1E" />
    <path
      d="M16.72 11.0601C17.5391 11.4598 18.305 11.9604 19 12.5501"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12.55C6.48208 11.3109 8.26587 10.4862 10.17 10.16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.71 5.05002C15.0388 4.70122 19.3234 6.12702 22.58 9.00002"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.41998 9C2.80715 7.77385 4.39768 6.79922 6.11998 6.12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.53003 16.11C10.6109 14.6316 13.3992 14.6316 15.48 16.11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'watch'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 9V12L13.5 13.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5058 17.441C17.5561 16.891 17.151 16.4044 16.601 16.3542C16.051 16.3039 15.5644 16.709 15.5141 17.259L17.5058 17.441ZM16.16 21.18L15.1641 21.089L15.164 21.09L16.16 21.18ZM14.16 23L14.164 22H14.16V23ZM9.82998 23V22L9.82592 22L9.82998 23ZM7.82998 21.18L8.82592 21.09L8.82583 21.089L7.82998 21.18ZM8.47583 17.259C8.42557 16.709 7.93897 16.3039 7.38898 16.3542C6.83898 16.4044 6.43387 16.891 6.48413 17.441L8.47583 17.259ZM6.49414 6.55901C6.44388 7.109 6.84899 7.59561 7.39899 7.64587C7.94898 7.69613 8.43558 7.29101 8.48584 6.74102L6.49414 6.55901ZM7.83999 2.82002L8.83584 2.91102L8.83593 2.91002L7.83999 2.82002ZM9.82999 1.00002V1.63317e-05L9.82905 1.71661e-05L9.82999 1.00002ZM14.18 1.00002V2.00003L14.184 2.00001L14.18 1.00002ZM16.18 2.82002L15.184 2.91001L15.1841 2.91102L16.18 2.82002ZM15.5341 6.74102C15.5844 7.29101 16.071 7.69613 16.621 7.64587C17.171 7.59561 17.5761 7.109 17.5258 6.55901L15.5341 6.74102ZM15.5141 17.259L15.1641 21.089L17.1558 21.271L17.5058 17.441L15.5141 17.259ZM15.164 21.09C15.1173 21.6069 14.683 22.0021 14.164 22L14.1559 24C15.7128 24.0063 17.0158 22.8206 17.1559 21.27L15.164 21.09ZM14.16 22H9.82998V24H14.16V22ZM9.82592 22C9.30696 22.0021 8.87263 21.6069 8.82592 21.09L6.83404 21.27C6.97415 22.8206 8.27714 24.0063 9.83404 24L9.82592 22ZM8.82583 21.089L8.47583 17.259L6.48413 17.441L6.83413 21.271L8.82583 21.089ZM8.48584 6.74102L8.83584 2.91102L6.84414 2.72901L6.49414 6.55901L8.48584 6.74102ZM8.83593 2.91002C8.88247 2.39507 9.31388 2.0005 9.83093 2.00002L9.82905 1.71661e-05C8.2779 0.00147808 6.98365 1.18517 6.84405 2.73002L8.83593 2.91002ZM9.82999 2.00002H14.18V1.67489e-05H9.82999V2.00002ZM14.184 2.00001C14.703 1.9979 15.1373 2.39314 15.184 2.91001L17.1759 2.73002C17.0358 1.17943 15.7328 -0.0062921 14.1759 2.49743e-05L14.184 2.00001ZM15.1841 2.91102L15.5341 6.74102L17.5258 6.55901L17.1758 2.72901L15.1841 2.91102Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'volume'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 5L11 9H7V15H11L16 19V5V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'volume-x'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 5L5 9H1V15H5L10 19V5V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 9L16 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 9L22 15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'volume-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 5L6 9H2V15H6L11 19V5V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.07 4.93005L19.7773 4.22305C19.4913 3.93699 19.0611 3.85138 18.6874 4.00615C18.3137 4.16091 18.07 4.52556 18.07 4.93005H19.07ZM19.07 19.0701H18.07C18.07 19.4745 18.3137 19.8392 18.6874 19.994C19.0611 20.1487 19.4913 20.0631 19.7773 19.7771L19.07 19.0701ZM15.54 8.46005L16.2473 7.75305C15.9613 7.46699 15.5311 7.38138 15.1574 7.53615C14.7837 7.69091 14.54 8.05556 14.54 8.46005H15.54ZM15.54 15.5301H14.54C14.54 15.9345 14.7837 16.2992 15.1574 16.454C15.5311 16.6087 15.9613 16.5231 16.2473 16.2371L15.54 15.5301ZM18.3628 5.63705C21.8763 9.15155 21.8763 14.8486 18.3628 18.3631L19.7773 19.7771C24.0715 15.4816 24.0715 8.51855 19.7773 4.22305L18.3628 5.63705ZM20.07 19.0701V4.93005H18.07V19.0701H20.07ZM14.8328 9.16705C16.3944 10.7291 16.3944 13.2611 14.8328 14.8231L16.2473 16.2371C18.5895 13.8941 18.5895 10.0961 16.2473 7.75305L14.8328 9.16705ZM16.54 15.5301V8.46005H14.54V15.5301H16.54Z"
      fill="#FF7C1E"
    />
  </svg>
  <svg
    v-if="type === 'volume-1'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 5L8 9H4V15H8L13 19V5V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.54 8.45996C19.4919 10.4125 19.4919 13.5775 17.54 15.53"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'voicemail'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.5 16C7.98528 16 10 13.9853 10 11.5C10 9.01472 7.98528 7 5.5 7C3.01472 7 1 9.01472 1 11.5C1 13.9853 3.01472 16 5.5 16Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.5 16C20.9853 16 23 13.9853 23 11.5C23 9.01472 20.9853 7 18.5 7C16.0147 7 14 9.01472 14 11.5C14 13.9853 16.0147 16 18.5 16Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.5 16H18.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'video'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23 7L16 12L23 17V7V7Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 7C1 5.89543 1.89543 5 3 5H14C15.1046 5 16 5.89543 16 7V17C16 18.1046 15.1046 19 14 19H3C1.89543 19 1 18.1046 1 17V7Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'tv'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 2L12 7L7 2"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'tablet'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20L4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4L20 20Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="18" r="1" fill="#FF7C1E" />
  </svg>

  <svg
    v-if="type === 'speaker'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="6" r="1" fill="#FF7C1E" />
  </svg>

  <svg
    v-if="type === 'smartphone'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="18" r="1" fill="#FF7C1E" />
  </svg>
  <svg
    v-if="type === 'sidebar'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 3V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'server'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V8C22 9.10457 21.1046 10 20 10H4C2.89543 10 2 9.10457 2 8V4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 16C2 14.8954 2.89543 14 4 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V16Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="6" cy="6" r="1" fill="#FF7C1E" />
    <circle cx="6" cy="18" r="1" fill="#FF7C1E" />
  </svg>

  <svg
    v-if="type === 'save'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16L21 8V19C21 20.1046 20.1046 21 19 21Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 21V13H7V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 3V8H15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'radio'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.9467 7.05255C16.556 6.66225 15.9228 6.6626 15.5325 7.05334C15.1422 7.44408 15.1425 8.07725 15.5333 8.46755L16.9467 7.05255ZM15.5333 15.5426C15.1425 15.9329 15.1422 16.566 15.5325 16.9568C15.9228 17.3475 16.556 17.3479 16.9467 16.9576L15.5333 15.5426ZM7.05329 16.9476C7.44403 17.3379 8.07719 17.3375 8.4675 16.9468C8.85781 16.556 8.85746 15.9229 8.46671 15.5326L7.05329 16.9476ZM8.46671 8.45755C8.85746 8.06725 8.85781 7.43408 8.4675 7.04334C8.07719 6.6526 7.44403 6.65225 7.05329 7.04255L8.46671 8.45755ZM19.07 4.93005L19.7772 4.22305C19.4912 3.93699 19.0611 3.85138 18.6874 4.00615C18.3137 4.16091 18.07 4.52556 18.07 4.93005H19.07ZM19.07 19.0701H18.07C18.07 19.4745 18.3137 19.8392 18.6874 19.994C19.0611 20.1487 19.4912 20.0631 19.7772 19.7771L19.07 19.0701ZM4.93 19.0701L4.22279 19.7771C4.50876 20.0631 4.9389 20.1487 5.31261 19.994C5.68633 19.8392 5.93 19.4745 5.93 19.0701H4.93ZM4.93 4.93005H5.93C5.93 4.52556 5.68633 4.16091 5.31261 4.00615C4.9389 3.85138 4.50876 3.93699 4.22279 4.22305L4.93 4.93005ZM15.5333 8.46755C16.4722 9.4054 16.9997 10.678 16.9997 12.0051H18.9997C18.9997 10.1472 18.2612 8.36553 16.9467 7.05255L15.5333 8.46755ZM16.9997 12.0051C16.9997 13.3321 16.4722 14.6047 15.5333 15.5426L16.9467 16.9576C18.2612 15.6446 18.9997 13.8629 18.9997 12.0051H16.9997ZM8.46671 15.5326C7.52783 14.5947 7.00028 13.3221 7.00028 11.9951H5.00028C5.00028 13.8529 5.73885 15.6346 7.05329 16.9476L8.46671 15.5326ZM7.00028 11.9951C7.00028 10.668 7.52783 9.39539 8.46671 8.45755L7.05329 7.04255C5.73885 8.35553 5.00028 10.1372 5.00028 11.9951H7.00028ZM18.3628 5.63705C21.8762 9.15155 21.8762 14.8486 18.3628 18.3631L19.7772 19.7771C24.0714 15.4816 24.0714 8.51855 19.7772 4.22305L18.3628 5.63705ZM20.07 19.0701V4.93005H18.07V19.0701H20.07ZM5.63721 18.3631C2.12378 14.8486 2.12378 9.15155 5.63721 5.63705L4.22279 4.22305C-0.071414 8.51855 -0.071414 15.4816 4.22279 19.7771L5.63721 18.3631ZM3.93 4.93005V19.0701H5.93V4.93005H3.93Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'printer'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9V2H18V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 18H4C2.89543 18 2 17.1046 2 16V11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V16C22 17.1046 21.1046 18 20 18H18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 14H18V22H6V14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'music'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 17H10C10 16.4477 9.55228 16 9 16V17ZM21 15H22C22 14.4477 21.5523 14 21 14V15ZM9 16H5V18H9V16ZM5 16C3.34315 16 2 17.3431 2 19H4C4 18.4477 4.44772 18 5 18V16ZM2 19C2 20.6569 3.34315 22 5 22V20C4.44772 20 4 19.5523 4 19H2ZM5 22H7V20H5V22ZM7 22C8.65685 22 10 20.6569 10 19H8C8 19.5523 7.55228 20 7 20V22ZM10 19V17H8V19H10ZM21 14H17V16H21V14ZM17 14C15.3431 14 14 15.3431 14 17H16C16 16.4477 16.4477 16 17 16V14ZM14 17C14 18.6569 15.3431 20 17 20V18C16.4477 18 16 17.5523 16 17H14ZM17 20H19V18H17V20ZM19 20C20.6569 20 22 18.6569 22 17H20C20 17.5523 19.5523 18 19 18V20ZM22 17V15H20V17H22Z"
      fill="#FF7C1E"
    />
    <path
      d="M9 17V5L21 3V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'monitor'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 21H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 17V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'mic'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 19V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 23H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'mic-off'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L23 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 9.00002C10 8.44773 9.55228 8.00002 9 8.00002C8.44772 8.00002 8 8.44773 8 9.00002H10ZM9 12H8L8 12.0009L9 12ZM10.8523 14.7692L11.2349 13.8452L10.8523 14.7692ZM14.8267 14.8276C15.2174 14.4373 15.2178 13.8041 14.8275 13.4133C14.4373 13.0226 13.8041 13.0222 13.4133 13.4125L14.8267 14.8276ZM14.0001 9.34001C14.0001 9.8923 14.4478 10.34 15.0001 10.34C15.5523 10.34 16.0001 9.8923 16.0001 9.34001H14.0001ZM15.0001 4.00001L14.0001 3.99901V4.00001H15.0001ZM12.3016 1.01219L12.4021 0.017249L12.3016 1.01219ZM8.08006 3.20102C7.97016 3.74226 8.31982 4.27011 8.86106 4.38001C9.4023 4.48992 9.93016 4.14025 10.0401 3.59901L8.08006 3.20102ZM8 9.00002V12H10V9.00002H8ZM8 12.0009C8.00142 13.6177 8.97597 15.0746 10.4697 15.6931L11.2349 13.8452C10.488 13.536 10.0007 12.8075 10 11.9991L8 12.0009ZM10.4697 15.6931C11.9635 16.3116 13.6827 15.9701 14.8267 14.8276L13.4133 13.4125C12.8414 13.9837 11.9818 14.1545 11.2349 13.8452L10.4697 15.6931ZM16.0001 9.34001V4.00001H14.0001V9.34001H16.0001ZM16.0001 4.00102C16.0021 1.94601 14.4467 0.223775 12.4021 0.017249L12.2011 2.00712C13.2234 2.11039 14.0011 2.9715 14.0001 3.99901L16.0001 4.00102ZM12.4021 0.017249C10.3574 -0.189277 8.489 1.1871 8.08006 3.20102L10.0401 3.59901C10.2445 2.59205 11.1788 1.90386 12.2011 2.00712L12.4021 0.017249Z"
      fill="#FF7C1E"
    />
    <path
      d="M17.7143 17.6498C18.1008 17.2553 18.0943 16.6222 17.6998 16.2357C17.3053 15.8492 16.6721 15.8557 16.2856 16.2502L17.7143 17.6498ZM4.99994 12L5.99994 12.0073V12H4.99994ZM5.99994 10C5.99994 9.44772 5.55223 9 4.99994 9C4.44766 9 3.99994 9.44772 3.99994 10H5.99994ZM19.9999 10C19.9999 9.44772 19.5522 9 18.9999 9C18.4476 9 17.9999 9.44772 17.9999 10H19.9999ZM18.9999 12L19.9999 12.0009V12H18.9999ZM17.9056 13.0534C17.8081 13.597 18.1697 14.1168 18.7133 14.2143C19.2569 14.3118 19.7767 13.9502 19.8742 13.4066L17.9056 13.0534ZM16.2856 16.2502C14.5739 17.9974 11.9729 18.5306 9.71177 17.5978L8.94911 19.4467C11.964 20.6903 15.4319 19.9794 17.7143 17.6498L16.2856 16.2502ZM9.71177 17.5978C7.45063 16.6651 5.98202 14.4532 5.99992 12.0073L3.99997 11.9927C3.97611 15.2539 5.93426 18.2031 8.94911 19.4467L9.71177 17.5978ZM5.99994 12V10H3.99994V12H5.99994ZM17.9999 10V12H19.9999V10H17.9999ZM17.9999 11.9991C17.9996 12.3526 17.968 12.7055 17.9056 13.0534L19.8742 13.4066C19.9574 12.9426 19.9995 12.4722 19.9999 12.0009L17.9999 11.9991Z"
      fill="#FF7C1E"
    />
    <path
      d="M12 19V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 23H16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'layout'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 9H21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 21V9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'grid'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 3H10V10H3V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 3H21V10H14V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 14H21V21H14V14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 14H10V21H3V14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'gitlab'"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.65 14.39L12 22.13L1.35002 14.39C1.05713 14.1746 0.93606 13.7952 1.05002 13.45L2.27002 9.66996L4.71002 2.15996C4.73368 2.09877 4.77136 2.04397 4.82002 1.99996C4.98425 1.84995 5.23578 1.84995 5.40002 1.99996C5.4514 2.04963 5.48926 2.11158 5.51002 2.17996L7.95002 9.66996H16.05L18.49 2.15996C18.5137 2.09877 18.5514 2.04397 18.6 1.99996C18.7643 1.84995 19.0158 1.84995 19.18 1.99996C19.2314 2.04963 19.2693 2.11158 19.29 2.17996L21.73 9.68996L23 13.45C23.1038 13.8062 22.9615 14.1883 22.65 14.39Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'github'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 20.0001L9.28735 20.9579C9.69033 20.837 9.97454 20.4768 9.99839 20.0567C10.0222 19.6367 9.78063 19.2466 9.39392 19.0809L9 20.0001ZM2 17.0001L2.24254 16.0299C1.73679 15.9035 1.21876 16.1868 1.05233 16.6808C0.885901 17.1748 1.12692 17.7139 1.60608 17.9192L2 17.0001ZM15 23.0001C15 23.5523 15.4477 24.0001 16 24.0001C16.5523 24.0001 17 23.5523 17 23.0001H15ZM16 19.1301L15.0031 19.0516C15.001 19.0777 15 19.1039 15 19.1301H16ZM15.06 16.5201L14.9492 15.5262C14.57 15.5685 14.2479 15.8228 14.1189 16.1819C13.9899 16.541 14.0764 16.9422 14.342 17.2161L15.06 16.5201ZM21.5 9.52006H22.5V9.51988L21.5 9.52006ZM20 5.77006L19.0631 5.42042C18.9293 5.77895 19.0119 6.18241 19.2757 6.45958L20 5.77006ZM19.91 2.00006L20.8291 1.60611C20.712 1.33286 20.4794 1.12588 20.1944 1.04134L19.91 2.00006ZM16 3.48006L15.7384 4.44524C16.0178 4.52097 16.3163 4.47189 16.5568 4.3107L16 3.48006ZM9 3.48006L8.44319 4.3107C8.68366 4.47189 8.98217 4.52097 9.26158 4.44524L9 3.48006ZM5.09 2.00006L4.80563 1.04134C4.52061 1.12588 4.28799 1.33286 4.17087 1.60611L5.09 2.00006ZM5 5.77006L5.72425 6.4596C5.98813 6.18243 6.07069 5.77896 5.93688 5.42042L5 5.77006ZM3.5 9.55006H4.50001L4.49999 9.54474L3.5 9.55006ZM9.94 16.5501L10.6586 17.2455C10.9223 16.973 11.0092 16.5749 10.8831 16.2174C10.7569 15.8599 10.4395 15.6044 10.0633 15.5577L9.94 16.5501ZM9 19.1301H10C10 19.1067 9.99918 19.0833 9.99754 19.0599L9 19.1301ZM8 23.0001C8 23.5523 8.44771 24.0001 9 24.0001C9.55228 24.0001 10 23.5523 10 23.0001H8ZM8.71265 19.0422C7.57636 19.3831 6.82286 19.3817 6.30601 19.2607C5.80203 19.1428 5.42857 18.8894 5.08211 18.543C4.90325 18.3641 4.73545 18.1643 4.5569 17.9406C4.39069 17.7324 4.18875 17.4689 3.99562 17.2422C3.60492 16.7836 3.05841 16.2339 2.24254 16.0299L1.75746 17.9702C1.94159 18.0162 2.14508 18.1541 2.47313 18.5392C2.63937 18.7343 2.789 18.9318 2.99388 19.1884C3.18643 19.4296 3.40925 19.6985 3.66789 19.9572C4.19643 20.4857 4.88547 20.9823 5.85024 21.2081C6.80214 21.4309 7.92364 21.367 9.28735 20.9579L8.71265 19.0422ZM1.60608 17.9192L8.60608 20.9192L9.39392 19.0809L2.39392 16.0809L1.60608 17.9192ZM17 23.0001V19.1301H15V23.0001H17ZM16.9969 19.2085C17.0953 17.9577 16.6513 16.7249 15.778 15.824L14.342 17.2161C14.8157 17.7047 15.0564 18.3733 15.0031 19.0516L16.9969 19.2085ZM15.1708 17.5139C16.797 17.3326 18.652 16.9201 20.1011 15.7017C21.5987 14.4424 22.5 12.4663 22.5 9.52006H20.5C20.5 12.0338 19.7513 13.3827 18.8139 14.1709C17.828 15 16.463 15.3575 14.9492 15.5262L15.1708 17.5139ZM22.5 9.51988C22.4997 7.86705 21.8639 6.27762 20.7243 5.08054L19.2757 6.45958C20.0615 7.2849 20.4998 8.38072 20.5 9.52024L22.5 9.51988ZM20.9369 6.1197C21.4827 4.65728 21.4441 3.04082 20.8291 1.60611L18.9909 2.39401C19.4032 3.356 19.4291 4.43985 19.0631 5.42042L20.9369 6.1197ZM19.91 2.00006C20.1944 1.04134 20.1934 1.04106 20.1924 1.04077C20.1921 1.04067 20.1911 1.04039 20.1905 1.04019C20.1891 1.03981 20.1878 1.03942 20.1864 1.03903C20.1837 1.03824 20.1809 1.03745 20.178 1.03664C20.1723 1.03504 20.1662 1.03339 20.1598 1.03172C20.1471 1.02838 20.1331 1.02493 20.1178 1.02147C20.0873 1.01453 20.0519 1.00752 20.0115 1.00107C19.9305 0.988171 19.8304 0.977644 19.7105 0.974344C19.4702 0.967731 19.1553 0.990269 18.762 1.07758C17.9773 1.2518 16.8856 1.6825 15.4432 2.64942L16.5568 4.3107C17.8444 3.44762 18.7077 3.13832 19.1955 3.03004C19.4385 2.9761 19.5892 2.97176 19.6555 2.97359C19.6889 2.97451 19.7022 2.97703 19.6965 2.97612C19.6937 2.97567 19.6863 2.97439 19.6744 2.97169C19.6684 2.97033 19.6614 2.96863 19.6532 2.9665C19.6492 2.96544 19.6448 2.96427 19.6402 2.96298C19.6379 2.96234 19.6356 2.96167 19.6331 2.96097C19.6319 2.96062 19.6307 2.96026 19.6294 2.95989C19.6288 2.95971 19.6279 2.95943 19.6275 2.95934C19.6266 2.95906 19.6256 2.95878 19.91 2.00006ZM16.2616 2.51488C13.7983 1.84728 11.2017 1.84728 8.73842 2.51488L9.26158 4.44524C11.3823 3.87049 13.6177 3.87049 15.7384 4.44524L16.2616 2.51488ZM9.5568 2.64942C8.11435 1.6825 7.02274 1.2518 6.23798 1.07758C5.8447 0.990269 5.52982 0.967731 5.28952 0.974344C5.16963 0.977644 5.06945 0.988171 4.98854 1.00107C4.94814 1.00752 4.91271 1.01453 4.8822 1.02147C4.86695 1.02493 4.85294 1.02838 4.84018 1.03172C4.8338 1.03339 4.82773 1.03504 4.82197 1.03664C4.81909 1.03745 4.81629 1.03824 4.81357 1.03903C4.81221 1.03942 4.81087 1.03981 4.80954 1.04019C4.80888 1.04039 4.8079 1.04067 4.80757 1.04077C4.8066 1.04106 4.80563 1.04134 5.09 2.00006C5.37436 2.95878 5.37341 2.95906 5.37245 2.95934C5.37214 2.95943 5.37119 2.95971 5.37056 2.95989C5.36931 2.96026 5.36808 2.96062 5.36686 2.96097C5.36443 2.96167 5.36206 2.96234 5.35976 2.96298C5.35516 2.96427 5.35082 2.96544 5.34676 2.9665C5.33862 2.96863 5.33158 2.97034 5.32564 2.97169C5.31374 2.97439 5.30633 2.97567 5.30353 2.97612C5.29781 2.97703 5.31115 2.97451 5.34454 2.97359C5.4108 2.97176 5.56155 2.9761 5.80452 3.03004C6.29226 3.13832 7.15565 3.44762 8.44319 4.3107L9.5568 2.64942ZM4.17087 1.60611C3.55594 3.04082 3.51735 4.65728 4.06312 6.1197L5.93688 5.42042C5.57094 4.43985 5.59681 3.356 6.00913 2.39401L4.17087 1.60611ZM4.27575 5.08052C3.12759 6.28648 2.49116 7.89028 2.50001 9.55538L4.49999 9.54474C4.49388 8.39676 4.93266 7.29104 5.72425 6.4596L4.27575 5.08052ZM2.5 9.55006C2.5 12.4795 3.40326 14.444 4.89892 15.7017C6.34442 16.9172 8.19555 17.3411 9.81674 17.5424L10.0633 15.5577C8.54445 15.369 7.17558 15.003 6.18608 14.1709C5.24674 13.3811 4.5 12.0406 4.5 9.55006H2.5ZM9.2214 15.8546C8.35857 16.7462 7.91542 17.9626 8.00246 19.2002L9.99754 19.0599C9.95033 18.3887 10.1907 17.729 10.6586 17.2455L9.2214 15.8546ZM8 19.1301V23.0001H10V19.1301H8Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'film'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4.18C2 2.97602 2.97602 2 4.18 2H19.82C21.024 2 22 2.97602 22 4.18V19.82C22 21.024 21.024 22 19.82 22H4.18C2.97602 22 2 21.024 2 19.82V4.18Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 2V22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 2V22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 12H22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 7H7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 17H7"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 17H22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 7H22"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'feather'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.24 13.24C22.5844 10.8956 22.5844 7.09448 20.24 4.75004C17.8956 2.40559 14.0944 2.40559 11.75 4.75004L5 11.5V20H13.5L20.24 13.24Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 9L2 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 16H9"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'disc'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'credit-card'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 10H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'cpu'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 9H15V15H9V9Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 1V4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 1V4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 20V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 20V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 9H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 14H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 9H4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 14H4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'chrome'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.17 8H12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.94995 6.06006L8.53995 14.0001"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.88 21.94L15.46 14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'cast'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16.1L2.19983 15.1202C1.76736 15.032 1.32822 15.2377 1.11922 15.6265C0.910221 16.0152 0.980799 16.495 1.29289 16.8071L2 16.1ZM5.9 20L5.19289 20.7071C5.50499 21.0192 5.98478 21.0898 6.37353 20.8808C6.76228 20.6718 6.96803 20.2326 6.87983 19.8002L5.9 20ZM2 12.05L2.11054 11.0561C1.68843 11.0092 1.28272 11.234 1.09872 11.6168C0.914721 11.9995 0.992579 12.4568 1.29289 12.7571L2 12.05ZM9.95 20L9.24289 20.7071C9.54321 21.0074 10.0005 21.0853 10.3832 20.9013C10.766 20.7173 10.9908 20.3116 10.9439 19.8895L9.95 20ZM1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8H1ZM14 19C13.4477 19 13 19.4477 13 20C13 20.5523 13.4477 21 14 21V19ZM1.80017 17.0798C3.3716 17.4003 4.59969 18.6284 4.92017 20.1998L6.87983 19.8002C6.39911 17.443 4.55698 15.6009 2.19983 15.1202L1.80017 17.0798ZM6.60711 19.2929L2.70711 15.3929L1.29289 16.8071L5.19289 20.7071L6.60711 19.2929ZM1.88946 13.0439C5.60756 13.4574 8.5426 16.3924 8.95613 20.1105L10.9439 19.8895C10.427 15.2418 6.75816 11.573 2.11054 11.0561L1.88946 13.0439ZM10.6571 19.2929L2.70711 11.3429L1.29289 12.7571L9.24289 20.7071L10.6571 19.2929ZM3 8V6H1V8H3ZM3 6C3 5.44772 3.44772 5 4 5V3C2.34315 3 1 4.34315 1 6H3ZM4 5H20V3H4V5ZM20 5C20.5523 5 21 5.44771 21 6H23C23 4.34315 21.6569 3 20 3V5ZM21 6V18H23V6H21ZM21 18C21 18.5523 20.5523 19 20 19V21C21.6569 21 23 19.6569 23 18H21ZM20 19H14V21H20V19Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'bluetooth'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 6.5L17.5 17.5L12 23V1L17.5 6.5L6.5 17.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'battery'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 8C1 6.89543 1.89543 6 3 6H17C18.1046 6 19 6.89543 19 8V16C19 17.1046 18.1046 18 17 18H3C1.89543 18 1 17.1046 1 16V8Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 13V11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'battery-charging'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17V19ZM1 16H0H1ZM6.19 7C6.74228 7 7.19 6.55228 7.19 6C7.19 5.44772 6.74228 5 6.19 5V7ZM15.0001 5C14.4478 5 14.0001 5.44772 14.0001 6C14.0001 6.55228 14.4478 7 15.0001 7V5ZM13.8101 17C13.2578 17 12.8101 17.4477 12.8101 18C12.8101 18.5523 13.2578 19 13.8101 19V17ZM5 17H3V19H5V17ZM3 17C2.44772 17 2 16.5523 2 16H0C0 17.6569 1.34315 19 3 19V17ZM2 16V8H0V16H2ZM2 8C2 7.44772 2.44772 7 3 7V5C1.34315 5 0 6.34315 0 8H2ZM3 7H6.19V5H3V7ZM15.0001 7H17.0001V5H15.0001V7ZM17.0001 7C17.5523 7 18.0001 7.44772 18.0001 8H20.0001C20.0001 6.34315 18.6569 5 17.0001 5V7ZM18.0001 8V16H20.0001V8H18.0001ZM18.0001 16C18.0001 16.5523 17.5523 17 17.0001 17V19C18.6569 19 20.0001 17.6569 20.0001 16H18.0001ZM17.0001 17H13.8101V19H17.0001V17Z"
      fill="#FF7C1E"
    />
    <path
      d="M23 13V11"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 6L7 12H13L9 18"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'bar-chart'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 3H22V21H18V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 8H14V21H10V8Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 13H6V21H2V13Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'bar-chart-2'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 3H14V21H10V3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 8H22V21H18V8Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 13H6V21H2V13Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'aperture'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.3101 8L20.0501 17.94"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.68994 8H21.1699"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.38 12.0001L13.12 2.06006"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.68995 16.0001L3.94995 6.06006"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.31 16H2.82996"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.62 12L10.88 21.94"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'airplay'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 16H4C2.89543 16 2 15.1046 2 14V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V14C22 15.1046 21.1046 16 20 16H19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 14L17 20H7L12 14V14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'underline'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 2V9C6 12.3137 8.68629 15 12 15C15.3137 15 18 12.3137 18 9V2"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 20H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'type'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6V3H20V6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 19H15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 3V19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'triangle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.29 3.85996L1.82002 18C1.46466 18.6154 1.46254 19.3731 1.81445 19.9905C2.16635 20.6079 2.81943 20.9921 3.53002 21H20.47C21.1806 20.9921 21.8337 20.6079 22.1856 19.9905C22.5375 19.3731 22.5354 18.6154 22.18 18L13.71 3.85996C13.3475 3.26224 12.6991 2.89722 12 2.89722C11.3009 2.89722 10.6526 3.26224 10.29 3.85996Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'time-icon'"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 5V10.9999L14.5 14"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'text-star'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4V12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 12V20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L11.66 11.66"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 12L17.66 17.66"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 12H12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 12H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 17.66L11.66 12"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 11.66L17.66 6"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'target'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'student'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7209 5L22.0001 8.53487L12.7209 12.382L3.44177 8.53487L12.7209 5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.401 9.75049V17.25C7.36215 17.7704 10.0129 18.7955 12.9267 18.7331C15.8405 18.6706 18.3395 17.7184 19.2247 17.25V9.75049"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.168 8.65784H3.40381V15.4877"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.7588 15.5267C2.98644 15.4876 3.23361 15.4486 3.44172 15.4486C3.64983 15.4486 3.897 15.4876 4.12464 15.5267L4.88344 18.6489C4.88344 18.6489 4.4661 19.0001 3.44172 19.0001C2.41734 19.0001 2 18.6489 2 18.6489L2.7588 15.5267Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'star'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'square'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'slash'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.93005 4.93005L19.0701 19.0701"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'slack'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.08 8.99994C19.81 1.40994 16.54 -0.350055 9.00002 1.91995C1.46002 4.18994 -0.349983 7.45994 1.92002 14.9999C4.19002 22.5399 7.46002 24.3499 15 22.0799C22.54 19.8099 24.35 16.5399 22.08 8.99994Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5701 5.98999L16.1501 16.39"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.8501 7.60999L11.4301 18.01"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.39 7.84998L5.98999 11.43"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.01 12.5699L7.60999 16.1499"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'shield'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C12 22 20 18 20 12V4L12 2L4 4V12C4 18 12 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'pocket'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 3H20C21.1046 3 22 3.89543 22 5V11C22 16.5228 17.5228 21 12 21C9.34784 21 6.8043 19.9464 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11V5C2 3.89543 2.89543 3 4 3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 10L12 14L16 10"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'percent'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5L5 19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.5 9C7.88071 9 9 7.88071 9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'octagon'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'life-buoy'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.93005 4.93005L9.17005 9.17005"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.83 14.83L19.07 19.07"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.83 9.17005L19.07 4.93005"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.83 9.17001L18.36 5.64001"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.93005 19.07L9.17005 14.83"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'italic'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4H10"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 20H5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 4L9 20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'heart'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.84 4.60999C19.8085 3.57799 18.4091 2.99817 16.95 2.99817C15.4909 2.99817 14.0915 3.57799 13.06 4.60999L12 5.66999L10.94 4.60999C8.79161 2.46161 5.30838 2.46161 3.16 4.60999C1.01161 6.75838 1.01161 10.2416 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.872 11.3585 22.4518 9.95913 22.4518 8.49999C22.4518 7.04086 21.872 5.64152 20.84 4.60999Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'hash'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 9H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 15H20"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 3L8 21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 3L14 21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'flag'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 22V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'compass'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.24 7.76001L14.12 14.12L7.76001 16.24L9.88001 9.88001L16.24 7.76001V7.76001Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'command'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 3C16.3431 3 15 4.34315 15 6V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H6C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'codepen'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22V15.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 8.5L12 15.5L2 8.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 15.5L12 8.5L22 15.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V8.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'circle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'briefcase'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'bold'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 4H13C15.2091 4 17 5.79086 17 8C17 10.2091 15.2091 12 13 12H5V4Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 12H14C16.2091 12 18 13.7909 18 16C18 18.2091 16.2091 20 14 20H5V12Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'award'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'at-sign'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 12V13C16 14.6568 17.3431 16 19 16C20.6568 16 22 14.6568 22 13V12C21.9997 7.35289 18.7981 3.3184 14.2726 2.26228C9.74712 1.20617 5.09046 3.40678 3.03324 7.57371C0.976012 11.7406 2.06043 16.7756 5.65061 19.7263C9.24079 22.6769 14.3905 22.7654 18.08 19.94"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'anchor'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22V8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12H2C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12H19"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'activity'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11H18L15 20L9 2L6 11H2"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'zap'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 2L3 14H12L11 22L21 10H12L13 2V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'wind'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.8808 3.88502C8.49144 4.2767 8.49331 4.90986 8.88499 5.29923C9.27667 5.68859 9.90983 5.68672 10.2992 5.29504L8.8808 3.88502ZM11 8.00003L11.0042 7.00003H11V8.00003ZM2 7.00003C1.44772 7.00003 1 7.44775 1 8.00003C1 8.55232 1.44772 9.00003 2 9.00003V7.00003ZM13.2992 18.705C12.9098 18.3133 12.2767 18.3115 11.885 18.7008C11.4933 19.0902 11.4914 19.7234 11.8808 20.115L13.2992 18.705ZM15.0074 19.7326L15.5069 20.599L15.0074 19.7326ZM15.9393 17.4789L16.9048 17.2183L15.9393 17.4789ZM14 16V17L14.0042 17L14 16ZM2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17V15ZM17.0238 7.02203C16.6328 7.41206 16.632 8.04522 17.022 8.43624C17.412 8.82726 18.0452 8.82806 18.4362 8.43803L17.0238 7.02203ZM19.5 12V13L19.5018 13L19.5 12ZM2 11C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13V11ZM10.2992 5.29504C10.6189 4.97342 11.115 4.90721 11.5079 5.13374L12.5069 3.40111C11.3283 2.72155 9.83995 2.92017 8.8808 3.88502L10.2992 5.29504ZM11.5079 5.13374C11.9008 5.36026 12.092 5.82279 11.9739 6.26062L13.9048 6.78175C14.2593 5.46827 13.6855 4.08067 12.5069 3.40111L11.5079 5.13374ZM11.9739 6.26062C11.8557 6.69844 11.4577 7.00194 11.0042 7.00004L10.9958 9.00002C12.3563 9.00573 13.5503 8.09524 13.9048 6.78175L11.9739 6.26062ZM11 7.00003H2V9.00003H11V7.00003ZM11.8808 20.115C12.84 21.0799 14.3283 21.2785 15.5069 20.599L14.5079 18.8663C14.115 19.0928 13.6189 19.0266 13.2992 18.705L11.8808 20.115ZM15.5069 20.599C16.6855 19.9194 17.2593 18.5318 16.9048 17.2183L14.9739 17.7394C15.092 18.1773 14.9008 18.6398 14.5079 18.8663L15.5069 20.599ZM16.9048 17.2183C16.5503 15.9048 15.3563 14.9943 13.9958 15L14.0042 17C14.4577 16.9981 14.8557 17.3016 14.9739 17.7394L16.9048 17.2183ZM14 15H2V17H14V15ZM18.4362 8.43803C18.9165 7.95898 19.6585 7.86187 20.2458 8.20118L21.2463 6.46938C19.8757 5.67764 18.1444 5.90424 17.0238 7.02203L18.4362 8.43803ZM20.2458 8.20118C20.8332 8.5405 21.1198 9.23178 20.9447 9.88715L22.877 10.4033C23.2854 8.87412 22.6168 7.26112 21.2463 6.46938L20.2458 8.20118ZM20.9447 9.88715C20.7697 10.5425 20.1765 10.9988 19.4982 11L19.5018 13C21.0846 12.9972 22.4685 11.9325 22.877 10.4033L20.9447 9.88715ZM19.5 11H2V13H19.5V11Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'umbrella'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.0001 12V13C23.2818 13 23.5505 12.8811 23.74 12.6727C23.9295 12.4642 24.0223 12.1854 23.9955 11.905L23.0001 12ZM1.00006 12L0.00458592 11.905C-0.0221863 12.1854 0.0705988 12.4642 0.260121 12.6727C0.449643 12.8811 0.718316 13 1.00006 13V12ZM18.0001 19H19.0001C19.0001 18.7613 18.9147 18.5305 18.7593 18.3492L18.0001 19ZM12.0001 12L12.7593 11.3492C12.487 11.0315 12.0456 10.9169 11.6531 11.0621C11.2606 11.2073 11.0001 11.5815 11.0001 12H12.0001ZM23.9955 11.905C23.4053 5.7216 18.2115 1 12.0001 1V3C17.1806 3 21.5123 6.93793 22.0046 12.095L23.9955 11.905ZM12.0001 1C5.78858 1 0.594817 5.7216 0.00458592 11.905L1.99554 12.095C2.4878 6.93793 6.81953 3 12.0001 3V1ZM1.00006 13H23.0001V11H1.00006V13ZM17.0001 19C17.0001 20.1046 16.1046 21 15.0001 21V23C17.2092 23 19.0001 21.2091 19.0001 19H17.0001ZM15.0001 21C13.8955 21 13.0001 20.1046 13.0001 19H11.0001C11.0001 21.2091 12.7909 23 15.0001 23V21ZM13.0001 19V12H11.0001V19H13.0001ZM11.2408 12.6508L17.2408 19.6508L18.7593 18.3492L12.7593 11.3492L11.2408 12.6508Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'thermometer'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 14.76V3.5C14 2.11929 12.8807 1 11.5 1C10.1193 1 8.99998 2.11929 8.99998 3.5V14.76C7.35187 15.8612 6.61837 17.9111 7.19374 19.8079C7.76911 21.7047 9.51784 23.0017 11.5 23.0017C13.4821 23.0017 15.2309 21.7047 15.8062 19.8079C16.3816 17.9111 15.6481 15.8612 14 14.76V14.76Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'sunset'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V1"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.21997 9.21997L5.63997 10.64"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 17H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 17H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.36 10.64L19.78 9.21997"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 21H1"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 4L12 8L8 4"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-if="type === 'white-square'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 8V16"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'white-loader'"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 100 100"
    overflow="visible"
    fill="#fff"
    stroke="none"
  >
    <defs>
      <rect
        id="loader"
        x="46.5"
        y="40"
        width="7"
        height="20"
        rx="2"
        ry="2"
        transform="translate(0 -30)"
      />
    </defs>
    <g class="loader" transform="rotate(45 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(90 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(135 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(180 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(225 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(270 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(315 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(360 50 50)">
      <use xlink:href="#loader" />
    </g>
  </svg>

  <svg
    v-if="type === 'orange-loader'"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 100 100"
    overflow="visible"
    fill="#ff7c1e"
    stroke="none"
  >
    <defs>
      <rect
        id="loader"
        x="46.5"
        y="40"
        width="7"
        height="20"
        rx="2"
        ry="2"
        transform="translate(0 -30)"
      />
    </defs>
    <g class="loader" transform="rotate(45 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(90 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(135 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(180 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(225 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(270 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(315 50 50)">
      <use xlink:href="#loader" />
    </g>
    <g class="loader" transform="rotate(360 50 50)">
      <use xlink:href="#loader" />
    </g>
  </svg>

  <svg
    v-if="type === 'done'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12C22 6.47917 17.5208 2 12 2C6.47917 2 2 6.47917 2 12C2 17.5208 6.47917 22 12 22C17.5208 22 22 17.5208 22 12Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M17.8333 8.66663L12.0067 15.3333L9.50933 12.8333M8.66402 15.3333L6.16663 12.8333M14.589 8.66663L11.9041 11.7395"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'facebook'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 2H14C11.2386 2 9 4.23858 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.44772 13.4477 6 14 6H17V2Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'instagram'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.0001 11.37C16.2532 13.077 15.3831 14.7538 13.8417 15.5297C12.3003 16.3055 10.4351 16.0054 9.2149 14.7852C7.99469 13.5649 7.69455 11.6998 8.47038 10.1584C9.24621 8.61697 10.9231 7.74687 12.6301 7.99999C14.373 8.25846 15.7416 9.62702 16.0001 11.37Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'telegram'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 11L11 15L17 21L21 5L3 12L7 14L9 20L12 16"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'twitter'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23 3.00001C22.0424 3.67549 20.9821 4.19212 19.86 4.53001C18.6264 3.11155 16.6384 2.61412 14.8821 3.28446C13.1258 3.9548 11.9748 5.65031 12 7.53001V8.53001C8.43066 8.62256 5.05203 6.92198 3 4.00001C3 4.00001 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.50001C20.9991 7.22146 20.9723 6.9436 20.92 6.67001C21.9406 5.6635 22.6608 4.39272 23 3.00001Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'sad-smile'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4444 9.5C15 10.6111 17.2222 10.6111 17.7778 9.5M6.66667 9.5C7.22222 10.6111 9.44444 10.6111 10 9.5M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 17C15 16.2044 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14C11.2044 14 10.4413 14.3161 9.87868 14.8787C9.31607 15.4413 9 16.2044 9 17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'sorrow-smile'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17317C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.33338 9.5H8.83338M15 9.5H15.5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.22228 16.5005C9.58436 16.1309 10.0166 15.8373 10.4935 15.6369C10.9705 15.4365 11.4827 15.3333 12.0001 15.3333C12.5174 15.3333 13.0296 15.4365 13.5066 15.6369C13.9836 15.8373 14.4157 16.1309 14.7778 16.5005"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'gloom-smile'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.66666 9.77778H8.65555M15.3333 9.77778H15.3222M7.55556 15.3333H16.4444M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17317C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'smile'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7778 15.3333C14.4157 15.7029 13.9835 15.9965 13.5065 16.1969C13.0295 16.3973 12.5174 16.5006 12 16.5006C11.4826 16.5006 10.9705 16.3973 10.4935 16.1969C10.0165 15.9965 9.58431 15.7029 9.22222 15.3333M8.33333 9.5H8.83333M15 9.5H15.5M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17317C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'happy-smile'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.77778 9.77778C9.22222 8.66667 7 8.66667 6.44444 9.77778M17.5556 9.77778C17 8.66667 14.7778 8.66667 14.2222 9.77778M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22ZM9 13.5H15C15 14.2956 14.6839 15.0587 14.1213 15.6213C13.5587 16.1839 12.7956 16.5 12 16.5C11.2044 16.5 10.4413 16.1839 9.87868 15.6213C9.31607 15.0587 9 14.2956 9 13.5Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'cloud-drizzle'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 13V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 19V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 13V15"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 21V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 15V17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 16.58C22.1667 15.6311 23.372 13.2937 22.8886 10.9782C22.4052 8.66276 20.3654 7.00283 18 7.00005H16.74C15.8696 3.6295 12.9195 1.2087 9.4439 1.01299C5.96829 0.817275 2.76507 2.89158 1.52177 6.1431C0.278473 9.39462 1.28053 13.0769 4.00003 15.25"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'cloud-lightning'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.9999 16.9001C21.5173 16.3889 23.2378 14.0533 22.9797 11.4976C22.7215 8.9418 20.5687 6.99747 17.9999 7.00005H16.7399C15.8277 3.46824 12.6419 1.00073 8.99415 1.00073C5.34643 1.00073 2.1606 3.46824 1.24836 7.00005C0.336121 10.5319 1.92849 14.2335 5.11995 16.0001"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 11L9 17H15L11 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'cloud-off'"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.8189 16.56C21.6035 17.0686 21.8411 17.6554 22.3497 17.8708C22.8582 18.0862 23.4451 17.8486 23.6605 17.34L21.8189 16.56ZM22.3023 12.2362L21.469 12.7889L22.3023 12.2362ZM18.1297 10L18.1297 11L18.1309 11L18.1297 10ZM16.8697 10L15.9004 10.2461C16.013 10.6895 16.4122 11 16.8697 11V10ZM9.90768 3.00388C9.35753 2.95528 8.87216 3.36187 8.82357 3.91201C8.77497 4.46215 9.18155 4.94753 9.7317 4.99612L9.90768 3.00388ZM5.61367 5.87513C6.09699 5.60789 6.27215 4.99943 6.00491 4.51611C5.73767 4.03279 5.12921 3.85763 4.64589 4.12487L5.61367 5.87513ZM9.12978 20V19C9.12441 19 9.11904 19 9.11367 19.0001L9.12978 20ZM18.1298 20V21H18.131L18.1298 20ZM20.171 20.64C20.6901 20.4516 20.9582 19.878 20.7698 19.3588C20.5814 18.8397 20.0078 18.5716 19.4886 18.76L20.171 20.64ZM23.6605 17.34C24.4458 15.4859 24.2487 13.3614 23.1357 11.6834L21.469 12.7889C22.211 13.9076 22.3424 15.3239 21.8189 16.56L23.6605 17.34ZM23.1357 11.6834C22.0226 10.0054 20.1421 8.99761 18.1285 9L18.1309 11C19.4733 10.9984 20.7269 11.6703 21.469 12.7889L23.1357 11.6834ZM18.1297 9H16.8697V11H18.1297V9ZM17.8389 9.75388C16.8977 6.04736 13.717 3.34036 9.90768 3.00388L9.7317 4.99612C12.6945 5.25783 15.1684 7.36328 15.9004 10.2461L17.8389 9.75388ZM4.64589 4.12487C1.03034 6.12403 -0.759748 10.3281 0.304772 14.32L2.23724 13.8047C1.40928 10.6998 2.80157 7.43003 5.61367 5.87513L4.64589 4.12487ZM0.304772 14.32C1.36929 18.312 5.01498 21.0664 9.14589 20.9999L9.11367 19.0001C5.90074 19.0519 3.0652 16.9095 2.23724 13.8047L0.304772 14.32ZM9.12978 21H18.1298V19H9.12978V21ZM18.131 21C18.8267 20.9992 19.517 20.8774 20.171 20.64L19.4886 18.76C19.0526 18.9182 18.5924 18.9995 18.1286 19L18.131 21Z"
      fill="#FF7C1E"
    />
    <path
      d="M1 1L23 23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'cloud-rain'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 13V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 13V21"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 15V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 16.58C22.1667 15.6311 23.372 13.2937 22.8886 10.9782C22.4052 8.66276 20.3654 7.00283 18 7.00005H16.74C15.8696 3.6295 12.9195 1.2087 9.4439 1.01299C5.96829 0.817275 2.76507 2.89158 1.52177 6.1431C0.278473 9.39462 1.28053 13.0769 4.00003 15.25"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'cloud-snow'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.0064 19.5798C22.1731 18.6309 23.3784 16.2935 22.895 13.978C22.4116 11.6625 20.3718 10.0026 18.0064 9.9998H16.7464C15.876 6.62925 12.9259 4.20846 9.45025 4.01274C5.97464 3.81703 2.77142 5.89133 1.52812 9.14285C0.284821 12.3944 1.28687 16.0767 4.00637 18.2498"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'cloud'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 10.001H16.74C15.7004 5.97489 11.7499 3.4164 7.65079 4.11456C3.55168 4.81273 0.670838 8.53475 1.02271 12.678C1.37458 16.8212 4.84185 20.0041 8.99998 20.001H18C20.7614 20.001 23 17.7624 23 15.001C23 12.2396 20.7614 10.001 18 10.001Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'droplet'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 2.68994L16.66 8.34994C18.9491 10.6375 19.6345 14.0789 18.3965 17.0689C17.1586 20.0589 14.2412 22.0086 11.005 22.0086C7.76882 22.0086 4.8514 20.0589 3.61346 17.0689C2.37552 14.0789 3.06092 10.6375 5.35 8.34994L11 2.68994Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'medic'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 6H15V5H14V6ZM14 10H13V11H14V10ZM10 6V5H9.00002V6H10ZM10 10V11H11V10H10ZM6 10V9.00004H5V10H6ZM6 14H5V15H6V14ZM10 14H11V13H10V14ZM10 18H9.00002V19H10V18ZM14 18V19H15V18H14ZM14 14V13H13V14H14ZM18 14V15H19V14H18ZM18 10H19V9.00004H18V10ZM13 6V10H15V6H13ZM10 7H14V5H10V7ZM11 10V6H9.00002V10H11ZM6 11H10V9.00004H6V11ZM7 14V10H5V14H7ZM10 13H6V15H10V13ZM11 18V14H9.00002V18H11ZM14 17H10V19H14V17ZM13 14V18H15V14H13ZM18 13H14V15H18V13ZM17 10V14H19V10H17ZM14 11H18V9.00004H14V11Z"
      fill="#FF7C1E"
    />
  </svg>

  <svg
    v-if="type === 'moon'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 12.79C20.5623 17.5258 16.5155 21.1036 11.7617 20.9576C7.008 20.8115 3.18847 16.992 3.0424 12.2382C2.89634 7.48448 6.47416 3.43765 11.21 3C9.15033 5.78645 9.43923 9.66045 11.8894 12.1106C14.3395 14.5607 18.2135 14.8496 21 12.79V12.79Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'sun'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 1V3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 21V23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.21997 4.21997L5.63997 5.63997"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.36 18.36L19.78 19.78"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 12H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 12H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.21997 19.78L5.63997 18.36"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.36 5.63997L19.78 4.21997"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-if="type === 'sunrise'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 1V8"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.21997 9.21997L5.63997 10.64"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 17H3"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 17H23"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.36 10.64L19.78 9.21997"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 21H1"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 5L12 1L16 5"
      stroke="#FF7C1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss">
@import "../styles/global.scss";
svg {
  cursor: pointer;
}

@for $i from 1 to 9 {
  .loader:nth-of-type(#{$i}) * {
    animation: 1s $i * 0.13s opacityLoader infinite;
  }
}
@keyframes opacityLoader {
  to {
    opacity: 0;
  }
}
</style>
