<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-params-info
        :paramsInfo="paramsInfo"
        ref="params"
      ></detail-params-info>
      <detail-commment-info
        :commentInfo="commentInfo"
        ref="commment"
      ></detail-commment-info>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar
      @addToShopCar="addToShopCar"
      class="bottom-bar"
    ></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import DetailNavBar from "./detailcomp/DetailNavBar";
import DetailSwiper from "./detailcomp/DetailSwiper";
import DetailBaseInfo from "./detailcomp/DetailBaseInfo";
import DetailShopInfo from "./detailcomp/DetailShopInfo";
import DetailGoodsInfo from "./detailcomp/DetailGoodsInfo";
import DetailParamsInfo from "./detailcomp/DetainParamsInfo";
import DetailCommmentInfo from "./detailcomp/DetailCommmentInfo";
import DetailBottomBar from "./detailcomp/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import {mapActions} from 'vuex'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend
} from "network/Detail";
import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";
export default {
  name: "Detail",
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      // itemImgListener:null
      ThemeTopYs: [],
      getThemeTopYs: null,
      currentIndex: 0
    };
  },

  methods: {
    ...mapActions(['addCar']),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopYs();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.ThemeTopYs[index], 500);
    },
    contentScroll(position) {
      // console.log(position)
      // 获取y值
      const positionY = -position.y;
      // 2.positionY和主题中的值进行对比
      //  [0, 8491, 9422, 9631, __ob__: Observer]
      // for(let i in this.ThemeTopYs) {
      // 注意这里的i是字符串
      //   console.log(i+1)
      // if(positionY>this.positionY[i] && positionY<this.positionY[i+1]) {

      // }
      // }
      // 条件成立的情况下
      // 条件一：this.currentIndex!==i 防止赋值的过程过于频繁
      // 条件二：i<length-1 && positionY >=this.ThemeTopYs[i] && positionY<this.ThemeTopYs[i+1]
      //  判断区间：在数字0 和某个数字之间 （i<length-1)
      // 条件二中的条件二：i===length-1 && positionY >= this.ThemeTopYs[i]
      // 判断大于等于 i === length-1

      let length = this.ThemeTopYs.length;
      // for(let i=0;i<length;i++) {
      //   if(this.currentIndex!==i && ((i<length-1 && positionY >=this.ThemeTopYs[i] && positionY<this.ThemeTopYs[i+1])
      //   || (i===length-1 && positionY >= this.ThemeTopYs[i] ))) {
      //     this.currentIndex=i
      //     // console.log(this.currentIndex)
      //     this.$refs.nav.currentIndex=this.currentIndex
      //     console.log( this.$refs.nav.currentIndex)
      //     console.log(this.currentIndex)
      // }

      //   }

      // hack写法
      // 给一个最大值 通过 Number.MAX_VALUE
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.ThemeTopYs[i] &&
          positionY < this.ThemeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 监听是否回到顶部
      this.listenBackTop(position);
    },
    addToShopCar() {
      //1. 获取购物车中需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品加入到购物车(知识点的补充  1.action返回Promise   2.mapActions)
      // this.$store.dispatch("addCar", product).then(res=>{
      //   console.log(res)
      // });
      this.addCar(product).then(res=>{
        // console.log(res)
        this.$toast.show(res)
        console.log(this.$toast)

      })

    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommmentInfo,
    DetailBottomBar,

    Scroll,
    GoodsList
  },
  created() {
    //1.保存传入的ii
    this.iid = this.$route.params.iid;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 2.1 获取顶部的轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      // 2.2 获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // 2.3 创建店铺信息对象
      this.shop = new Shop(res.result.shopInfo);
      // 2.4 保存图片信息
      this.detailInfo = res.result.detailInfo;

      // 2.5 获取参数信息
      this.paramsInfo = new GoodsParams(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      // 获取评论信息
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }
      // 1.第一次获取值不对
      // 值不对的原因： this.$refs.params.$el压根没有渲染
      //  this.ThemeTopYs=[]
      //  this.ThemeTopYs.push(0);
      //  this.ThemeTopYs.push(this.$refs.params.$el.offsetTop);
      //  this.ThemeTopYs.push(this.$refs.commment.$el.offsetTop);
      //  this.ThemeTopYs.push(this.$refs.recommends.$el.offsetTop);
      //  console.log(this.ThemeTopYs)

      //  this.$nextTick(()=>{
      //   //  2.第一次获取值不对
      //   // 值不对的原因是图片没有计算在内
      //   //  根据最新的数据，对应的dom是已经渲染出来了
      //   // 但是图片依然是没有加载完的（目前获取到的offsetTop不包含其中的图片的）
      //  this.ThemeTopYs=[]
      //  this.ThemeTopYs.push(0);
      //  this.ThemeTopYs.push(this.$refs.params.$el.offsetTop);
      //  this.ThemeTopYs.push(this.$refs.commment.$el.offsetTop);
      //  this.ThemeTopYs.push(this.$refs.recommends.$el.offsetTop);
      //  console.log(this.ThemeTopYs)

      //  })
    });
    // 3.获取推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommends = res.data.list;
    });
    // 4.给getThemeTopY赋值（对给this.themeTopYs赋值的操作进行防抖）
    this.getThemeTopYs = debounce(() => {
      this.ThemeTopYs = [];
      this.ThemeTopYs.push(0);
      this.ThemeTopYs.push(this.$refs.params.$el.offsetTop);
      this.ThemeTopYs.push(this.$refs.commment.$el.offsetTop);
      this.ThemeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.ThemeTopYs.push(Number.MAX_VALUE);
      console.log(this.ThemeTopYs);
    });
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  }
};
</script>
<style lang="less" scoped>
#detail {
  position: relative;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 49px);
}
.bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
