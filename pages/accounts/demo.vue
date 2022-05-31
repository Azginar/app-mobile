<template>
  <div class="demo-accounts-container container">
    <template v-for="demoAccountType in demoAccountList.keys()">
      <h2 :key="`${demoAccountType}-demo-account` " :class="{'blur-on-load': isInProgress}">
        {{ demoAccountType }}
      </h2>
      <TradingAccountCard
        v-for="(account, index) in demoAccountList.get(demoAccountType)"
        :key="`${index}-${demoAccountType}`"
        :is-in-progress="isInProgress"
        :account="account['label']"
        :leverage="account['leverage']"
        :balance="`${account['balance']} ${account['currency']}`"
        :server-id="account['server_id']"
        :account-u-i-d="account['login']"
      />
    </template>
    <div
      class="open-trading-account-button-container"
    >
      <default-button
        :type="'trans-button'"
        :label="'Open DEMO account'"
        :click-event="() => {}"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import TradingAccountCard from '../../components/account/trading-account-card'
import { LOAD_DEMO_ACCOUNT_LIST } from '../../modules/accounts/actions-types'
import { GET_DEMO_ACCOUNT_LIST, GET_GENERAL_IS_IN_PROGRESS } from '../../modules/accounts/getter-types'

const { mapGetters, mapActions } = createNamespacedHelpers('accounts')

export default {
  layout: 'default',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    TradingAccountCard
  },
  async asyncData (ctx) {
    await ctx.app.store.dispatch(`accounts/${LOAD_DEMO_ACCOUNT_LIST}`)
  },
  computed: {
    ...mapGetters({
      demoAccountList: GET_DEMO_ACCOUNT_LIST,
      isInProgress: GET_GENERAL_IS_IN_PROGRESS
    })
  },
  methods: {
    ...mapActions({
      loadAccountList: LOAD_DEMO_ACCOUNT_LIST
    })
  }
}
</script>
<style>
.blur-on-load {
  filter: blur(4px);
}

.demo-accounts-container h2{
  font-family: Montserrat, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: #FFFFFF;
}

.container {
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.light-theme .demo-accounts-container h2
{
  color: #000000;
}
</style>
