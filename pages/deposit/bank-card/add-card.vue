<template>
  <div class="add-card-page">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3>Add and verification bank card</h3>
      </template>
    </with-close-ic-header>
    <div class="add-card-block">
      <div class="description-block">
        <icMasterCard />
        <icVisa />
      </div>
      <div class="form-card">
        <h3>Add card</h3>
        <div class="col-line">
          <label>Card number</label>
          <black-input
            :value="CARD_NUMBER"
            :handle-input="focusInput"
            :type="'number'"
          />
        </div>
        <div class="col-line">
          <label>Holder’s name</label>
          <black-input
            :value="HOLDER_NAME"
          />
        </div>
        <div class="col-line">
          <label>Expiry date</label>
          <black-input
            :value="EXPIRY_DATE"
          />
        </div>
      </div>
    </div>
    <div class="card-block-verification">
      <div class="info-text">
        <h3>Verification card</h3>
        <p>In compliance with the requirements of AML.</p>
        <p>To verify your Bank card, please upload the photos of the front and back sides of your card (<span>with CVC/CVV code hidden</span>).</p>
        <ul>
          <li>Full color copy, that shows all corners of the card,</li>
          <li>With the number and expiry date,</li>
          <li>With the full name of the card owner.</li>
        </ul>
        <p>If you use a virtual card, upload a screenshot of your online cabinet, which shows the card number and your name.</p>
      </div>
      <div class="instruction-text">
        <p>Only a full-sized color photo, in which all the edges of your card are visible, can be accepted.</p>
        <div class="content-row">
          <div class="row-line">
            <div class="row-col">
              <cardWrongV1 />
            </div>
            <div class="row-col">
              <cardWrongV2 />
            </div>
          </div>
        </div>
        <p>You can hide CVC/CVV code while making a photo by using peace of paper or your finger.</p>
        <div class="content-row">
          <div class="row-line">
            <div class="row-col">
              <cardGoodV1 />
            </div>
            <div class="row-col">
              <cardGoodV2 />
            </div>
          </div>
        </div>
      </div>
      <div class="download-card">
        <cardFrontAdd />
        <div class="btn-wrap">
          <button-input-file :title="'Add photo'" />
        </div>
      </div>
      <div class="download-card">
        <cardBackAdd />
        <div class="btn-wrap">
          <button-input-file :title="'Add photo'" />
        </div>
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'Continue'"
          :click-event="goToCardIndex"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import icMasterCard from '../../../assets/icons/master-card-ic.svg'
import cardWrongV1 from '../../../assets/icons/card-wrong-v1.svg'
import cardWrongV2 from '../../../assets/icons/card-wrong-v2.svg'
import cardGoodV1 from '../../../assets/icons/card-good-v1.svg'
import cardGoodV2 from '../../../assets/icons/card-good-v2.svg'
import icVisa from '../../../assets/icons/visa-ic.svg'
import BlackInput from '../../../components/black-input'
import DefaultButton from '../../../components/default-button.vue'
import ButtonInputFile from '../../../components/ButtonInputFile.vue'
import cardFrontAdd from '../../../assets/icons/card-front.svg'
import cardBackAdd from '../../../assets/icons/card-back.svg'
import { CHANGE_TYPE_BANK_CARD } from '../../../modules/finance/mutation-types'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    icMasterCard,
    icVisa,
    BlackInput,
    'default-button': DefaultButton,
    WithCloseIcHeader,
    cardWrongV1,
    cardWrongV2,
    cardGoodV1,
    cardGoodV2,
    cardFrontAdd,
    cardBackAdd,
    'button-input-file': ButtonInputFile
  },
  computed: {
    ...mapState([
      'CARD_NUMBER',
      'HOLDER_NAME',
      'EXPIRY_DATE'
    ]),
    ...mapGetters([
      'GET_TYPE_BANK_CARD'
    ])
  },
  methods: {
    ...mapActions(['CHANGE_TYPE_BANK_CARD']),
    focusInput (event) {
      this[CHANGE_TYPE_BANK_CARD](event.target.value)
    },
    isTypeBankCardMasterCard (type) {
      return type === 'mastercard'
    },
    goBack () {
      this.$router.back()
    },
    goToCardIndex () {
      this.$router.push('/deposit/bank-card/index')
    }
  }
}
</script>
<style>
.add-card-page
{
  background: #2B2B2B;
  padding: 0 20px 60px;
}

