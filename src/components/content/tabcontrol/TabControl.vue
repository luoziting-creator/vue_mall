<template>
  <div class="tab-control">
  <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:currentIndex===index}" @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex:0
    };
  },
  created() {},
  computed: {},
  methods: {
    itemClick(index){
      this.currentIndex=index;
      this.$emit('tabClick',index)

    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item span {  
  padding: 0 5px;
}
.active {
  color: var(--color-high-text);

}
.active span {
  border-bottom: 2px solid var(--color-tint);
  padding-bottom: 6px;
   
}
</style>
