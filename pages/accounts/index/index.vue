<template>
  <div class="accounts-page">
    <div class="container">
      <div class="trading-accounts-container">
        <div
          v-for="(name, accountTypeIndex) in accountList.keys()"
          :key="accountTypeIndex"
        >
          <h2 :class="{'blur-on-load': isInProgress}">
            {{ name }}
          </h2>
          <trading-account-card
            v-for="(account, accountIndex) in accountList.get(name)"
            :key="`${name}-${accountIndex}`"
            :account="account['label']"
            :balance="`${account['balance']} ${account['currency']}`"
            :leverage="account['leverage']"
            :account-u-i-d="account['login']"
            :server-id="account['server_id']"
            :is-in-progress="isInProgress"
          />
        </div>
        <div
          class="open-trading-account-button-container"
        >
          <default-button
            :type="'trans-button'"
            :label="'Open trading account'"
            :click-event="goToOpenAccount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from '@/components/default-button'
import TradingAccountCard from '../../../components/account/trading-account-card'
import { GET_ACCOUNTS_LIST, GET_GENERAL_IS_IN_PROGRESS } from '../../../modules/accounts/getter-types'
import { LOAD_REAL_ACCOUNT_LIST } from '../../../modules/accounts/actions-types'

export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    TradingAccountCard,
    DefaultButton
  },
  async asyncData (ctx) {
    await ctx.app.store.dispatch(`accounts/${LOAD_REAL_ACCOUNT_LIST}`)
  },
  computed: {
    accountList () {
      return this.$store.getters[`accounts/${GET_ACCOUNTS_LIST}`]
    },
    isInProgress () {
      return this.$store.getters[`accounts/${GET_GENERAL_IS_IN_PROGRESS}`]
    }
  },
  methods: {
    goToOpenAccount () {
      this.$router.push('/new-trading-account')
    }
  }
}
</script>
<style>
.blur-on-load {
  filter: blur(4px);
}

.accounts-page h2 {
  font-family: Montserrat,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.accounts-page h2 {
  padding-left: 5px;
  padding-right: 5px;
}

.accounts-page .ul-tabs
{
  margin-bottom: 60px;
}

.trading-accounts-container > div:not(:first-child) > h2{
  margin-top: 70px;
}

.open-trading-account-button-container {
  margin: 0 auto;
  padding: 50px 0 60px;
  text-align: center;
}

.open-trading-account-button-container .trans-button
{
  padding-left: 20px;
  padding-right: 20px;
}

.light-theme .accounts-page h2
{
  color: #000000;
}
</style>
