<template>
  <div class="electronic-system-page-view">
    <div v-if="isParameterWireTransfer(this.$route.query.method)" class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToDepositIndex"
      />
    </div>
    <div v-else-if="isParameterBtc(this.$route.query.method)" class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToDepositIndex"
      />
    </div>
    <div v-else class="go-back-button no-active">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToCardIndex"
      />
    </div>
    <h3>Deposit</h3>
    <div class="card-block-wrap">
      <div class="description-block">
        <div class="img-block mastercard">
          <img :src="GET_ELECTRONIC_SYSTEM">
        </div>
        <div class="text-block">
          <p>Tifia will refund all fees for deposits</p>
        </div>
      </div>
      <div class="form-card">
        <div class="row-line">
          <label>Payment amount</label>
          <InputWithSelect
            :value="PAYMENT_AMOUNT_INPUT"
            :handle-select="CHANGE_PAYMENT_AMOUNT_CURRENCY"
            :options="PAYMENT_AMOUNT_CURRENCY"
            :selected="PAYMENT_AMOUNT_CURRENCY_SELECTED"
            :type="'number'"
          />
        </div>
        <div class="row-line">
          <SimpleSelectBlack
            :options="TRADING_ACCOUNT"
            :handle-select="CHANGE_TRADING_ACCOUNT"
            :label="'Trading account'"
            :selected="TRADING_ACCOUNT_SELECTED"
          />
        </div>
        <div v-if="isParameterBtc(this.$route.query.method)" class="row-line">
          <label>Your bitcoin wallet</label>
          <black-input
            :value="BITCOIN_WALLET"
          />
        </div>
        <div class="row-line">
          <label>Promo code</label>
          <black-input
            :value="PROMO_CODE"
            :placeholder="'– optional'"
          />
        </div>
      </div>
      <div v-if="isParameterWireTransfer(this.$route.query.method)" class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'CONTINUE'"
          :click-event="goToBWTForm"
        />
      </div>
      <div v-else-if="isParameterBtc(this.$route.query.method)" class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'CONTINUE'"
          :click-event="goToBTCForm"
        />
      </div>
      <div v-else class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'OK'"
          :click-event="goToModalSuccess"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_ELECTRONIC_SYSTEM } from '../../../modules/finance/mutation-types'
import DefaultButton from '../../../components/default-button.vue'
import BlackInput from '../../../components/black-input'
import SimpleSelectBlack from '../../../components/SimpleSelectBlack'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    'default-button': DefaultButton,
    BlackInput,
    SimpleSelectBlack
  },
  computed: {
    ...mapState([
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED',
      'PAYMENT_AMOUNT_INPUT',
      'PAYMENT_AMOUNT_CURRENCY',
      'PAYMENT_AMOUNT_CURRENCY_SELECTED',
      'PROMO_CODE',
      'BITCOIN_WALLET'
    ]),
    ...mapGetters([
      'GET_ELECTRONIC_SYSTEM',
      'GET_ELECTRONIC_SYSTEM_NAME'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_ELECTRONIC_SYSTEM',
      'CHANGE_PAYMENT_AMOUNT_CURRENCY',
      'CHANGE_TRADING_ACCOUNT'
    ]),
    goToCardIndex () {
      this.$router.push('/deposit/electronic-systems')
    },
    goToModalSuccess () {
      this.$router.push('/deposit/form/deposit-success')
    },
    goToBWTForm () {
      this.$router.push('/deposit/form/wire-transfer-form')
    },
    goToBTCForm () {
      this.$router.push('/deposit/form/bitcoin-form')
    },
    goToDepositIndex () {
      this.$router.push('/deposit/index')
    },
    isParameterWireTransfer (parameter) {
      return parameter === 'wire-transfer'
    },
    isParameterBtc (parameter) {
      return parameter === 'btc'
    }
  },
  mounted () {
    this[CHANGE_ELECTRONIC_SYSTEM](this.$route.query.method)
  }
}
</script>
<style>
.electronic-system-page-view
{
  padding: 40px 20px 60px;
}

.electronic-system-page-view h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.electronic-system-page-view input::-webkit-input-placeholder
{
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.electronic-system-page-view input::-moz-placeholder
{
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.electronic-system-page-view .img-block
{
  text-align: center;
  margin-bottom: 40px;
}

.electronic-system-page-view .img-block img
{
  width: 120px;
}

.electronic-system-page-view .text-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #B2B2B2;
  margin-bottom: 40px;
}

.electronic-system-page-view .form-card .row-line
{
  margin-bottom: 20px;
}

.electronic-system-page-view .go-back-button
{
  margin-bottom: 40px;
}

.electronic-system-page-view .no-active button
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  color: #B2B2B2;
}

.electronic-system-page-view .no-active .back-button svg
{
  fill: #B2B2B2;
}

.electronic-system-page-view label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  padding-left: 20px;
  margin-bottom: 5px;
  display: block;
}

.electronic-system-page-view .card-block-wrap .btn-block
{
  text-align: center;
  margin-top: 40px;
}

.electronic-system-page-view .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.light-theme .electronic-system-page-view h3
{
  color: #000000;
}

.light-theme .electronic-system-page-view .no-active button
{
  border-color: #E52525;
  background: #E52525;
  color: #ffffff;
}

.light-theme .electronic-system-page-view .no-active button svg
{
  fill: #ffffff;
}

.light-theme .electronic-system-page-view .text-block p
{
  color: #989898;
}
</style>
