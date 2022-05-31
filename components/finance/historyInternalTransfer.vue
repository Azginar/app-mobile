<template>
  <div class="history-transaction">
    <div v-for="row in historyTable" :key="row.title" class="block-card">
      <div class="text-right">
        {{ row.id }}
      </div>
      <div class="col-line">
        <p>Date</p>
        <span>{{ row.date }}</span>
      </div>
      <div class="col-line col-line-width">
        <p>Source account</p>
        <span>{{ row.accountSource }} (<b>- {{ row.accountSourceAmount }}</b>)</span>
      </div>
      <div class="col-line col-line-width">
        <p>Destination account</p>
        <span>{{ row.accountDestination }} (<b>+ {{ row.accountDestinationAmount }}</b>)</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HistoryInternalTransfer',
  props: {
    historyTable: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.history-transaction
{
  margin-bottom: 50px;
}

.history-transaction .block-card
{
  padding: 20px 20px 10px;
  text-decoration: none;
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.history-transaction .block-card > .col-line
{
  width: 50%;
  margin-bottom: 10px;
}

.history-transaction .block-card > .col-line-width
{
  width: 100%;
}

.history-transaction .block-card > .col-line b
{
  color: #ffffff;
}

.history-transaction .block-card p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #737373;
  text-transform: uppercase;
}

.history-transaction .block-card span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 120%;
  text-transform: uppercase;
  color: #B2B2B2;
  display: block;
}

.history-transaction .block-card .text-right
{
  font-family: Montserrat;
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.history-transaction .arrow-right
{
  position: absolute;
  right: 20px;
  bottom: 13px;
}

.light-theme .history-transaction .block-card
{
  background: #ffffff;
}

.light-theme .history-transaction .block-card > .col-line b
{
  color: #000000;
}

.light-theme .history-transaction .block-card span
{
  color: #989898;
}
</style>
