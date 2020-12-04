<template>
  <div>
    <!--头部区域-->
    <nav-bar class="profile_content">
      <div slot="center">我的档案</div>
    </nav-bar>
    <!--注册区域-->
    <section class="profile-number">
      <router-link
        href="javascript:"
        class="profile-link"
        to="/login"
        tag="div"
      >
        <div class="profile_image">
          <i
            class="iconfont icon-gerenzhongxinwoderenwubiaozhuntoumianxing"
          ></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <!--我的区域-->
    <section class="profile_info_data ">
      <div class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </div>
    </section>
    <!--注册区域-->
    <section class="profile_my_order">
      <!-- 我的订单 -->
      <a href="javascript:" class="my_order">
        <div class="order-list">
          <span>
            <i class="iconfont icon-dingdan"></i>
          </span>
          <span>我的消息</span>
        </div>
        <div class="my_order_div">
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javascript:" class="my_order">
        <div class="order-list">
          <span>
            <i class="iconfont icon-jifenshangcheng"></i>
          </span>
          <span>积分商城</span>
        </div>
        <div class="my_order_div">
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
         <!-- 会员卡 -->
      <a href="javascript:" class="my_order">
        <div class="order-list">
          <span>
            <i class="iconfont icon-huiyuanqia"></i>
          </span>
          <span>会员卡</span>
        </div>
        <div class="my_order_div">
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order">
      <!-- 我的购物车 -->
      <a href="javascript:" class="my_order">
        <div class="order-list">
          <span>
            <i class="iconfont icon-fuwuzhongxin"></i>
          </span>
          <span>我的购物车</span>
        </div>
        <div class="my_order_div">
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 下载购物APP -->
      <a href="javascript:" class="my_order">
        <div class="order-list">
          <span>
            <i class="iconfont icon-jifenshangcheng"></i>
          </span>
          <span>下载购物APP</span>
        </div>
        <div class="my_order_div">
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>

  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";

export default {
  name: "Profile",
  data() {
    return {};
  },
  created() {},
  components: {
    NavBar
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.profile_content {
  background-color: #ff8198;
  color: #fff;
  border-bottom: 1px solid #ccc;
}
.profile-number {
  .profile-link {
    position: relative;
    display: flex;
    background: #ff8198;
    padding: 20px 10px;

    .profile_image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      vertical-align: top;

      .icon-gerenzhongxinwoderenwubiaozhuntoumianxing {
        background: #e4e4e4;
        font-size: 62px;
      }
    }

    .user-info {
      margin-top: 8px;
      margin-left: 15px;

      p {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 18px;
        color: #fff;
        margin-top: 5px;

        .user-icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          .icon-mobile {
            font-size: 18px;
            vertical-align: middle;
          }
        }
        .icon-mobile-number {
          font-size: 14px;
          color: #fff;
        }
      }

      .user-info-top {
        padding-bottom: 8px;
      }
    }

    .arrow {
      width: 12px;
      height: 12px;
      position: absolute;
      right: 15px;
      top: 40%;

      .icon-jiantou1 {
        color: #fff;
        font-size: 5px;
      }
    }
  }
}
.profile_info_data {
  width: 100%;
  background-color: #fff;
  color: #ccc;
  border-bottom: 1px solid #ccc;
  .info_data_list {
    display: flex;

    .info_data_link {
      display: flex;
      flex-direction: column;
      width: 33.3%;
      text-align: center;
      border-right: 1px solid #ddd;
      padding: 10px 20px;
      .info_data_top {
        span {
          font-size: 30px;
          color: #ff8198;
          font-weight: 700;
          line-height: 30px;
        }
      }
    }
  }
}
.profile_my_order {
  border-top: 12px solid #EFEFEE;
 
  .my_order {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    line-height: 25px;
    border-bottom: 1px solid #EFEFEE;
    .order-list {
      span {
        color: #000;
        font-size: 14px;
      }
      .iconfont {
        color: #FF888F;
        margin-right: 5px;
      }
    }
    .my_order_div {
      .my_order_icon {
        .iconfont {
           font-size: 14px;

        }
      }
     
    }
  }

}

</style>
