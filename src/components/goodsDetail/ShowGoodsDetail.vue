<template>
  <div>
    <div class="item-intro-show">
      <div class="item-intro-recommend">
        <div class="item-recommend-title">
          <p>店铺热销</p>
        </div>
        <div class="item-intro-recommend-column">
          <div class="item-recommend-column" v-for="(item, index) in hot" :key="index">
            <div class="item-recommend-img">
              <img :src="item.img" alt="">
            </div>
            <div class="item-recommend-intro">
              <span>
                <span class="item-recommend-top-num">{{index + 1}}</span> 热销{{item.sale}}件</span>
              <span class="item-recommend-price">￥{{item.price.toFixed(2)}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-intro-detail" ref="itemIntroDetail">
        <div class="item-intro-nav item-tabs">
          <el-tabs>
            <el-tab-pane label="商品介绍">
              <div class="remarks-title">
                <span>商品介绍</span>
              </div>
              <div class="item-intro-img" ref="itemIntroGoods">
                <img :src="item" alt="" v-for="(item,index) in goodsDetail" :key="index">
              </div>
            </el-tab-pane>
            <el-tab-pane label="规格参数">
              <div class="remarks-title">
                <span>规格参数</span>
              </div>
              <div class="item-param-container">
                <span class="item-param-box" v-for="(item,index) in param" :key="index">
                  <span class="item-param-title">{{item.title}}: </span>
                  <span class="item-param-content">{{item.content}}</span>
                </span>
              </div>
            </el-tab-pane>
            <el-tab-pane label="售后保障">
            <ShowProductWarranty></ShowProductWarranty>
            </el-tab-pane>
            <el-tab-pane label="商品评价">
              <div class="remarks-container">
                <div class="remarks-title">
                  <span>商品评价</span>
                </div>
                <div class="remarks-analyse-box">
                  <div class="remarks-analyse-goods">
                    <i-circle :percent="remarks.goodAnalyse" stroke-color="#e4393c">
                      <span class="remarks-analyse-num">{{remarks.goodAnalyse}}%</span>
                      <p class="remarks-analyse-title">好评率</p>
                    </i-circle>
                  </div>
                  <div class="remarks-analyse-tags">
                    <Tag checkable :color="tagsColor[index % 4]" v-for="(item,index) in remarks.remarksTags" :key="index">{{item}}</Tag>
                  </div>
                </div>
                <div class="remarks-bar">
                  <span>追评({{remarks.remarksNumDetail[0]}})</span>
                  <span>好评({{remarks.remarksNumDetail[1]}})</span>
                  <span>中评({{remarks.remarksNumDetail[2]}})</span>
                  <span>差评({{remarks.remarksNumDetail[3]}})</span>
                </div>
                <div class="remarks-box" v-for="(item,index) in remarks.detail" :key="index">
                  <div class="remarks-user">
                    <Avatar icon="person" />
                    <span class="remarks-user-name">{{item.username}}</span>
                  </div>
                  <div class="remarks-content-box">
                    <p>
                      <Rate disabled :value="item.values" allow-half class="remarks-star"></Rate>
                    </p>
                    <p class="remarks-content">{{item.content}}</p>
                    <p class="remarks-sub">
                      <span class="remarks-item">{{item.goods}}</span>
                      <span class="remarks-time">{{item.time}}</span>
                    </p>
                  </div>
                </div>
                <div class="remarks-page">
                  <Page :total="40" size="small" show-elevator show-sizer></Page>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowProductWarranty from '@/components/goodsDetail/ShowProductWarranty'
export default {
  name: 'ShowGoodsDetail',
  data () {
    return {
      tagsColor: ['blue', 'green', 'red', 'yellow'],
      hot: [
        {
          img: require('@/static/img/goodsDetail/hot/1.jpg'),
          price: 28.0,
          sale: 165076
        },
        {
          img: require('@/static/img/goodsDetail/hot/2.jpg'),
          price: 36.0,
          sale: 135078
        },
        {
          img: require('@/static/img/goodsDetail/hot/3.jpg'),
          price: 38.0,
          sale: 105073
        },
        {
          img: require('@/static/img/goodsDetail/hot/4.jpg'),
          price: 39.0,
          sale: 95079
        },
        {
          img: require('@/static/img/goodsDetail/hot/5.jpg'),
          price: 25.0,
          sale: 5077
        },
        {
          img: require('@/static/img/goodsDetail/hot/6.jpg'),
          price: 20.0,
          sale: 3077
        }
      ],
      goodsDetail: [
        require('@/static/img/goodsDetail/intro/1.jpg'),
        require('@/static/img/goodsDetail/intro/2.jpg'),
        require('@/static/img/goodsDetail/intro/3.jpg'),
        require('@/static/img/goodsDetail/intro/4.jpg')
      ],
      param: [
        {
          title: '商品名称',
          content: 'iPhone 7手机壳'
        },
        {
          title: '商品编号',
          content: '10435663237'
        },
        {
          title: '店铺',
          content: 'Gavin Shop'
        },
        {
          title: '商品毛重',
          content: '100.00g'
        },
        {
          title: '商品产地',
          content: '中国大陆'
        },
        {
          title: '机型',
          content: 'iPhone 7'
        },
        {
          title: '材质',
          content: 'PC/塑料'
        },
        {
          title: '款式',
          content: '软壳'
        },
        {
          title: '适用人群',
          content: '通用'
        }
      ],
      remarks: {
        goodAnalyse: 90,
        remarksTags: ['颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖'],
        remarksNumDetail: [2000, 3000, 900, 1],
        detail: [
          {
            username: 'p****1',
            values: 3,
            content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
            goods: '4.7英寸-深邃蓝',
            create_at: '2018-05-15 09:20'
          },
          {
            username: '13****1',
            values: 5,
            content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
            goods: '5.5英寸-玫瑰金',
            create_at: '2018-05-13 15:23'
          },
          {
            username: '3****z',
            values: 4.5,
            content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
            goods: '4.7英寸-玫瑰金',
            create_at: '2018-05-05 12:25'
          },
          {
            username: 'gd****c',
            values: 3.5,
            content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
            goods: '4.7英寸-中国红',
            create_at: '2018-04-06 16:23'
          },
          {
            username: 'r****b',
            values: 4.5,
            content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
            goods: '4.7英寸-中国红',
            create_at: '2018-03-15 19:24'
          },
          {
            username: 'd****e',
            values: 5,
            content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
            goods: '5.5英寸-星空黑',
            create_at: '2018-03-10 10:13'
          }
        ]
      }
    }
  },
  methods: {
    changeHeight () {
      let heightCss = window.getComputedStyle(this.$refs.itemIntroGoods).height
      console.log(heightCss)
      heightCss = parseInt(heightCss.substr(0, heightCss.length - 2)) + 89
      this.$refs.itemIntroDetail.style.height = heightCss + 'px'
    }
  },
  updated () {
    this.$nextTick(() => {
      setTimeout(this.changeHeight, 100)
      setTimeout(this.changeHeight, 1000)
      setTimeout(this.changeHeight, 3000)
      setTimeout(this.changeHeight, 5000)
      setTimeout(this.changeHeight, 10000)
      setTimeout(this.changeHeight, 15000)
      setTimeout(this.changeHeight, 20000)
      setTimeout(this.changeHeight, 25000)
      setTimeout(this.changeHeight, 30000)
      setTimeout(this.changeHeight, 50000)
    })
  },
  components: {
    ShowProductWarranty
  }
}
</script>

<style scoped>
/***************商品详情介绍和推荐侧边栏开始***************/
.item-intro-show{
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  height:2800px;
}
.item-intro-recommend{
  width: 200px;
  display: flex;
  flex-direction: column;
}
.item-intro-recommend-column{
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #999;
}
.item-recommend-title{
  width: 100%;
  height: 38px;
  font-size: 16px;
  line-height: 38px;
  color: #fff;
  background-color: #E4393C;
  box-shadow: 0px 0px 5px #E4393C;
  text-align: center;
}
.item-recommend-title p{
    line-height: 38px;margin-top:-2px;
}
.item-recommend-column{
  margin-top: 15px;
}
.item-recommend-intro{
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
.item-recommend-img{
  width: 80%;
  margin: 0px auto;
  cursor: pointer;
}
.item-recommend-img img{
  width: 100%;
}
.item-recommend-top-num{
  color: #fff;
  margin: 0px 2px;
  padding: 1px 5px;
  border-radius: 12px;
  background-color: #E4393C;
}
.item-recommend-price{
  color: #E4393C;
  font-weight: bolder;
}
.item-intro-detail{
  margin-left: 30px;
  width: calc(80vw - 300px);
}
.item-intro-nav{
  width: 100%;
  height: 38px;
  background-color: #F7F7F7;
  border-bottom: 1px solid #E4393C;
}
.item-intro-nav ul{
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.item-intro-nav li{
  float: left;
  height: 100%;
  width: 120px;
  line-height: 38px;
  text-align: center;
  color: #E4393C;
}
.item-intro-nav li:first-child{
  background-color: #E4393C;
  color: #fff;
}
.item-intro-img{
  width: 100%;
}
.item-intro-img img{
  width: 100%;
}
/************* 商品参数 *************/
.item-param-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.item-param-box {
  padding: 5px;
  padding-left: 30px;
  width: 240px;
  height: 36px;
  font-size: 14px;
  /* text-align: center; */
  /* background-color: #ccc; */
}
.item-param-title {
  color: #232323;
}
.item-param-content {
  color: #999;
}
.remarks-title {
  padding-left: 15px;
  height: 36px;
  font-size: 16px;
  font-weight: bolder;
  line-height: 36px;
  color: #666666;
  background-color: #F7F7F7;
}
.remarks-analyse-box {
  padding: 15px;
  display: flex;
  align-items: center;
}
.remarks-analyse-goods {
  margin-left: 15px;
  margin-right: 15px;
}
.remarks-analyse-num {
  font-size: 26px;
}
.remarks-analyse-title {
  font-size: 12px;
  line-height: 20px;
}
.remarks-bar {
  padding-left: 15px;
  height: 36px;
  line-height: 36px;
  color: #666666;
  background-color: #F7F7F7;
}
.remarks-bar span {
  margin-right: 15px;
}
.remarks-box {
  padding: 15px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px #ccc dotted;
}
.remarks-user {
  width: 180px;
}
.remarks-user-name {
  padding-left: 15px;
}
.remarks-content-box {
  width: calc(100% - 180px);
}
.remarks-star {
  background-color: #fff;
}
.remarks-content {
  font-size: 14px;
  color: #232323;
  line-height: 28px;
}
.remarks-sub {
  margin-top: 15px;
  color: #ccc;
}
.remarks-time {
  margin-left: 15px;
}
.remarks-page {
  margin: 15px;
  display: flex;
  justify-content:flex-end;
}
/***************商品详情介绍和推荐侧边栏结束***************/
</style>

<style>
/* 改变便签页样式 */
.ivu-tabs-ink-bar {
  background-color: #E4393C !important;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab{
  border-radius: 0px;
  color: #999;
  height: 38px;
  background: #F7F7F7;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active{
  color: #fff;
  background-color: #E4393C;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active:before{
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  color: #fff;
  background: #F7F7F7;
  position: absolute;
  top: 0;
  left: 0;
}
.ivu-rate-star-full:before, .ivu-rate-star-half .ivu-rate-star-content:before {
  color: #E4393C;
}
</style>
