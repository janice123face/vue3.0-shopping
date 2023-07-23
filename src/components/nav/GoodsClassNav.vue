<template>
  <div class="item-class-show">
   <el-header>
    <router-link to='/'><el-icon :size="size" :color="color" style="float:left;">
      <House />
    </el-icon>
    <el-icon :size="size" :color="color" style="float:left;width:80px">首页 /</el-icon></router-link>
    <router-link to='/'><el-icon :size="size" :color="color" style="float:left;">
      <Goods />
    </el-icon></router-link>
   </el-header>
    <el-container class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <el-aside class="item-class-name" >{{ items.tagName }} : </el-aside>
        <el-main class="item-class-select" >
           <span v-for="(item, index) in items.tags" :key="index">{{ item }}</span>
        </el-main>
    </el-container>
  </div>
</template>
<script>
import { House, Goods } from '@element-plus/icons'
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '品牌',
          tags: ['华为(HUAWEI)', '三星(SAMSUNG)', 'MATE', '摩斯维(msvii)', 'OPPO', '莫凡(Mofi)', '耐尔金(NILLKIN)', '洛克(ROCK)', '亿色(ESR)', 'Apple', '优加']
        },
        {
          tagName: '手机配件',
          tags: ['手机保护套', '苹果周边', '手机贴膜', '移动电源', '创意配件', '手机耳机', '手机支架']
        },
        {
          tagName: '款式',
          tags: ['软壳', '硬壳', '翻盖式', '边框', '运动臂包', '钱包式', '定制', '防水袋', '布袋', '其他']
        },
        {
          tagName: '材质',
          tags: ['塑料/PC', '硅胶', '金属', '电镀', '真皮', '树脂', '木质', '镶钻', '液态硅胶', 'TPU']
        }
      ]
    }
  },
  components: {
    House,
    Goods
  }
}
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin: 1px auto;
  height: 45px;
   width:100%;
  word-break:break-all;
  border-bottom: 1px solid #ccc;
  text-align:left;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left:15px;
  line-height: 44px;height:44px;
  width:200px;
  color: #666;
  font-weight: bold;
  background: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select{
  width: 160px;
  height:44px;margin-top:-10px;
  overflow:hidden;
}
.item-class-select span{
  margin-left: 15px;
  color: #005aa0;
  font-size:16px;
  cursor: pointer;
}
</style>
