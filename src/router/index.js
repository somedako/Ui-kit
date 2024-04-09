import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/ButtonView.vue";
import Typography from "@/views/TypographyView.vue";
import Icon from "@/views/IconView.vue";
import Input from "@/views/InputView.vue";
import Progress from "@/views/ProgressView.vue";
import Radio from "@/views/RadioView.vue";
import Dropdown from "@/views/DropDownView.vue";
import Textarea from "@/views/TextareaView.vue";
import Indicator from "@/views/IndicatorView.vue";
import Stepper from "@/views/StepperView.vue";
import Alert from "@/views/AlertMessageView.vue";
import Accordion from "@/views/AccordionView.vue";
import Tabs from "@/views/TabsView.vue";
import Tags from "@/views/TagsView.vue";
import Burger from "@/views/BurgerView.vue";
import Tooltip from "@/views/TooltipView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },

    {
      path: "/button",
      name: "Button",
      component: Button,
    },
    {
      path: "/typography",
      name: "Typography",
      component: Typography,
    },
    {
      path: "/icon",
      name: "Icon",
      component: Icon,
    },
    {
      path: "/input",
      name: "Input",
      component: Input,
    },
    {
      path: "/progress",
      name: "Progress",
      component: Progress,
    },
    {
      path: "/radio",
      name: "Radio",
      component: Radio,
    },

    {
      path: "/dropdown",
      name: "Dropdown",
      component: Dropdown,
    },

    {
      path: "/textarea",
      name: "Textarea",
      component: Textarea,
    },

    {
      path: "/indicator",
      name: "Indicator",
      component: Indicator,
    },
    {
      path: "/stepper",
      name: "Stepper",
      component: Stepper,
    },
    {
      path: "/alert",
      name: "Alert",
      component: Alert,
    },

    {
      path: "/accordion",
      name: "Accordion",
      component: Accordion,
    },

    {
      path: "/tabs",
      name: "Tabs",
      component: Tabs,
    },

    {
      path: "/tags",
      name: "Tags",
      component: Tags,
    },

    {
      path: "/burger",
      name: "Burger",
      component: Burger,
    },

    {
      path: "/tooltip",
      name: "Tooltip",
      component: Tooltip,
    },
  ],
});

export default router;
