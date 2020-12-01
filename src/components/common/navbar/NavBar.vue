<template>
    <div class="nav-bar">
      <div class="left">
      <slot name="left"></slot>
      </div>
      <div class="center">
         <slot name="center"></slot>
      </div>    
      <div class="right">
        <slot name="right"></slot>

      </div>
    </div>
</template>
<script>
export default {
  name:'NavBar',
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style lang="less" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(100,100,100,.1);
  z-index: 999;

}
.center {
  flex:1;
  
}
.left {
  width: 60px;
 
}
.right {
 
  width: 60px;
}

</style>
