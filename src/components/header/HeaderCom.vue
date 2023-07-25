<template>
    <div class="box">
     <div class="nav">
        <ul class="location">
         <li>
           <el-dropdown>
            <span class="el-dropdown-link">
              <a href="javascript:void(0)" class="city">
               <el-icon :size="size" color="red"  ><Location /></el-icon> {{city}}
              </a>
            </span>
           <template #dropdown>
             <el-dropdown-menu>
                <p v-for="(items, index) in cityArr" :key="index">
                  <span v-for="(item, index) in items"  class="city-item" :key="index" @click="changeCity(item)">{{item}}</span>
                </p>
           </el-dropdown-menu>
          </template>
          </el-dropdown>
         </li>
        </ul>
        <ul class="detail">
          <li class="first">你好，请<router-link to="/Login">登录 <el-icon :size="size" color="#999999"  ><Avatar /></el-icon></router-link> | <span class="text-color-red"><router-link to="/SignUp">免费注册 <el-icon :size="size" color="#999999"  ><Stamp /></el-icon></router-link></span>
          </li>
          <li>
              <el-dropdown>
              <a href="javascript:void(0)" class="city">
              <el-icon :size="size" color="#999999"  ><ShoppingCart /></el-icon> 购物车
              </a>
              <template #dropdown>
               <el-dropdown-menu>
                <div class="shopping-cart-null">
                 <el-icon :size="size" color="#999999"  ><ShoppingCart /></el-icon>
                  <span>你的购物车没有空空哦</span>
                  <span>赶快去添加商品吧~</span>
                 </div>
                <div class="shopping-cart-list" >
                <div class="shopping-cart-box" v-for="(item,index) in shoppingCart" :key="index">
                  <div class="shopping-cart-img">
                    <img :src="item.img">
                  </div>
                  <div class="shopping-cart-info">
                    <div class="shopping-cart-title">
                      <p>{{item.title.substring(0, 22)}}</p>
                    </div>
                    <div class="shopping-cart-detail">
                      <p>
                        套餐:
                        <span class="shopping-cart-text">
                          {{item.package}}
                        </span>
                        数量:
                        <span class="shopping-cart-text">
                          {{item.count}}
                        </span>
                        价钱:
                        <span class="shopping-cart-text">
                          {{item.price}}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                 <div class="go-to-buy">
                  <ElButton type="danger" size="small" @click="goToPay">
                    去结账
                  </ElButton>
                </div>
              </div>
                </el-dropdown-menu>
                </template>
              </el-dropdown>
            </li>
           <li style="color:#999999;"><router-link to="/" >网站导航</router-link></li>
           <li><router-link to="/freeback" >意见反馈</router-link></li>
           <li><router-link to="/">商城首页</router-link></li>
        </ul>
     </div>
    </div>
</template>
<script>
import { Location, Avatar, Stamp, ShoppingCart } from '@element-plus/icons'
export default {
  name: 'M-Header',
  data () {
    return {
      city: '珠海',
      cityArr: [
        ['北京', '上海', '天津', '重庆', '广州'],
        ['深圳', '河南', '辽宁', '吉林', '江苏'],
        ['江西', '四川', '海南', '贵州', '云南'],
        ['西藏', '陕西', '甘肃', '青海', '珠海']
      ],
      size: '1em',
      shoppingCart: []
    }
  },
  components: {
    Location,
    Avatar,
    Stamp,
    ShoppingCart
  },
  methods: {
    changeCity (city) {
      this.city = city
    },
    goToPay () {

    }
  }
}
</script>
<style scope>
*{
    list-style:none;
}
.box {
  width: 100%;
  height: 35px;
  background-color: #e3e4e5;
}
.nav {
  margin: 0% auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav ul {
  list-style: none;
}
.nav li {
  float: left;
  font-size: 14px;
  line-height: 35px;
  margin:-15px 15px 0 0;
  font-weight: bold;
}
.nav a {
  text-decoration: none;
  color: #999999;
  padding-left: 15px;
  border-left: 1px solid #ccc;
  cursor: pointer;
}
.location a {
  border-left: none;
}
.nav a:hover {
  color: #d9534f;
}
.location {
  color: #999999;
  float:left;
}
.icon {
  color: #d9534f;
}
.city {
  height:35px;
  line-height:35px;
}
.city-item {
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
}
.city-item:hover {
  color: #d9534f;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .detail{
      width:55%;
      color: #999999;
       float:right;padding-left:18%;
  }
  .first {
  color: #999999;
  }
.first a:first-child {
  padding-left: 3px;
  border-left: none;
}
.username-p{
  cursor: pointer;
}
.shopping-cart-null {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.shopping-cart-list {
  padding: 3px 15px;
}
.shopping-cart-box {
  margin: 8px 0px;
  margin-top: 15px;
  padding-bottom: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px #ccc dotted;
}
.shopping-cart-img img {
  width: 100%;
}
.shopping-cart-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 200px;
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
}
.shopping-cart-detail {
  color: #999999;
}
.shopping-cart-text {
  color: #ccc;
}
</style>
