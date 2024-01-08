<script setup>
import { ref } from 'vue'
import { onMounted, onUpdated } from 'vue'
onMounted(() => {})

onUpdated(() => {})
const isDialogVisible = ref(false)
const activeItem = ref({})
const dataList = ref([
  {
    num: '01',
    title: 'RooSync Online',
    url: '/images/map_1.png',
    content: `
          <div>RooSync website login</div>
          <div>$ROOC deploy and launch
</div>
          <div>Expand our influence</div>        
            `
  },
  {
    num: '02',
    title: 'Open Procedure',
    url: '/images/map_2.png',
    content: `
          <div>Activate staking module
</div>
          <div>Roo Pocket beta experience</div>
          <div>Launched the first NFT utility tool</div>
          
            `
  },
  {
    num: '03',
    title: 'Roo Pocket',
    url: '/images/map_3.png',
    content: `
          <div>Publish developer incentive rules
</div>
          <div>Tool library officially released</div>
          <div>Release multi-chain version</div>
            `
  },
  {
    num: '04',
    title: 'Ecosystem',
    url: '/images/map_4.png',
    content: `
          <div>Issuing RooSync NFT Series</div>
          <div>Roo NFT game launch</div>
          <div>Launching RooSync mobile app</div>
          
            `
  }
])

const handleItem = (item) => {
  activeItem.value = item
  isDialogVisible.value = true
}

const closeDialog = () => {
  isDialogVisible.value = false
}
</script>
<template>
  <div class="road-map">
    <div class="w">
      <div class="road-map-wrapper">
        <div class="com-title">
          <span class="title-1">ROAD MAP</span>
        </div>

        <div class="road-main">
          <div
            class="road-main-item"
            v-for="i in dataList"
            :key="i.title"
            @click="handleItem(i)"
          >
            <div class="left">
              <div class="num">{{ i.num }}</div>
              <div class="left-title">{{ i.title }}</div>
            </div>
            <div class="right">
              <img :src="i.url" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isDialogVisible" class="modal-overlay" @click="closeDialog">
      <div class="modal-content" @click.stop>
        <div class="modal-header">{{ activeItem.title }}</div>
        <div class="modal-body">
          <!-- <h3>{{ activeItem.title }}</h3> -->
          <p v-html="activeItem.content"></p>
          <img :src="activeItem.url" alt="" />
        </div>
      </div>
    </div>
  </div>

  <PageFooter></PageFooter>
</template>

<style lang="scss" scoped>
/* 您的现有样式 */
/* ... */
.road-map {
  padding-top: 50px;
  min-height: 100%;
  min-height: auto;
  .w {
    min-height: 100%;

    .road-map-wrapper {
      margin: auto;
      max-width: 1264px;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 25px;
    }
  }
  .model-item {
    display: flex;
    justify-content: space-between;

    padding: 0 20px;

    .left {
      display: flex;
      flex-direction: column;
      .title {
        padding-bottom: 40px;

        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        color: #d2d2d4;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #1e1f2a;
          opacity: 0.1;
        }
      }
      .info {
        margin-top: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: #1e1f2a;
      }
    }
    .right {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .com-title {
    margin-top: 0;
    padding-bottom: 0px;

    .title-1 {
      color: #fdb10d;
      font-size: 78px;
    }
  }
  // .text {
  //   margin-top: 40px;
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 22px;
  //   color: #1e1f2a;
  // }
  .road-main {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .road-main-item {
      // flex: 0 0 48%;
      padding: 24px 24px 24px 30px;
      display: flex;
      justify-content: space-between;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #3a3a3a 100%);
      opacity: 1;
      border: 1px solid #505050;
      width: 594px;
      height: 200px;
      box-sizing: border-box;
      margin-bottom: 12px;
      cursor: pointer;

      &:hover {
        .left-title {
          position: relative;
          &::after {
            position: absolute;
            top: 50%;
            right: -38px;
            content: '';
            display: block;
            width: 22px;
            height: 6px;
          }
        }
        .right {
          opacity: 1;
        }
      }
      &:nth-child(2n) {
        margin-left: 8px;
      }
      &:nth-child(2) {
        width: 594px;
        height: 240px;
      }
      &:nth-child(3) {
        width: 594px;
        height: 240px;
        transform: translate(0, -40px);
      }
      img {
        width: 100%;
        height: 100%;
      }
      .left {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .num {
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.005em;
          color: #d2d2d4;
          opacity: 0.2;
        }
        .left-title {
          margin-top: 14px;
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 32px;
          /* identical to box height, or 100% */
          display: flex;
          align-items: flex-end;
          letter-spacing: 0.005em;
          color: #f8edeb;
        }
      }
      .right {
        opacity: 1;
      }
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #3b3a3a;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  max-width: 640px;
  max-height: 80%;
  overflow-y: auto;
}

.modal-header {
  font-size: 26px;
  color: #fdb10d;
  display: flex;
  justify-content: left;
}

.modal-body {
  margin-top: 20px;
}

.modal-body h3 {
  margin-bottom: 10px;
}

.modal-body p {
  font-size: 16px;
  line-height: 30px;
}
.modal-body img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 991px) {
  .modal-body {
    margin-top: 0px;
    display: flex;
  }
  .modal-body p {
    margin-top: 15px;
    font-size: 8px;
    line-height: 10px;
  }
  .modal-body img {
    height: 50%;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .road-map {
    padding-top: 35px;
    .model-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;

      .left {
        .title {
          font-size: 18px;
          line-height: 22px;
          padding-bottom: 16px;
        }
        .info {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 100px;
        }
      }
      .right {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        img {
          width: 160px;
        }
      }
    }
    .road-map-wrapper {
      margin-right: 20px;
      padding-left: 0;
      .com-title {
        margin-top: 0;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
        font-size: 140px;
        line-height: 13px;
        .title-1 {
          margin-bottom: 14px;
        }
        .title-2 {
          font-style: normal;
          font-weight: 700;
          font-size: 140px;
          line-height: 93px;
          color: #1e1f2a;
        }
      }

      .road-main {
        margin-top: 20px;
        justify-content: space-between;
        padding-bottom: 0;
        .road-main-item {
          width: 50%;
          overflow: hidden;
          flex-direction: column;
          padding: 16px;
          height: auto;
          &:nth-child(2n) {
            margin-left: 0;
          }
          &:nth-child(2) {
            width: 50%;
          }
          &:nth-child(3) {
            width: 50%;
            transform: translate(0, 0);
          }
          .left {
            .num {
              font-size: 14px;
            }
            .left-title {
              font-size: 18px;
              line-height: 22px;
            }
          }
          .right {
            margin-top: 42px;
            width: 70%;
            align-self: flex-end;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
