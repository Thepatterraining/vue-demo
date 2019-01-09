<template>
    <div>
    <k-form :rules='rules' :ref='login'>
      <k-item label='用户名' prop='name'>
        <k-input type='text' prop='name'></k-input>
      </k-item>

      <k-item label='密 码' prop='pwd'>
        <k-input type='password' prop='pwd'></k-input>
      </k-item>
      <k-item>
        <button @click="login()">登陆</button>
      </k-item>
      
    </k-form>
    </div>
</template>

<script>
import KInput from "./KInput.vue";
import KItem from "./KItem.vue";
import KForm from "./KForm.vue";


export default {
  // name: "FormT",
  components: {
    KInput,
    KItem,
    KForm
  },
  data() {
    return {
      rules: {
        name: [
          {required:true, message:'请输入用户名'},
          {min:6, message:'至少6个'}
        ],
        pwd: [
          {required:true, message:'请输入密码'}
        ],
      },
    }
  },
  methods: {
    login() {
      
      this.$refs.login.validate((res) => {
        if (res) {
          alert('提交登陆')
        } else {
          alert('校验失败')
          return false
        }
      })
      return false
      alert(1)
    }
  },
  
};
</script>

<style scoped>
</style>