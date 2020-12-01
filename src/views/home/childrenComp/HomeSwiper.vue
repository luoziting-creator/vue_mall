<template>
  <!--轮播图区域-->
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a href="#">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
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
    Swiper,
    SwiperItem
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
<style lang="less" scoped></style>
