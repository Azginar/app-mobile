<template>
  <div class="internal-transfer-page">
    <div class="row-line-transfer">
      <div class="col-line">
        <SimpleSelectBlack
          :options="SOURCE_ACCOUNT_TRANSFER"
          :handle-select="CHANGE_SOURCE_ACCOUNT_TRANSFER"
          :label="'Source account'"
          :selected="SOURCE_ACCOUNT_TRANSFER_SELECTED"
          :type="'number'"
        />
      </div>
      <div class="col-line">
        <label>Amount</label>
        <input-with-currency :type="'number'" :value="AMOUNT_TRANSFER" :handle-input="handleChangeAmountTransfer" :currency="'USD'" />
      </div>
      <div class="col-arrow">
        <icArrowTransfer />
      </div>
      <div class="col-line">
        <SimpleSelectBlack
          :options="DESTINATION_ACCOUNT_TRANSFER"
          :handle-select="CHANGE_DESTINATION_ACCOUNT_TRANSFER"
          :label="'Destination account'"
          :selected="DESTINATION_ACCOUNT_TRANSFER_SELECTED"
        />
      </div>
    </div>
    <div class="btn-block">
      <default-button
        label="CONTINUE"
        type="red-button"
        :click-event="handleTransferModal"
      />
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import SimpleSelectBlack from '../../../components/SimpleSelectBlack.vue'
import icArrowTransfer from '../../../assets/icons/arrow-transfer.svg'
import InputWithCurrency from '../../../components/input-with-currency'
import DefaultButton from '../../../components/default-button'
import {
  CHANGE_SOURCE_ACCOUNT_TRANSFER,
  CHANGE_DESTINATION_ACCOUNT_TRANSFER,
  CHANGE_AMOUNT_TRANSFER
} from '../../../modules/finance/mutation-types'
const { mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    icArrowTransfer,
    SimpleSelectBlack,
    InputWithCurrency,
    'default-button': DefaultButton
  },
  computed: {
    ...mapState([
      'SOURCE_ACCOUNT_TRANSFER',
      'SOURCE_ACCOUNT_TRANSFER_SELECTED',
      'DESTINATION_ACCOUNT_TRANSFER',
      'DESTINATION_ACCOUNT_TRANSFER_SELECTED',
      'AMOUNT_TRANSFER'
    ])
  },
  methods: {
    ...mapActions([CHANGE_SOURCE_ACCOUNT_TRANSFER, CHANGE_DESTINATION_ACCOUNT_TRANSFER, CHANGE_AMOUNT_TRANSFER]),
    handleChangeAmountTransfer (event) {
      this[CHANGE_AMOUNT_TRANSFER](event.target.value)
    },
    handleTransferModal () {
      this.$router.push('/internal-transfer/form')
    }
  }
}
</script>
<style>
.internal-transfer-page
{
  padding: 0 20px 80px;
}

.internal-transfer-page .row-line-transfer
{
  margin-bottom: 20px;
}

.internal-transfer-page .row-line-transfer .col-arrow
{
  display: block;
  text-align: center;
}

.internal-transfer-page .row-line-transfer > div
{
  margin-bottom: 20px;
}

.internal-transfer-page .row-line-transfer > div label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 97.52%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.internal-transfer-page .row-line-transfer p.text
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  align-items: center;
  height: 50px;
}

.internal-transfer-page .row-line-transfer p.text span
{
  color: #B2B2B2;
  margin-right: 6px;
}

.internal-transfer-page .btn-block
{
  text-align: center;
  margin-top: 40px;
}

.internal-transfer-page .btn-block .red-button
{
  font-size: 15px;
  line-height: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
}
</style>
