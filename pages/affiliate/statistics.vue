<template>
  <div class="affiliate-statistic-page">
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
      <div class="graph-info">
        <div class="left-side">
          <h5>Conversion</h5>
        </div>
        <div class="right-side">
          <ul>
            <li><i class="line" /><span>Referrals</span></li>
            <li><i class="line-dashed" /><span>Visits</span></li>
          </ul>
        </div>
      </div>
      <div class="graph-img">
        <graphAffiliateStatistic1 />
      </div>
      <div class="graph-block">
        <h5>Commission</h5>
        <div class="graph-img">
          <graphAffiliateStatistic2 />
        </div>
      </div>
      <div class="graph-block">
        <h5>REFERRALS</h5>
        <div class="graph-img">
          <graphAffiliateStatistic3 />
        </div>
      </div>
      <partners-card :partners-card-data="GET_STATISTIC_DATE" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import partnersCard from '@/components/affiliate/partner-card'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import graphAffiliateStatistic1 from '@/assets/icons/graph-affiliate-statistic-1.svg'
import graphAffiliateStatistic2 from '@/assets/icons/graph-affiliate-statistic-2.svg'
import graphAffiliateStatistic3 from '@/assets/icons/graph-affiliate-statistic-3.svg'
import { GET_SELECTED_PERIOD_LABEL_STATISTIC } from '@/modules/affiliate/getter-types'
const { mapGetters } = createNamespacedHelpers('affiliate')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'partners-card': partnersCard,
    graphAffiliateStatistic1,
    graphAffiliateStatistic2,
    graphAffiliateStatistic3
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_STATISTIC_DATE',
      'GET_SELECTED_PERIOD_LABEL_STATISTIC'
    ]),
    selectedPeriod () {
      return this[GET_SELECTED_PERIOD_LABEL_STATISTIC]
    }
  },
  methods: {
    goToPeriodPage () {
      this.$router.push('/affiliate/filter-statistics')
    }
  }
}
</script>
<style>
.affiliate-statistic-page .content-container
{
  padding: 0 20px 80px;
}

.affiliate-statistic-page .graph-info h5,
.affiliate-statistic-page .graph-block h5
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 20px;
}

.affiliate-statistic-page .graph-block:last-child
{
  margin-bottom: 45px;
}

.affiliate-statistic-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: -10px;
  margin-bottom: 20px;
}

.affiliate-statistic-page .graph-info .right-side ul li
{
  margin-right: 10px;
  list-style-type: none;
}

.affiliate-statistic-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.affiliate-statistic-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.affiliate-statistic-page .graph-info .right-side ul li span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  display: inline-block;
  vertical-align: middle;
}

.affiliate-statistic-page .graph-info .right-side ul li .line
{
  width: 16px;
  height: 1px;
  margin-right: 5px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  vertical-align: middle;
  margin-bottom: -1px;
}

.affiliate-statistic-page .graph-info .right-side ul li .line-dashed
{
  width: 30px;
  height: 1px;
  margin-bottom: -2px;
  background: transparent;
  margin-right: 5px;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  display: inline-block;
  vertical-align: middle;
}

.affiliate-statistic-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: -1px;
}

.affiliate-statistic-page .graph-img
{
  margin: 0 -20px 20px;
}

.affiliate-statistic-page .graph-img svg
{
  max-width: 100%;
  width: 100%;
  height: auto;
}

.affiliate-statistic-page .partners-card-block
{
  margin-top: 40px;
}

.affiliate-statistic-page .filter-container
{
  margin-bottom: 20px;
}

.affiliate-statistic-page .filter-block .trans-button
{
  min-width: 182px;
  padding: 13px 40px 11px 20px;
  text-align: left;
  position: relative;
}

.affiliate-statistic-page .filter-block .trans-button:before {
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

.light-theme .affiliate-statistic-page .graph-info h5, .affiliate-statistic-page .graph-block h5
{
  color: #989898;
}
</style>
