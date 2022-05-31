<template>
  <div class="order-history-container">
    <div class="button-container container">
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
            :click-event="goToSearchPage"
          />
        </div>
      </div>
    </div>
    <div class="history-query-info-container container" :class="{'all-selected': isAllSelected}">
      <div class="history-query-info-wrapper">
        <two-line-info
          v-if="isAllSelected"
          :label="'type history'"
          :value="selectedFilters"
        />
        <div v-else>
          <p>type history</p>
          <p
            v-for="(item, index) in selectedFilters"
            :key="index"
          >
            <span v-if="isLastSelectedFilter(index, selectedFilters)">{{ item }} </span>
            <span v-else>{{ item }}, </span>
            <br>
          </p>
        </div>
      </div>
      <div class="history-query-info-wrapper">
        <div v-if="isSelectedCustomRange">
          <p>period history</p>
          <p>
            <span>{{ customStartDate }}</span> - <span>{{ customEndDate }}</span>
          </p>
        </div>
        <two-line-info
          v-else
          :label="'PERIOD HISTORY'"
          :value="labelForSelectedPeriodRange"
        />
      </div>
    </div>
    <order-card
      v-for="(order, index) in orderHistoryList"
      :key="index"
      :type="order.type"
      :number="order.number"
      :profit="order.profit"
      :trading-pair="order.tradingPair"
      :trading-pair-images="order.tradingPairImages"
    />
  </div>
</template>
<script>
import cond from 'lodash/cond'
import reduce from 'lodash/reduce'
import { createNamespacedHelpers } from 'vuex'

import TwoLineInfo from '@/components/account/two-line-info'
import OrderCard from '@/components/account/order-card'
import SearchIc from '@/assets/search-ic.svg'

import {
  CUSTOM_PERIOD,
  GET_CUSTOM_PERIOD_RANGE,
  GET_FILTER_LABELS,
  GET_ORDER_FILTERING, GET_SELECTED_PERIOD_FILTER,
  ORDER_HISTORY_LIST
} from '@/modules/accounts/constants'
import { GET_ACCOUNT_GENERAL_INFORMATION, LOAD_ACCOUNT_INFO } from '../../modules/accounts/constants'

const { mapState, mapGetters } = createNamespacedHelpers('accounts')

export default {
  name: 'History',
  layout: 'AccountInfoPage',
  middleware: ['redirect', 'check-auth', 'auth', 'accounts-info'],
  components: {
    TwoLineInfo,
    OrderCard,
    SearchIc
  },
  async asyncData (ctx) {
    const generalAccountInfo = await ctx.store.getters[`accounts/${GET_ACCOUNT_GENERAL_INFORMATION}`]

    if (generalAccountInfo.login === '') {
      const { login, server } = ctx.query
      await ctx.store.dispatch(`accounts/${LOAD_ACCOUNT_INFO}`, { login, server })
    }
  },
  computed: {
    ...mapState({
      orderHistoryList: ORDER_HISTORY_LIST
    }),
    ...mapGetters({
      orderFiltering: GET_ORDER_FILTERING,
      filterLabels: GET_FILTER_LABELS,
      customPeriodRange: GET_CUSTOM_PERIOD_RANGE,
      selectedPeriodRange: GET_SELECTED_PERIOD_FILTER
    }),
    labelForSelectedPeriodRange () {
      return this.filterLabels[this.selectedPeriodRange]
    },
    isSelectedCustomRange () {
      return this.selectedPeriodRange === CUSTOM_PERIOD
    },
    customStartDate () {
      return this.customPeriodRange.start
    },
    customEndDate () {
      return this.customPeriodRange.end
    },
    selectedFilters () {
      const isAllFilterSelected = allFilter => Object.values(allFilter).every(flag => flag === true)
      const isSomeFilterNotSelected = allFilter => Object.values(allFilter).some(flag => flag !== true)
      const allSelectedFilter = (allFilter, filterLabels) => {
        return reduce(allFilter, (result, value, key) => {
          return value ? result.concat([filterLabels[key]]) : result
        }, [])
      }
      const otherWise = () => true
      return cond([
        [isAllFilterSelected, () => 'All'],
        [isSomeFilterNotSelected, allSelectedFilter],
        [otherWise, () => '']
      ])(this.orderFiltering, this.filterLabels)
    },
    isAllSelected () {
      return Object.values(this.orderFiltering).every(flag => flag === true)
    }
  },
  methods: {
    goToFilterPage () {
      this.$router.push('/accounts/filter-history')
    },
    goToSearchPage () {
      this.$router.push('/accounts/search-by-number-ticket')
    },
    isLastSelectedFilter (index, selectedFilters) {
      return index === selectedFilters.length - 1
    }
  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.order-history-container .button-container {
  padding-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.order-history-container .button-wrapper {
  display: block;
}

.order-history-container .history-query-info-container {
  display: flex;
  padding-top: 20px;
  margin-bottom: 20px;
}

.order-history-container .button-wrapper .filter-block
{
  position: relative;
}

.order-history-container .button-wrapper .filter-block:before,
.order-history-container .button-wrapper .filter-block:after,
.order-history-container .button-wrapper .filter-block button:before
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

.order-history-container .button-wrapper .filter-block:before
{
  top: 12px;
}

.order-history-container .button-wrapper .filter-block:after
{
  bottom: 12px;
}

.order-history-container .button-wrapper .filter-block button:before
{
  top: 18px;
  right: 20px;
}

.order-history-container .button-wrapper .filter-block .trans-button
{
  padding: 13px 20px 12px;
  width: 180px;
  text-align: left;
}

.order-history-container .button-wrapper .search-block
{
  position: relative;
}

.order-history-container .button-wrapper .search-block .trans-button
{
  padding: 13px 20px 12px 48px;
}

.order-history-container .button-wrapper .search-block .ic
{
  position: absolute;
  left: 20px;
  top: 12px;
}

.order-history-container .button-wrapper .filter-block .button-wrapper:first-child
{
  margin-right: 20px;
}

.order-history-container .history-query-info-container {
  width: 100%;
  display: flex;
  padding-top: 20px;
}
.history-query-info-container.all-selected {
  width: 90%;
}
.order-history-container .history-query-info-wrapper {
  display: block;
}
.order-history-container :not(.all-selected) .history-query-info-wrapper  p:nth-child(2) {
  padding-top: 5px;
}

.order-history-container .history-query-info-wrapper p {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.order-history-container .history-query-info-wrapper:first-child > div   {
  margin-right: 20px;
}

.order-history-container .all-selected .history-query-info-wrapper p:last-child {
  margin-bottom: 0;
  padding-top: 5px;
}

.order-history-container .history-query-info-wrapper p {
  white-space: nowrap;
}

.order-history-container .history-query-info-wrapper p span {
  color: #989898;
  font-size: 14px;
  text-transform: none;
}

@media (max-width: 340px) {
  .order-history-container .button-wrapper .filter-block .trans-button
  {
    width: 150px;
  }
}
</style>
