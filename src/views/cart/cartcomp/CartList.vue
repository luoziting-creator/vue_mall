<template>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"></cart-list-item>
      </scroll>
    </div>
</template>
<script>

import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
import CartListItem from './CartListItems'
export default {
   data() {
      return {
      }
   },
   components:{
     Scroll,
     CartListItem
   },
   
   computed:{
     ...mapGetters(['cartList'])
   },
   activated(){
    //  console.log('11111111')
    this.$refs.scroll.refresh()
   }

}
</script>
<style lang="less" scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}

</style>
