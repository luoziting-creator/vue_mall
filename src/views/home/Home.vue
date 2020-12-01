<template>
  <div id="home">
    <!--头部区域-->
    <nav-bar class="shopping">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore" 
    >
      <!--轮播图区域-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <!--四宫格区域-->
      <home-recommend-view :recommend="recommends"></home-recommend-view>
      <!--图片区域-->
      <home-feature></home-feature>
      <!--切换区域-->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <!--切换区域中内容展示区域-->

      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!--点击图标回到顶部-->
    <!--native监听原生组件的监听事件-->
    <!--修饰.native什么时候使用
     在我们需要监听一个组件的原生事件的时候，必须给对应的事件加上.native才能进行监听

     -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import HomeSwiper from "./childrenComp/HomeSwiper";
import HomeRecommendView from "./childrenComp/HomeRecommendView";
import HomeFeature from "./childrenComp/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import {debounce} from "common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: true,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
    };
  },
  created() {
    // 网络请求相关的方法
    //  请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 对于refresh非常频繁的问题，进行防抖操作
  // 防抖 debounce   节流 throttle


  // 防抖函数起作用的全过程：
  // 如果我们直接执行refresh,那么refresh函数会执行30次
  // 可以将refresh函数传入到debounce函数中，生成一个新的函数
  // 之后在调用非常频繁的时候，就是用新生成的函数，而新生成的函数，并不会频繁的调用，如果下一次执行来得非常的快，那么会将上一次取消掉
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,50)
    //监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => { 
      refresh()
    });
   

  },
  destroyed(){
    console.log('home destroyed')

  },
  
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;

        // console.log(res);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

      // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    //事件监听相关的方法
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl.currentIndex=index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll)
    },
    // 控制指定的显示与隐藏
    contentScroll(position) {
      // console.log(position)
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 决定tabControl是否吸顶(position:fixed)
      this.isTabFixed= (-position.y) >this.tabOffsetTop
    },
    loadMore() {
      console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);
      //  解决better-scroll可滚动区域的问题
      // 是根据scrollerHeight属性决定的，scrollerHeight属性是根据better-scroll 的content中的子组件的高度，
      // 但是我们首页中，刚开始在计算scrollerHeight属性时，是没有将图片计算在内的，所以计算出来的是错误的，
      // 后来图片加载进来之后有了新的高度，但是scrollerHeight属性没有进行更新，所以滚动出现问题
      // 如何解决这个问题呢？
      // 监听每一张图片的是否加载完成，只要有一张图片加载完成了，执行一次refresh()
      // 如何监听图片加载完成了？
      // 原生的js
      // Vue中监听 @load="方法"
      // 调用scroll的refresh
      // 如何将GoodsListitem.vue中的时间传入到Home.vue中
      // 因为涉及到非父子组件中的童心，所以这里我们选择了事件总线
      // bus-->总线    main.js中写入 Vue.prototype.$bus=new Vue()
      // this.$bus.$emit('事件名称'，参数)     this.$bus.$on('事件名称',回调函数(参数))
      //  一定要手动加refresh,这样better-scroll会重新计算可滚动的高度
      //  this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad(){
       // 获取tabControl的offetTop   必须要知道滚动到多少能开始吸顶效果，监听homeSwiper轮播图中的img加载完成
      //  为了不让我们的homeswiper多次发出事件，可以使用isload变量进行状态的记录
      // 注意不进行多次进行调用和debounce的区别
    // 所有的组件都有一个属性$el:用于获取组件中的元素
    
    console.log(this.$refs.tabControl.$el.offsetTop)
    this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop

    }
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
    

  },
  deactivated(){
     this.saveY=this.$refs.scroll.getScrollY()

  },
   
 
};
</script>
<style scoped>
#home {
  height: 100vh;

}
.shopping {
 
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;

}

</style>
