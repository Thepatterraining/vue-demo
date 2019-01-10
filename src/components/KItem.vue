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
  inject: ["rules", "model"],
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
  created() {
      
    this.$on("inputValidate", this.validate);
  },
  mounted() {
      if (this.prop) {
          this.$parent.$emit("item", this);
      }
    
  },
  data() {
    return {
      errorMsg: "",
      isError: false
    };
  },
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        const validator = new schema({
          [this.prop]: this.rules[this.prop]
        });
        validator.validate({ [this.prop]: this.model[this.prop] }, error => {
          if (error) {
            this.errorMsg = error[0].message;
            this.isError = true;
            resolve(false)
          } else {
            this.errorMsg = "";
            this.isError = false;
            resolve(true)
          }
        });
      });
    }
  }
};
</script>

<style scoped>
</style>