<template>
  <div class="column-wrapper">
    <div class="col-row">
      <div>
        <p>Type ACCOUNT</p>
        <span>
          {{ typeAccount }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Lifespan</p>
        <span>
          {{ lifeSpan }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Equity</p>
        <span>
          {{ equity }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Investors' equity</p>
        <span>
          23 451.50 USD
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RightColumn',
  props: {
    typeAccount: {
      type: String,
      default: ' - '
    },
    lifeSpan: {
      type: String,
      default: ' - '
    },
    equity: {
      type: String,
      default: ' - '
    },
    investorsEquity: {
      type: String,
      default: ' - '
    }
  }
}
</script>
