<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const etherscanApiKey = import.meta.env.VITE_ETHERSCAN_API_KEY
// const blockcypherApiKey = import.meta.env.VITE_BLOCKCYPHER_API_KEY

const ethGasPrice = ref(null)
// const btcTransactionFee = ref({
//   high_fee_per_kb: null,
//   medium_fee_per_kb: null,
//   low_fee_per_kb: null
// })
const updateInterval = 10000

const fetchEthGasPrice = async () => {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${etherscanApiKey}`
    )
    if (response.data && response.data.result) {
      ethGasPrice.value = response.data.result.ProposeGasPrice
    }
  } catch (error) {
    console.error('Error fetching gas prices:', error)
  }
}

onMounted(() => {
  fetchEthGasPrice()
  // fetchBtcTransactionFee()
  const interval = setInterval(() => {
    fetchEthGasPrice()
    // fetchBtcTransactionFee()
  }, updateInterval)

  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

<template>
  <div class="footer">
    <div class="gas">
      <img
        class="eth"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Eth-diamond-rainbow.png/1200px-Eth-diamond-rainbow.png"
        alt="Ethereum"
      />
      <p class="eth-gas">{{ ethGasPrice }} Gwei</p>
      <img class="btc" src="../assets/images/logo_w.png" alt="ROOC" />
      <p class="btc-gas">$ROOC</p>
    </div>
    <div class="parent">
      <a href="https://twitter.com/roo_sync" class="twitter_l" target="_blank"
        ><div class="child child-1">
          <button class="button btn-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="#FDB10D"
            >
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </button></div
      ></a>
      <a href="https://github.com/RooSync-tool" target="_blank"
        ><div class="child child-2">
          <button class="button btn-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="#FDB10D"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </button></div
      ></a>
      <!-- <a href="https://unisat.io/brc20" target="_blank"
        ><div class="child child-3">
          <button class="button btn-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 448 512"
              fill="#FDB10D"
            >
              <switch>
                <g>
                  <path
                    d="M28.8 47.4c1 0 1.9.8 1.9 1.9 0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1.1.9-1.9 1.9-1.9m29.4-11.6c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.9 1.9-1.9 1.9m0-7.7c-3.2 0-5.8 2.6-5.8 5.8 0 .6.1 1.2.3 1.8L33.6 45.9c-1.1-1.6-2.9-2.5-4.8-2.5-2.2 0-4.2 1.3-5.2 3.2l-17.2-9c-1.8-1-3.2-3.9-3-6.7.1-1.4.6-2.5 1.3-2.9.5-.3 1-.2 1.7.1l.1.1c4.6 2.4 19.5 10.2 20.1 10.5 1 .4 1.5.6 3.2-.2l30.8-16c.5-.2 1-.6 1-1.3 0-.9-.9-1.3-.9-1.3-1.8-.8-4.5-2.1-7.1-3.3C48 14 41.6 11 38.8 9.5c-2.4-1.3-4.4-.2-4.7 0l-.7.3C20.7 16.2 3.9 24.5 2.9 25.1c-1.7 1-2.8 3.1-2.9 5.7-.2 4.1 1.9 8.4 4.9 9.9l18.2 9.4c.4 2.8 2.9 5 5.7 5 3.2 0 5.7-2.5 5.8-5.7l20-10.8c1 .8 2.3 1.2 3.6 1.2 3.2 0 5.8-2.6 5.8-5.8 0-3.3-2.6-5.9-5.8-5.9"
                  />
                </g>
              </switch>
            </svg>
          </button></div
      ></a> -->
      <!-- <a href="https://unisat.io/brc20" target="_blank"
        ><div class="child child-4">
          <button class="button btn-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="#FDB10D"
            >
              <path
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </button></div
      ></a> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 40px;
}
.gas {
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
}
.eth-gas {
  display: flex;
  font-size: 100%;
  align-items: center;
  color: grey;

  margin-right: 30px;
}
.eth {
  margin-right: 10px;
  width: auto;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.btc-gas {
  display: flex;
  font-size: 100%;
  align-items: center;
  color: grey;
}
.btc {
  margin-right: 5px;
  width: auto;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.parent {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.twitter_l {
  margin-right: 30px;
}
.child {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
  margin: 0 3px;
}

.child:hover {
  background-color: 1a1a2e;
  background-position:
    -100px 100px,
    -100px 100px;
  transform: rotate3d(0.5, 1, 0, 30deg);
  transform: perspective(180px) rotateX(60deg) translateY(2px);
  box-shadow: 0px 10px 10px #fdb10d;
}
button {
  border: none;
  background-color: transparent;
  font-size: 20px;
}

.button:hover {
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(0px, 0px, 15px) perspective(180px) rotateX(-35deg) translateY(2px);
  border-radius: 50%;
}
@media (max-width: 991px) {
  .footer {
    height: 30px;
  }
  .btc,
  .btc-gas {
    display: none;
  }
  .eth-gas {
    font-size: 14px;
  }
  .parent {
    height: 30px;
  }
  .parent a {
    height: 100%;
  }
  .button {
    height: 100%;
  }
  svg {
    font-size: 20px;
  }
}
</style>
