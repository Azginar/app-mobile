<template>
  <div class="history-transaction">
    <NuxtLink v-for="row in historyTable" :key="row.title" :to="row.link" class="block-card" @click="handleClick">
      <div class="text-right">
        {{ row.id }}
      </div>
      <div class="col-line">
        <p>Account</p>
        <span>{{ row.account }}</span>
      </div>
      <div class="col-line">
        <p>Date</p>
        <span>{{ row.date }}</span>
      </div>
      <div class="col-line">
        <p>Deposit</p>
        <span><b>{{ row.deposit }}</b></span>
      </div>
      <div class="arrow-right">
        <ArrowRight />
      </div>
    </NuxtLink>
  </div>
</template>
<script>
import ArrowRight from '@/assets/icons/arrow-right.svg'
export default {
  name: 'HistoryDeposit',
  components: {
    ArrowRight
  },
  props: {
    historyTable: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick () {
      this.$router.push(`/transactions-history/${this.historyTable.link}`)
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
</style>
