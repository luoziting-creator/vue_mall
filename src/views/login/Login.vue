<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">APP商城</h2>
        <div class="login_header_title">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">
              <a href="javascript:;" class="on">短信登录</a></mt-tab-item
            >
            <mt-tab-item id="2">
              <a href="javascript:;">密码登录</a></mt-tab-item
            >
          </mt-navbar>
        </div>
      </div>

      <div class="login_content">
        <mt-tab-container v-model="selected" class="tab-container">
          <mt-tab-container-item id="1" class="tab-container-item1">
            <div class="on">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" />
                <button disabled="disabled" class="get_verification">
                  获取验证码
                </button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码" />
              </section>
              <section class="login_hint">
                温馨提示：未注册APP的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div>
              <section>
                <section class="login_message">
                  <input
                    type="tel"
                    maxlength="11"
                    placeholder="手机/邮箱/用户名"
                  />
                </section>
                <section class="login_verification">
                  <input type="tel" maxlength="8" placeholder="密码" />
                  <div class="switch_button off">
                    <div class="switch_circle"></div>
                    <span class="switch_text">...</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" />
                  <img
                    class="get_verification"
                    src="./images/captcha.svg"
                    alt="captcha"
                  />
                </section>
              </section>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
        <button class="login_submit">登录</button>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont icon-arrow-left-bold" @click="$router.back()"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: "1"
    };
  }
};
</script>

<style lang="less" scoped>
.loginContainer {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .loginInner {
    width: padding-top 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 30px;
        font-weight: bold;
        color: #ff8198;
        text-align: center;
        margin-top: 30px;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        > a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;
        }

        :first-child {
          margin-right: 40px;
        }

        
      }
    }


        input {
          width: 100%;
          height: 100%;
          padding-left: 10px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-radius: 4px;
          outline: 0;
          font: 400 14px Arial;

          &:focus {
            border: 1px solid #02a774;
          }
        }

        .login_message {
          position: relative;
          margin-top: 16px;
          height: 48px;
          font-size: 14px;
          background: #fff;
        }

        .get_verification {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          border: 0;
          color: #ccc;
          font-size: 14px;
          background: transparent;
        }

        .login_verification {
          position: relative;
          margin-top: 16px;
          height: 48px;
          font-size: 14px;
          background: #fff;

          .switch_button {
            font-size: 12px;
            border: 1px solid #ddd;
            border-radius: 8px;
            transition: background-color 0.3s, border-color 0.3s;
            padding: 0 6px;
            width: 30px;
            height: 16px;
            line-height: 16px;
            color: #fff;
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);

            &.off {
              background-color: #fff;

              .switch_text {
                float: right;
                color: #ddd;
              }
            }

            &.on {
              background-color: #ff8198;
            }

            > .switch_circle {
              position: -webkit-sticky absolute;
              top: -1px;
              left: -1px;
              width: 16px;
              height: 16px;
              border: 1px solid #ddd;
              border-radius: 50%;
              background: #fff;
              box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
              transition: transform 0.3s;
            }
          }
        }

        .login_hint {
          margin-top: 12px;
          color: #999;
          font-size: 14px;
          line-height: 20px;

          > a {
            color: #ff8198;
          }
        }
      
   

    .login_submit {
      display: block;
      width: 100%;
      height: 42px;
      margin-top: 30px;
      border-radius: 4px;
      background: #ff8198;
      color: #fff;
      text-align: center;
      font-size: 16px;
      line-height: 42px;
      border: 0;
    }

    .about_us {
      display: block;
      font-size: 12px;
      margin-top: 20px;
      text-align: center;
      color: #999;
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      > .iconfont {
        display: block;
        font-size: 20px;
        color: #999;
        margin-top: 10px;
      }
    }
  }
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 1px solid #ff8198;
  color:#ff8198;
}
.mint-navbar .mint-tab-item {
  padding: 5px;
}
.loginContainer .loginInner .login_header .login_header_title[data-v-2529d779] :first-child{
  margin-right: 0;
}
</style>
