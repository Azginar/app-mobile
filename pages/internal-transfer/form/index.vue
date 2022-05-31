<template>
  <div class="internal-transfer-form">
    <with-close-ic-header
      :go-back="goBackPage"
    >
      <template v-slot:name>
        <div class="order-info-images-trading-pair-container">
          <h3>Internal transfer</h3>
        </div>
      </template>
    </with-close-ic-header>
    <div class="central-part">
      <div class="bg-gradient">
        <div class="col-line">
          <div>
            <p>{{ onlyAccount(SOURCE_ACCOUNT_TRANSFER_SELECTED) }}</p>
            <span>– 20 USD</span>
          </div>
        </div>
        <div class="col-line">
          <icArrowTransfer />
        </div>
        <div class="col-line">
          <p>{{ onlyAccount(DESTINATION_ACCOUNT_TRANSFER_SELECTED) }}</p>
          <span>+ 18.08 EUR</span>
        </div>
      </div>
    </div>
    <div class="btn-block">
      <div>
        <default-button
          label="Ok"
          type="red-button"
          :click-event="goToModalSuccess"
        />
      </div>
      <div>
        <default-button
          label="Cancel"
          type="trans-button"
          :click-event="goBackPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import icArrowTransfer from '@/assets/icons/arrow-transfer.svg'
const { mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    WithCloseIcHeader,
    icArrowTransfer
  },
  computed: {
    ...mapState([
      'SOURCE_ACCOUNT_TRANSFER_SELECTED',
      'DESTINATION_ACCOUNT_TRANSFER_SELECTED'
    ])
  },
  methods: {
    goBackPage () {
      this.$router.back()
    },
    goToModalSuccess () {
      this.$router.push('/deposit/index')
    },
    onlyAccount (account) {
      const newString = account.split('/')
      return newString[0]
    }
  }
}
</script>
<style>
.internal-transfer-form
{
  padding: 0 20px 50px;
}

.internal-transfer-form .container-close-ic-header
{
  padding: 0;
}

.internal-transfer-form .container-close-ic-header .header-form
{
  margin-bottom: 80px;
}

.internal-transfer-form label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 97.52%;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
}

.internal-transfer-form .central-part
{
  margin-bottom: 40px;
}

.internal-transfer-form h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 40px;
}

.internal-transfer-form .btn-block
{
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.internal-transfer-form .btn-block > div
{
  margin-bottom: 20px;
}

.internal-transfer-form .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 16px 40px 17px;
}

.internal-transfer-form .btn-block .trans-button
{
  background: #454545;
  border-color: #454545;
}

.internal-transfer-form .bg-gradient
{
  background: linear-gradient(90deg, rgba(36, 36, 36, 0) 0%, #242424 49.48%, rgba(36, 36, 36, 0) 100%);
  padding: 40px 0 20px;
  text-align: center;
}

.internal-transfer-form .bg-gradient .col-line
{
  margin-bottom: 20px;
}

.internal-transfer-form .bg-gradient .col-arrow
{
  text-align: center;
}

.internal-transfer-form .bg-gradient p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.internal-transfer-form .bg-gradient span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
}

.light-theme .container-close-ic-header h3,
.light-theme .internal-transfer-form .bg-gradient span
{
  color: #000000;
}

.light-theme .internal-transfer-form .btn-block .trans-button
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

.light-theme .internal-transfer-form .bg-gradient
{
  background: linear-gradient(90deg, rgba(36, 36, 36, 0) 0%, #c7c7c7 49.48%, rgba(36, 36, 36, 0) 100%);
}

@media (max-width: 340px) {
  .internal-transfer-form .btn-block button
  {
    margin-right: 5px;
    margin-left: 5px;
  }
}
</style>
