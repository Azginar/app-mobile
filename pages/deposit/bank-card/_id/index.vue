<template>
  <div class="bank-card-page-view">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToCardIndex"
      />
    </div>
    <h3>Deposit</h3>
    <div class="card-block-wrap">
      <div class="description-block">
        <div v-if="isTypeBankCardMasterCard(GET_TYPE_BANK_CARD_TO_NUMBER)" class="img-block mastercard">
          <icMasterCard />
        </div>
        <div v-else class="img-block mastercard">
          <icVisa />
        </div>
        <div class="text-block">
          <h4 v-if="GET_BANK_CARD_NUMBER">
            {{ GET_BANK_CARD_NUMBER }}
          </h4>
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
        <div class="row-line">
          <label>Promo code</label>
          <black-input
            :value="PROMO_CODE"
            :placeholder="'– optional'"
          />
        </div>
      </div>
      <div class="btn-block">
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
import { CHANGE_BANK_CARD } from '../../../../modules/finance/mutation-types'
import DefaultButton from '../../../../components/default-button.vue'
import icMasterCard from '../../../../assets/icons/master-card-ic.svg'
import icVisa from '../../../../assets/icons/visa-ic.svg'
import BlackInput from '../../../../components/black-input'
import SimpleSelectBlack from '../../../../components/SimpleSelectBlack'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    icMasterCard,
    icVisa,
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
      'PROMO_CODE'
    ]),
    ...mapGetters([
      'GET_BANK_CARD_NUMBER',
      'GET_TYPE_BANK_CARD_TO_NUMBER'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_BANK_CARD',
      'CHANGE_PAYMENT_AMOUNT_CURRENCY',
      'CHANGE_TRADING_ACCOUNT'
    ]),
    goToCardIndex () {
      this.$router.push('/deposit/bank-card/index')
    },
    isTypeBankCardMasterCard (type) {
      return type === 'mastercard'
    },
    goToModalSuccess () {
      this.$router.push(`${this.$route.path}/deposit-success`)
    }
  },
  mounted () {
    this[CHANGE_BANK_CARD](this.$route.params.id)
  }
}
</script>
<style>
.bank-card-page-view
{
  padding: 40px 20px 60px;
}

.bank-card-page-view h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.bank-card-page-view input::-webkit-input-placeholder
{
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.bank-card-page-view input::-moz-placeholder
{
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.bank-card-page-view .img-block
{
  text-align: center;
  margin-bottom: 20px;
}

.bank-card-page-view .mastercard svg
{
  width: 120px;
  height: 74px;
}

.bank-card-page-view .text-block h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 40px;
}

.bank-card-page-view .form-card .row-line
{
  margin-bottom: 20px;
}

.bank-card-page-view .go-back-button
{
  margin-bottom: 40px;
}

.bank-card-page-view .go-back-button button
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  color: #B2B2B2;
}

.bank-card-page-view .go-back-button .back-button svg
{
  fill: #B2B2B2;
}

.bank-card-page-view label
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

.bank-card-page-view .card-block-wrap .btn-block
{
  text-align: center;
  margin-top: 40px;
}

.bank-card-page-view .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.light-theme .bank-card-page-view h3,
.light-theme .bank-card-page-view .text-block h4
{
  color: #000000;
}

.light-theme .bank-card-page-view .go-back-button button
{
  border-color: #E52525;
  background: #E52525;
  color: #ffffff;
}

.light-theme .bank-card-page-view .go-back-button .back-button svg
{
  fill: #ffffff;
}
</style>
