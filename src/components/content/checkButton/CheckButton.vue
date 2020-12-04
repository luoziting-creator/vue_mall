<template>
  <div class="check-button" :class="{active:isChecked}" >
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }

  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.check-button  {
 border-radius:50%;
 border: 2px solid #aaa;
}
.active{
  border-color: red;
  background-color: red;
}

</style>
