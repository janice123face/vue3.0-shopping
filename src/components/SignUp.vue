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
          <Elsteps :current="signUpStep" :active="active" finish-status="success">
            <ElStep title="验证手机号" icon="iphone" />
            <ElStep title="填写账号信息" icon="person-add" />
            <ElStep title="注册成功" icon="ios-checkmark-outline" />
          </ElSteps>
          <div class="sign-up-box">
            <router-link to="">
            <router-view v-slot="{ Component }">
              <transition mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </router-link>
          </div>
          <el-button class="elbutton"  @click="next">验证手机号</el-button>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { ref } from 'vue'
const active = ref(0)
const next = () => {
  if (active.value++ > 2) active.value = 0
}
export default {
  name: 'FreeBack',
  data () {
    return {
      formItem: {
        title: '',
        content: ''
      }
    }
  }
}
</script>

<style scoped>
.freeback-container {
  margin:auto;
  width: 80%;
  height: 600px;
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
  height: 500px;margin-top:20%;
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
  margin-top:50px;
  height:500px;
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
  height: 380px;
  border: 1px solid #495060;
}
.sign-up-box{
  width:80%;
  margin:auto;
  border:1px solid #ddd;
  height:180px;
}
.elbutton{
  margin-top: 12px;
  background: #ED3F14;
  color:#fff;
  width:300px;
}
</style>