.add-card-page .container-close-ic-header
{
  padding-left: 0;
  padding-right: 0;
}

.add-card-page .container-close-ic-header .header-form
{
  margin-top: 0;
}

.add-card-page .add-card-block .description-block
{
  display: block;
  text-align: center;
  margin-bottom: 40px;
}

.add-card-page .add-card-block .description-block svg
{
  margin: 0 15px;
  display: inline-block;
  vertical-align: middle;
}

.add-card-page .add-card-block .description-block svg:first-child
{
  width: 60px;
}

.add-card-page .add-card-block .form-card h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.add-card-page .add-card-block .form-card .col-line
{
  margin-bottom: 20px;
}

.add-card-page .add-card-block .form-card .col-line label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  padding-left: 20px;
  margin-bottom: 5px;
  display: block;
}

.add-card-page .add-card-block .btn-block
{
  text-align: center;
  padding-top: 10px;
}

.add-card-page .add-card-block .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.add-card-page .card-block-verification .info-text h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin: 40px 0 25px;
}

.add-card-page .card-block-verification .info-text p,
.add-card-page .card-block-verification .info-text li
{
  font-family: Arial;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
  margin-top: 0;
  margin-bottom: 20px;
}

.add-card-page .card-block-verification .info-text ul li
{
  margin-bottom: 0;
  position: relative;
  padding-left: 20px;
  list-style-type: none;
}

.add-card-page .card-block-verification .info-text ul li:before
{
  position: absolute;
  content: "";
  width: 5px;
  height: 5px;
  background: #B2B2B2;
  left: 0;
  top: 7px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.add-card-page .card-block-verification .info-text ul
{
  padding-left: 0;
  margin-bottom: 20px;
}

.add-card-page .card-block-verification .info-text p span
{
  color: #ffffff;
}

.add-card-page .card-block-verification .instruction-text p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
  margin-bottom: 10px;
}

.add-card-page .card-block-verification .instruction-text span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #B2B2B2;
}

.add-card-page .card-block-verification .instruction-text .content-row
{
  margin-bottom: 20px;
}

.add-card-page .card-block-verification .instruction-text .content-row .text
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.add-card-page .card-block-verification .instruction-text .content-row .row-line
{
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
}

.add-card-page .card-block-verification .instruction-text .content-row .row-line > div
{
  padding-left: 10px;
  padding-right: 10px;
}

.add-card-page .card-block-verification .instruction-text
{
  margin-bottom: 40px;
}

.add-card-page .card-block-verification .instruction-text .content-row .row-line > div svg
{
  max-width: 100%;
  height: auto;
  display: block;
}

.add-card-page .card-block-verification .download-card
{
  background: #242424;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.add-card-page .card-block-verification .download-card .btn-wrap .span-wrapper
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  padding: 12px 20px;
}

.add-card-page .card-block-verification .btn-block
{
  text-align: center;
  margin-top: 40px;
}

.add-card-page .card-block-verification .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 15px 40px 16px;
}

.light-theme .add-card-page
{
  background: #F7F6FB;
}

.light-theme .add-card-page .add-card-block .form-card h3,
.light-theme .add-card-page .card-block-verification .info-text h3,
.light-theme .add-card-page .card-block-verification .info-text p span
{
  color: #000000;
}

.light-theme .add-card-page .card-block-verification .instruction-text p
{
  color: #989898;
}

.light-theme .add-card-page .card-block-verification .download-card
{
  background: #ffffff;
}

.light-theme .add-card-page .card-block-verification .download-card .btn-wrap .span-wrapper
{
  background: transparent;
}

.light-theme .add-card-page .card-block-verification .download-card .btn-wrap .span-wrapper:focus
{
  border-color: #000000 !important;
  color: #000000 !important;
}
</style>
