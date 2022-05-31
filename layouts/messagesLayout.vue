<template>
  <div :class="{ 'light-theme': valueLightTheme }">
    <header>
      <div class="right-block">
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
    <sub-menu v-if="isAccountsPage" />
    <sub-menu-finance v-if="isFinancePage" />
    <sub-menu-social-trading v-if="isSocialTradingPage" />
    <sub-menu-affiliate v-if="isAffiliatePage" />
    <Nuxt />
  </div>
</template>
<script>

import RoutesManager from '@/services/RoutesManager'
import SideMenu from '@/components/side-menu'
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'
export default {
  // eslint-disable-next-line
  name: 'messagesLayout',
  middleware: ['redirect', 'check-auth', 'auth', 'switch-theme'],
  components: {
    SideMenu
  },
  data () {
    return {
      showMenu: false,
      activeClass: 'active'
    }
  },
  computed: {
    isCanViewHeader () {
      /**
       * define can view menu/lang/search block
       */
      const RoutesManagerWorker = new RoutesManager(this.$route.path)

      return RoutesManagerWorker.isCanViewDefaultHeader()
    },
    isAccountsPage () {
      const RoutesManagerWorker = new RoutesManager(this.$route.path)

      return RoutesManagerWorker.isCanViewAccountPageSubMenu()
    },
    isFinancePage () {
      const RoutesManagerWorker = new RoutesManager(this.$route.path)

      return RoutesManagerWorker.isCanViewFinancePageSubmenu()
    },
    isSocialTradingPage () {
      const RoutesManagerWorker = new RoutesManager(this.$route.path)

      return RoutesManagerWorker.isCanViewSocialTradingPageSubmenu()
    },
    isAffiliatePage () {
      const RoutesManagerWorker = new RoutesManager(this.$route.path)

      return RoutesManagerWorker.isCanViewAffiliatePageSubmenu()
    },
    valueLightTheme () {
      return this.$store.getters[`menu/${GET_LIGHT_THEME}`]
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
  },
  head () {
    return {
      bodyAttrs: {
        class: this.valueLightTheme ? 'light-body' : ''
      }
    }
  }
}
</script>
<style>

html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #333333;
  width: 100%;
}

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

.light-body
{
  background: #F7F6FB;
}
</style>
