<script setup>
import { onMounted, onUpdated } from 'vue'
onMounted(() => { })

onUpdated(() => { })
const handleClick = () => {
  console.log('Link clicked, but no navigation occurred.')
}
</script>

<template>
  <div id="home">
    <div class="r-home">
      <div class="login-container">
        <div class="login-content">
          <div class="left-section">
            <h1 class="main-title">Syncing Dreams<br />Roo by Roo</h1>
            <h2 class="sub-title">
              Go-to web3 utility store where tools meet convenient In a Roo-tastic way
            </h2>

            <a href="#" @click.prevent="handleClick" target="_blank" class="buy_herf">
              <button class="buy">
                <span class="box">
                  Buy $ROOC
                  <div class="star-1">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>bitcoin</title>
                      <path
                        d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z">
                      </path>
                    </svg>
                  </div>
                  <div class="star-2">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>bitcoin</title>
                      <path
                        d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z">
                      </path>
                    </svg>
                  </div>
                  <div class="star-3">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>bitcoin</title>
                      <path
                        d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z">
                      </path>
                    </svg>
                  </div>
                  <div class="star-4">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>bitcoin</title>
                      <path
                        d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z">
                      </path>
                    </svg>
                  </div>
                  <div class="star-5">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>bitcoin</title>
                      <path
                        d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z">
                      </path>
                    </svg>
                  </div>
                  <div class="star-6">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>bitcoin</title>
                      <path
                        d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z">
                      </path>
                    </svg>
                  </div>
                </span>
              </button>
            </a>
          </div>
          <div class="right-section">
            <img src="@/assets/images/home_1.png" alt="Login Image" class="home_img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <PageFooter></PageFooter>
</template>

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 1440px;
  margin-bottom: 36px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 0px;
  padding-bottom: 100px;
  height: 80vh;
}

.r-home {
  width: 100%;
  margin-top: 20px;
}

.login-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.login-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-section {
  width: 754px;
  padding: 20px;


}

.main-title {
  font-family: 'Minecrafter_Reg';
  margin-top: 70px;
  white-space: nowrap;
  line-height: 1.2;
  color: #fdb10d;
  font-size: 78px;
  margin-bottom: 12px;
}

.sub-title {
  font-size: 24px;
  margin-bottom: 70px;
}

button {
  white-space: nowrap;
  font-family: 'Minecrafter_Reg';
  background: linear-gradient(30deg, #000 35%, #ff9a3c 73%);
  position: relative;
  padding: 17px 45px;
  font-size: 16px;
  line-height: 33px;
  font-weight: 400;
  color: #fdfcdc;
  border: 3px solid #ff9a3c;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.star-1 {
  position: absolute;
  fill: #fdb10d;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fdb10d);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  fill: #fdb10d;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  fill: #fdb10d;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fdb10d);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  fill: #fdb10d;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fdb10d);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  fill: #fdb10d;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fdb10d);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  fill: #fdb10d;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fdb10d);
  z-index: -5;
  transition: all 0.8s ease;
}

button:hover {
  background: #000;
  color: #fdb10d;
  box-shadow: 0 0 50px #fdb10d;
}

button:hover .star-1 {
  position: absolute;
  top: -110%;
  left: -60%;
  width: 30px;
  height: auto;
  filter: drop-shadow(0 0 10px #fdb10d);
  z-index: 2;
}

button:hover .star-2 {
  position: absolute;
  top: -45%;
  left: 0%;
  width: 20px;
  height: auto;
  filter: drop-shadow(0 0 10px #fdb10d);
  z-index: 2;
}

button:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 15%;
  width: 11px;
  height: auto;
  filter: drop-shadow(0 0 10px #fdb10d);
  z-index: 2;
}

button:hover .star-4 {
  position: absolute;
  top: 45%;
  left: 85%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fdb10d);
  z-index: 2;
}

button:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 140%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #fdb10d);
  z-index: 2;
}

button:hover .star-6 {
  position: absolute;
  top: -5%;
  left: 60%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fdb10d);
  z-index: 2;
}

.fil0 {
  fill: #fdb10d;
}

.box {
  width: 120px;
  height: 45px;
  float: left;
  transition: 0.5s linear;
  position: relative;
  display: block;
  padding: 8px;
  margin: -10px -15.5px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 900;
}

.box:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: white;
  background: black;
}

.box:hover:before {
  border-color: #fdfcdc;
  height: 100%;
  transform: translateX(0);
  transition:
    0.3s transform linear,
    0.3s height linear 0.3s;
}

.box:hover:after {
  border-color: #ea8b19;
  height: 100%;
  transform: translateX(0);
  transition:
    0.3s transform linear,
    0.3s height linear 0.5s;
}

.box:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}

.box:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}



@media (max-width: 991px) {
  #home {
    width: 100%;
    display: block;
    height: 100%;
    padding-bottom: 0;
    margin-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .r-home {
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .login-container {
    width: 100%;
  }

  .login-content {
    width: 100%;
    flex-direction: column;

    .left-section,
    .right-section {
      width: 100%;
    }
  }

  .left-section {
    width: 100%;
    margin: 0;
    margin-bottom: 24px;
  }

  .main-title {
    display: block;
    width: 100%;
    font-size: 70px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    margin-bottom: 40px;
  }

  .sub-title {
    font-size: 21px;
  }

  .right-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home_img {
    width: 430px;
    height: 430px;
  }

  .buy_herf {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .buy {
    font-size: 16px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 70px;
  }
}

@media (max-width: 766px) {
  #home {
    height: 80vh;
    padding-bottom: 0;
    margin-top: 12px;
  }

  .main-title {
    display: block;
    width: 100%;
    font-size: 38px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }

  // .sub-title {
  //   font-size: 17px;
  // }
  .buy_herf {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .buy {
    font-size: 16px;
    padding-right: 90px;
  }

  .home_img {
    width: 330px;
    height: 330px;
  }
}

@media (max-width: 390px) {
  #home {
    height: 100%;
  }
}
</style>
