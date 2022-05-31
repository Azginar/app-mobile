<template>
  <div class="black-block">
    <h3>Finance Information</h3>
    <div class="table-row">
      <div class="col-row">
        <div>
          <p>Balance</p>
          <span>
            {{ balance }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Credit</p>
          <span>
            {{ credit }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Free margin</p>
          <span>
            {{ freeMargin }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Total profit</p>
          <span>
            {{ totalProfit }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Margin Level</p>
          <span>
            {{ marginLevel }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Equity</p>
          <span>
            {{ equity }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Floating Profit/Loss</p>
          <span>
            {{ floating }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Margin</p>
          <span>
            {{ margin }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Total swap</p>
          <span>
            {{ totalSwap }} {{ currency }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Available for withdrawal</p>
          <span>
            {{ availableForWithdrawal }} {{ currency }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FinanceInformationBlock',
  props: {
    balance: {
      type: Number,
      default: 0
    },
    credit: {
      type: Number,
      default: 0
    },
    freeMargin: {
      type: Number,
      default: 0
    },
    totalProfit: {
      type: Number,
      default: 0
    },
    marginLevel: {
      type: String,
      default: ''
    },
    equity: {
      type: Number,
      default: 0
    },
    floating: {
      type: String,
      default: ''
    },
    margin: {
      type: Number,
      default: 0
    },
    totalSwap: {
      type: Number,
      default: 0
    },
    availableForWithdrawal: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: ''
    }
  }
}
</script>
