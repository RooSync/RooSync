<script setup>
import { onMounted, onUpdated } from 'vue'
onMounted(() => {})
onUpdated(() => {})
</script>

<template>
  <div class="roo_token">
    <div class="w">
      <div class="roo-wrapper">
        <div class="roo-left">
          <div class="title">$ROOC</div>
          <div class="text">
            Discover the power of $ROOC, the governance token of RooSync,
            designed to unlock new dimensions within our thriving ecosystem. Not
            only represents ownership but serves as a key to elevate your
            RooSync experience. <br />
            Stake $ROOC to earn valuable store points, enhancing your Roo Pocket
            experience. The more you stake, the higher your store points,
            unlocking premium tools, and granting you unparalleled access to
            cutting-edge resources.
          </div>
        </div>
        <div class="roo-right">
          <div class="wh-container">
            <div class="wrapper">
              <div class="content">
                <img
                  class="rooc-img"
                  src="@/assets/images/rooc_banner.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="economy">
    <div class="total">
      <p class="text-total">TOTAL SUPPLY</p>
      <h2 class="total-title">1,000,000,000</h2>
      <p class="type"></p>
    </div>
    <div class="distribution">
      <img class="token-img" src="@/assets/images/rooc-economy.png" alt="" />
      <div class="text-d">
        <p class="public">Public Sale —— 40%</p>
        <p class="staking">Staking Rewards ——— 35%</p>
        <p class="Ecological">Ecological Support —— 20%</p>
        <p class="team">Team —— 5%</p>
      </div>
    </div>
  </div>
  <PageFooter></PageFooter>
</template>

<style lang="scss" scoped>
.roo_token {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 36px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 0px;
  padding-bottom: 0px;
  height: auto;
  .w {
    width: 100%;
  }
}
.roo-wrapper {
  margin: 0px auto;
  display: flex;

  width: 100%;

  .roo-left {
    margin-top: 70px;
    height: 100%;
    .title {
      margin-top: 0;
      margin-bottom: 35px;
      font-weight: 400;
      font-size: 78px;
      line-height: 100px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #fdb10d;
      padding-bottom: 10px;
      position: relative;
    }
    .text {
      width: 670px;
      font-weight: 400;
      font-size: 16px;
      line-height: 40px;
      color: #f8edeb;
    }
  }
  .roo-right {
    width: 100%;
    display: flex;
    .wh-container {
      width: 100%;
    }
  }
  .rooc-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
.economy {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 36px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 0px;
  padding-bottom: 0px;
  height: auto;
}
.total {
  text-align: left;
  max-width: 1264px;
  width: 100%;
  padding-left: 36px;
}

.text-total {
  font-size: 20px;
  margin: 0;
}

.total-title {
  font-size: 50px;
  color: #fdb10d;
  margin: 10px 0;
}

.type {
  font-size: 20px;
  margin-bottom: 30px;
}

.distribution {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 35px;
  padding-right: 35px;
}

.token-img {
  flex: 0.4;
  width: 100%;
  margin-bottom: 20px;
}

.text-d {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}
.text-d p {
  margin: 0;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  line-height: 130px;
  padding-top: 10px;
}
.public {
  color: #f1a331;
}

.staking {
  color: #5e7f62;
}

.Ecological {
  color: #a16f40;
}

.team {
  color: #f3bf52;
}

@media (max-width: 991px) {
  .roo_token {
    width: 100%;
    height: auto;
    margin-top: 0 auto;
  }
  .economy {
    max-width: 714px;
    margin: 10px auto;
    height: auto;
  }
  .token-img {
    max-width: 160px;
  }
}

@function reduceFontSize($size: 2px) {
  @return calc(#{$size} * 0.9);
}
</style>
