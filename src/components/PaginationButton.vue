<template>
  <button @click="onClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PaginationButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
@import "@/styles/PaginationButton.css";
</style>
