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
  // walletAddress.value = address
  console.log(address)
  // console.log(walletAddress)
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
</script>

<template>
  <div class="header">
    <div class="nav-main">
      <router-link
        to="/"
        class="logo"
        :class="{ 'logo-hover': isHovered }"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <img class="h-img" src="@/assets/images/logo.png" alt="" />
      </router-link>
      <nav>
        <router-link to="/rooc" class="nav-page" n>$ROOC</router-link>
        <router-link to="/roopocket" class="nav-page">ROO POcket</router-link>
        <router-link to="/roadmap" class="nav-page">ROAD MAP</router-link>
        <router-link to="/tool" class="nav-page">Tool </router-link>
        <router-link to="/airdrop" class="nav-page">🔥airdrop </router-link>
      </nav>
    </div>

    <button
      v-if="showCustomButton"
      @click="onCustomButtonClick"
      class="custom-button"
    >
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
</template>

<style lang="scss" scoped>
.header {
  margin-top: 10px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 70px;
  height: auto;
}

.nav-main {
  margin-left: 0;
  display: flex;
  align-items: center;
  border: 0;
}
.logo {
  transition: transform 0.3s ease-in-out;
  margin-left: 0px;
}
.h-img {
  max-width: 190px;
  max-height: 70px;
}
.logo-hover {
  transform: scale(1.1);
}

nav {
  margin-left: 72px;
  display: flex;
  flex: 1;
  justify-content: space-between;
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
  padding: 12px;
}
.nav-page {
  height: auto;
  margin-right: 20px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
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
// .primary-button {
//   font-family: 'Minecrafter_Reg', sans-serif;
//   color: #f8edeb;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: bold;
//   border-radius: 5px;
//   letter-spacing: 0.05rem;
//   border: 1px solid #000;
//   padding: 0.8rem 2.1rem;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FDB10D; /* 黄色 */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");

//   background-color: #000;
//   background-size: 200%;
//   background-position: 200%;
//   background-repeat: no-repeat;
//   transition: 0.3s ease-in-out;
//   transition-property: background-position, border, color;
//   position: relative;
//   z-index: 1;
// }

// .primary-button:hover {
//   border: 1px solid #fdb10d;
//   color: #f8edeb;
//   background-position: 40%;
// }

// .primary-button:before {
//   content: '';
//   position: absolute;
//   background-color: #fdb10d;
//   width: 0.2rem;
//   height: 0.2rem;
//   top: -1px;
//   left: -1px;
//   transition: background-color 0.15s ease-in-out;
// }

// .primary-button:hover:before {
//   background-color: #f8edeb;
// }

// .primary-button:hover:after {
//   background-color: white;
// }

// .primary-button:after {
//   content: '';
//   position: absolute;
//   background-color: #fdb10d;
//   width: 0.3rem;
//   height: 0.3rem;
//   bottom: -1px;
//   right: -1px;
//   transition: background-color 0.15s ease-in-out;
// }

// .button-borders {
//   position: relative;
//   width: fit-content;
//   height: fit-content;
// }

// .button-borders:before {
//   content: '';
//   position: absolute;
//   width: calc(100% + 0.5em);
//   height: 50%;
//   left: -0.3em;
//   top: -0.3em;
//   border: 1px solid #ffffff;
//   border-bottom: 0px;
//   /* opacity: 0.3; */
// }

// .button-borders:after {
//   content: '';
//   position: absolute;
//   width: calc(100% + 0.5em);
//   height: 50%;
//   left: -0.3em;
//   bottom: -0.3em;
//   border: 1px solid #ffffff;
//   border-top: 0px;
//   /* opacity: 0.3; */
//   z-index: 0;
// }

// .shape {
//   fill: #fdb10d;
// }
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
.TwitterSignIn a {
  height: 100%;
  color: whitesmoke;
  font-size: 20px;
}

.TwitterSignIn a:hover {
  color: #fdb10d;
  transition: color 0.3s;
}
</style>
