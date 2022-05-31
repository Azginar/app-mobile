<template>
  <div class="withdrawal-page">
    <div class="withdrawal-account-info">
      <SimpleSelectBlack
        :options="TRADING_ACCOUNT"
        :handle-select="CHANGE_TRADING_ACCOUNT"
        :label="'Trading account'"
        :selected="TRADING_ACCOUNT_SELECTED"
      />
      <div class="center-line">
        <label>Accounts balance</label>
        <p>{{ onlyAmount(TRADING_ACCOUNT_SELECTED) }}</p>
      </div>
    </div>
    <deposit-method :payment-methods="WITHDRAWAL_METHODS" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import DepositMethod from '../../../components/finance/depositMethod'
import SimpleSelectBlack from '../../../components/SimpleSelectBlack'
const { mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'deposit-method': DepositMethod,
    SimpleSelectBlack
  },
  computed: {
    ...mapState([
      'WITHDRAWAL_METHODS',
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_TRADING_ACCOUNT'
    ]),
    onlyAmount (account) {
      const newString = account.substring(account.indexOf('/') + 1)
      return newString
    }
  }
}
</script>
<style>
.withdrawal-page
{
  padding: 0 20px 80px;
}

.withdrawal-page h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.withdrawal-page .setting-block
{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 36, 36, 0.5);
  margin-bottom: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  cursor: pointer;
}

.withdrawal-page .withdrawal-account-info
{
  margin-bottom: 40px;
}

.withdrawal-page .withdrawal-account-info > div
{
  margin-bottom: 20px;
}

.withdrawal-page .withdrawal-account-info .center-line
{
  text-align: center;
}

.withdrawal-page .selector-wrapper-black .selector-label-black
{
  font-size: 11px;
  line-height: 97.52%;
}

.withdrawal-page .withdrawal-account-info .center-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.withdrawal-page .withdrawal-account-info .center-line label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  display: block;
}

.withdrawal-page .container-card > div
{
  margin-bottom: 20px;
}

.withdrawal-page .depositMethod h3
{
  display: none;
}

.withdrawal-page .container-card
{
  margin-bottom: 0;
}

.withdrawal-page .container-card .block-card .info-text p
{
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.withdrawal-page .container-card .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.withdrawal-page .container-card .block-card .info-text h4
{
  font-size: 18px;
  line-height: 120%;
}

.light-theme .withdrawal-page .withdrawal-account-info .center-line p
{
  color: #000000;
}

.light-theme .bank-card-withdrawal-page-view .go-back-button button
{
  border-color: #E52525;
  background: #E52525;
  color: #ffffff;
}

.light-theme .bank-card-withdrawal-page-view .go-back-button button svg
{
  fill: #ffffff;
}

@media (max-width: 340px) {
  .withdrawal-page .container-card .block-card .info-text h4
  {
    font-size: 16px;
  }
}
</style>
