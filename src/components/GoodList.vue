<template>
  <div>
  <searchCom></searchCom>
  <GoodsListNav></GoodsListNav>
    <!-- 商品标签导航 -->
    <GoodsClassNav></GoodsClassNav>
    <div class="goods-box">
        <div class="as-box">
          <div class="item-as-title">
            <span style="margin-left:-50px;">商品精选</span>
            <span>广告</span>
          </div>
           <div class="item-as" v-for="(item,index) in $store.state.asItems" :key="index">
            <div class="item-as-img">
              <img :src="item.img" alt="">
            </div>
            <div class="item-as-price">
              <span>
                <Icon type="social-yen text-danger"></Icon>
                <span class="seckill-price text-danger">{{item.price}}</span>
              </span>
            </div>
            <div class="item-as-intro">
              <span>{{item.intro}}</span>
            </div>
            <div class="item-as-selled">
              已有<span>{{item.num}}</span>人评价
            </div>
        </div>
      </div>
      <div class="goods-list-box">
          <div class="goods-list-tool">
            <ul>
              <li v-for="(item,index) in goodsTool" :key="index" @click="() => { if (sortBy === item.en) desc = !desc; else sortBy = item.en }"><span :class="{ 'goods-list-tool-active': sortBy === item.en }">{{item.title + (sortBy === item.en ? (desc ? '↓' : '↑') : '')}}</span></li>
            </ul>
          </div>
           <div class="goods-list">
            <div class="goods-show-info" v-for="(item,index) in $store.state.goodsList" :key="index">
              <div class="goods-show-img">
                <router-link :to="'/goodsDetail/' + item.id"><img :src="item.img"/></router-link>
              </div>
              <div class="goods-show-price">
                <span>
                  <Icon type="social-yen text-danger"></Icon>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
              </div>
              <div class="goods-show-detail">
                <span>{{item.intro}}</span>
              </div>
              <div class="goods-show-num">
                已有<span>{{item.remarks}}</span>人评价
              </div>
              <div class="goods-show-seller">
                <span>{{item.shopName}}</span>
              </div>
            </div>
          </div>
      </div>
  </div>
   <div class="goods-page">
        <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
  </template>
<script>
import SearchCom from '../components/SearchCom.vue'
import GoodsListNav from '../components/nav/GoodsListNav.vue'
import GoodsClassNav from '../components/nav/GoodsClassNav.vue'
import { compare } from '../utils.js'
export default {
  name: 'GoodList',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0)
    next()
  },
  data () {
    return {
      searchItem: '',
      icon: ['CaretTop', 'CaretBottom', 'CaretBottom'],
      goodsTool: [
        { title: '综合', en: 'sale' },
        { title: '评论数', en: 'remarks' },
        { title: '价格', en: 'price' }
      ],
      sortBy: 'sale',
      desc: false
    }
  },
  computed: {
    goodsList () {
      const goodsList = this.$store.state.goodsList.map((item, index) => (item.id = index))
      return goodsList.sort(compare(this.sortBy, this.desc))
    }
  },
  components: {
    SearchCom,
    GoodsListNav,
    GoodsClassNav
  }
}
</script>
<style scoped>
.goods-box {
  display: flex;
}
/* ---------------侧边广告栏开始------------------- */
.as-box {
  width: 200px;
  border: 1px solid #ccc;height:1700px;
}
.item-as-title{
  width: 100%;
  height: 36px;
  color: #B1191A;
  line-height: 36px;
  font-size: 18px;
}
.item-as-title span:first-child{
  margin-left: 20px;
}
.item-as-title span:last-child{
  float: right;
  margin-right: 15px;
  font-size: 10px;
  color: #ccc;
}
.item-as{
  width: 160px;
  margin: 18px auto;
}
.item-as-img{
  width: 160px;
  height: 160px;
  margin: 0px auto;
}
.item-as-price span{
  font-size: 18px;
}
.item-as-intro{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled span{
  color: #005AA0;
}
/* ---------------商品栏开始------------------- */
.goods-list-box {
  margin-left: 15px;
  width: calc(100% - 215px);
}
.goods-list-tool{
  width: 100%;
  height: 38px;
  border: 1px solid #ccc;
  background-color: #F1F1F1;
}
.goods-list-tool ul{
  padding-left: 15px;
  list-style: none;
  margin-top:0px;
}
.goods-list-tool li{
  cursor: pointer;
  float: left;
  line-height:38px;
}
.goods-list-tool span{
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-left: none;
  line-height: 36px;
  background-color: #fff;
}
.goods-list-tool span:hover{
  border: 1px solid #E4393C;
}
.goods-list-tool i:hover{
  color: #E4393C;
}
.goods-list-tool-active {
  color: #fff;
  border-left: 1px solid #ccc;
  background-color: #E4393C !important;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  height:3000px;
  justify-content: space-between;
}
.goods-show-info{
  width: 240px;height:340px;
  padding: 10px;
  margin: 15px 0px;
  border: 1px solid #fff;
  cursor: pointer;
}
.goods-show-info:hover{
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.goods-show-img{
  width:240px;
}
.goods-show-price{
  margin-top: 6px;
}
.goods-show-detail{
  font-size: 12px;
  margin: 6px 0px;
}
.goods-show-num{
  font-size: 12px;
  margin-bottom: 6px;
  color: #009688;
}
.goods-show-num span{
  color: #005AA0;
  font-weight: bold;
}
.goods-show-seller{
  font-size: 12px;
  color:#E4393C;
}
.goods-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
/* ---------------商品栏结束------------------- */
</style>
