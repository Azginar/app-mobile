<template>
  <div class="account-control-container">
    <with-close-ic-header
      :go-back="goBackPage"
    >
      <template v-slot:name>
        <div class="order-info-images-trading-pair-container">
          <img :src="tradingPairImages[0]">
          <img :src="tradingPairImages[1]">
          <h3>EURUSD</h3>
        </div>
      </template>
    </with-close-ic-header>
    <div class="order-info-wrap-info-container container">
      <div class="column-wrapper">
        <div class="column">
          <div class="info-text">
            <two-line-info
              :label="'ticket'"
              :value="orderItem.ticket"
            />
          </div>
          <div class="info-text">
            <two-line-info
              :label="'type'"
              :value="orderItem.type"
            />
            <two-line-info
              :label="'volume'"
              :value="orderItem.volume"
            />
          </div>
          <div class="info-text">
            <div>
              <p>Open time</p>
              <p style="padding-top: 5px; margin-top: 0px">
                <span>{{ orderItem.openTime }}</span>
              </p>
              <p style="padding-top: 0px; margin-top: 0px">
                <span>{{ orderItem.openDate }}</span>
              </p>
            </div>
            <two-line-info
              :label="'Open price'"
              :value="orderItem.openPrice"
            />
          </div>
          <div class="info-text">
            <two-line-info
              :label="'stop loss'"
              :value="orderItem.stopLoss"
            />
            <two-line-info
              :label="'Take profit'"
              :value="orderItem.takeProfit"
            />
          </div>
          <div class="info-text">
            <two-line-info
              :label="'Close time'"
              :value="orderItem.closeTime"
            />
            <two-line-info
              :label="'Current price'"
              :value="orderItem.currentPrice"
            />
          </div>
          <div class="info-text">
            <two-line-info
              :label="'Spread'"
              :value="orderItem.spread"
            />
            <two-line-info
              :label="'Swap'"
              :value="orderItem.swap"
            />
          </div>
          <div class="info-text">
            <two-line-info
              :label="'Total'"
              :value="orderItem.total"
            />
            <two-line-info
              :label="'COMMISSION FEES'"
              :value="orderItem.commissionFees"
            />
          </div>
          <div class="info-text">
            <two-line-info
              :label="'Profit'"
              :value="orderItem.profit"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { GET_ORDER_ITEM } from '@/modules/accounts/constants'

import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import TwoLineInfo from '@/components/account/two-line-info'

const { mapGetters } = createNamespacedHelpers('accounts')

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    WithCloseIcHeader,
    TwoLineInfo
  },
  data () {
    return {
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ]
    }
  },
  computed: {
    ...mapGetters({
      orderItem: GET_ORDER_ITEM
    })
  },
  methods: {
    goBackPage () {
      this.$router.back()
    }
  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.order-info-images-trading-pair-container {
  display: flex;
  align-items: center;
}

.order-info-images-trading-pair-container img {
  margin: -5px 0;
  flex-shrink: 0;
}

.order-info-images-trading-pair-container h3 {
  padding-left: 10px;
  margin-bottom: 0;
}

.order-info-wrap-info-container {
  padding-bottom: 20px;
  justify-content: space-between;
  width: 100%;
}

.order-info-wrap-info-container .column-wrapper {
  display: block;
}

.order-info-wrap-info-container .column {
  display: flex;
  flex-direction: column;
}

.order-info-wrap-info-container .column > .info-text:first-child
{
  padding-top: 0;
}

.order-info-wrap-info-container .column-wrapper:first-child div:nth-child(8) > div > p:nth-child(2) > span {
  color: white;
}

.account-control-container .order-info-wrap-info-container {
  /*display: flex;
  height: 100%;
  flex-direction: row;*/
}

.order-info-wrap-info-container .info-text {
  /*display: block;*/
  display: flex;
  padding-top: 20px;
}

.order-info-wrap-info-container .info-text > div
{
  width: 50%;
}

.order-info-wrap-info-container .info-text h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 10px;
}

.order-info-wrap-info-container .info-text p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.order-info-wrap-info-container .info-text p:last-child {
  margin-bottom: 0;
  padding-top: 5px;
  text-transform: none;
}

.order-info-wrap-info-container .info-text p span {
  color: #B2B2B2;
  font-size: 18px;
}

.light-theme .order-info-images-trading-pair-container h3,
.light-theme .order-info-wrap-info-container .column-wrapper:first-child div:nth-child(8) > div > p:nth-child(2) > span
{
  color: #000000;
}

.light-theme .order-info-wrap-info-container .info-text p span
{
  color: #989898;
}

.light-theme .order-info-wrap-info-container
{
 min-height: 100vh;
}

</style>
