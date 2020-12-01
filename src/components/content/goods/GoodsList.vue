<template>
    <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" />
     
    </div>
</template>
<script>
import GoodsListItem from './GoodListItem'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []

      }
    }
  },
   components:{
     GoodsListItem
   }
}
</script>
<style lang="less" scoped>
.goods {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 6px;
}


</style>
