<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" ></detail-goods-info>
      <detail-params-info :paramsInfo="paramsInfo"></detail-params-info>
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./detailcomp/DetailNavBar";
import DetailSwiper from "./detailcomp/DetailSwiper";
import DetailBaseInfo from "./detailcomp/DetailBaseInfo";
import DetailShopInfo from "./detailcomp/DetailShopInfo";
import DetailGoodsInfo from "./detailcomp/DetailGoodsInfo";
import DetailParamsInfo from "./detailcomp/DetainParamsInfo";


import Scroll from "components/common/scroll/Scroll";


import { getDetail, Goods, Shop, GoodsParams } from "network/Detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramsInfo:{}
    };
  },
  methods:{
    imageLoad(){
        this.$refs.scroll.refresh()
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,

    Scroll
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
    // 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 获取顶部的轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      // 3.获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // 创建店铺信息对象
      this.shop = new Shop(res.result.shopInfo);
      // 保存图片信息
      this.detailInfo=res.result.detailInfo

      // 获取参数信息
      this.paramsInfo =new GoodsParams(res.result.itemParams.info, res.result.itemParams.rule)
    });
  }
};
</script>
<style lang="less" scoped>
 #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
