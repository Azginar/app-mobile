<template>
  <div class="investors-accounts-container container">
    <h2>INVESTOR’S ACCOUNTS</h2>
    <InvestorAccountCard
      v-for="(account, index) in investorAccountList"
      :key="index"
      :leverage="account['LEVERAGE']"
      :profit="account['PROFIT']"
      :account="account['ACCOUNT']"
      :user-name="account['USER_NAME']"
      :avatar="account['ACCOUNT_AVATAR']"
      :click-event="goToInvestorAccountPage"
    />
    <div
      class="open-trading-account-button-container"
    >
      <default-button
        :type="'trans-button'"
        :label="'Open INVESTOR’S account'"
        :click-event="() => {}"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { INVESTORS_ACCOUNT_LIST } from '@/modules/accounts/constants'
import DefaultButton from '@/components/default-button'
import InvestorAccountCard from '@/components/account/investor-account-card'

const { mapState } = createNamespacedHelpers('accounts')

export default {
  layout: 'default',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    DefaultButton,
    InvestorAccountCard
  },
  computed: {
    ...mapState({
      investorAccountList: INVESTORS_ACCOUNT_LIST
    })
  },
  methods: {
    goToInvestorAccountPage () {
      // todo hack with query param isInvestor only for dev without backend
      this.$router.push('/accounts/info?login=69868&server=40&is-investor=true')
    }
  }
}
</script>
<style>
.investors-accounts-container > h2 {
  margin-bottom: 30px;
}
.open-investor-account-button-container {
  margin: 60px auto;
  text-align: center;
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
.investors-accounts-container h2 {
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
}

.light-theme .investors-accounts-container h2
{
  color: #000000;
}

</style>
