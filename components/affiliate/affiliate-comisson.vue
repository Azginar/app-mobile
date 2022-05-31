<template>
  <div class="partners-commission-block">
    <div v-for="row in affiliateCommissionData" :key="row.title">
      <div class="col-row">
        <p>{{ row.title }}</p>
        <span>{{ row.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AffiliateCommission',
  props: {
    affiliateCommissionData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.partners-commission-block
{
  margin-bottom: 80px;
}

.partners-commission-block .col-row
{
  margin-bottom: 20px;
}

.partners-commission-block .col-row p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.partners-commission-block .col-row span
{
  font-family: Montserrat, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B2B2B2;
}

.light-theme .partners-commission-block .col-row span
{
  color: #989898;
}
</style>
