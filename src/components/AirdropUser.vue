<script setup>
import { ref } from 'vue'
import { auth } from '@/utils/firebaseConfig'
import { signInWithPopup, TwitterAuthProvider } from 'firebase/auth'

// announcement
const showAnnouncement = ref(false)
const toggleAnnouncement = () => {
  showAnnouncement.value = !showAnnouncement.value
}
// twitter verify
const user = ref('')
const isUserLoggedIn = ref(false)
const isSignedIn = ref(false)

const providerTwitter = new TwitterAuthProvider()

const handleSignInTwitter = () => {
  signInWithPopup(auth, providerTwitter)
    .then((result) => {
      user.value = result.user.displayName
      isSignedIn.value = true
      isUserLoggedIn.value = true
    })
    .catch((error) => {
      console.error(error)
    })
}
const handleSignOut = () => {
  isUserLoggedIn.value = false
}
</script>

<template>
  <!-- <div class="airdrop">
    <button class="loginTwitter" @click="handleSignInTwitter">Login</button>
  </div> -->
  <div class="main">
    <div class="b-title" @click="toggleAnnouncement">
      <button
        type="button"
        class="illustrate flex w-full justify-between items-center py-2 px-3 rounded border border-green-500 dark:border-green-100"
      >
        <p
          class="illustrate-p MuiTypography-root MuiTypography-caption font-semibold pr-3 text-left css-1draunl"
        >
          RoomSync’s Points System
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="illustrate-img text-current h-4 w-4 shrink-0"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.93934 19L14.9393 12L7.93934 5L9 3.93934L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L9 20.0607L7.93934 19Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="user_content MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb"
    >
      <div
        class="info_left MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5 MuiGrid-grid-lg-4 css-yvsyv5"
      >
        <div v-if="!isUserLoggedIn" class="user_info">
          <div class="your_account mb-3 md:mb-4">
            <h3 class="MuiTypography-root MuiTypography-headline2 css-1qxtt">
              Your Account
            </h3>
          </div>
          <p class="rule_verify">
            In order to track your RooSync Points, you must verify your twitter
            and your account
          </p>
          <div class="btn_twitter mb-3">
            <button
              tabindex="0"
              type="button"
              class="btn-verify"
              @click="handleSignInTwitter"
            >
              <div class="btn-verify_p">Verify your twitter</div>
            </button>
          </div>
          <div class="wallet mb-3">
            <span class="flex flex-col"
              ><p class="Primary_Wallet">Primary Wallet:</p>
              <p class="p_wallet">0xE2F6D...4B1A79</p></span
            >
          </div>
          <div class="bg_info">
            <div class="roo_logo">
              <img src="../assets/images/logo_w.png" alt="" />
            </div>
            <p class="connected">
              Your RooSync Points and stats will appear here after connecting
            </p>
          </div>
        </div>
        <!-- after info -->
        <div v-if="isUserLoggedIn" class="login_info">
          <div class="login_title">
            <h3>Your Account</h3>
          </div>
          <div class="after_twitter">
            <div class="twitter_ID">
              <span class="user_ID">
                <p>ID:</p>
                <p>@Aurora_Web3</p>
              </span>
              <button @click="handleSignOut" class="out_btn">
                <p class="login_out">sign out</p>
              </button>
            </div>
          </div>
          <div class="after_wallet">
            <div class="your_wallet">
              <span class="user_wallet">
                <p>wallet:</p>
                <p class="abb_address">0x...xxxx</p>
              </span>
            </div>
          </div>
          <hr class="after_line" />
          <div class="after_points">
            <div class="user_points">
              <span class="after_num">58,000</span>
            </div>
            <div class="points_title">
              <p>Total Points</p>
            </div>
          </div>
          <div class="after_points">
            <div class="user_points">
              <span class="after_num">5,000</span>
            </div>
            <div class="points_title">
              <p>your rank</p>
            </div>
          </div>
          <div class="after_points">
            <div class="user_points">
              <span class="after_num">12</span>
            </div>
            <div class="points_title">
              <p>Confirmed invites</p>
            </div>
          </div>
          <div class="after_points">
            <div class="user_points">
              <span class="after_num">invitation link</span>
            </div>
            <div class="after_invite">
              <button class="invite_link">https://roosync.com/</button>
              <div class="copy_link">
                <svg
                  t="1705060289558"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4443"
                  width="32"
                  height="32"
                >
                  <path
                    d="M806.5024 104.2432H393.216c-62.208 0-112.64 50.432-112.64 112.64V278.4256h352.1024c62.208 0 112.64 50.432 112.64 112.64v351.744H806.5024c62.208 0 112.64-50.432 112.64-112.64V216.8832c0-62.208-50.3808-112.64-112.64-112.64z"
                    fill="#fdb10d"
                    p-id="4444"
                  ></path>
                  <path
                    d="M806.5024 78.6432H393.216c-76.2368 0-138.24 62.0032-138.24 138.24v35.9424h-35.6352c-76.2368 0-138.24 62.0032-138.24 138.24v413.2864c0 76.2368 62.0032 138.24 138.24 138.24h413.2864c76.2368 0 138.24-62.0032 138.24-138.24v-35.9424h35.6352c76.2368 0 138.24-62.0032 138.24-138.24V216.8832c0-76.2368-62.0032-138.24-138.24-138.24z m-86.784 725.76c0 47.9744-39.0656 87.04-87.04 87.04H219.3408c-47.9744 0-87.04-39.0656-87.04-87.04V391.0656c0-47.9744 39.0656-87.04 87.04-87.04H632.6784c47.9744 0 87.04 39.0656 87.04 87.04v413.3376z m173.824-174.1824c0 47.9744-39.0656 87.04-87.04 87.04h-35.6352v-326.144c0-76.2368-62.0032-138.24-138.24-138.24H306.176v-35.9424c0-47.9744 39.0656-87.04 87.04-87.04h413.2864c47.9744 0 87.04 39.0656 87.04 87.04v413.2864z"
                    fill="#fdb10d"
                    p-id="4445"
                  ></path>
                  <path
                    d="M570.7776 537.6H280.576c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h290.2016c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6zM570.7776 710.6048H280.576c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h290.2016c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
                    fill="#fdb10d"
                    p-id="4446"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="info_ringht MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 MuiGrid-grid-lg-8 css-1661ml7"
      >
        <div class="md:min-h-[398px] relative css-lzsi1o eig5zgx0">
          <div class="right_title">
            <h3 class="MuiTypography-root MuiTypography-headline2 css-1qxtt">
              Top Accounts
            </h3>
            <p class="MuiTypography-root MuiTypography-body1 flex css-mmxf0c">
              Total Accounts: 30k
            </p>
          </div>
          <ul class="top_list">
            <p class="top_title"><span>Address</span><span>Roo Points</span></p>
            <hr class="line" />
            <li class="list_info">
              <div class="list_address">
                <p class="list_address_p">
                  0x5A27d268e830655E908a0a2C3B24F572695AF5e8
                </p>
              </div>
              <div class="list_point">
                <p class="list_point_p">
                  <span>75,601</span>
                </p>
              </div>
            </li>
            <li class="list_info">
              <div class="list_address">
                <p class="list_address_p">
                  0x5A27d268e830655E908a0a2C3B24F572695AF5e8
                </p>
              </div>
              <div class="list_point">
                <p class="list_point_p">
                  <span>75,601</span>
                </p>
              </div>
            </li>
            <li class="list_info">
              <div class="list_address">
                <p class="list_address_p">
                  0x5A27d268e830655E908a0a2C3B24F572695AF5e8
                </p>
              </div>
              <div class="list_point">
                <p class="list_point_p">
                  <span>75,601</span>
                </p>
              </div>
            </li>
            <li class="list_info">
              <div class="list_address">
                <p class="list_address_p">
                  0x5A27d268e830655E908a0a2C3B24F572695AF5e8
                </p>
              </div>
              <div class="list_point">
                <p class="list_point_p">
                  <span>75,601</span>
                </p>
              </div>
            </li>
            <li class="list_info">
              <div class="list_address">
                <p class="list_address_p">
                  0x5A27d268e830655E908a0a2C3B24F572695AF5e8
                </p>
              </div>
              <div class="list_point">
                <p class="list_point_p">
                  <span>75,601</span>
                </p>
              </div>
            </li>
            <li class="list_info">
              <div class="list_address">
                <p class="list_address_p">
                  0x5A27d268e830655E908a0a2C3B24F572695AF5e8
                </p>
              </div>
              <div class="list_point">
                <p class="list_point_p">
                  <span>75,601</span>
                </p>
              </div>
            </li>
            <li class="list_info">
              <div class="list_address">
                <p class="list_address_p">
                  0x5A27d268e830655E908a0a2C3B24F572695AF5e8
                </p>
              </div>
              <div class="list_point">
                <p class="list_point_p">
                  <span>75,601</span>
                </p>
              </div>
            </li>
          </ul>
          <div class="view_all">
            <button class="view_btn" type="button">
              <p class="view_p">View All Top Accounts</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- occlusion -->
  <div
    v-if="showAnnouncement"
    class="overlay"
    @click="toggleAnnouncement"
  ></div>
  <!-- amm -->
  <div v-if="showAnnouncement" class="announcement-box">
    <div class="announcement-content">
      <div class="ann_title">
        <h2>About points</h2>
        <button class="close-button" @click="toggleAnnouncement">X</button>
      </div>
      <hr />
      <p class="ann_p">
        Users can earn RooSync points by inviting friends and interacting with
        us on Twitter, such as #RooSync. Points can be redeemed for whitelisting
        and airdrops of $ROOC
      </p>
    </div>
  </div>

  <PageFooter></PageFooter>
