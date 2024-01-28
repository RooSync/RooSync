<script setup>
import { ref } from 'vue'

import { setupWeb3Modal, connectWallet } from '@/utils/connect.js'
import { useWalletStore } from '@/stores/wallet.js'
const projectId = '60b14c9cc884b15ff285f0a5c2f0b1c4'
const modal = setupWeb3Modal(projectId)

const isHovered = ref(false)
const showCustomButton = ref(true)
const showButtonBorders = ref(false)
const walletConnected = ref(false)

async function onConnect() {
  const address = await connectWallet(modal)

  console.log(modal)

  const walletStore = useWalletStore()
  if (address) {
    walletConnected.value = true
    showCustomButton.value = false
    showButtonBorders.value = true
    walletStore.setWalletAddress(address)
  } else {
    walletConnected.value = false
    showCustomButton.value = true
    showButtonBorders.value = false
  }
}
const onCustomButtonClick = async () => {
  await onConnect()
  showCustomButton.value = false
  showButtonBorders.value = true
}
const isNavVisible = ref(false)
function hideNav() {
  isNavVisible.value = false
}

function handleMCBtnClick() {
  hideNav()
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: '$ROOC', to: '/rooc' },
  { name: 'Roo Pocket', to: '/roopocket' },
  { name: 'RoadMap', to: '/roadmap' },
  { name: 'Tool', to: '/tool' },
  { name: '🔥Roo Points', to: '/airdrop' }
]
</script>

<template>
  <div class="header">
    <router-link
      to="/"
      class="logo"
      :class="{ 'logo-hover': isHovered }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img class="h-img" src="@/assets/images/logo.png" alt="" />
    </router-link>
    <div class="nav-main">
      <nav>
        <router-link to="/rooc" class="nav-page" n>$ROOC</router-link>
        <router-link to="/roopocket" class="nav-page">ROO POcket</router-link>
        <router-link to="/roadmap" class="nav-page">ROAD MAP</router-link>
        <router-link to="/tool" class="nav-page">Tool </router-link>
        <router-link to="/airdrop" class="nav-page">🔥ROO Points </router-link>
      </nav>
    </div>

    <button v-if="showCustomButton" @click="onCustomButtonClick" class="custom-button">
      Connect
    </button>
    <div class="button-borders" v-show="showButtonBorders">
      <w3m-button
        @click="onConnect()"
        class="primary-button"
        balance="hide"
        size="md"
        label="Connect"
      ></w3m-button>
    </div>
  </div>
  <div class="m-hub">
    <router-link
      to="/"
      class="logo"
      :class="{ 'logo-hover': isHovered }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img class="h-img" src="@/assets/images/logo_w.png" alt="" />
    </router-link>
    <label class="buttons__burger" for="burger">
      <input type="checkbox" id="burger" v-model="isNavVisible" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div class="m-nav" v-show="isNavVisible">
    <nav class="m-nav-main">
      <router-link
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        class="nav-page"
        @click="hideNav"
        >{{ link.name }}</router-link
      >
    </nav>
    <div class="m-c-btn" @click="handleMCBtnClick">
      <button v-if="showCustomButton" @click="onCustomButtonClick" class="m-custom-button">
        Connect
      </button>
      <div class="button-borders" v-show="showButtonBorders">
        <w3m-button
          @click="onConnect()"
          class="primary-button"
          balance="hide"
          size="md"
          label="Connect"
        ></w3m-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
  padding-bottom: 0px;
}

.nav-main {
  margin-left: 0;
  display: flex;
  align-items: center;
  border: 0;
  padding-left: 8px;
}

.logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}
.h-img {
  width: 100%;
  height: auto;
}
.logo-hover {
  transform: scale(1.1);
}

