<script setup>
import { onMounted, onUpdated } from 'vue'
onMounted(() => {})

onUpdated(() => {})
</script>
<template>
  <div class="orbit">
    <ul class="orbit-wrap">
      <li class="orbit-center">
        <i class="orbit-center__icon fa fa-code"></i>
      </li>

      <li>
        <ul class="ring-0">
          <li><i class="orbit-icon fa fa-git"></i></li>
          <li><i class="orbit-icon fa fa-free-code-camp"></i></li>
          <li><i class="orbit-icon fa fa-meetup"></i></li>
          <li><i class="orbit-icon fa fa-codepen"></i></li>
        </ul>
      </li>
      <div class="text">coming soon</div>
      <li>
        <ul class="ring-1">
          <li><i class="orbit-icon fa fa-podcast"></i></li>
          <li><i class="orbit-icon fa fa-css3"></i></li>
          <li><i class="orbit-icon fa fa-html5"></i></li>
        </ul>
      </li>
      <li>
        <ul class="ring-2">
          <li><i class="orbit-icon fa fa-windows"></i></li>
          <li><i class="orbit-icon fa fa-safari"></i></li>
          <li><i class="orbit-icon fa fa-edge"></i></li>
          <li><i class="orbit-icon fa fa-linux"></i></li>
          <li><i class="orbit-icon fa fa-apple"></i></li>
          <li><i class="orbit-icon fa fa-chrome"></i></li>
          <li><i class="orbit-icon fa fa-android"></i></li>
          <li><i class="orbit-icon fa fa-firefox"></i></li>
        </ul>
      </li>
      <li>
        <ul class="ring-3">
          <li><i class="orbit-icon fa fa-coffee"></i></li>
          <li><i class="orbit-icon fa fa-terminal"></i></li>
          <li><i class="orbit-icon fa fa-heart-o"></i></li>
        </ul>
      </li>
    </ul>
  </div>
  <PageFooter></PageFooter>
</template>