</template>

<style scoped>
.main {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.b-title {
  margin-bottom: 24px;
}
.illustrate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 42px;
  border: 1px solid #fdb10d;
  background-color: transparent;
  color: aliceblue;
  cursor: pointer;
  padding: 12px 12px 12px 12px;
  font-family: 'Minecrafter_Reg';
  font-weight: 400;
}
.illustrate-p {
  text-align: left;
  font-size: 100%;
  opacity: 0.6;
}
.illustrate-img {
  display: flex;
  justify-content: flex-end;
}
.user_content {
  display: flex;
  width: 100%;
}
.info_left {
  flex: 1;
  padding: 24px;
  background-color: #3b3a3a;
  opacity: 0.9;
  margin-right: 24px;
}
.info_ringht {
  box-sizing: border-box;
  flex: 2;
  padding: 24px;
  background-color: #3b3a3a;
  opacity: 0.9;
}
.user_info {
}
.your_account {
  margin-bottom: 16px;
}
h3 {
  color: #fdb10d;
}
.rule_verify {
  font-size: 14px;
  margin-bottom: 12px;
}
.btn_twitter {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fdb10d;
  border-radius: 3px;
  height: 32px;
  margin-bottom: 12px;
  cursor: pointer;
}
.btn-verify {
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.btn-verify_p {
  font-family: 'Minecrafter_Alt';
  font-weight: 400;
}
.wallet {
  height: auto;
  margin-bottom: 12px;
}
.Primary_Wallet {
  font-size: 12px;
}
.p_wallet {
  font-size: 20px;
  color: #ffffff;
}
.bg_info {
  align-items: center;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
}
.roo_logo {
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
}
.roo_logo img {
  max-width: 120px;
  max-height: 120px;
  opacity: 0.3;
}
.connected {
  text-align: center;
  opacity: 0.3;
}
.right_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.top_list {
  padding-left: 0;
}
.top_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.line {
  margin-bottom: 24px;
  opacity: 0.5;
}
.li {
  border-bottom: #ffffff;
}
.list_info {
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list_address {
  align-items: center;
}
.view_all {
  height: 30px;
  display: flex;
  justify-content: center;
}
.view_btn {
  background-color: transparent;
  border: none;
  border-radius: 3px;
}
.view_p {
  color: aliceblue;
  font-family: 'Minecrafter_Alt';
  cursor: pointer;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.88);
  z-index: 999;
}
/* amm */
.announcement-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #3a3a3a 100%);
  z-index: 1000;
  border: 1px solid #505050;
  color: white;
  padding: 20px;
  box-sizing: border-box;
}

