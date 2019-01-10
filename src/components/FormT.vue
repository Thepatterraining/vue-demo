<template>
    <div>
    <k-form :rules='rules' :model='form' ref='login'>
      <k-item label='用户名' prop='name'>
        <k-input type='text' prop='name' v-model="form.name"></k-input>
      </k-item>

      <k-item label='密 码' prop='pwd'>
        <test>
          <k-input type='password' prop='pwd' v-model="form.pwd"></k-input>
        </test>
      </k-item>
      <k-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </k-item>
      
    </k-form>
    {{form}}
    </div>
</template>

<script>
import KInput from "./KInput.vue";
import KItem from "./KItem.vue";
import KForm from "./KForm.vue";
import Test from './test.vue';


export default {
  // name: "FormT",
  components: {
    KInput,
    KItem,
    KForm,
    Test
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
      form: {
        name: '',
        pwd: '',
      }
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
    }
  },
  
};
</script>

<style scoped>
</style>