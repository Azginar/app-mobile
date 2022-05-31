<template>
  <div class="main-wrapper" :class="{ 'light-theme': valueLightTheme }">
    <default-header v-if="isCanViewHeader" />
    <sub-menu v-if="isAccountsPage" />
    <sub-menu-finance v-if="isFinancePage" />
    <sub-menu-social-trading v-if="isSocialTradingPage" />
    <sub-menu-affiliate v-if="isAffiliatePage" />
    <Nuxt />
  </div>
</template>
<script>

import RoutesManager from '@/services/RoutesManager'
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'

export default {
  // eslint-disable-next-line
  name: 'default',
  middleware: ['redirect', 'check-auth', 'auth', 'switch-theme'],
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

.light-theme
{
  background: #F7F6FB;
}

.light-theme header .live-chat,
.light-theme header .languages-block,
.light-theme .burger span
{
  color: #989898;
}

.light-theme header .search-block svg path
{
  fill: #989898;
}

.light-theme h1,
.light-theme .info-user h3
{
  color: #000000;
}

.light-theme .menu-overlay.active
{
  background: #ffffff;
}

.light-body
{
  background: #F7F6FB;
}

.main-wrapper
{
  min-height: 100vh;
  background: #333333;
  position: relative;
  z-index: 3;
}

.main-wrapper.light-theme
{
  background: #F7F6FB;
}

</style>
