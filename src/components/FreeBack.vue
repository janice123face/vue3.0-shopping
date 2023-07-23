<template>
  <div>
    <div class="freeback-container">
      <div class="freeback-img-box">
        <img src="../static/img/freeback.png">
      </div>
      <div class="freeback-box-border">
        <div class="freeback-box">
          <div class="freeback-title">
            <h1>意见反馈</h1>
            <h3>感谢你的反馈，我们会积极改善，做出更好的服务的</h3>
          </div>
          <div class="freeback-content">
            <div class="freeback-form">
              <el-form :model="formItem" :label-width="80">
                <el-form-item label="标题">
                  <el-input v-model="formItem.title" style="width:400px;" placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item label="反馈信息">
                  <el-input v-model="formItem.content" type="textarea" :autosize="{minRows: 8,maxRows: 10}" placeholder="请输入反馈信息"></el-input>
                </el-form-item>
                <el-form-item style="margin-top:20px;">
                  <ElButton type="primary" style="margin-right:10px;width:70px;height:32px;border:none;color:#ffffff;background:#2c8cf0;">提交</ElButton>
                  <ElButton type="ghost" style="background:#ffffff;border:1px solid #ddd;width:90px;height:32px;">清空信息</ElButton>
                </el-form-item>
              </el-form>
            </div>
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
      }
    }
  }
}
</script>

<style scoped>
.freeback-container {
  margin: 15px auto;
  width: 80%;
  height: 600px;
  display: flex;
  align-items: center;
  /* background-color: #ccc; */
}
.freeback-img-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-img-box img {
  width: 80%;
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
.freeback-content {
  width: 500px;
  height:360px;
  margin: 15px auto;
  border: 1px #ccc dotted;
}
.freeback-form {
  margin: 30px auto;
  width: 90%;
}
.freeback-title{
  text-align:left;
}
</style>
