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
        let parent = this.$parent
        let parentName = parent.$options.name
        while (parentName != 'KItem') {
            parent = parent.$parent
            parentName = parent.$options.name
        }
      this.value = e.target.value;
      this.$emit('input', this.value)
      this.$parent.$emit('inputValidate', this.value)
    }
  }
};
</script>

<style scoped>
</style>