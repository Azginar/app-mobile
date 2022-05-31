<template>
  <div class="main-info-account">
    <general-information-block
      :leverage="accountGeneralInformation.leverage"
      :login="accountGeneralInformation.login"
      :server="accountGeneralInformation.server"
      :registered-date="accountGeneralInformation.registeredDate"
      :registered-time="accountGeneralInformation.registeredTime"
      :last-login-date="accountGeneralInformation.lastLoginDate"
      :last-login-time="accountGeneralInformation.lastLoginTime"
    />
    <div
      class="account-control-button-container"
    >
      <div>
        <default-button
          id="account-info-account-control"
          :type="'trans-button'"
          :label="'Account control'"
          :click-event="goToAccountControl"
          @click="goToAccountControl"
        />
      </div>
    </div>
    <!-- todo move this style to some css selector    -->
    <div v-if="isInvestor">
      <social-trading-investor-block

        style="margin: 0 !important;"
        :attached-to="accountSocialTradingInformation.attachedTo"
        :copy-type="accountSocialTradingInformation.copyType"
        :current-balance="accountSocialTradingInformation.currentBalance"
        :profit-of-trading="accountSocialTradingInformation.profitOfTrading"
        :start-balance="accountSocialTradingInformation.startBalance"
        :stop-loss-for-copping="accountSocialTradingInformation.stopLossForCopying"
        :take-profit-for-copying="accountSocialTradingInformation.takeProfitForCopying"
        :total-earned="accountSocialTradingInformation.totalEarned"
        :trader-account="accountSocialTradingInformation.traderAccount"
        :traders-commission="accountSocialTradingInformation.tradersCommission"
      />
      <!-- todo move this style to some css selector    -->
      <div
        class="account-control-button-container"
        style="margin-bottom: 10px"
      >
        <default-button
          :type="'trans-button'"
          :label="'EDIT SETTING'"
          :click-event="() => {}"
        />
      </div>
      <div
        class="account-control-button-container"
      >
        <default-button
          :type="'trans-button'"
          :label="'Detach investor\'s account'"
          :click-event="() => {}"
        />
      </div>
    </div>

    <finance-information-block
      :balance="accountFinanceInformation.balance"
      :credit="accountFinanceInformation.credit"
      :free-margin="accountFinanceInformation.freeMargin"
      :margin-level="accountFinanceInformation.marginLevel"
      :total-profit="accountFinanceInformation.totalProfit"
      :equity="accountFinanceInformation.equity"
      :floating="accountFinanceInformation.floating"
      :margin="accountFinanceInformation.margin"
      :total-swap="accountFinanceInformation.totalSwap"
      :available-for-withdrawal="accountFinanceInformation.availableForWithdrawal"
      :currency="accountFinanceInformation.currency"
    />
    <security-account-block />
    <statistics-account-block
      :selected-statistics-period="selectedStatisticsPeriod"
      :available-statistics-periods="availableStatisticsPeriods"
      :change-selected-statistics-period="handleChangeSelectedStatisticsPeriod"
    />
    <social-trading-block />
  </div>
</template>
<script>
import {
  CHANGE_SELECTED_STATISTICS_PERIOD,
  GET_ACCOUNT_FINANCE_INFORMATION,
  GET_ACCOUNT_GENERAL_INFORMATION, GET_ACCOUNT_SOCIAL_TRADING_INFORMATION,
  GET_AVAILABLE_STATISTICS_PERIODS,
  GET_SELECTED_STATISTICS_PERIOD,
  LOAD_ACCOUNT_INFO
} from '@/modules/accounts/constants'
import SocialTradingInvestorBlock from '@/components/account/social-trading-investor-block'
import FinanceInformationBlock from '@/components/account/finance-information-block'
import SocialTradingBlock from '@/components/account/social-trading-block'
import StatisticsAccountBlock from '@/components/account/statistics-account-block'
import DefaultButton from '../../components/default-button'
import GeneralInformationBlock from '../../components/account/general-information-block'
import SecurityAccountBlock from '../../components/account/security-account-block'

export default {
  layout: 'AccountInfoPage',
  middleware: ['redirect', 'check-auth', 'auth', 'accounts-info'],
  components: {
    DefaultButton,
    GeneralInformationBlock,
    SocialTradingInvestorBlock,
    FinanceInformationBlock,
    SecurityAccountBlock,
    StatisticsAccountBlock,
    SocialTradingBlock
  },
  async asyncData (ctx) {
    const { login, server } = ctx.query
    await ctx.store.dispatch(`accounts/${LOAD_ACCOUNT_INFO}`, { login, server })
  },
  data () {
    return {
      isInvestor: false
    }
  },
  computed: {
    accountGeneralInformation () {
      return this.$store.getters[`accounts/${GET_ACCOUNT_GENERAL_INFORMATION}`]
    },
    accountSocialTradingInformation () {
      return this.$store.getters[`accounts/${GET_ACCOUNT_SOCIAL_TRADING_INFORMATION}`]
    },
    accountFinanceInformation () {
      return this.$store.getters[`accounts/${GET_ACCOUNT_FINANCE_INFORMATION}`]
    },
    selectedStatisticsPeriod () {
      return this.$store.getters[`accounts/${GET_SELECTED_STATISTICS_PERIOD}`]
    },
    availableStatisticsPeriods () {
      return this.$store.getters[`accounts/${GET_AVAILABLE_STATISTICS_PERIODS}`]
    }
  },
  methods: {
    handleChangeSelectedStatisticsPeriod (value) {
      this.$store.dispatch(`accounts/${CHANGE_SELECTED_STATISTICS_PERIOD}`, value)
    },
    goToAccountControl () {
      this.$router.push('/accounts/account-control?login=69868&server=40')
    }
  }
}
</script>
<style>
.main-info-account h3 {
  font-family: Montserrat, serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.main-info-account .security-info-account,
.main-info-account .black-block:not(:first-child) {
  position: relative;
  padding: 20px 20px 0;
  overflow: hidden;
  margin-bottom: 60px;
}

.main-info-account .black-block:first-child {
  position: relative;
  padding: 20px 20px 0;
  overflow: hidden;
}

.main-info-account .account-control-button-container {
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: center;
}

.main-info-account .black-block p {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.main-info-account .black-block span {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
}

.main-info-account .black-block span i {
  font-style: normal;
  color: #737373;
}

/*.main-info-account .black-block .table-row {*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*}*/

.main-info-account .black-block .table-row .col-row {
  margin-top: 20px;
}

.account-control-button-container > div
{
  position: relative;
  display: inline-block;
}

.account-control-button-container > div:before,
.account-control-button-container > div:after,
.account-control-button-container > div button:before
{
  position: absolute;
  content: "";
  right: 20px;
  width: 4px;
  height: 4px;
  background: #737373;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.account-control-button-container > div:before
{
  top: 12px;
}

.account-control-button-container > div:after
{
  bottom: 12px;
}

.account-control-button-container > div button:before
{
  top: 17px;
  right: 19px;
}

.account-control-button-container > div button
{
  padding: 13px 34px 11px 20px;
  position: relative;
}

</style>
