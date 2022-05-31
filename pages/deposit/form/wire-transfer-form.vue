<template>
  <div class="wire-transfer-page">
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
        <div v-for="row in WIRE_TRANSFER_PAYMENT_DETAILS" :key="row.title" class="col-line">
          <p>{{ row.title }}</p>
          <span>{{ row.value }}</span>
        </div>
      </div>

      <h4>Recipient info</h4>
      <div class="row-line-block-black">
        <div v-for="row in WIRE_TRANSFER_RECIPIENT_INFO" :key="row.title" class="col-line">
          <p>{{ row.title }}</p>
          <span>{{ row.value }}</span>
        </div>
      </div>

      <h4>Financial institution information</h4>
      <div class="row-line-block-black">
        <div v-for="row in WIRE_TRANSFER_RECIPIENT_INFO" :key="row.title" class="col-line">
          <p>{{ row.title }}</p>
          <span>{{ row.value }}</span>
        </div>
      </div>

      <h4>Payment information</h4>
      <div class="row-line-block-black">
        <div v-for="row in WIRE_TRANSFER_PAYMENT_INFORMATION" :key="row.title" class="col-line">
          <p>{{ row.title }}</p>
          <span>{{ row.value }}</span>
        </div>
      </div>

      <div class="btn-block">
        <NuxtLink to="/deposit/index" class="block-card">
          <default-button
            :type="'red-button'"
            :label="'Download pdf'"
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
      'WIRE_TRANSFER_PAYMENT_DETAILS',
      'WIRE_TRANSFER_RECIPIENT_INFO',
      'WIRE_TRANSFER_FINANCIAL_INFORMATION',
      'WIRE_TRANSFER_PAYMENT_INFORMATION'
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
      this.$router.push('/deposit/form?method=wire-transfer')
    }
  }
}
</script>
<style>
.wire-transfer-page
{
  padding: 40px 20px 60px;
  background: #2B2B2B;
}

.wire-transfer-page .go-back-button
{
  margin-bottom: 40px;
}

.wire-transfer-page .go-back-button button
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  color: #B2B2B2;
}

.wire-transfer-page .go-back-button .back-button svg
{
  fill: #B2B2B2;
}

.wire-transfer-page h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.wire-transfer-page h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.wire-transfer-page .card-block-wrap .btn-block
{
  text-align: center;
}

.wire-transfer-page .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.wire-transfer-page .red-button
{
  min-width: 144px;
}

.wire-transfer-page .row-line-block
{
  margin-bottom: 40px;
}

.wire-transfer-page .row-line-block .col-line
{
  margin-right: 60px;
  margin-bottom: 20px;
}

.wire-transfer-page .row-line-block .col-line p,
.wire-transfer-page .row-line-block-black .col-line p
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

.wire-transfer-page .row-line-block .col-line span,
.wire-transfer-page .row-line-block-black .col-line span
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

.wire-transfer-page .row-line-block-black
{
  background: #1B1B1B;
  margin-bottom: 40px;
  padding: 20px 20px 20px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.wire-transfer-page .row-line-block-black .trans-button
{
  padding: 6px 20px 7px;
  color: #737373;
  font-size: 12px;
  line-height: 15px;
}

.wire-transfer-page .row-line-block-black .col-line
{
  margin-bottom: 20px;
}

.wire-transfer-page .row-line-block-black .col-line:last-child
{
  margin-bottom: 0;
}

.wire-transfer-page .row-line-block-black .col-line .btn-block-black
{
  display: inline-block;
  margin: -10px 0 -10px 10px;
}

.light-theme .wire-transfer-page
{
  background: #F7F6FB;
}

.light-theme .wire-transfer-page h3
{
  color: #000000;
}

.light-theme .wire-transfer-page .row-line-block .col-line span,
.light-theme .wire-transfer-page .row-line-block-black .col-line span
{
  color: #000000;
}

.light-theme .wire-transfer-page .row-line-block-black
{
  background: #ffffff;
}

.light-theme .wire-transfer-page h4
{
  color: #000000;
}

.light-theme .wire-transfer-page .go-back-button button
{
  border-color: #E52525;
  background: #E52525;
  color: #ffffff;
}

.light-theme .wire-transfer-page .go-back-button button svg
{
  fill: #ffffff;
}
</style>