<style scoped>
* {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.text {
  opacity: 0.35;
  margin-top: 100px;
  font-size: 100px;
  text-align: center;
  margin-right: 50px;
}
.orbit {
  height: 65vh;
  /* display: flex; */
  width: 100%;
  min-width: 100px;
  min-height: 100px;
}

.orbit-icon {
  width: 1.6em;
  height: 1.6em;
  line-height: 1.6em;
  font-size: 1.2em;
  border-radius: 50%;
  /* background: #fff; */
  color: #fff;
  text-align: center;
  display: block;
}

.orbit-wrap {
  height: 21.5em;
  list-style: none;
  font-size: 1.35em;
}

.orbit-wrap > li {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.orbit-wrap > li:hover ul {
  border-width: 2px;
  border-color: #fff;
}

.orbit-wrap > li:hover ~ li ul {
  border-color: rgba(255, 255, 255, 0.2);
}

.orbit-wrap > li:hover ~ li ul li {
  opacity: 0.4;
}

ul[class^='ring'] {
  transition: all 300ms ease-in-out;
}

ul[class^='ring'] li {
  transition: all 300ms ease-in-out;
}

.ring-0 {
  width: 25em;
  height: 25em;
  animation: clockwiseRotate 35s linear infinite;
}

.ring-0 i {
  animation: counterClockwiseRotate 35s linear infinite;
}

.ring-0 > *:nth-of-type(1) {
  transform: rotate(95deg) translate(12.5em) rotate(-95deg);
}

.ring-0 > *:nth-of-type(2) {
  transform: rotate(190deg) translate(12.5em) rotate(-190deg);
}

.ring-0 > *:nth-of-type(3) {
  transform: rotate(285deg) translate(12.5em) rotate(-285deg);
}

.ring-0 > *:nth-of-type(4) {
  transform: rotate(380deg) translate(12.5em) rotate(-380deg);
}

.ring-1 {
  width: 20em;
  height: 20em;
  animation: clockwiseRotate 30s linear infinite;
}

.ring-1 i {
  animation: counterClockwiseRotate 30s linear infinite;
}

.ring-1 > *:nth-of-type(1) {
  transform: rotate(126.6666666667deg) translate(10em)
    rotate(-126.6666666667deg);
}

.ring-1 > *:nth-of-type(2) {
  transform: rotate(253.3333333333deg) translate(10em)
    rotate(-253.3333333333deg);
}

.ring-1 > *:nth-of-type(3) {
  transform: rotate(380deg) translate(10em) rotate(-380deg);
}

.ring-2 {
  width: 15em;
  height: 15em;
  animation: clockwiseRotate 25s linear infinite;
}

.ring-2 i {
  animation: counterClockwiseRotate 25s linear infinite;
}

.ring-2 > *:nth-of-type(1) {
  transform: rotate(47.5deg) translate(7.5em) rotate(-47.5deg);
}

.ring-2 > *:nth-of-type(2) {
  transform: rotate(95deg) translate(7.5em) rotate(-95deg);
}

.ring-2 > *:nth-of-type(3) {
  transform: rotate(142.5deg) translate(7.5em) rotate(-142.5deg);
}

.ring-2 > *:nth-of-type(4) {
  transform: rotate(190deg) translate(7.5em) rotate(-190deg);
}

.ring-2 > *:nth-of-type(5) {
  transform: rotate(237.5deg) translate(7.5em) rotate(-237.5deg);
}

.ring-2 > *:nth-of-type(6) {
  transform: rotate(285deg) translate(7.5em) rotate(-285deg);
}

.ring-2 > *:nth-of-type(7) {
  transform: rotate(332.5deg) translate(7.5em) rotate(-332.5deg);
}

.ring-2 > *:nth-of-type(8) {
  transform: rotate(380deg) translate(7.5em) rotate(-380deg);
}

.ring-3 {
  width: 10em;
  height: 10em;
  animation: clockwiseRotate 20s linear infinite;
}

.ring-3 i {
  animation: counterClockwiseRotate 20s linear infinite;
}

.ring-3 > *:nth-of-type(1) {
  transform: rotate(126.6666666667deg) translate(5em) rotate(-126.6666666667deg);
}

.ring-3 > *:nth-of-type(2) {
  transform: rotate(253.3333333333deg) translate(5em) rotate(-253.3333333333deg);
}

.ring-3 > *:nth-of-type(3) {
  transform: rotate(380deg) translate(5em) rotate(-380deg);
}

ul[class^='ring'] {
  border: solid 1px #fdb10d;
  position: relative;
  padding: 0;
  border-radius: 50%;
  list-style: none;
  box-sizing: content-box;
}

ul[class^='ring'] li {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em;
}
/*
 center;
 */
.orbit-center {
  z-index: 5;
  font-size: 2em;
  width: 1.8em;
  height: 1.8em;
  line-height: 1.8em;
  text-align: center;
  background-image: url('@/assets/images/logo_w.png');
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.orbit-center:hover .orbit-center__icon {
  transform: rotateZ(0deg);
}

.orbit-center__icon {
  transform: rotateZ(-360deg);
  transition: all 300ms ease-in-out;
}

.orbit-wrap > li.orbit-center:hover ~ li > ul {
  width: 0;
  height: 0;
}

.orbit-wrap > li.orbit-center:hover ~ li > ul * {
  transform: translate(0, 0);
}
/* 
 animations 
 */
@keyframes clockwiseRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes counterClockwiseRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
/* 
 icons 
 */
/* solana */
.fa-heart-o {
  background-image: url('https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png');
  color: white;
}
/* btc */
.fa-coffee {
  background-image: url('https://cryptologos.cc/logos/bitcoin-btc-logo.png');
  color: #cddc39;
}
/* okx */
.fa-safari {
  background-image: url('https://altcoinsbox.com/wp-content/uploads/2023/03/okx-logo.jpg');
  color: darkslateblue;
}
/* github */
.fa-firefox {
  background-image: url('https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png');
  color: #ff8f00;
}
/* chainlink */
.fa-chrome {
  background-image: url('https://pbs.twimg.com/profile_images/1030475757892579334/qvSHhRyC_400x400.jpg');
  color: black;
}
/* unisawp */
.fa-edge {
  background-image: url('https://pbs.twimg.com/profile_images/1696986796478091264/79NZgGom_400x400.jpg');
  color: white;
}
/* l0 */
.fa-android {
  background-image: url('https://pbs.twimg.com/profile_images/1646595284104007680/w1J3ynMT_400x400.jpg');
  color: limegreen;
}
/* opensea */
.fa-apple {
  background-image: url('https://cdn.worldvectorlogo.com/logos/opensea.svg');
  color: white;
}
/* binance */
.fa-linux {
  background-image: url('https://www.svgrepo.com/show/331309/binance.svg');
  color: #222;
}
/* uniast */
.fa-windows {
  background-image: url('https://pbs.twimg.com/profile_images/1635946239555674112/fA12aBLU_400x400.jpg');
  color: #03a9f4;
}
/* eth */
.fa-terminal {
  background-image: url('https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo.png');
  color: #fff;
}
/* arb */
.fa-html5 {
  background-image: url('https://cryptologos.cc/logos/arbitrum-arb-logo.png');
  color: #e65100;
}
/* polygon */
.fa-css3 {
  background-image: url('https://pbs.twimg.com/profile_images/1624229555333373952/JXGKFcO__400x400.jpg');
  color: #2196f3;
}
/* jomo */
.fa-git {
  background-image: url('https://pbs.twimg.com/profile_images/1738062873635741696/vI87FNpS_400x400.jpg');
  color: white;
}
/* BAYC */
.fa-free-code-camp {
  background-image: url('https://pbs.twimg.com/profile_images/1608904721489592321/o7Sj4Iln_400x400.jpg');
  color: white;
}
/* Bitcoin Frogs */
.fa-meetup {
  background-image: url('https://pbs.twimg.com/profile_images/1635725529604136963/es4S6UqQ_400x400.jpg');
  color: white;
}
/* op */
.fa-podcast {
  background-image: url('https://pbs.twimg.com/profile_images/1734354549496836096/-laoU9C9_400x400.jpg');
  color: white;
}
/* mfers */
.fa-codepen {
  background-image: url('https://i.seadn.io/gae/J2iIgy5_gmA8IS6sXGKGZeFVZwhldQylk7w7fLepTE9S7ICPCn_dlo8kypX8Ju0N6wvLVOKsbP_7bNGd8cpKmWhFQmqMXOC8q2sOdqw?w=256');
  color: white;
}
@media (max-width: 991px) {
  .orbit-wrap {
    height: 21.5em;
    list-style: none;
    font-size: 1.9em;
  }
}
</style>
