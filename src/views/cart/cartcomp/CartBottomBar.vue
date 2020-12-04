<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectedAll" @click.native="checkClick"></check-button>
      <span class="select">全选</span>
    </div>
    <div class="price">合计:<span class="icon">{{ totalPrice}}</span></div>
    <div class="calculator" @click="calClick">去计算:({{checkLength}})</div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from 'vuex'
export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  methods:{
    checkClick(){
      // 这里不要做简化，会出现问题的
      //全部选中
      if(this.isSelectedAll) {
        this.cartList.forEach(item => item.checked = false)
      }else{  //部分或者全部选中
        this.cartList.forEach(item => item.checked = true)
      }     
    },
    calClick(){
      if(!this.isSelectedAll) {
        this.$toast.show('请选择要购买的商品')
      }
    }

  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice () {
      return '￥' + this.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue, item)=>{
        return preValue + item.count*item.price
      },0).toFixed(2)
    },
    checkLength(){
      return  this.cartList.filter(item=>item.checked).length
    },
    isSelectedAll(){
      // 1.使用普通遍历
      if(this.cartList.length===0) return false
      for(let i of this.cartList){
        if(!i.checked){
          return false
        }
      }
      return true
      // 2.使用filter函数
      // return !(this.cartList.filter(item=>!item.checked).length)
      // 3.使用find函数
      // return !this.cartList.find(item=>!item.checked)
    },


  },
};
</script>
<style lang="less" scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: red;
  text-align: center;
  background-color: #eee;
  font-size: 14px;
  
  
}
.check-content {
  position: relative;
  display: inline-block;
  display: flex;
   margin: auto 20px;
   vertical-align: bottom;

}
.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.price {
  margin: auto 10px;
}
.calculator {
  font-size: 16px;
  width: 90px;

 text-align: center;
 line-height: 40px;
  background-color: red;
  color: #fff;
}
.icon {
  color: red;
}
.select {
  position: absolute;
  top: 1px;
  left: 21px;
  width: 40px;
  height: 20px;
  
}
</style>
