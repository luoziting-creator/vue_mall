<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table, index) in paramsInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>

    <table class="table-param">
      <tr v-for="(info ,index) in paramsInfo.infos" :key="index">
        <td class="info-params-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.image.length!==0">
    <img :src="paramsInfo.image" alt=""></div>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  data() {
    return {};
  },
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    width: 100%;
    // border-collapse: collapse;
    tr {
      height: 42px;
    }
    td {
      border-bottom: 1px solid rgba(100,100,100,.1);
    }
  }
  .table-param{
    // border-top: 1px solid rgba(0,0,0,.1);
    .info-params-key {
      // 一定要给
      width: 95px;

    }
    .param-value {
      color: #eb4868
    }
    .info-img {
      img {
        width: 100%;
      }
    }

  }
}

</style>
