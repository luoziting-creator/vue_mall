import {debounce} from "./utils";
import BackTop from "components/content/backtop/BackTop";
export const itemListenerMixin = {
    data(){
      return {
        itemImgListener:null
      }
    },
    mounted() {
      let refresh = debounce(this.$refs.scroll.refresh,50)
      this.itemImgListener=() => { 
        refresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImgListener)
      console.log('我是混入中的内容')
    },
}



export const backTopMixin ={
  data(){
    return {
      isShowBackTop: false,
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll)
    },
    listenBackTop(position){
      this.isShowBackTop = -position.y > 1000;
    }
  },
  components:{
    BackTop
  }
}