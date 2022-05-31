<template>
  <div class="column-wrapper">
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
        <p>Leverage</p>
        <span>
          {{ leverage }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Trader's commission</p>
        <span>
          {{ tradersCommission }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Investors</p>
        <span>
          {{ investors }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeftColumn',
  props: {
    traderAccount: {
      type: String,
      default: ' - '
    },
    leverage: {
      type: String,
      default: ''
    },
    tradersCommission: {
      type: String,
      default: ''
    },
    investors: {
      type: Number,
      default: 0
    }
  }
}
</script>
