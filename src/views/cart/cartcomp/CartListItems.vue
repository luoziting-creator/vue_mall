<template>
  <div id="shop-item">
    <div class="item-selector">
    <check-button :isChecked="product.checked"  @click.native="checkNative"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">{{product.price}}</div>
        <div class="item-count right">{{product.count}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: "CartListItems",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components:{
    CheckButton
  },
  methods: {
    checkNative(){
      this.product.checked= !this.product.checked
    }
  }
};
</script>
<style lang="less" scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img{
  padding: 5px;
  img {
    width: 80px;
    height: 100px;
    // display: block;
    border-radius:5px;

  }
}
.item-info {
  font-size: 17px;
  color:#333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  .item-price {
    color: orangered;
  }
}







</style>
