<template>
  <div class="rebate-card-block">
    <div v-for="(row, index) in rebateCardData" :key="row.title" class="rebate-card">
      <div class="referral-block">
        <div class="left-part">
          <div class="wrapper-img">
            <idFlag />
          </div>
        </div>
        <div class="right-part">
          <span class="uid">{{ row.uid }}</span>
          <h4>{{ row.fullName }}</h4>
          <div class="line">
            <p>Registered</p>
            <span>{{ row.registered }}</span>
          </div>
        </div>
      </div>
      <div v-for="(item, itemIndex) in row.data" :key="item.title" class="account-block">
        <div class="left-block">
          <h5>{{ item.account }}</h5>
          <p>{{ item.type }}</p>
        </div>
        <div class="right-block">
          <button-percent-account :id="item.account" :value="item.percent" :index="index" :item-index="itemIndex" :percent-old="item.percentOld" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idFlag from '@/assets/flags/id.svg'
import ButtonPercentAccount from '@/components/affiliate/button-percent-account'
export default {
  name: 'RebateCard',
  components: {
    idFlag,
    'button-percent-account': ButtonPercentAccount
  },
  props: {
    rebateCardData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    roleCount (key) {
      return key + 1
    }
  }
}
</script>
<style>
.rebate-card-block .rebate-card
{
  margin-bottom: 20px;
}

.rebate-card-block .rebate-card .referral-block
{
  padding: 20px;
  display: flex;
  margin-bottom: 1px;
  background: #2B2B2B;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.rebate-card-block .rebate-card .referral-block .wrapper-img
{
  width: 24px;
  height: 24px;
  margin-top: 10px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.rebate-card-block .rebate-card .referral-block .wrapper-img svg
{
  max-width: 100%;
  height: auto;
}

.rebate-card-block .rebate-card .referral-block .uid
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 2px;
}

.rebate-card-block .rebate-card .referral-block h4
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.rebate-card-block .rebate-card .referral-block p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.rebate-card-block .rebate-card .referral-block span
{
  display: block;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: #B2B2B2;
}

.rebate-card-block .rebate-card .account-block
{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2B2B2B;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.rebate-card-block .rebate-card .account-block h5
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  margin-bottom: 5px;
}

.rebate-card-block .rebate-card .account-block p
{
  display: block;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
}

.light-theme .rebate-card-block .rebate-card .referral-block,
.light-theme .rebate-card-block .rebate-card .account-block
{
  background: #ffffff;
}

.light-theme .rebate-card-block .rebate-card .referral-block h4,
.light-theme .rebate-card-block .rebate-card .account-block h5
{
  color: #000000;
}

.light-theme .rebate-card-block .rebate-card .referral-block span
{
 color: #989898;
}
</style>
