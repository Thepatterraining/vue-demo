<template>
<div>
    <label :for="label"> {{ label }} 
    </label>
    
     <slot></slot>
     <div>
        <p v-if="isError">{{ errorMsg }}</p>
    </div>
        
  </div>      
    
</template>

<script>
import schema from "async-validator";

export default {
  name: "KItem",
  inject: ["rules"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$parent.$emit("item", this);
  },
  data() {
    return {
      errorMsg: "",
      isError: false
    };
  },
  created() {
    // this.$bus.$on("error", error => {});
    // this.$bus.$on("success", () => {
    //   (this.errorMsg = ""), (this.isError = false);
    // });
    this.$on("input", value => {
      const validator = new schema({
        [this.prop]: this.rules[this.prop]
      });
      validator.validate({ [this.prop]: value }, error => {
        if (error) {
          this.errorMsg = error[0].message;
          this.isError = true;
          this.$parent.$emit('error', error)
        } else {
          this.errorMsg = "";
          this.isError = false;
        }
      });
    });
  }
};
</script>

<style scoped>
</style>