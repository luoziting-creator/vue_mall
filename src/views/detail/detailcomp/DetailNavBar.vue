<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detailNavBar">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="detailNavBarItem"
          @click="detailNavBarClick(index)"
          :class="{active: currentindex === index}"
        >
          {{ item }}
        </div>
      </div>

    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0
    };
  },
  created() {},
  components: {
    NavBar
  },
  methods: {
    detailNavBarClick(index) {
      this.currentindex = index;
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>
<style scoped>
.detailNavBar {
  display: flex;
  font-size: 12px;
}
.detailNavBarItem{
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 8px;
}
</style>
