<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  created() {},
  computed: {},
  methods: {
    show(message, duration=2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>
<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px;
}
</style>
