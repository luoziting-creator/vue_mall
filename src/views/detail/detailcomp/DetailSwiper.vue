<template>
    <swiper class="detail">
      <swiper-item v-for="(item, index) in topImages" :key="index">
          <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.detail {
  height: 300px;
  overflow: hidden;
}
</style>
