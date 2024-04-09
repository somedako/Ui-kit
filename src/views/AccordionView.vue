<script setup>
import Accordion from "@/components/Accordion/Accordion.vue";
import AccordionPanel from "@/components/Accordion/AccordionPanel.vue";
import Contact from "@/components/Accordion/Contact.vue";
import Text from "@/components/Accordion/Text.vue";
import Question from "@/components/Accordion/Question.vue";
</script>

<template>
  <Accordion>
    <AccordionPanel aria-title="contact" title="Contact">
      <Contact />
    </AccordionPanel>
    <AccordionPanel aria-title="text" title="Some text">
      <Text />
    </AccordionPanel>
    <AccordionPanel aria-title="question" title="How it's work?">
      <Question />
    </AccordionPanel>
  </Accordion>
</template>

<style lang="scss" scoped></style>
