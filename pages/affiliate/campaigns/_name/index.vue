<template>
  <div class="affiliate-campaign-vue">
    <div class="content-container">
      <div class="go-back-button">
        <back-button
          :type="'back-button'"
          :label="'Back'"
          :click-event="goBack"
        />
      </div>
      <h2>Affiliate campaign<br><span v-if="GET_CAMPAIGN_DATE_BY_SLUG">{{ GET_CAMPAIGN_DATE_BY_SLUG }}</span><span v-if="GET_CAMPAIGN_STATUS_BY_SLUG" :class="GET_CAMPAIGN_STATUS_BY_SLUG">{{ GET_CAMPAIGN_STATUS_BY_SLUG }}</span></h2>
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
          <span v-else>{{ GET_SELECTED_PERIOD_DATE_CAMPAIGN_IN_LABELS }}</span>
        </div>
        <div class="col-line">
          <p>Type</p>
          <span>{{ GET_SELECTED_PARAMETER_CAMPAIGN_IN_LABELS }}</span>
        </div>
      </div>
      <accordion id="accordion-information" :content="GET_INFORMATION_CAMPAIGN" :function-open="SET_ACTIVE_ITEM_INFO_CAMPAIGN" />
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
import { CHANGE_CAMPAIGN_NAME } from '@/modules/affiliate/mutation-types'
const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  layout: 'NoLayout',
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
      'GET_INFORMATION_CAMPAIGN',
      'GET_AFFILIATE_REF',
      'GET_SELECTED_PARAMETER_CAMPAIGN_IN_LABELS',
      'GET_SELECTED_PERIOD_DATE_CAMPAIGN_IN_LABELS',
      'GET_CUSTOM_PERIOD_CAMPAIGN_VIEW',
      'GET_SELECTED_CAMPAIGN_PERIOD_DATE',
      'GET_CAMPAIGN_DATE_BY_SLUG',
      'GET_CAMPAIGN_STATUS_BY_SLUG'
    ]),
    isSelectedCustomRange () {
      return this.GET_SELECTED_CAMPAIGN_PERIOD_DATE === CUSTOM_PERIOD
    },
    customStartDate () {
      return this.GET_CUSTOM_PERIOD_CAMPAIGN_VIEW.start
    },
    customEndDate () {
      return this.GET_CUSTOM_PERIOD_CAMPAIGN_VIEW.end
    }
  },
  mounted () {
    this[CHANGE_CAMPAIGN_NAME](this.$route.params.name)
  },
  methods: {
    ...mapActions([
      'CHANGE_CAMPAIGN_NAME',
      'SET_ACTIVE_ITEM_INFO_CAMPAIGN'
    ]),
    toggleButtonHandler () {
      this.textShow = !this.textShow
    },
    goToFilterPage () {
      this.$router.push(`/affiliate/campaigns/${this.$route.params.name}/filter-parameter`)
    },
    goBack () {
      this.$router.push('/affiliate/campaign')
    }
  }
}
</script>
<style>
.affiliate-campaign-vue
{
  background: #F7F6FB;
}

.affiliate-campaign-vue .content-container
{
  padding: 40px 20px 80px;
}

.affiliate-campaign-vue .go-back-button
{
  margin-bottom: 40px;
}

.affiliate-campaign-vue h2
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #B2B2B2;
  margin-bottom: 90px;
}

.affiliate-campaign-vue h2 span
{
  color: #ffffff;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

.affiliate-campaign-vue h2 span.active
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  margin-bottom: -2px;
  text-transform: uppercase;
  background: #242424;
  color: #8DC640 !important;
  display: inline-block;
  vertical-align: middle;
  padding: 3px 5px 4px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.affiliate-campaign-vue h2 span.inactive
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  margin-bottom: -2px;
  text-transform: uppercase;
  background: #242424;
  color: #D2AC75 !important;
  display: inline-block;
  vertical-align: middle;
  padding: 3px 5px 4px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.affiliate-campaign-vue h3
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.affiliate-campaign-vue .row-line-period
{
  display: flex;
  margin-bottom: 20px;
}

.affiliate-campaign-vue .row-line-period .col-line
{
  margin-right: 20px;
}

.affiliate-campaign-vue .row-line-period .col-line:last-child
{
  margin-right: 0;
}

.affiliate-campaign-vue .row-line-period .col-line p
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

.affiliate-campaign-vue .row-line-period .col-line span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B2B2B2;
}

.affiliate-campaign-vue .btn-block-with-text
{
  text-align: center;
  margin-bottom: 20px;
}

.affiliate-campaign-vue .button-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
}

.affiliate-campaign-vue .button-wrapper {
  display: block;
}

.affiliate-campaign-vue .history-query-info-container {
  display: flex;
  padding-top: 20px;
  margin-bottom: 20px;
}

.affiliate-campaign-vue .button-wrapper .filter-block
{
  position: relative;
}

.affiliate-campaign-vue .button-wrapper .filter-block:before,
.affiliate-campaign-vue .button-wrapper .filter-block:after,
.affiliate-campaign-vue .button-wrapper .filter-block button:before
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

.affiliate-campaign-vue .button-wrapper .filter-block:before
{
  top: 12px;
}

.affiliate-campaign-vue .button-wrapper .filter-block:after
{
  bottom: 12px;
}

.affiliate-campaign-vue .button-wrapper .filter-block button:before
{
  top: 18px;
  right: 20px;
}

.affiliate-campaign-vue .button-wrapper .filter-block .trans-button
{
  padding: 13px 20px 12px;
  width: 180px;
  text-align: left;
}

.affiliate-campaign-vue .button-wrapper .search-block
{
  position: relative;
}

.affiliate-campaign-vue .button-wrapper .search-block .trans-button
{
  padding: 13px 20px 12px 48px;
}

.affiliate-campaign-vue .button-wrapper .search-block .ic
{
  position: absolute;
  left: 20px;
  top: 12px;
}

.affiliate-campaign-vue .button-wrapper .filter-block .button-wrapper:first-child
{
  margin-right: 20px;
}

.affiliate-campaign-vue .history-query-info-container {
  width: 100%;
  display: flex;
  padding-top: 20px;
}
.affiliate-campaign-vue .history-query-info-wrapper {
  display: block;
}
.affiliate-campaign-vue :not(.all-selected) .history-query-info-wrapper  p:nth-child(2) {
  padding-top: 5px;
}

.light-theme .affiliate-campaign-vue h2,
.light-theme .affiliate-campaign-vue .row-line-period .col-line span
{
  color: #989898;
}

.light-theme .affiliate-campaign-vue h2 span,
.light-theme .affiliate-campaign-vue h3
{
  color: #000000;
}

.light-theme .affiliate-campaign-vue h2 span.active
{
  background: #ffffff;
  border: 1px solid #D4D4D4;
}

@media (max-width: 340px) {
  .affiliate-campaign-vue .button-wrapper .filter-block .trans-button
  {
    width: 150px;
  }
}
</style>
