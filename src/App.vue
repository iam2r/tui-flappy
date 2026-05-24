<script setup lang="ts">
import { shallowRef } from "vue";
import { Box, Text, useInput } from "@vue-tui/runtime";

const count = shallowRef(0);

useInput((input) => {
  if (input === "+") count.value++;
  if (input === "-") count.value--;
  if (input === "q") process.exit(0);
});
</script>

<template>
  <Box flexDirection="column">
    <Text bold>Welcome to vue-tui!</Text>
    <Text>Count: {{ count }} <Text dimColor>(+/- to change, q to quit)</Text></Text>
  </Box>
</template>
