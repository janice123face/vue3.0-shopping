import { createStore } from 'vuex'
export default createStore({
  state: {
    isLoading: false, // 是否展示loading动画
    orderBy: 'sale', // 根据什么字段排序
    goodsInfo: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
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
      remarks: []
    },
    userInfo: { // 用户信息
      username: ''
    },
    signUpStep: 0, // 登陆步骤
    marketing: { // 营销
      CarouselItems: [
        require('@/static/img/nav/1.jpg'),
        require('@/static/img/nav/2.jpg'),
        require('@/static/img/nav/3.jpg'),
        require('@/static/img/nav/4.jpg'),
        require('@/static/img/nav/5.jpg')
      ], // 轮播图
      activity: [
        require('@/static/img/nav/nav_showimg1.jpg'),
        require('@/static/img/nav/nav_showimg2.jpg')
      ] // 活动
    },
    seckills: { // 秒杀
      deadline: {
        hours: 2,
        minute: 34,
        seconds: 56
      },
      goodsList: [
        {
          intro: '【赠小风扇】维他 柠檬茶250ml*32盒 礼品装 整箱',
          img: require('@/static/img/index/seckill/seckill-item1.jpg'),
          price: 71.9,
          realPrice: 89.6
        },
        {
          intro: 'Kindle Paperwhite全新升级版6英寸护眼非反光电子墨水',
          img: require('@/static/img/index/seckill/seckill-item2.jpg'),
          price: 989.0,
          realPrice: 1299.0
        },
        {
          intro: '粮悦 大吃兄糯米锅巴 安徽特产锅巴糯米原味400g*2盒',
          img: require('@/static/img/index/seckill/seckill-item3.jpg'),
          price: 21.8,
          realPrice: 49.0
        },
        {
          intro: '【京东超市】清风（APP）抽纸 原木纯品金装系列 3层',
          img: require('@/static/img/index/seckill/seckill-item4.jpg'),
          price: 49.9,
          realPrice: 59.0
        },
        {
          intro: 'NIKE耐克 男子休闲鞋 AIR MAX 90 ESSENTIAL 气垫',
          img: require('@/static/img/index/seckill/seckill-item5.jpg'),
          price: 559.9,
          realPrice: 759.9
        }
      ]
    },
    computer: {
      title: '电脑数码',
      link: ['电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊'],
      detail: [
        {
          bigImg: require('@/static/img/index/computer/item-computer-1.jpg'),
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: require('@/static/img/index/computer/item-computer-2.jpg')
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: require('@/static/img/index/computer/item-computer-1-3.jpg')
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: require('@/static/img/index/computer/item-computer-1-4.jpg')
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: require('@/static/img/index/computer/item-computer-1-5.jpg')
            }
          ],
          itemContent: [
            require('@/static/img/index/computer/item-computer-1-6.jpg'),
            require('@/static/img/index/computer/item-computer-1-7.jpg'),
            require('@/static/img/index/computer/item-computer-1-8.jpg')
          ]
        },
        {
          bigImg: require('@/static/img/index/computer/item-computer-2-1.jpg'),
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: require('@/static/img/index/computer/item-computer-2-2.jpg')
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: require('@/static/img/index/computer/item-computer-2-3.jpg')
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: require('@/static/img/index/computer/item-computer-2-4.jpg')
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: require('@/static/img/index/computer/item-computer-2-5.jpg')
            }
          ],
          itemContent: [
            require('@/static/img/index/computer/item-computer-2-6.jpg'),
            require('@/static/img/index/computer/item-computer-2-7.jpg'),
            require('@/static/img/index/computer/item-computer-2-8.jpg')
          ]
        }
      ]
    }, // 电脑专栏
    eat: {
      title: '爱吃',
      link: ['休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃'],
      detail: [
        {
          bigImg: require('@/static/img/index/eat/item-eat-1-1.jpg'),
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: require('@/static/img/index/eat/item-eat-1-2.jpg')
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: require('@/static/img/index/eat/item-eat-1-3.jpg')
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: require('@/static/img/index/eat/item-eat-1-4.jpg')
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: require('@/static/img/index/eat/item-eat-1-5.jpg')
            }
          ],
          itemContent: [
            require('@/static/img/index/eat/item-eat-1-6.jpg'),
            require('@/static/img/index/eat/item-eat-1-7.jpg'),
            require('@/static/img/index/eat/item-eat-1-8.jpg')
          ]
        },
        {
          bigImg: require('@/static/img/index/eat/item-eat-2-1.jpg'),
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: require('@/static/img/index/eat/item-eat-2-2.jpg')
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: require('@/static/img/index/eat/item-eat-2-2.jpg')
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: require('@/static/img/index/eat/item-eat-2-2.jpg')
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: require('@/static/img/index/eat/item-eat-2-2.jpg')
            }
          ],
          itemContent: [
            require('@/static/img/index/eat/item-eat-2-6.jpg'),
            require('@/static/img/index/eat/item-eat-2-7.jpg'),
            require('@/static/img/index/eat/item-eat-2-8.jpg')
          ]
        }
      ]
    }, // 爱吃专栏
    asItems: [
      {
        img: require('@/static/img/goodsList/item-as-img-1.jpg'),
        price: 39.9,
        intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
        num: 3140,
        sale: 9000
      },
      {
        img: require('@/static/img/goodsList/item-as-img-2.jpg'),
        price: 36.6,
        intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
        num: 6160,
        sale: 8900
      },
      {
        img: require('@/static/img/goodsList/item-as-img-1.jpg'),
        price: 38.6,
        intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
        num: 9160,
        sale: 8800
      },
      {
        img: require('@/static/img/goodsList/item-as-img-2.jpg'),
        price: 35.6,
        intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
        num: 6160,
        sale: 7990
      },
      {
        img: require('@/static/img/goodsList/item-as-img-1.jpg'),
        price: 38.6,
        intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
        num: 9160,
        sale: 7600
      },
      {
        img: require('@/static/img/goodsList/item-as-img-2.jpg'),
        price: 35.6,
        intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
        num: 6160,
        sale: 6900
      }
    ], // 广告
    goodsList: [
      {
        img: require('@/static/img/goodsList/item-show-1.jpg'),
        price: 36.60,
        intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
        remarks: 6160,
        shopName: '元亨利配件专营店',
        sale: 9900
      },
      {
        img: require('@/static/img/goodsList/item-show-2.jpg'),
        price: 28.00,
        intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
        remarks: 3000,
        shopName: 'monqiqi旗舰店',
        sale: 9600
      },
      {
        img: require('@/static/img/goodsList/item-show-3.jpg'),
        price: 15.00,
        intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
        remarks: 2800,
        shopName: 'BIAZE官方旗舰店',
        sale: 8900
      },
      {
        img: require('@/static/img/goodsList/item-show-4.jpg'),
        price: 29.90,
        intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
        remarks: 9000,
        shopName: '歌乐力手配专营店',
        sale: 8600
      },
      {
        img: require('@/static/img/goodsList/item-show-5.jpg'),
        price: 15.00,
        intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
        remarks: 6160,
        shopName: 'BIAZE官方旗舰店',
        sale: 8560
      },
      {
        img: require('@/static/img/goodsList/item-show-6.jpg'),
        price: 28.00,
        intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
        remarks: 9006,
        shopName: '歌乐力手配专营店',
        sale: 8530
      },
      {
        img: require('@/static/img/goodsList/item-show-7.jpg'),
        price: 15.00,
        intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
        remarks: 8666,
        shopName: 'BIAZE官方旗舰店',
        sale: 8360
      },
      {
        img: require('@/static/img/goodsList/item-show-8.jpg'),
        price: 29.90,
        intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
        remarks: 6080,
        shopName: '歌乐力手配专营店',
        sale: 7560
      },
      {
        img: require('@/static/img/goodsList/item-show-1.jpg'),
        price: 36.60,
        intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
        remarks: 6160,
        shopName: '元亨利配件专营店',
        sale: 7360
      },
      {
        img: require('@/static/img/goodsList/item-show-2.jpg'),
        price: 28.00,
        intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
        remarks: 3000,
        shopName: 'monqiqi旗舰店',
        sale: 6960
      },
      {
        img: require('@/static/img/goodsList/item-show-3.jpg'),
        price: 15.00,
        intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
        remarks: 2800,
        shopName: 'BIAZE官方旗舰店',
        sale: 6560
      },
      {
        img: require('@/static/img/goodsList/item-show-4.jpg'),
        price: 29.90,
        intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
        remarks: 9000,
        shopName: '歌乐力手配专营店',
        sale: 6360
      },
      {
        img: require('@/static/img/goodsList/item-show-5.jpg'),
        price: 15.00,
        intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
        remarks: 6160,
        shopName: 'BIAZE官方旗舰店',
        sale: 5530
      },
      {
        img: require('@/static/img/goodsList/item-show-6.jpg'),
        price: 28.00,
        intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
        remarks: 9006,
        shopName: '歌乐力手配专营店',
        sale: 5560
      },
      {
        img: require('@/static/img/goodsList/item-show-7.jpg'),
        price: 15.00,
        intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
        remarks: 8666,
        shopName: 'BIAZE官方旗舰店',
        sale: 5260
      },
      {
        img: require('@/static/img/goodsList/item-show-8.jpg'),
        price: 29.90,
        intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
        remarks: 6080,
        shopName: '歌乐力手配专营店',
        sale: 3560
      }
    ], // 商品列表
    shoppingCart: [], // 购物车
    newShoppingCart: [
      {
        goods_id: 1529931938150,
        count: 1,
        img: 'static/img/goodsDetail/pack/1.jpg',
        package: '4.7英寸-深邃蓝',
        price: 28,
        title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
      }
    ], // 刚加入的购物车，作为展示
    recommend: [
      [
        {
          img: require('@/static/img/otherBuy/1.jpg'),
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: require('@/static/img/otherBuy/2.jpg'),
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: require('@/static/img/otherBuy/3.jpg'),
          intro: '苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: require('@/static/img/otherBuy/4.jpg'),
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: require('@/static/img/otherBuy/5.jpg'),
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: require('@/static/img/otherBuy/6.jpg'),
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: require('@/static/img/otherBuy/7.jpg'),
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: require('@/static/img/otherBuy/8.jpg'),
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ] // 推荐购买
  },
  getters: {
    // 距离开始秒杀时间
    seckillsHours (state) {
      return state.seckills.deadline.hours < 10 ? '0' + state.seckills.deadline.hours : state.seckills.deadline.hours
    },
    seckillsMinutes (state) {
      return state.seckills.deadline.minute < 10 ? '0' + state.seckills.deadline.minute : state.seckills.deadline.minute
    },
    seckillsSeconds (state) {
      return state.seckills.deadline.seconds < 10 ? `0${state.seckills.deadline.seconds}` : state.seckills.deadline.seconds
    }
    // 字段排序函数
    // 获取排序后的列表
  },
  mutations: {
    // 设置注册步骤
    SET_SIGN_UP_SETP (state, step) {
      state.signUpStep = step
    },
    // 设置用户登录信息
    SET_USER_LOGIN_INFO (state, data) {
      state.userInfo = data
    },
    // 设置加载状态
    SET_LOAD_STATUS (state, status) {
      state.isLoading = status
    },
    // 设置秒杀商品
    SET_SECKILLS_INFO (state, seckills) {
      state.seckills.goodsList = seckills[0]
      state.seckills.deadline = seckills[1]
    },
    // 设置轮播(营销)图
    SET_CAROUSELITEMS_INFO (state, { carouselItems, activity }) {
      state.marketing.CarouselItems = carouselItems
      state.marketing.activity = activity
    },
    // 设置电脑专栏数据
    SET_COMPUTER_INFO (state, computer) {
      state.computer = computer
    },
    // 设置爱吃专栏数据
    SET_EAT_INFO (state, eat) {
      state.eat = eat
    },
    // 距离开始秒杀时间
    REDUCE_SECKILLS_TIME (state) {
      state.seckills.deadline.seconds--
      if (state.seckills.deadline.seconds === -1) {
        state.seckills.deadline.seconds = 59
        state.seckills.deadline.minute--
        if (state.seckills.deadline.minute === -1) {
          state.seckills.deadline.minute = 59
          state.seckills.deadline.hour--
        }
      }
    },
    // 设置商品列表(搜索)
    SET_GOODS_LIST (state, data) {
      state.goodsList = data.goodsList
      state.asItems = data.asItems
    },
    // 设置商品列表排序
    SET_GOODS_ORDER_BY (state, data) {
      state.orderBy = data
    },
    // 设置商品详细信息
    SET_GOODS_INFO (state, data) {
      state.goodsInfo = data
    },
    // 添加购物车
    ADD_SHOPPING_CART (state, data) {
      const item = {
        goods_id: data.goods_id,
        count: data.count,
        img: data.package.img,
        package: data.package.intro,
        price: data.package.price,
        title: data.title
      }
      state.shoppingCart.push(item)
      state.newShoppingCart = data
    },
    // 设置购物车信息
    SET_SHOPPING_CART (state, data) {
      state.shoppingCart = data
    },
    // 设置推荐信息
    SET_RECOMMEND_INFO (state, data) {
      state.recommend = data
    },
    // 设置收获地址89
    SET_USER_ADDRESS (state, data) {
      state.address = data
    }
  },
  actions: {
    ajaxEditMessage (context, payload) {
      setTimeout(() => {
        context.commit('editMessage', payload)
      }, 3000)
    },
    // 添加购物车
    addShoppingCart (state, data) {
      this.$store.commit('ADD_SHOPPING_CART', data)
    }
    // 获取商品列表
  },
  modules: {
  }
})
