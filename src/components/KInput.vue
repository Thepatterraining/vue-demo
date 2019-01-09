<template>
        <input :type="type" :value="value" @input="input">
</template>

<script>
import schema from "async-validator";
export default {
  name: "KInput",
  inject: ["rules"],
  props: {
    type: {
      type: String,
      default: "text"
    },
    prop: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    input(e) {
      this.value = e.target.value;
      this.$parent.$emit('input', this.value)
    }
  }
};
</script>

<style scoped>
</style>