.announcement-box.active {
  display: block;
}
.ann_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.announcement-content h2 {
  font-weight: 400;
  color: #fdb10d;
}

.announcement-content hr {
  border: none;
  border-bottom: 1px solid #505050;
  margin-bottom: 24px;
}

.close-button {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 100%;
  cursor: pointer;
}
.ann_p {
  font-size: 12px;
}
/* after info */
.login_info {
  width: 100%;
}
.login_title {
  width: 100%;
  margin-bottom: 16px;
}
.login_title h3 {
  color: #fdb10d;
  text-align: left;
}
.after_twitter {
  margin-bottom: 12px;
}
.twitter_ID {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.out_btn {
  background-color: transparent;
  color: black;
  border: none;
}
.after_wallet {
  margin-bottom: 12px;
  box-sizing: border-box;
}
.your_wallet {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.abb_address {
  font-size: 18px;
}
.after_line {
  border-bottom: 1px solid #505050;
  opacity: 0.3;
}
.after_points {
  margin-bottom: 40px;
}
.user_points {
  margin-bottom: 10px;
}
.after_num {
  font-size: 36px;
}
.invite_link {
  background-color: transparent;
  border: 1px solid #fdb10d;
  border-radius: 3px;
  color: #ffffff;
  font-size: 16px;
  opacity: 0.5;
  font-family: 'Minecrafter_Reg';
  margin-right: 6px;
}
.after_invite {
  display: flex;
}
.copy_link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
