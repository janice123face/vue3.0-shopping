<template>
  <div>
    <SearchCom></SearchCom>
    <GoodsListNav></GoodsListNav>
  </div>
</template>

<script>
import SearchCom from '@/components/SearchCom'
import GoodsListNav from '@/components/nav/GoodsListNav'
export default {
  name: 'OrderCom',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0)
    next()
  },
  created () {
    this.loadAddress()
  },
  data () {
    return {
      goodsCheckList: [],
      columns: [
        {
          type: 'selection',
          width: 58,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                }
              })
            ])
          },
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '套餐',
          width: 198,
          key: 'package',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 68,
          key: 'price',
          align: 'center'
        }
      ],
      checkAddress: {
        name: '未选择',
        address: '请选择地址'
      },
      remarks: ''
    }
  },
  computed: {
    totalPrice () {
      let price = 0
      this.goodsCheckList.forEach(item => {
        price += item.price * item.count
      })
      return price
    }
  },
  methods: {
    select (selection, row) {
      console.log(selection)
      this.goodsCheckList = selection
    },
    changeAddress (data) {
      const father = this
      this.address.forEach(item => {
        if (item.addressId === data) {
          father.checkAddress.name = item.name
          father.checkAddress.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`
        }
      })
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs.selection.selectAll(true)
    }, 500)
  },
  components: {
    SearchCom,
    GoodsListNav
  }
}
</script>

<style scoped>
.goods-list-container {
  margin: 15px auto;
  width: 80%;
}
.tips-box {
  margin-bottom: 15px;
}
.address-container {
  margin-top: 15px;
}
.address-box {
  margin-top: 15px;
  padding: 15px;
  border: 1px #ccc dotted;
}
.address-check {
  margin: 15px 0px;
  height: 36px;
  display: flex;
  align-items: center;
}
.address-check-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ccc;
}
.address-check-name span {
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-detail {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
}
.remarks-container {
  margin: 15px 0px;
}
.remarks-input {
  margin-top: 15px;
}
.invoices-container p{
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.pay-container {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.pay-box {
  font-size: 18px;
  font-weight: bolder;
  color: #495060;
}
.money {
  font-size: 26px;
  color: #f90013;
}
.pay-btn {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
