<template>
  <div class="bitcoin-page">
    <div class="go-back-button no-active">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToBTCIndex"
      />
    </div>
    <h3>Deposit</h3>
    <div class="card-block-wrap">
      <div class="row-line-block">
        <div v-for="row in BITCOIN_PAYMENT_DETAILS" :key="row.title" class="col-line">
          <p>{{ row.title }}</p>
          <span v-if="isNotPaymentCodeUndefined(row.paymentCode)" id="copyText">{{ row.paymentCode }}</span>
          <span v-else>{{ row.value }}</span>
          <div v-if="isNotButtonFieldUndefined(row.button)" class="btn-block-black">
            <default-button
              :type="'trans-button'"
              :label="row.button"
              :click-event="handleCopy"
            />
          </div>
        </div>
      </div>

      <div class="form-card">
        <div class="row-line">
          <label>Specify the bitcoin transaction ID</label>
          <black-input
            :value="BITCOIN_ID"
          />
        </div>
        <div class="row-line">
          <div class="only-text">
            <p>A transaction shall be confirmed at least three times.</p>
          </div>
        </div>
      </div>
      <div class="simple-text">
        <p>Due to high volatility of bitcoin, the company reserves the right to credit the funds on trading account at the exchange rate actual at the time of the third transaction confirmation.</p>
      </div>

      <div class="btn-block">
        <NuxtLink to="/deposit/index" class="block-card">
          <default-button
            :type="'red-button'"
            :label="'OK'"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import DefaultButton from '../../../components/default-button.vue'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    'default-button': DefaultButton
  },
  computed: {
    ...mapState([
      'PAYMENT_AMOUNT_CURRENCY',
      'PAYMENT_AMOUNT_CURRENCY_SELECTED',
      'PAYMENT_AMOUNT_INPUT',
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED',
      'PROMO_CODE',
      'BITCOIN_WALLET',
      'BITCOIN_PAYMENT_DETAILS',
      'BITCOIN_ID'
    ]),
    ...mapGetters([
      'GET_ELECTRONIC_SYSTEM'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_PAYMENT_AMOUNT_CURRENCY',
      'CHANGE_TRADING_ACCOUNT',
      'CHANGE_ELECTRONIC_SYSTEM'
    ]),
    goToBTCIndex () {
      this.$router.push('/deposit/form?method=btc')
    },
    isParametrBtc (parametr) {
      return parametr === 'btc'
    },
    isNotButtonFieldUndefined (button) {
      return button !== undefined
    },
    isNotPaymentCodeUndefined (paymentCode) {
      return paymentCode !== undefined
    },
    handleCopy () {
      const copyTextContainer = document.getElementById('copyText')
      const range = document.createRange()
      range.selectNode(copyTextContainer)
      window.getSelection().addRange(range)
      try {
        document.execCommand('copy')
      } catch (err) {
        console.log('Can`t copy')
      }
      window.getSelection().removeAllRanges()
    }
  }
}
</script>
<style>
.bitcoin-page
{
  padding: 40px 20px 60px;
  background: #2B2B2B;
}

.bitcoin-page  .go-back-button
{
  margin-bottom: 40px;
}

.bitcoin-page  .go-back-button button
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  color: #B2B2B2;
}

.bitcoin-page  .go-back-button .back-button svg
{
  fill: #B2B2B2;
}

.bitcoin-page  h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.bitcoin-page  h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.bitcoin-page  .card-block-wrap .btn-block
{
  text-align: center;
}

.bitcoin-page  .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.bitcoin-page  .red-button
{
  min-width: 120px;
}

.bitcoin-page  .row-line-block .col-line
{
  margin-right: 60px;
  margin-bottom: 20px;
}

.bitcoin-page  .row-line-block > .col-line:last-child span
{
  font-size: 14px;
  line-height: 17px;
  word-break: break-word;
}

.bitcoin-page  .row-line-block .col-line p,
.bitcoin-page  .row-line-block-black .col-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.bitcoin-page  .row-line-block .col-line span,
.bitcoin-page  .row-line-block-black .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B2B2B2;
  max-width: 300px;
  display: inline-block;
}

.bitcoin-page  .btn-block-black
{
  margin-top: 10px;
}

.bitcoin-page  .btn-block-black .trans-button
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
}

.bitcoin-page .row-line-block-black .trans-button
{
  padding: 6px 20px 7px;
  color: #737373;
  font-size: 12px;
  line-height: 15px;
}

.bitcoin-page .form-card label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  padding-left: 20px;
  font-size: 11px;
  line-height: 97.52%;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 5px;
}

.bitcoin-page .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
  padding-left: 20px;
  padding-right: 20px;
}

.bitcoin-page .simple-text
{
  margin: 40px 0;
}

.bitcoin-page .simple-text p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #989898;
}

.light-theme .bitcoin-page
{
  background: #F7F6FB;
}

.light-theme .bitcoin-page h3
{
  color: #000000;
}

.light-theme .bitcoin-page .row-line-block .col-line span,
.light-theme .bitcoin-page .row-line-block-black .col-line span
{
  color: #989898;
}

.bitcoin-page .btn-block-black .trans-button
{
  background: transparent;
  border-color: #D4D4D4;
}

.light-theme .bitcoin-page .go-back-button button
{
  border-color: #E52525;
  background: #E52525;
  color: #ffffff;
}

.light-theme .bitcoin-page .go-back-button button svg
{
  fill: #ffffff;
}

</style>