nav {
  margin-left: 60px;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
nav a {
  font-family: 'Minecrafter_Reg';
  margin-right: 48px;
  font-weight: 400;
  font-size: 20px;
  line-height: 17px;
  text-transform: uppercase;
  color: #f8edeb;
  text-decoration: none;
  padding: 6px;
}
.nav-page {
  display: inline-flex;

  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  white-space: nowrap;
}
.nav-page:hover {
  color: #fdb10d;
}

.nav-page::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: transparent;
  transition: background-color 0.3s;
}

.nav-page:hover::after {
  background-color: #fdb10d;
}
.w3m-button {
  margin-top: 5px;
}
.primary-button {
  font-size: 12px;
  line-height: 12px;
}

button {
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  box-shadow: 0px 0px 0px 3px black;
  border: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: #fdb10d;
  color: black;
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: relative;
  transition: all 0.6s ease-in-out;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

button:hover {
  background-color: black;
  color: #f8edeb;
}

button::before {
  content: '🦊';
  position: absolute;
  left: -0rem;
  top: 0rem;
  opacity: 1;
  font-size: 1.8rem;
  transition: all 0.6s ease-in-out;
  transform: rotate(0deg);
}

button:hover::before {
  content: '🦘';
  opacity: 1;
  visibility: visible;
  transform: rotate(40deg);
  font-size: 2.5rem;
  top: -0.75rem;
  transition: all 0.6s ease-in-out;
  animation: rightRun 1.3s forwards;
}

button:active::before {
  content: '';
}

@keyframes rightRun {
  100% {
    transform: translateX(140px);
  }
}
.x-logo {
  width: 17px;
  height: 17px;
  margin-right: 8px;
}

.m-hub {
  display: none;
}
.buttons__burger {
  display: none;
}
.m-nav {
  display: none;
}

@media (max-width: 991px) {
  .header {
    display: none;
  }
  .m-hub {
    display: flex;
    justify-content: space-between;
    padding: 24px 60px 0px 60px;
    align-items: center;
  }
  .nav-main,
  .custom-button {
    display: none; /* 隐藏这些元素 */
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .h-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .m-nav {
    background-image: url(../assets/images/bg2.png);
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100% - 150px);
    z-index: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .m-nav-main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0;
  }
  .nav-page {
    font-size: 30px;
    margin-top: 50px;
    margin-right: 0;
    margin-bottom: 32px;
  }
  .m-c-btn {
    display: block;
    margin-bottom: 80px;
  }

  // hubger
  .buttons__burger {
    --size: 3rem;
    --clr: #fdb10d;
    width: var(--size);
    height: calc(0.7 * var(--size));
    cursor: pointer;
    position: relative;
    display: block;
  }

  .buttons__burger #burger {
    display: none;
    width: 100%;
    height: 100%;
  }

  .buttons__burger span {
    display: block;
    position: absolute;
    width: 100%;
    border-radius: 0.5rem;
    border: 3px solid var(--clr);
    background-color: var(--clr);
    transition: 0.15s ease-in-out;
  }

  .buttons__burger span:nth-of-type(1) {
    top: 0;
    right: 0;
    transform-origin: right center;
  }

  .buttons__burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  .buttons__burger span:nth-of-type(3) {
    top: 100%;
    right: 0;
    transform-origin: right center;
    transform: translateY(-100%);
  }

  .buttons__burger #burger:checked ~ span:nth-of-type(1) {
    transform: translateY(-30%) rotate(40deg);
    width: 50%;
    top: 50%;
  }

  .buttons__burger #burger:checked ~ span:nth-of-type(3) {
    transform: translateY(-70%) rotate(-40deg);
    width: 50%;
    top: 50%;
  }
}
@media (max-width: 765px) {
  .m-hub {
    display: flex;
    justify-content: space-between;
    padding: 24px 30px 24px 30px;
  }
  .buttons__burger {
    --size: 2rem;
    --clr: #fdb10d;
    width: var(--size);
    height: calc(0.7 * var(--size));
    cursor: pointer;
    position: relative;
    display: block;
  }
  .nav-page {
    font-size: 24px;
    margin-top: 36px;
    margin-right: 0;
    margin-bottom: 32px;
  }
}
</style>
