<template>
  <div>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img :src="goodsImg[imgIndex]" alt="">
        </div>
        <div class="item-detail-img-row">
          <div class="item-detail-img-small" v-for="(item, index) in goodsImg" :key="index" @mouseover="showBigImg(index)">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            <span class="item-detail-express">校园配送</span> {{title}}</p>
        </div>
        <div class="item-detail-tag">
          <p>
            <span v-for="(item,index) in tags" :key="index">【{{item}}】</span>
          </p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">B I T 价</span>
                <span class="item-price">￥{{price.toFixed(2)}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">优 惠 价</span>
                <span class="item-price-full-cut" v-for="(item,index) in discount" :key="index">{{item}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <span class="item-price-full-cut" v-for="(item,index) in promotion" :key="index">{{item}}</span>
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计评价</p>
              <p>
                <span class="item-remarks-num">{{remarksNum}} 条</span>
              </p>
            </div>
          </div>
        </div>
        <!-- 选择颜色 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>选择颜色</p>
          </div>
          <div class="item-select-column">
            <div class="item-select-row" v-for="(items, index) in setMeal" :key="index">
              <div class="item-select-box" v-for="(item, index1) in items" :key="index1" @click="select(index, index1)" :class="{'item-select-box-active': ((index * 3) + index1) === selectBoxIndex}">
                <div class="item-select-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="item-select-intro">
                  <p>{{item.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 白条分期 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>白条分期</p>
          </div>
          <div class="item-select-row">
            <div class="item-select-class" v-for="(item,index) in hirePurchase" :key="index">
              <Tooltip :content="item.tooltip" placement="top-start">
                <span>{{item.type}}</span>
              </Tooltip>
            </div>
          </div>
        </div>
        <br>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <el-input-number v-model="count" class="mx-4" :min="1" :max="10000" controls-position="right" @change="handleChange" />
            <ElButton  @click="addShoppingCartBtn">加入购物车</ElButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowGoods',
  data () {
    return {
      price: 0,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0,
      tags: ['满69-20元', '关注产品★送钢化膜', 'BIT配次日达'],
      discount: ['满148减10', '满218减20', '满288减30'],
      promotion: ['跨店满减', '多买优惠'],
      remarksNum: 6000,
      setMeal: [
        [
          {
            img: require('@/static/img/goodsDetail/pack/1.jpg'),
            intro: '4.7英寸-深邃蓝',
            price: 28.0
          },
          {
            img: require('@/static/img/goodsDetail/pack/2.jpg'),
            intro: '4.7英寸-星空黑',
            price: 29.0
          },
          {
            img: require('@/static/img/goodsDetail/pack/3.jpg'),
            intro: '5.5英寸-香槟金',
            price: 28.5
          }
        ],
        [
          {
            img: require('@/static/img/goodsDetail/pack/4.jpg'),
            intro: '5.5英寸-玫瑰金',
            price: 32.0
          },
          {
            img: require('@/static/img/goodsDetail/pack/5.jpg'),
            intro: '5.5英寸-深邃蓝',
            price: 32.0
          },
          {
            img: require('@/static/img/goodsDetail/pack/6.jpg'),
            intro: '5.5英寸-星空黑',
            price: 35.0
          }
        ],
        [
          {
            img: require('@/static/img/goodsDetail/pack/7.jpg'),
            intro: '4.7英寸-香槟金',
            price: 26.0
          },
          {
            img: require('@/static/img/goodsDetail/pack/8.jpg'),
            intro: '4.7英寸-玫瑰金',
            price: 25.0
          },
          {
            img: require('@/static/img/goodsDetail/pack/9.jpg'),
            intro: '4.7英寸-中国红',
            price: 28.0
          }
        ]
      ]
    }
  },
  computed: {
    goods () {
      return this.$store.state.goodsList[this.$route.params.id]
    },
    title () {
      return this.goods.intro
    },
    goodsImg () {
      return [this.goods.img]
    },
    hirePurchase () {
      const three = this.price * this.count / 3
      const sex = this.price * this.count / 6
      const twelve = this.price * this.count / 12 * 1.0025
      const twentyFour = this.price * this.count / 24 * 1.005
      return [
        {
          tooltip: '无手续费',
          type: '不分期'
        },
        {
          tooltip: '无手续费',
          type: `￥${three.toFixed(2)} x 3期`
        },
        {
          tooltip: '无手续费',
          type: `￥${sex.toFixed(2)} x 6期`
        },
        {
          tooltip: '含手续费：费率0.25%起，￥0.1起×12期',
          type: `￥${twelve.toFixed(2)} x 12期`
        },
        {
          tooltip: '含手续费：费率0.5%起，￥0.1起×12期',
          type: `￥${twentyFour.toFixed(2)} x 24期`
        }
      ]
    }
  },
  methods: {
    select (index1, index2) {
      console.log()
      this.selectBoxIndex = index1 * 3 + index2
      this.price = this.setMeal[index1][index2].price
    },
    showBigImg (index) {
      this.imgIndex = index
    },
    addShoppingCartBtn () {
      const index1 = parseInt(this.selectBoxIndex / 3)
      const index2 = this.selectBoxIndex % 3
      const date = new Date()
      const goodsId = date.getTime()
      const data = {
        goods_id: goodsId,
        title: this.title,
        count: this.count,
        package: this.setMeal[index1][index2]
      }
      this.$router.push('/ShoppingCart')
    }
  },
  mounted () {
    const father = this
    setTimeout(() => {
      father.price = father.setMeal[0][0].price || 0
    }, 300)
  }
}
</script>

<style scoped>
/******************商品图片及购买详情开始******************/
.item-detail-show {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #e4393c;
}
/*价格详情等*/
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px 5px 0px;
  text-align:left;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #e4393c;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #e4393c;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 0.5px solid #e3393c;
}
.item-select-box-active {
  border: 0.5px solid #e3393c;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
.mx-4{
    width:100px;
    margin-right:20px;
    border-radius:8px;
}
.add-buy-car Button{
   padding:10px 20px;
   border:none;
   color:#fff;
   border-radius:8px;
   background-color:rgb(237,63,20);
}
/******************商品图片及购买详情结束******************/
</style>
