<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
 import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        scroll: null,
        
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        //  <!--1.无论是否设置click：true还是false,button都可以点击-->
        // <!--2.必须设置click：true,，那么div才能监听点击-->
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad

      })

      // 2.监听滚动的位置
      if(this.probeType===2 || this.probeType===3) {
        this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)    
      })
      }   
     if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多')
        this.$emit('pullingUp')
      })
     }
      console.log(this.scroll)


      // 3.监听上拉事件
     
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
        
      },
      refresh(){
        console.log("-------------");
        this.scroll && this.scroll.refresh()

      },
      getScrollY(){
        return this.scroll ? this.scroll.y :0
      }
     
    }
  }
</script>

<style scoped>

</style>
