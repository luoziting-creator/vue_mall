<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index">
     <a :href="item.link">
      <img :src="item.image" alt="">
      <div class="recommend_words">{{item.title}}</div>
     </a>

    </div>
   
  </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
 props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
  .recommend {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 8px 0 30px;
    border-bottom: 10px solid #eee;
    img {
      width: 70px;
      height: 70px;
    }
    .recommend_words {
      font-size: 12px;
      margin-top: 8px;
      
    }

  }
</style>
