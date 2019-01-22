<template>
  <div id="login">
    <div class="login-box">
      <h1 class="login-title">初始化管理系统</h1>
      <Form
          class="box-form"
          :model="loginForm"
          :label-width="0"
      >
        <FormItem prop="username">
          <i-input
              type="text"
              v-model="loginForm.username"
              placeholder="用户名">

            <Icon
                type="ios-person-outline"
                slot="prepend"
            ></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="user">
          <i-input
              type="password"
              v-model="loginForm.password"
              placeholder="密码"
          >
            <Icon
                type="ios-lock-outline"
                slot="prepend"
            ></Icon>
          </i-input>
        </FormItem>
        <Button
            type="primary"
            class="login-but"
        >
          登陆
        </Button>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  /**
   * 定义当前数据
   */
  interface Validate {
    username: string;
    password: string;
    code: string;
  }

  @Component
  export default class Login extends Vue {
    // $refs!: {
    //   loginForm: HTMLFormElement,
    // };
    private loginForm: Validate = {
      username: '',
      password: '',
      code: '',
    };
  }
</script>
<style lang="scss">
  #login {
    .login-box {
      border: 1px solid #eee;
      padding: 20px;
      width: 300px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .login-title {
        text-align: center;
        margin-bottom: 20px;
      }
      .box-form {
        width: 100%;
      }
      .login-but {
        width: 100%;
      }
    }
  }
</style>
