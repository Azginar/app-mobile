<template>
  <div class="trading-history-container">
    <h3>{{ title }}</h3>
    <table>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td v-if="isRowInstrument(row.type)">
            <div class="instrument-block">
              <img :src="row.images[0]">
              <img :src="row.images[1]">
              <span>{{ row.instrument }}</span>
            </div>
          </td>
          <td v-else>
            <div class="trader-block">
              <div class="avater">
                <img :src="row.images[0]">
              </div>
              <span>{{ row.nicknameTrader }}</span>
            </div>
          </td>
          <td>{{ row.status }}</td>
          <td>{{ row.profit }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-block">
      <default-button
        :type="'trans-button'"
        :label="'All trading history'"
        :click-event="() => {}"
      />
    </div>
  </div>
</template>
<script>
import DefaultButton from './default-button.vue'
export default {
  name: 'TradingHistory',
  components: {
    'default-button': DefaultButton
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    isRowInstrument (status) {
      return status === 'instruments'
    }
  }
}
</script>
<style>
.trading-history-container
{
 margin-bottom: 80px;
}
.trading-history-container h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.trading-history-container table
{
  width: 100%;
}

.trading-history-container table tr:first-child td
{
  padding-top: 0;
}

.trading-history-container table tr td
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  vertical-align: middle;
  min-height: 30px;
  padding: 6px 0;
}

.trading-history-container table tr td:first-child + td
{
  color: #737373;
}

.trading-history-container table tr td:last-child
{
  color: #B2B2B2;
  text-align: right;
  font-weight: normal;
}

.trading-history-container table tr td .instrument-block,
.trading-history-container table tr td .trader-block
{
  display: flex;
  align-items: center;
}

.trading-history-container table tr td .instrument-block span
{
  margin-left: 10px;
}

.trading-history-container table tr td .trader-block .avater
{
  width: 30px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.trading-history-container table tr td .trader-block span
{
  text-transform: none;
}

.trading-history-container table tr td .trader-block .avater img
{
  width: 100%;
}

.trading-history-container .btn-block
{
  text-align: center;
  margin-top: 30px;
}

.light-theme .trading-history-container table tr td .instrument-block span,
.light-theme .trading-history-container table tr td .trader-block span
{
  color: #000000;
}

.light-theme .trading-history-container table tr td:last-child
{
  color: #989898;
}

</style>
