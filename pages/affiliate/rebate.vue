<template>
  <div class="affiliate-rebate-page">
    <div class="content-container">
      <div class="percentage-control">
        <p>Set the percentage for each account type:</p>
        <div class="control-block">
          <div>
            <label>START (micro)</label>
            <button-percent :value="GET_REBATE_START_MICRO_PERCENT.percentCurrent" :percent-old="GET_REBATE_START_MICRO_PERCENT.percentOld" :change-date="SET_REBATE_START_MICRO_PERCENT" />
          </div>
          <div>
            <label>ECN CLASSIC</label>
            <button-percent :value="GET_REBATE_ECN_CLASSIC_PERCENT.percentCurrent" :percent-old="GET_REBATE_ECN_CLASSIC_PERCENT.percentOld" :change-date="SET_REBATE_ECN_CLASSIC_PERCENT" />
          </div>
          <div>
            <label>ECN PRO</label>
            <button-percent :value="GET_REBATE_ECN_PRO_PERCENT.percentCurrent" :percent-old="GET_REBATE_ECN_PRO_PERCENT.percentOld" :change-date="SET_REBATE_ECN_PRO_PERCENT" />
          </div>
        </div>
      </div>
      <div class="filter-container">
        <div class="period-button">
          <div class="filter-block">
            <default-button
              :label="selectedPeriod"
              :type="'trans-button'"
              :click-event="goToPeriodPage"
            />
          </div>
          <div class="search-block">
            <SearchIc class="ic" />
            <default-button
              :label="'Search'"
              :type="'trans-button'"
              :click-event="()=>{}"
            />
          </div>
        </div>
      </div>
      <rebate-card :rebate-card-data="GET_REBATE_CARD_DATA" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import ButtonPercent from '@/components/affiliate/button-percent'
import RebateCard from '@/components/affiliate/rebate-card'
import SearchIc from '@/assets/search-ic.svg'
import { GET_SELECTED_REFERRALS_LABEL_REBATE } from '@/modules/affiliate/getter-types'
const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'button-percent': ButtonPercent,
    'rebate-card': RebateCard,
    SearchIc
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_REBATE_START_MICRO_PERCENT',
      'GET_REBATE_ECN_CLASSIC_PERCENT',
      'GET_REBATE_ECN_PRO_PERCENT',
      'GET_REBATE_CARD_DATA',
      'GET_CAMPAIGN_DATE',
      'GET_SELECTED_REFERRALS_LABEL_REBATE'
    ]),
    selectedPeriod () {
      return this[GET_SELECTED_REFERRALS_LABEL_REBATE]
    }
  },
  methods: {
    ...mapActions([
      'SET_REBATE_START_MICRO_PERCENT',
      'SET_REBATE_ECN_CLASSIC_PERCENT',
      'SET_REBATE_ECN_PRO_PERCENT'
    ]),
    goToPeriodPage () {
      this.$router.push('/affiliate/filter-rebate')
    }
  }
}
</script>
<style>
.affiliate-rebate-page .content-container
{
  padding: 0 20px 80px;
}

.affiliate-rebate-page .percentage-control p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
  margin-bottom: 20px;
}

.affiliate-rebate-page .percentage-control .control-block
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.affiliate-rebate-page .percentage-control .control-block > div
{
  margin-right: 40px;
  margin-bottom: 20px;
}

.affiliate-rebate-page .percentage-control .control-block> div:last-child
{
  margin-right: 0;
}

.affiliate-rebate-page .percentage-control .control-block label
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 5px;
}

.affiliate-rebate-page .period-button
{
  display: flex;
  justify-content: space-between;
}

.affiliate-rebate-page .period-button > div
{
  margin-bottom: 20px;
}

.affiliate-rebate-page .filter-container
{
}

.affiliate-rebate-page .filter-block .trans-button
{
  min-width: 182px;
  padding: 13px 40px 11px 20px;
  text-align: left;
  position: relative;
}

.affiliate-rebate-page .filter-block .trans-button:before {
  display: block;
  position: absolute;
  top: 13px;
  right: 20px;
  bottom: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-right: 1px solid #737373;
  border-bottom: 1px solid #737373;
  transform: translateY(-2px) rotate(45deg);
  transition: transform 0.2s ease;
}

.affiliate-rebate-page .search-block
{
  position: relative;
}

.affiliate-rebate-page .search-block .trans-button
{
  padding: 13px 20px 12px 48px;
}

.affiliate-rebate-page .search-block .ic
{
  position: absolute;
  left: 20px;
  top: 12px;
}

@media (max-width: 350px) {
  .affiliate-rebate-page .period-button
  {
    flex-wrap: wrap;
  }
}
</style>
