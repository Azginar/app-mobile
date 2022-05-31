<template>
  <div class="affiliate-referrals-page">
    <div class="content-container">
      <div class="button-container">
        <div class="button-wrapper">
          <div class="filter-block">
            <default-button
              :label="'Filter'"
              :type="'trans-button'"
              :click-event="goToFilterPage"
            />
          </div>
        </div>
        <div class="button-wrapper">
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
      <div class="row-line-period">
        <div class="col-line">
          <p>Period</p>
          <span v-if="isSelectedCustomRange">{{ customStartDate }} - {{ customEndDate }}</span>
          <span v-else>{{ GET_SELECTED_REFERRALS_PERIOD_FILTER }}</span>
        </div>
        <div class="col-line">
          <p>Type</p>
          <span>{{ GET_SELECTED_REFERRALS_FILTERING }}</span>
        </div>
      </div>
      <accordion id="accordion-referrals" :content="GET_COMMISSION_DATA_REF" :function-open="SET_ACTIVE_ITEM_ACCORDION" />
      <h3>Referrals</h3>
      <div class="btn-block-with-text">
        <default-button-with-switch
          :type="'trans-button'"
          :label="'View only active'"
        />
      </div>
      <accordion-ref id="accordion-ref" :content="GET_AFFILIATE_REF" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import accordion from '@/components/affiliate/accordion-commission'
import accordionRef from '@/components/affiliate/accordion-commission-ref'
import SearchIc from '@/assets/search-ic.svg'
import DefaultButtonWithSwitch from '@/components/default-button-with-text'
import { CUSTOM_PERIOD } from '@/modules/accounts/constants'
const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    accordion,
    SearchIc,
    accordionRef,
    'default-button-with-switch': DefaultButtonWithSwitch
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  data () {
    return {
      textShow: false
    }
  },
  computed: {
    ...mapGetters([
      'GET_COMMISSION_DATA_REF',
      'GET_AFFILIATE_REF',
      'GET_REFERRALS_FILTERING_AFFILIATE',
      'GET_REFERRALS_FILTER_LABELS',
      'GET_SELECTED_REFERRALS_FILTERING',
      'GET_SELECTED_REFERRALS_PERIOD_FILTER',
      'GET_CUSTOM_PERIOD_RANGE_REFERRALS',
      'GET_SELECTED_CUSTOM_FILTERING'
    ]),
    labelForSelectedPeriodRange () {
      return this.GET_REFERRALS_FILTERING_AFFILIATE[this.GET_SELECTED_REFERRALS_FILTERING]
    },
    isSelectedCustomRange () {
      return this.GET_SELECTED_CUSTOM_FILTERING === CUSTOM_PERIOD
    },
    customStartDate () {
      return this.GET_CUSTOM_PERIOD_RANGE_REFERRALS.start
    },
    customEndDate () {
      return this.GET_CUSTOM_PERIOD_RANGE_REFERRALS.end
    }
  },
  methods: {
    ...mapActions([
      'SET_ACTIVE_ITEM_ACCORDION'
    ]),
    toggleButtonHandler () {
      this.textShow = !this.textShow
    },
    goToFilterPage () {
      this.$router.push('/affiliate/filter-referrals')
    }
  }
}
</script>
<style>
.affiliate-referrals-page .content-container
{
  padding: 0 20px 80px;
}

.affiliate-referrals-page h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.affiliate-referrals-page .row-line-period
{
  display: flex;
  margin-bottom: 20px;
}

.affiliate-referrals-page .row-line-period .col-line
{
  margin-right: 20px;
}

.affiliate-referrals-page .row-line-period .col-line:last-child
{
  margin-right: 0;
}

.affiliate-referrals-page .row-line-period .col-line p
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

.affiliate-referrals-page .row-line-period .col-line span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B2B2B2;
}

.affiliate-referrals-page .btn-block-with-text
{
  margin-bottom: 20px;
}

.affiliate-referrals-page .button-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
}

.affiliate-referrals-page .button-wrapper {
  display: block;
}

.affiliate-referrals-page .history-query-info-container {
  display: flex;
  padding-top: 20px;
  margin-bottom: 20px;
}

.affiliate-referrals-page .button-wrapper .filter-block
{
  position: relative;
}

.affiliate-referrals-page .button-wrapper .filter-block:before,
.affiliate-referrals-page .button-wrapper .filter-block:after,
.affiliate-referrals-page .button-wrapper .filter-block button:before
{
  position: absolute;
  content: "";
  right: 20px;
  width: 4px;
  height: 4px;
  background: #737373;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.affiliate-referrals-page .button-wrapper .filter-block:before
{
  top: 12px;
}

.affiliate-referrals-page .button-wrapper .filter-block:after
{
  top: 24px;
}

.affiliate-referrals-page .button-wrapper .filter-block button:before
{
  top: 18px;
  right: 20px;
}

.affiliate-referrals-page .button-wrapper .filter-block .trans-button
{
  padding: 13px 20px 12px;
  width: 180px;
  text-align: left;
}

.affiliate-referrals-page .button-wrapper .search-block
{
  position: relative;
}

.affiliate-referrals-page .button-wrapper .search-block .trans-button
{
  padding: 13px 20px 12px 48px;
}

.affiliate-referrals-page .button-wrapper .search-block .ic
{
  position: absolute;
  left: 20px;
  top: 12px;
}

.affiliate-referrals-page .button-wrapper .filter-block .button-wrapper:first-child
{
  margin-right: 20px;
}

.affiliate-referrals-page .history-query-info-container {
  width: 100%;
  display: flex;
  padding-top: 20px;
}
.affiliate-referrals-page .history-query-info-wrapper {
  display: block;
}
.affiliate-referrals-page :not(.all-selected) .history-query-info-wrapper  p:nth-child(2) {
  padding-top: 5px;
}

.light-theme .affiliate-referrals-page .row-line-period .col-line span
{
  color: #989898;
}

.light-theme .affiliate-referrals-page h3
{
  color: #000000;
}
@media (max-width: 340px) {
  .affiliate-referrals-page .button-wrapper .filter-block .trans-button
  {
    width: 150px;
  }
}
</style>
