<template>
  <div class="partners-info">
    <div v-for="row in partnersMainData" :key="row.title">
      <div class="col-row">
        <p><i>Partner status</i></p>
        <span class="status">{{ row.status }}</span>
      </div>
      <div class="col-row">
        <p><i>Affiliate UID</i></p>
        <span><i>{{ row.uid }}</i></span>
      </div>
      <div class="col-row">
        <p><i>Referral link</i></p>
        <span><i>{{ row.linkUid }}</i></span>
        <div class="btn-block">
          <default-button
            v-clipboard:copy="row.linkUid"
            :type="'trans-button'"
            :label="'COPY LINK'"
          />
        </div>
      </div>
      <div class="col-row">
        <p>Total commission sum</p>
        <span>{{ row.totalCommission }}</span>
      </div>
      <div class="col-row">
        <p>Number of current active referrals</p>
        <span>{{ row.numberReferrals }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import DefaultButton from '../default-button.vue'

Vue.use(VueClipboard)
export default {
  name: 'PartnersMainInfo',
  components: {
    'default-button': DefaultButton
  },
  props: {
    partnersMainData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.partners-info
{
  margin-bottom: 80px;
}

.partners-info .col-row
{
  margin-bottom: 20px;
}

.partners-info p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.partners-info p i
{
  color: #B2B2B2;
  font-style: normal;
}

.partners-info span
{
  font-family: Montserrat, sans-serif;
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B2B2B2;
}

.partners-info span i
{
  font-style: normal;
  color: #ffffff;
}

.partners-info .btn-block
{
  margin-top: 10px;
}

.partners-info button
{
  padding-left: 20px;
  padding-right: 20px;
}

.partners-info .status
{
  background: #E52525;
  padding: 1px 5px;
  margin-top: 1px;
  text-transform: uppercase;
  display: inline-block;
  color: #FFFFFF;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.light-theme .partners-info span i
{
  color: #000000;
}

.light-theme .partners-info span,
.light-theme .partners-info p i
{
  color: #989898;
}

.light-theme .partners-info .status
{
  color: #ffffff;
}
</style>
