<template>
  <div class="page-container">
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
      <div class="filter-button">
        <div class="filter-text">
          <default-button
            :label="'Filters'"
            :type="'trans-button'"
            :click-event="goToFilterPage"
          />
          <span>Off</span>
        </div>
      </div>
    </div>

    <div class="page-content">
      <rating-card
        v-for="(item, index) in GET_RATING_LIST"
        :key="index"
        :click-event="() => {}"
        :days="item['DAYS']"
        :user-nick-name="item['USER_NAME']"
        :avatar="item['AVATAR']"
        :account="item['ACCOUNT_NAME']"
        :percent="item['AVERAGE_MONTHLY_PROFITABILITY']"
        :investors="item['INVESTORS']"
        :equity="item['EQUITY']"
        :investors-equity="item['INVESTORS_EQUITY']"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import RatingCard from '@/components/monitoring/rating-card'
import { GET_RATING_LIST, GET_SELECTED_PERIOD_LABEL } from '@/modules/monitoring/constants'

const { mapGetters } = createNamespacedHelpers('monitoring')

export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    RatingCard
  },
  computed: {
    ...mapGetters([
      GET_RATING_LIST,
      GET_SELECTED_PERIOD_LABEL
    ]),
    selectedPeriod () {
      return this[GET_SELECTED_PERIOD_LABEL]
    }
  },
  methods: {
    goToPeriodPage () {
      this.$router.push('/monitoring/period')
    },
    goToFilterPage () {
      this.$router.push('/monitoring/filter')
    }
  }
}
</script>
<style>
.page-container {
  padding-left: 20px;
  padding-right: 20px;
}

.page-container h3 {
  color: #ffffff;
}

.filter-container {
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px;
}

.page-container .period-button .filter-block
{
  position: relative;
}

.page-container .period-button .filter-block:before,
.page-container .period-button .filter-block:after,
.page-container .period-button .filter-block button:before
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

.page-container .period-button .filter-block:before
{
  top: 12px;
}

.page-container .period-button .filter-block:after
{
  bottom: 12px;
}

.page-container .period-button .filter-block button:before
{
  top: 18px;
  right: 20px;
}

.page-container .period-button .filter-block .trans-button
{
  padding: 13px 20px 12px;
  width: 172px;
  text-align: left;
}

.page-container .filter-button .filter-text
{
  position: relative;
  display: inline-block;
}

.page-container .filter-button .filter-text span
{
  background: #242424;
  padding: 4px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  position: absolute;
  right: 14px;
  top: 11px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.page-container .filter-button .filter-text button
{
  padding-right: 58px;
  padding-left: 20px;
}

.light-theme .page-container .filter-button .filter-text span
{
  background: transparent;
  border: 1px solid #D4D4D4;
}

@media (max-width: 340px) {
  .page-container .period-button .filter-block .trans-button {
    width: 140px !important;
  }

  .filter-container {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
}

</style>
