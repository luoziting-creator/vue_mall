<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToShopCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    addToShopCar() {
      this.$emit('addToShopCar')

    }
  }
};
</script>
<style lang="less" scoped>
.bottom-bar {
  position: fixed;
  display: flex;
  height: 49px;
  background-color: #fff;
  
  text-align: center;
  
  
  .bar-item {
    display: flex;
    flex: 1;
    div {
      flex: 1;
    }
  }

  .bar-left {
    .text {
      font-size: 13px;
    }
    .icon{
      display: block;
      width: 22px;
      height: 22px;
      margin: 5px auto 3px;
      background: url('~assets/img/detail/detail_bottom.png') no-repeat;
      background-size: 100%;
    }
    .service {
      background-position: 0px -52px;
    }
    .shop {
      background-position: 0px -97px;
    }
    .select {
      background-position: 0px 2px;
    }

  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 49px;
    .cart {
      background-color: #ffe817;
      color: #333;
    }
    .buy {
      background-color: #C45A72;
    }
  }
}
</style>
0