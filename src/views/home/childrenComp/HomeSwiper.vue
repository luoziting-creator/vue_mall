<template>
  <!--轮播图区域区域-->
    <mt-swipe :auto="4000" class="">
        <mt-swipe-item v-for="(item, index) in banners" :key="index">
            <img :src="item.image" alt="" @load="imageLoad" id="bg">
        </mt-swipe-item>     
    </mt-swipe>
</template>
<script>

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isload: false
    };
  },
  components: {
   
  },

  methods: {
    imageLoad() {
      if (!this.isload) {
        console.log("111111");
        this.$emit("swiperImageLoad");
        this.isload = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.mint-swipe {
    position: relative;
    height: 200px;
}

.mt-swipe-item img {
    width: 100%;
    height: 100%;
}

#bg {
    width: 100%;
    height: 100%;
}

</style>
