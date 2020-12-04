<template>
  <div class="goods-item" @click="goodsListItem">
    <img v-lazy="showImage"  alt="" @load="imageLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsListItem",
  props: {
    goodsItem: {
      type: Object,
      defalt() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.showLarge.img

    }
  },
  methods: {
    // 监听图片加载完成的事件
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
      // console.log('imagesload')
      // if(this.$route.path.indexOf('/home')){
      //   this.$bus.$emit('homeItemImageLoad')
      // } else if(this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailItemImageLoad')
      // }
    },
    goodsListItem(){
      // console.log('goodsItem')
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }
};
</script>
<style lang="less" scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 49%;

  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: #ff5777;
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: '';
      position: absolute;
      left: -13px;
      top: 0px;
      width: 12px;
      height: 12px;
      background: url("~assets/img/common/collect.svg") no-repeat;
      background-size: contain;
    }
  }
}
</style>
