<template>
  <div style="margin:5% auto;">
    <Row class="container">
      <i-col span="13" offset="2" class="login-img-box">
        <img src="../static/img/sale.jpg" alt="">
      </i-col>
      <i-col span="7" class="login-box">
        <div class="login-container">
          <div class="login-header">
            <p>欢迎登录</p>
          </div>
          <div class="form-box">
            <Form ref="formInline" :model="formDate" :rules="ruleInline">
              <FormItem prop="username" style="width:100%;height:40px;display:block;position:relative;top:40px;">
                  <el-icon :size="size" color="#999999" style="width:20%;height:40px;border-top-left-radius:5px;border-bottom-left-radius:5px;float:left;background:#ddd" ><Avatar /></el-icon>
                  <el-input type="text" style="float:left;width:80%;" v-model="formDate.username" clearable size="large" placeholder="用户名">
                  </el-input>
              </FormItem>
              <FormItem prop="password" style="width:100%;height:40px;display:block;position:relative;top:60px;bottom:30px;">
                  <el-icon :size="size" color="#999999" style="width:20%;height:40px;float:left;border-top-left-radius:5px;border-bottom-left-radius:5px;background:#ddd" ><Lock /></el-icon>
                  <el-input type="password" style="float:left;width:80%;"  v-model="formDate.password" clearable size="large" placeholder="密码">
                  </el-input>
              </FormItem>
              <FormItem>
                  <ElButton class="login-footer" type="danger" size="large" @click="handleSubmit('formInline')" long>登录</ElButton>
              </FormItem>
          </Form>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import { Avatar, Lock } from '@element-plus/icons'
export default {
  name: 'LoginCom',
  data () {
    return {
      formDate: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    Avatar,
    Lock
  },
  methods: {
    ...mapMutations(['SET_USER_LOGIN_INFO']),
    ...mapActions(['login']),
    handleSubmit (name) {
      const father = this
      console.log(this.formDate.username)
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login(father.formDate).then(result => {
            if (result) {
              this.$Message.success('登录成功')
              father.$router.push('/')
            } else {
              this.$Message.error('用户名或密码错误')
            }
          })
        } else {
          this.$Message.error('请填写正确的用户名或密码')
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 10px auto;
  width: 80%;
  height: 485px;
  display: flex;
  align-items: center;
}
.login-img-box {
  margin:auto;
  width:77%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;float:left;
}
.login-img-box>img {
  width: 100%;
}
.login-box {
  height: 100%;
  width:70%;
  margin-left:15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  width: 80%;
  height: 340px;
  border: #ED3F14 solid 1px;position:relative;left:-60px;
}
.login-header {
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 5px;
  color: #fff;
  background-color: #ED3F14;
  margin-top:-20px;
}
.login-footer{
  background-color: #ED3F14;
  height: 44px;
  font-size: 19px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  letter-spacing: 5px;
  border:none;
  width:100%;margin-top:100px;
  border-radius:5px;
}
.form-box {
  width: 80%;
  height:250px;
  margin:auto;
}
</style>
