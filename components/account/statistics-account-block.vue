<template>
  <div>
    <div class="block-with-selector">
      <h3>{{ nameStat }}</h3>
      <div class="select-trans">
        <simple-select-black
          :options="availableStatisticsPeriods"
          :handle-select="changeSelectedStatisticsPeriod"
          :selected="selectedStatisticsPeriod"
          :searchable="false"
        />
      </div>
      <span class="profit-title">Profitability</span>
    </div>
    <div class="img-container">
      <ProfitabilitySVG />
    </div>
    <div class="block-with-selector">
      <span class="profit-title">Equity / balance</span>
    </div>
    <div class="img-container">
      <EquityBalanceSVG />
    </div>
    <div class="block-with-selector">
      <span class="profit-title">Deposit utilization rate</span>
    </div>
    <div class="img-container">
      <DepositUtilizationRate />
    </div>
  </div>
</template>
<script>
import ProfitabilitySVG from '@/assets/profitability.svg'
import EquityBalanceSVG from '@/assets/EqutiBalance.svg'
import DepositUtilizationRate from '@/assets/DepositUtilizationRate.svg'
import SimpleSelectBlack from '../SimpleSelectBlack'
export default {
  name: 'StatisticsAccountBlock',
  components: {
    ProfitabilitySVG,
    EquityBalanceSVG,
    DepositUtilizationRate,
    SimpleSelectBlack
  },
  props: {
    selectedStatisticsPeriod: {
      type: String,
      default: ''
    },
    availableStatisticsPeriods: {
      type: Array,
      default: () => []
    },
    changeSelectedStatisticsPeriod: {
      type: Function,
      default: () => {}
    },
    nameStat: {
      type: String,
      default: 'Statistics'
    }
  }
}
</script>
<style>
.block-with-selector{
  padding: 20px 20px 0;
}

.block-with-selector .select-trans
{
  width: 180px;
  margin-bottom: 20px;
}

.block-with-selector .select-trans .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
}

.block-with-selector .select-trans .selector-wrapper-black .vs__selected
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 40px;
}

.img-container svg {
  padding: 0 0 15px;
  width: 100%;
  height: auto;
  display: block;
}

.block-with-selector .col-row .vs__selected {
  font-family: Montserrat,serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
}

.block-with-selector .table-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
}

.profit-title {
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #B2B2B2;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;

}

.block-with-selector .selector-wrapper-black .selector-label-black label
{
  margin-bottom: 0;
}

.light-theme .block-with-selector .select-trans .selector-wrapper-black .vs__dropdown-toggle
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

</style>
