<template>
  <div class="affiliate-campaign-page">
    <div class="content-container">
      <div class="filter-container">
        <div class="period-button">
          <div class="filter-block">
            <default-button
              :label="selectedPeriod"
              :type="'trans-button'"
              :click-event="goToPeriodPage"
            />
          </div>
        </div>
      </div>
      <partners-card :partners-card-data="GET_CAMPAIGN_DATE" />
      <div class="btn-block">
        <default-button
          label="Create new campaign"
          type="trans-button"
          :click-event="()=>{}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import partnersCard from '@/components/affiliate/partner-card'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import { GET_SELECTED_PERIOD_LABEL_CAMPAIGN } from '@/modules/affiliate/getter-types'
const { mapGetters } = createNamespacedHelpers('affiliate')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'partners-card': partnersCard
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_CAMPAIGN_DATE',
      'GET_SELECTED_PERIOD_LABEL_CAMPAIGN'
    ]),
    selectedPeriod () {
      return this[GET_SELECTED_PERIOD_LABEL_CAMPAIGN]
    }
  },
  methods: {
    goToPeriodPage () {
      this.$router.push('/affiliate/filter-campaign')
    }
  }
}
</script>
<style>
.affiliate-campaign-page .content-container
{
  padding: 0 20px 80px;
}

.affiliate-campaign-page .partners-card-block
{
  margin-top: 40px;
}

.affiliate-campaign-page .filter-container
{
  margin-bottom: 20px;
}

.affiliate-campaign-page .filter-block .trans-button
{
  min-width: 182px;
  padding: 13px 40px 11px 20px;
  text-align: left;
  position: relative;
}

.affiliate-campaign-page .filter-block .trans-button:before {
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

.affiliate-campaign-page .partners-card-block .partners-card h5
{
  font-size: 12px;
  line-height: 15px;
}

.affiliate-campaign-page .btn-block
{
  text-align: center;
  margin-top: -40px;
}

.affiliate-campaign-page .btn-block button
{
  padding-left: 20px;
  padding-right: 20px;
}
</style>
