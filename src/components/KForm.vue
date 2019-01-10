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
    model: {
      type: Object,
      default: {},
      required: true
    }
  },
  data() {
    return {
      fields: []
    };
  },
  provide() {
    return {
      rules: this.rules,
      model: this.model
    };
  },
  created() {
    this.$on("item", item => {
      this.fields.push(item)
    });
  },
  methods: {
    async validate(callback) {
        let res = true;
      const validates = this.fields.map((t) => {
          return t.validate()
      })
      let validateRes = await Promise.all(validates)
      validateRes.map((t)=> {
          if (t == false) {
              res = false
          }
      })
      callback(res);
    }
  }
};
</script>

<style scoped>
</style>