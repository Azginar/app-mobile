<template>
  <div class="partners-withdrawal-page-view">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToCardIndex"
      />
    </div>
    <h3>Withdrawal</h3>
    <div class="card-block-wrap">
      <div v-if="GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL" class="description-block">
        <div v-if="GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL" class="wrapper-img">
          <img v-if="isRowAvatarNoEmpty(GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL.avatar)" :src="GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL.avatar">
          <span v-else>{{ GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL.avatarText }}</span>
        </div>
        <div v-else class="img-block mastercard">
          <icVisa />
        </div>
        <div class="text-block">
          <h4 v-if="GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL">
            {{ GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL.title }}
          </h4>
        </div>
      </div>
      <div class="form-card">
        <div class="row-line">
          <label>Amount</label>
          <InputWithSelect
            :value="PAYMENT_AMOUNT_INPUT"
            :handle-select="CHANGE_PAYMENT_AMOUNT_CURRENCY"
            :options="PAYMENT_AMOUNT_CURRENCY"
            :selected="PAYMENT_AMOUNT_CURRENCY_SELECTED"
            :type="'number'"
          />
          <div class="only-text">
            <p>– max. amount: <span v-if="GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL">{{ GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL.maxAmount }}</span></p>
          </div>
        </div>
        <div class="row-line">
          <label>Comment</label>
          <black-input
            :value="COMMENT"
          />
          <div class="only-text">
            <p>– optional</p>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'OK'"
          :click-event="goToAuthorizationCode"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_PARTNERS_METHODS_FOR_WITHDRAWAL } from '../../../../modules/finance/mutation-types'
import DefaultButton from '../../../../components/default-button.vue'
import BlackInput from '../../../../components/black-input'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    'default-button': DefaultButton,
    BlackInput
  },
  computed: {
    ...mapState([
      'PAYMENT_AMOUNT_INPUT',
      'PAYMENT_AMOUNT_CURRENCY',
      'PAYMENT_AMOUNT_CURRENCY_SELECTED',
      'COMMENT'
    ]),
    ...mapGetters([
      'GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_PARTNERS_METHODS_FOR_WITHDRAWAL',
      'CHANGE_PAYMENT_AMOUNT_CURRENCY'
    ]),
    goToCardIndex () {
      this.$router.push('/withdrawal/index')
    },
    isTypeBankCardMasterCard (type) {
      return type === 'mastercard'
    },
    goToAuthorizationCode () {
      this.$router.push(`${this.$route.path}/authorization-code`)
    },
    isRowAvatarNoEmpty (avatar) {
      return avatar !== ''
    }
  },
  mounted () {
    this[CHANGE_PARTNERS_METHODS_FOR_WITHDRAWAL](this.$route.params.id)
  }
}
</script>
<style>
.partners-withdrawal-page-view
{
  padding: 40px 20px 60px;
}

.partners-withdrawal-page-view h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.partners-withdrawal-page-view input::-webkit-input-placeholder
{
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.partners-withdrawal-page-view input::-moz-placeholder
{
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.partners-withdrawal-page-view .img-block
{
  text-align: center;
  margin-bottom: 20px;
}

.partners-withdrawal-page-view .mastercard svg
{
  width: 120px;
  height: 74px;
}

.partners-withdrawal-page-view .text-block h4
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

.partners-withdrawal-page-view .form-card .row-line
{
  margin-bottom: 20px;
}

.partners-withdrawal-page-view .go-back-button
{
  margin-bottom: 40px;
}

.partners-withdrawal-page-view .go-back-button button
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  color: #B2B2B2;
}

.partners-withdrawal-page-view .go-back-button .back-button svg
{
  fill: #B2B2B2;
}

.partners-withdrawal-page-view .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
  margin-top: 5px;
  padding-left: 20px;
}

.partners-withdrawal-page-view .only-text p span
{
  color: #B2B2B2;
}

.partners-withdrawal-page-view label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 97.52%;
  text-transform: uppercase;
  color: #737373;
  padding-left: 20px;
  margin-bottom: 5px;
  display: block;
}

.partners-withdrawal-page-view .card-block-wrap .btn-block
{
  text-align: center;
  margin-top: 40px;
}

.partners-withdrawal-page-view .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.partners-withdrawal-page-view .wrapper-img
{
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 auto 20px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.partners-withdrawal-page-view .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.partners-withdrawal-page-view .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.light-theme .partners-withdrawal-page-view .go-back-button button
{
  border-color: #E52525;
  background: #E52525;
  color: #ffffff;
}

.light-theme .partners-withdrawal-page-view .go-back-button button svg
{
  fill: #ffffff;
}

.light-theme .partners-withdrawal-page-view h3,
.light-theme .partners-withdrawal-page-view .text-block h4
{
  color: #000000;
}

.light-theme .partners-withdrawal-page-view .only-text p span
{
  color: #989898;
}
</style>
