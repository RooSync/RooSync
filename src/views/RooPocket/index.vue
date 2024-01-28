<script setup>
import { onMounted, onUpdated } from 'vue'

onMounted(() => {})
onUpdated(() => {})
</script>

<template>
  <div class="real">
    <div class="w">
      <div class="real-wrapper">
        <div class="main-wrapper">
          <div class="main">
            <div class="com-title title">
              <span class="title-1">Roo Pocket</span>
            </div>

            <div class="text1">
              Roo Pocket is our carefully curated toolbox, providing users with a variety of tools
              and resources to explore and enhance their web3 interactive experience. Users can
              seamlessly experience our native developments and outstanding on-chain tools shared by
              other developers at any time.
              <br />
              By staking $ROOC, users gain access to the toolbox, while developers can contribute
              excellent tools to Roo Pocket and earn developer rewards.
            </div>

            <div class="text2">UTILITY</div>
            <div class="card-list">
              <div class="card-item">
                <div class="left">
                  <div class="l-titel">Diverse Tool Resources</div>
                  <div class="l-list">
                    <div class="l-item mb">
                      RooSync brings together a diverse range of Web3 tools from multiple public
                      blockchains, covering areas such as BRC20 data analysis, NFT customization,
                      and more. Whether you’re a developer, investor, or a regular user, you can
                      find everything you need here.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-item">
                <div class="left">
                  <div class="l-titel">Customized Tool Experience</div>
                  <div class="l-list">
                    <div class="l-item l-item-no">
                      RooSync brings together a diverse range of Web3 tools from multiple public
                      blockchains, covering areas such as BRC20 data analysis, NFT customization,
                      and more. Whether you’re a developer, investor, or a regular user, you can
                      find everything you need here.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-item">
                <div class="left">
                  <div class="l-titel">Partner Onboarding</div>
                  <div class="l-list">
                    <div class="l-item">
                      Partner Onboarding: RooSync collaborates with numerous talented developers,
                      offering them generous creator rewards. We only charge a 5% management fee on
                      tool income.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-item">
                <div class="left">
                  <div class="l-titel">Multi-Chain Ecosystem</div>
                  <div class="l-list">
                    <div class="l-item">
                      RooSync took the lead in contributing to the development of the BRC20
                      ecosystem. Subsequently, our Roo Pocket toolkit will be deployed on other
                      networks such as ETH, Polygon, Avalanche, and more, Roo by Roo!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="text4">Partners</div>

            <div class="img-list">
              <div class="img-item">
                <div class="img">
                  <img
                    src="https://altcoinsbox.com/wp-content/uploads/2023/03/okx-logo-black-and-white.jpg"
                    alt=""
                  />
                </div>
                <div class="img-title">Scarface</div>
              </div>
              <div class="img-item">
                <div class="img">
                  <img
                    src="https://www.okx.com/cdn/assets/plugins/2022/01/07104210.png?x-oss-process=image/auto-orient,1/quality,q_90/format,webp"
                    alt=""
                  />
                </div>
                <div class="img-title">Anastasiya</div>
              </div>
              <div class="img-item">
                <div class="img">
                  <img src="@/assets/images/map_1.png" alt="" />
                </div>
                <div class="img-title">Galante</div>
              </div>

              <div class="img-item">
                <div class="img">
                  <img src="" alt="" />
                </div>
                <div class="img-title">Torrio</div>
              </div>
            </div> -->
          </div>
          <div class="pic_real_main">
            <div class="main-img">
              <div class="img">
                <img src="@/assets/images/pocket_banner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PageFooter></PageFooter>
</template>

<style lang="scss" scoped>
.pic_real_main {
  width: 100%;
  .main-img {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
.real {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 36px;
  margin-bottom: 36px;
  padding-left: 95px;
  padding-right: 80px;
  padding-top: 0px;
  padding-bottom: 36px;
}
.w {
  width: 100%;
}
.real-wrapper {
  width: 100%;

  z-index: 9;

  .main-wrapper {
    display: flex;
    height: 80vh;
    margin: 0 auto;
    width: 100%;
  }
  .main {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 100%;
    padding-top: 0;
    padding-bottom: 50px;
    padding-right: 20px;
    overflow-x: hidden;
    overflow-y: scroll;

    .title {
      .title-1 {
        color: #fdb10d;
        padding-right: 10px;
        font-size: 78px;
      }
    }
    .text1 {
      padding-top: 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 35px;
    }
    .text2 {
      color: #fdb10d;
      margin-top: 36px;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 90px;
      letter-spacing: -0.01em;
    }
    .card-list {
      margin-top: 36px;
      .card-item {
        padding: 33px 37px 42px 43px;
        height: 276px;
        box-sizing: border-box;
        background: #3b3a3a;
        display: flex;
        margin-bottom: 30px;
        .left {
          flex: 1;
          .l-titel {
            margin-bottom: 24px;
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            letter-spacing: 0.005em;
          }
          .l-list {
            padding-left: 0;
            .l-item {
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 30px;
              position: relative;
              &::after {
                position: absolute;
                top: 10px;
                left: 0;
                content: '';
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #3b3a3a;
              }
              &.mb {
                margin-bottom: 24px;
              }
            }
            .l-item-no {
              padding-left: 0;
              &::after {
                width: 0px;
                height: 0px;
              }
            }
            .l-item-dot {
              padding-left: 20px;
            }
          }
        }
        .right {
          width: 190px;
          height: 190px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .text4 {
      color: #fdb10d;
      margin-top: 130px;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.01em;
    }

    .img-list {
      margin-top: 82px;
      display: flex;
      flex-wrap: wrap;
      margin-left: -8px;

      .img-item {
        width: 50%;
        margin-bottom: 32px;
        padding: 0 8px;
        img {
          width: 100%;
        }
        .img-title {
          margin-top: 12px;
          font-style: normal;
          font-weight: 400;
          font-size: 25px;
          line-height: 32px;
          letter-spacing: 0.005em;
        }
        .img-text {
          margin-top: 14px;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .real {
    margin-top: 36px;
  }
  .pic_real_main {
    display: none;
  }

  .text1 {
    font-size: 20px;
  }
}
.text1 {
  font-size: 16px;
}
@media (max-width: 766px) {
  .real {
    display: block;
    width: 100%;
    margin-top: 24px;
  }
  .main-wrapper {
    display: block;
    width: 100%;
    height: 100%;
  }
  .main {
    width: 100%;
  }

  .com-title {
    display: block;
  }
  .title-1 {
    font-size: 36px !important;
  }
  .text1 {
    font-size: 12px !important;
    line-height: 18px !important;
  }
  .text2 {
    font-size: 24px !important;
    margin-top: 20px !important;
  }
  .l-titel {
    font-size: 12px !important;
  }
  .l-item {
    font-size: 8px !important;
  }
}
</style>
