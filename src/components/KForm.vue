<template>
    <div>
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
export default {
  name: "KForm",
  props: {
      rules: {
          type: Object,
          default: {}
      },
  },
  provide() {
      return {
          rules: this.rules
      }
  },
  created() {
    this.$on("item", item => {
      console.log(item);
    });
  },
  methods: {
      validate(callback) {
          let res = true;
        //   this.$on('error', error => {
        //       res = false
        //   })
          callback(res)
      }
  },
};
</script>

<style scoped>
</style>