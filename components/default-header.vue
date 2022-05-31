<template>
  <header>
    <div class="left-block">
      <div class="search-block">
        <SearchSVG />
      </div>
      <div class="live-chat">
        live chat support
      </div>
    </div>
    <div class="right-block">
      <div class="languages-block">
        <span>EN</span>
      </div>
      <div id="burger" class="burger" :class="{ active: showMenu }" @click="handleOpenMenu">
        <span />
        <span />
      </div>
    </div>
    <div class="clear" />
    <div id="menu-block">
      <side-menu v-if="showMenu" :close-menu="handleOpenMenu" />
    </div>
    <div id="menu-overlay" :class="{ active: showMenu }" class="menu-overlay" />
  </header>
</template>
<script>
import SearchSVG from '../assets/layout/search-ic.svg'
import SideMenu from '../components/side-menu'
export default {
  name: 'DefaultHeader',
  components: {
    SearchSVG,
    SideMenu
  },
  data () {
    return {
      showMenu: false,
      activeClass: 'active'
    }
  },
  methods: {
    handleOpenMenu () {
      document.body.classList.toggle('overflow')
      document.getElementById('menu-block').classList.remove('slideRight')
      document.getElementById('menu-block').classList.remove('slideLeft')
      if (this.showMenu) {
        document.getElementById('menu-block').classList.add('slideLeft')
        document.getElementById('menu-overlay').classList.remove('active')
        document.getElementById('burger').classList.remove('active')
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.showMenu = !this.showMenu, 500)
      } else {
        document.getElementById('menu-block').classList.add('slideRight')
        this.showMenu = !this.showMenu
      }
    }
  }
}
</script>
<style>
header {
  padding-top: 10px;
  padding-bottom: 20px;
}

header .search-block {
  width: 60px;
  height: 60px;
  display: inline-block;
  vertical-align: top;
  margin-right: 8px;
  text-align: center;
  position: relative;
}

header .search-block svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

header .live-chat {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #B2B2B2;
  padding: 25px 20px 23px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}

header .left-block {
  float: left;
}

header .right-block {
  float: right;
  display: flex;
}

header .clear {
  clear: both;
}

.languages-block {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #B2B2B2;
  width: 58px;
  text-align: center;
  padding: 25px 0 23px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}

.burger {
  width: 60px;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}

.burger
{
  width: 60px;
  height: 60px;
  text-align: center;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 500;
}

.burger.active span:nth-of-type(1)
{
  top: 30px;
  transform: rotate(45deg);
}

.burger.active span:nth-of-type(2)
{
  top: 30px;
  transform: rotate(-45deg);
}

.burger span
{
  width: 24px;
  height: 2px;
  background: #B2B2B2;
  display: block;
  position: absolute;
}

.burger span:first-child
{
  top: 24px;
}

.burger span:first-child + span
{
  top: 33px;
}

#menu-block
{
  top: 0;
  left: -100%;
  z-index: 499;
  width: 100%;
  min-height: 100vh;
  position: fixed;
}

.slideRight{
  animation-name: slideRight;
  left: 0 !important;
  -webkit-animation-name: slideRight;

  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;

  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;

  visibility: visible !important;
}

.overflow
{
  position: fixed;
}

@keyframes slideRight {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}

@-webkit-keyframes slideRight {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}

.slideLeft{
  animation-name: slideLeft;
  -webkit-animation-name: slideLeft;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;

  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;

  visibility: visible !important;
}

@keyframes slideLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@-webkit-keyframes slideLeft {
  0% {
    left: 0
  }
  100% {
    left: -100%
  }
}

.menu-overlay
{
  opacity: 0;
  -webkit-transition: 300ms linear 0s;
  -moz-transition: 300ms linear 0s;
  -o-transition: 300ms linear 0s;
  transition: 300ms linear 0s;
}

.menu-overlay.active
{
  opacity: 1;
  background: #000000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 300;
  -webkit-transition: 300ms linear 0s;
  -moz-transition: 300ms linear 0s;
  -o-transition: 300ms linear 0s;
  transition: 300ms linear 0s;
}

@media (max-width: 380px) {
  header .live-chat {
    padding-left: 5px;
    padding-right: 5px;
  }

  .languages-block {
    width: 40px;
  }
}
</style>
