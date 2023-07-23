<template>
  <div>
    <searchCom></searchCom>
     <ShopHeader></ShopHeader>
     <GoodsDetailNav></GoodsDetailNav>
     <div class="shop-item-path">
      <div class="shop-nav-container">
        <el-breadcrumb class="font-s">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/goodsList">手机壳</el-breadcrumb-item>
          <el-breadcrumb-item>手机保护套</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <ShowGoods></ShowGoods>
    <ShowGoodsDetail></ShowGoodsDetail>
   </div>
 </template>
<script>
import SearchCom from '@/components/SearchCom.vue'
import ShopHeader from '@/components/header/ShopHeader.vue'
import GoodsDetailNav from '@/components/nav/GoodsDetailNav.vue'
import ShowGoods from '@/components/goodsDetail/ShowGoods.vue'
import ShowGoodsDetail from '@/components/goodsDetail/ShowGoodsDetail.vue'
export default {
  name: 'GoodsDetail',
  components: {
    SearchCom,
    ShopHeader,
    GoodsDetailNav,
    ShowGoods,
    ShowGoodsDetail
  }
}
</script>
<style scoped>
.shop-item-path {
  height: 38px;
  background-color: rgb(236, 235, 235);
  line-height: 38px;
  color: #2c2c2c;
}
.shop-nav-container {
  margin: 0px auto;
  width: 80%;
}
.font-s{
  line-height: 38px;
}
</style>
