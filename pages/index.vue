<template>
  <div class="home-page">
    <div class="container">
      <h1>Home</h1>
      <user-badge />
      <side-menu-home />
      <balance :title="'Balance information'" :balance-info-data="BALANCE_INFO_DATA" />
      <div class="btn-block-main">
        <div>
          <default-button
            :type="'trans-button'"
            :label="'Deposit'"
            :click-event="gotoDepositPage"
          />
        </div>
        <div>
          <default-button
            :type="'trans-button'"
            :label="'Withdrawal'"
            :click-event="gotoWithdrawalPage"
          />
        </div>
      </div>
      <div class="metatrader-block-main">
        <h3>Download MetaTrader</h3>
        <div class="metatrader-download">
          <div>
            <div class="img">
              <metatrader4Logo />
            </div>
            <div class="btn-block">
              <default-button
                :type="'trans-button'"
                :label="'Download'"
                :click-event="downloadMT"
              />
            </div>
          </div>
          <div>
            <div class="img">
              <metatrader5Logo />
            </div>
            <div class="btn-block">
              <default-button
                :type="'trans-button'"
                :label="'Download'"
                :click-event="downloadMT"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="promo-block-main">
        <h3>Promotions</h3>
        <promoBlockMain :promo-info="promotionsInfo" />
      </div>
      <analytics :title="'Analytics'" :analytics-data="ANALYTICS_DATA" />
      <trading-history :title="'Trading History'" :table-data="TOP_INSTRUMENTS_DATA" />
      <h3>Popular instruments</h3>
      <popular-instruments-main :table-data="popularInstrumentsList" />
    </div>
  </div>
</template>

<script>
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import { createNamespacedHelpers } from 'vuex'
import UserBadge from '../components/UserBadge'
import SideMenuHome from '../components/side-menu-home'
import analytics from '../components/analytics'
import balance from '../components/balance'
import tradingHistory from '../components/tradingHistory'
import promoBlockMain from '../components/promotions/promoBlockMain'
import DefaultButton from '../components/default-button.vue'
import metatrader4Logo from '../assets/icons/metatrader4-logo.svg'
import metatrader5Logo from '../assets/icons/metatrader5-logo.svg'
import PopularInstrumentsMain from '../components/instruments/popularInstrumentsMainPage'
import { GET_PROMOTIONS_INFO } from '../modules/promotions/getter-types'
import { GET_LIST_POPULAR_INSTRUMENTS_MAIN_PAGE } from '@/modules/instruments/getter-types'
const { mapState } = createNamespacedHelpers('settings')
export default {
  layout: 'default',
  components: {
    'user-badge': UserBadge,
    'side-menu-home': SideMenuHome,
    analytics,
    balance,
    'trading-history': tradingHistory,
    'default-button': DefaultButton,
    metatrader4Logo,
    metatrader5Logo,
    promoBlockMain,
    'popular-instruments-main': PopularInstrumentsMain
  },
  computed: {
    ...mapState([
      'ANALYTICS_DATA',
      'TOP_INSTRUMENTS_DATA',
      'BALANCE_INFO_DATA'
    ]),
    promotionsInfo () {
      return this.$store.getters[`promotions/${GET_PROMOTIONS_INFO}`]
    },
    popularInstrumentsList () {
      return this.$store.getters[`instruments/${GET_LIST_POPULAR_INSTRUMENTS_MAIN_PAGE}`]
    }
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  methods: {
    gotoDepositPage () {
      this.$router.push('/deposit/index')
    },
    gotoWithdrawalPage () {
      this.$router.push('/withdrawal/index')
    },
    downloadMT () {
      this.$router.push('/terminal/index')
    }
  }
}
</script>

<style>
.container {
    padding-left: 20px;
    padding-right: 20px;
}

h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.home-page .info-user
{
  margin-bottom: 0;
}

.home-page .menu-home
{
  margin-bottom: 80px;
}

.home-page .graphic-block
{
  margin-bottom: 35px;
  margin-left: -20px;
  margin-right: -20px;
}

.home-page .graphic-block svg
{
  width: 100%;
  height: auto;
}

.home-page
{
  padding-bottom: 80px;
}

.home-page .btn-block-main
{
  text-align: center;
  margin-bottom: 70px;
}

.home-page .btn-block-main > div
{
  padding-right: 10px;
  padding-left: 10px;
  display: inline-block;
  margin-bottom: 10px;
}

.home-page .info-user span.Unverified {
  color: #E52525;
}

.home-page .info-user span.Verified {
  color: #8DC640;
}

.home-page .info-user span.Party {
  color: #D2AC75 !important;
}

.home-page .metatrader-download
{
  text-align: center;
  margin: 50px 0 80px;
}

.home-page .metatrader-download .img{
  margin-bottom: 20px;
}

.home-page .metatrader-download > div
{
  margin-bottom: 40px;
}

.home-page .promo-block-main h3
{
  margin-bottom: 20px;
}

.light-theme .home-page h3
{
  color: #000000;
}
</style>
