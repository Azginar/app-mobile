<template>
  <div>
    <div class="account-info-container container">
      <p class="header-title">
        General information
      </p>
      <div class="copy-trading-information">
        <div class="col-row">
          <div>
            <p>Copy trading information </p>
            <blockquote>
              {{ copyTradingInformation }}
            </blockquote>
          </div>
        </div>
      </div>
      <div class="trader-account-info">
        <div class="row-wrapper">
          <div>
            <left-column
              :investors="selectedTraderAccountInfo.investors"
              :traders-commission="selectedTraderAccountInfo.tradersCommission"
              :trader-account="selectedTraderAccountInfo.traderAccount"
              :leverage="selectedTraderAccountInfo.leverage"
            />
          </div>
          <div>
            <right-column
              :investors-equity="selectedTraderAccountInfo.investorsEquity"
              :equity="selectedTraderAccountInfo.equity"
              :life-span="selectedTraderAccountInfo.lifeSpan"
              :type-account="selectedTraderAccountInfo.lifeSpan"
            />
          </div>
        </div>
      </div>
      <div class="copy-trader-block black-block">
        <div>
          <div>
            <p>average monthly profitability</p>
            <span>36.33 %</span>
          </div>
        </div>
        <div>
          <default-button
            :type="'trans-button'"
            :click-event="() => $router.push('/provider/activation-of-copying')"
            :label="'COPY TRADE'"
          />
        </div>
      </div>
    </div>

    <statistics-account-block
      :available-statistics-periods="['3 MONTH']"
      :selected-statistics-period="'3 MONTH'"
      class="statistics-account-block"
      :name-stat="'Summary statistics'"
    />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import LeftColumn from '@/components/monitoring/provider-pages/left-column'
import RightColumn from '@/components/monitoring/provider-pages/right-column'
import StatisticsAccountBlock from '@/components/account/statistics-account-block'

import { GET_SELECTED_TRADER_ACCOUNT_INFO } from '@/modules/monitoring/constants'

const { mapGetters } = createNamespacedHelpers('monitoring')

export default {
  name: 'ProviderPagesAccount',
  components: {
    LeftColumn,
    RightColumn,
    StatisticsAccountBlock

  },
  props: {
    copyTradingInformation: {
      type: String,
      default: 'Сопроводительный текст от трейдера'
    }
  },
  computed: {
    ...mapGetters({
      selectedTraderAccountInfo: GET_SELECTED_TRADER_ACCOUNT_INFO
    })
  }
}
</script>
<style>

.account-info-container .copy-trader-block {
  margin-top: 20px;
  background: #1B1B1B;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.account-info-container .copy-trader-block > div > div:first-child {
  margin-right: 0;
}

.account-info-container .copy-trader-block .trans-button {
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  margin-top: 0;
  padding-left: 20px;
  padding-right: 20px;
}

.account-info-container .black-block.copy-trader-block p {
  font-size: 9px;
  line-height: 100%;
  font-weight: 600;
  color: #B2B2B2;
  text-transform: uppercase;
  font-family: Montserrat, serif;
  margin-bottom: 5px;
}

.account-info-container .black-block.copy-trader-block span {
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  display: block;
  margin-bottom: 10px;
  font-family: Montserrat, serif;
}

.account-info-container .row-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.account-info-container .column-wrapper {
  display: flex;
  flex-direction: column;
}

.account-info-container .header-title {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.account-info-container .col-row p {
  margin-top: 20px;
  /* sub */
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.account-info-container .col-row span {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
  display: block;
}

.account-info-container .col-row blockquote {
  font-family: Arial, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  color: #FFFFFF;
}

.light-theme .account-info-container .col-row span,
.light-theme .account-info-container .black-block.copy-trader-block p
{
  color: #989898;
}

.light-theme .account-info-container .col-row blockquote,
.light-theme .account-info-container .black-block.copy-trader-block span
{
  color: #000000;
}

.light-theme .account-info-container .copy-trader-block
{
  background: #ffffff;
}

.light-theme .account-info-container .copy-trader-block .trans-button
{
  background: #F7F6FB;
  border: 1px solid #D4D4D4;
}

</style>
