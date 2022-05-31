<template>
  <div class="black-block">
    <h3>Social trading</h3>
    <div class="table-row">
      <div class="col-row">
        <div>
          <p>Attached to</p>
          <span>
            {{ attachedTo }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>TRADER ACCOUNT</p>
          <span>
            {{ traderAccount }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>TRADER's COMMISSION</p>
          <span>
            {{ tradersCommission }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Copy type</p>
          <span>
            {{ copyType }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>stop loss for Copying</p>
          <span>
            {{ stopLossForCopping }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>take PROFIT for Copying</p>
          <span>
            {{ takeProfitForCopying }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>START BALANCE</p>
          <span>
            {{ startBalance }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>CURrENT BALANCE</p>
          <span>
            {{ currentBalance }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>PROFIT of trading</p>
          <span>
            {{ profitOfTrading }}
          </span>
        </div>
      </div>

      <div class="col-row">
        <div>
          <p>TOTAL earned</p>
          <span>
            {{ totalEarned }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SocialTradingInvestorBlock',
  props: {
    attachedTo: {
      type: String,
      default: ''
    },
    traderAccount: {
      type: String,
      default: ''
    },
    tradersCommission: {
      type: String,
      default: ''
    },
    copyType: {
      type: String,
      default: ''
    },
    stopLossForCopping: {
      type: String,
      default: ''
    },
    takeProfitForCopying: {
      type: String,
      default: ''
    },
    startBalance: {
      type: String,
      default: ''
    },
    currentBalance: {
      type: String,
      default: ''
    },
    profitOfTrading: {
      type: String,
      default: ''
    },
    totalEarned: {
      type: String,
      default: ''
    }
  }
}
</script>
