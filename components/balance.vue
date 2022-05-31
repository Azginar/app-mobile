<template>
  <div class="balance-info">
    <h3>{{ title }}</h3>
    <div v-for="row in balanceInfoData" :key="row.title" class="col-line">
      <p>{{ row.title }}</p>
      <span>{{ row.value }}</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Balance',
  props: {
    balanceInfoData: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.balance-info h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.balance-info .col-line
{
  margin-bottom: 20px;
}

.balance-info .col-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.balance-info .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}

.light-theme .balance-info h3,
.light-theme .balance-info .col-line span
{
  color: #000000;
}
</style>
