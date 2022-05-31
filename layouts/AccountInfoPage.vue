<template>
  <div class="account-info-layout-container" :class="{ 'light-theme': valueLightTheme }">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goBack"
      />
    </div>
    <div class="account-name">
      <p>{{ accountLabel }} <i>{{ accountName }}</i></p>
      <span v-if="isSwapFree" class="swap-free">Swap Free</span>
      <div v-else style="height: 10px" />
    </div>
    <ul class="ul-tabs menu-container">
      <li
        v-for="link in links"
        :key="link.label"
      >
        <sub-menu-item
          :label="link.label"
          :link="link.link"
          :query-for-tab-item="queryForTabItem"
        />
      </li>
    </ul>
    <Nuxt />
  </div>
</template>
<script>
import get from 'lodash/get'
import { createNamespacedHelpers } from 'vuex'
import { GET_ACCOUNT_NAME } from '@/modules/accounts/constants'
import SubMenuItem from '@/components/sub-menu-item'
import { GET_IS_SWAP_FREE } from '../modules/accounts/getter-types'
import { GET_ACCOUNT_GENERAL_INFORMATION } from '../modules/accounts/constants'
import RoutesManager from '../services/RoutesManager'
import { getAccountInfoPageSubMenu } from '~/services/tab-menu'
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'

const { mapGetters } = createNamespacedHelpers('accounts')

export default {
  // eslint-disable-next-line
  name: 'AccountInfoPage',
  middleware: ['redirect', 'check-auth', 'auth', 'switch-theme'],
  components: {
    SubMenuItem
  },
  data () {
    return {
      isInvestor: false,
      availableLinks: [],
      previousRoute: '/accounts/index'
    }
  },
  computed: {
    ...mapGetters({
      accountName: GET_ACCOUNT_NAME,
      isSwapFree: GET_IS_SWAP_FREE,
      accountInformation: GET_ACCOUNT_GENERAL_INFORMATION
    }),
    links () {
      return this.availableLinks
    },
    accountLabel () {
      return this.accountInformation.isInvestor ? 'Investor’s Account' : 'Trading Account'
    },
    queryForTabItem () {
      return `?login=${this.$route.query.login}&server=${this.$route.query.server}`
    },
    valueLightTheme () {
      return this.$store.getters[`menu/${GET_LIGHT_THEME}`]
    }
  },
  created () {
    const { availableLinks } = getAccountInfoPageSubMenu(this.accountInformation.isInvestor)

    this.previousRoute = RoutesManager.getPreviousRouteForAccountInfoLayout(get(this, '$nuxt.context.from.fullPath', null))
    this.availableLinks = availableLinks
  },
  methods: {
    goBack () {
      this.$router.push(this.previousRoute)
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.valueLightTheme ? 'light-body' : ''
      }
    }
  },
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
}

.ul-tabs {
  margin-top: 0;
  padding-left: 0;
  margin-left: -10px;
  /*margin-bottom: 80px;*/
}

.ul-tabs li {
  display: inline-block;
  margin-right: 10px;
}

.ul-tabs li a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid #E52525;
  color: #ffffff;
  padding: 10px 10px 8px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
}

.ul-tabs li a:hover {
  color: #ffffff;
}

.ul-tabs li a.non-active-link {
  border-bottom: 2px solid transparent;
  color: #B2B2B2;
}

/* for horizontal scroll    */
.menu-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;  /* IE 10+ */
  scrollbar-width: none; /* Firefox */
}

.menu-container::-webkit-scrollbar { /* chrome based */
  width: 0;
  background: transparent;
}

h1 {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  color: #FFFFFF;
}

.account-info-layout-container .menu-container {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 40px;
}

.account-info-layout-container .go-back-button {
  padding: 40px 20px;
}

.account-info-layout-container .account-name {
  padding-left: 20px;
  padding-right: 20px;
  font-family: Montserrat,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0;
  text-align: left;
  color: #B2B2B2;
  margin-bottom: 20px;
}

.account-info-layout-container .account-name i {
  font-style: normal;
  color: #ffffff;
  white-space: nowrap;
}

.swap-free {
  background: #242424;
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  padding: 2px 4px 2px;
  vertical-align: middle;
}

.light-theme.account-info-layout-container .account-name,
.light-theme.account-info-layout-container .main-info-account .black-block span,
.light-theme.account-info-layout-container .profit-title
{
  color: #989898;
}

.light-theme.account-info-layout-container .account-name i
{
  color: #000000;
}

.light-theme.account-info-layout-container .ul-tabs li a.non-active-link
{
  color: #989898;
}

.light-theme.account-info-layout-container .ul-tabs li a.nuxt-link-active
{
  color: #000000;
}

.light-theme.account-info-layout-container
{
  min-height: 100vh;
}

.light-theme
{
  min-height: 100vh;
}

.light-body
{
  background: #F7F6FB;
}

</style>
