<template>
  <div class="info-form">
    <ElForm ref="formValidate" :model="formValidate" :label-width="80" :rules="ruleValidate">
      <ElFormItem label="手机号" prop="phone">
          <ElInput v-model="formValidate.phone" clearable size="large"  placeholder="请输入手机号"></ElInput>
      </ElFormItem>
      <ElFormItem label="验证码" prop="checkNum">
          <ElInput v-model="formValidate.checkNum" size="large"  placeholder="请输入验证码">
            <ElButton @click="getcheckNum">获取验证码</ElButton>
          </ElInput>
      </ElFormItem>
      <ElButton type="danger" size="large" long @click="handleSubmit('formValidate')">验证手机号</ElButton>
    </ElForm>
  </div>
</template>

<script>
export default {
  name: 'CheckPhone',
  data () {
    return {
      formValidate: {
        phone: '',
        checkNum: ''
      },
      ruleValidate: {
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ],
        checkNum: [
          { required: true, message: '必须填写验证码', trigger: 'blur' },
          { type: 'string', min: 4, max: 4, message: '验证码长度错误', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getcheckNum () {
      if (this.formValidate.phone.length === 11) {
        this.$Message.success({
          content: '验证码为: 1234',
          duration: 6,
          closable: true
        })
      } else {
        this.$Message.error({
          content: '请输入正确的手机号',
          duration: 6,
          closable: true
        })
      }
    },
    handleSubmit (name) { // 提交验证
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/SignUp/inputInfo', query: { phone: this.formValidate.phone } })
          this.SET_SIGN_UP_SETP(1)
        } else {
          this.$Message.error({
            content: '请填写正确的信息',
            duration: 6,
            closable: true
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.info-form {
  width: 90% !important;border:1px solid red;
}
</style>
