<template>
  
     <!--轮播图区域区域-->
    <mt-swipe :auto="4000" class="detail">
        <mt-swipe-item v-for="(item, index) in topImages" :key="index">
            <img :src="item" alt="" id="bg" >
        </mt-swipe-item>     
    </mt-swipe>
    
</template>
<script>

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
    
  },
  methods: {}
};
</script>
<style lang="less" scoped>

.mint-swipe {
    position: relative;
    height: 300px;
    overflow: hidden;
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
