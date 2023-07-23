<template>
  <div>
    <div class="container">
      <el-input v-model="sreachData" size="large" class="sreach" placeholder="输入你想查找的商品"></el-input>
      <router-link to="/GoodList"><el-icon :size="size" color="red" @click="sreach" class="sreach-k" ><Search /></el-icon></router-link>
      <Tag class="sgoods" v-for="(item, index) in promotionTags" :key="index"   ><span @click="selectTags(index)">{{item}}</span> <el-icon :size="size" color="#999999" @click="closeTags(index)" ><Close /></el-icon></Tag>
    </div>
  </div>
</template>

<script>
import { Search, Close } from '@element-plus/icons'
export default {
  name: 'SearchCom',
  data () {
    return {
      sreachData: '',
      promotionTags: ['买2免1', '领200神券', '199减100', '母婴5折抢', '充100送20']
    }
  },
  components: {
    Search,
    Close
  },
  methods: {
    closeTags (index) {
      this.promotionTags.splice(index, 1)
    },
    selectTags (index) {
      this.sreachData = this.promotionTags[index]
    },
    sreach () {
      this.$router.push({ path: '/goodsList', query: { sreachData: this.sreachData } })
    }
  }
}
</script>
<style scoped>
.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
}
.sreach-k{
  width:60px;
  background:#ddd;
  color:#999999;
  height:40px;
  position:relative;
  top:5px;
}
.sreach {
  width: 400px;
  margin: 5px 0px;
}
.sgoods{
  border:1px solid #ddd;
  padding:2px 4px;
  margin:0 4px;
}
</style>
