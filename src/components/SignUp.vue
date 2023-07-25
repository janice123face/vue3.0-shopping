<template>
  <div>
    <div class="freeback-container">
      <div class="freeback-img-box">
        <img src="../static/img/signup-sale.png">
      </div>
      <div class="freeback-box-border">
        <div class="freeback-box">
          <div class="freeback-title">
            <h1>欢迎注册账号</h1>
            <h3>BIT MALL, 天天低价品质保证, 让消费者钱更值钱</h3>
          </div>
          <div class="sing-up-step-box">
          <ElSteps :active="active" :space="180" finish-status="success" align-center >
            <ElStep title="验证手机号"  icon="Phone" />
            <ElStep title="填写账号信息" icon="person-add" />
            <ElStep title="注册成功" icon="ios-checkmark-outline" />
          </ElSteps>
          <div class="sign-up-box">
            <router-view v-slot="{ Component }">
              <transition mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
          <el-button class="elbutton" @click="next">下一步</el-button>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FreeBack',
  data () {
    return {
      formItem: {
        title: '',
        content: ''
      },
      active: 0
    }
  },
  methods: {
    next () {
      if (++this.active > 2) this.active = 0
      this.$router.push('/SignUp/' + ['checkPhone', 'inputInfo', 'signUpDone'][this.active])
    }
  }
}
</script>

<style scoped>
.freeback-container {
  margin:auto;
  width: 80%;
  height: 800px;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
}
.freeback-img-box {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-img-box img {
  height: 550px;
  margin-top:20%;
}
.freeback-box-border {
  width: 50%;
  height:600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-box {
  width: 480px;
  margin-top:5%;
  height:600px;
}
.freeback-form {
  margin: 30px auto;
  width: 90%;
}
.freeback-title{
  text-align:left;
}
.sing-up-step-box {
  margin: 15px auto;
  padding-left: 30px;
  padding-top: 30px;
  width: 430px;
  height: 440px;
  border: 1px solid #495060;
}
.sign-up-box{
  width:80%;
  margin:auto;
  border:1px solid #ddd;
  height:300px;
}
.elbutton{
  margin-top: 12px;
  background: #ED3F14;
  color:#fff;
  width:200px;
}
</style>
