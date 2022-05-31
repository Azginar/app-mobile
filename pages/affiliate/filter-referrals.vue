<template>
  <div class="filter-history">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3>Filter referrals</h3>
      </template>
    </with-close-ic-header>
    <div class="filter-history-setup-container container">
      <h4>Period</h4>
      <div class="filter-history-period-container">
        <filter-button
          :selected="orderPeriodFiltering['TODAY']"
          :click-button="() => updateOrderPeriodFilter('TODAY')"
          :label="'today'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['YESTERDAY']"
          :click-button="() => updateOrderPeriodFilter('YESTERDAY')"
          :label="'yesterday'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['LAST_7_DAYS']"
          :click-button="() => updateOrderPeriodFilter('LAST_7_DAYS')"
          :label="'last 7 days'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['LAST_30_DAYS']"
          :click-button="() => updateOrderPeriodFilter('LAST_30_DAYS')"
          :label="'last 30 days'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['THIS_MONTH']"
          :click-button="() => updateOrderPeriodFilter('THIS_MONTH')"
          :label="'this month'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['PREVIOUS_MONTH']"
          :click-button="() => updateOrderPeriodFilter('PREVIOUS_MONTH')"
          :label="'previous month'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['CUSTOM_PERIOD']"
          :click-button="handleSelectCustomPeriod"
          :label="'custom period'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
      </div>
      <h4>Type</h4>
      <div class="filter-history-type-container ">
        <filter-button
          :selected="orderFiltering['ALL']"
          :click-button="() => updateOrderTypeFilter('ALL')"
          :label="'All'"
        >
          <template v-slot:icon>
            <IconCheck />
          </template>
        </filter-button>
        <filter-button
          :selected="orderFiltering['DIRECT_REFERRALS']"
          :click-button="() => updateOrderTypeFilter('DIRECT_REFERRALS')"
          :label="'DIRECT REFERRALS'"
        >
          <template v-slot:icon>
            <IconCheck />
          </template>
        </filter-button>
        <filter-button
          :selected="orderFiltering['SUB_IB']"
          :click-button="() => updateOrderTypeFilter('SUB_IB')"
          :label="'SUB-IBs'"
        >
          <template v-slot:icon>
            <IconCheck />
          </template>
        </filter-button>
      </div>
      <form-button-with-wrap
        :click-event="handleSelectFilters"
      />
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import FilterButton from '@/components/account/filter-button'
import FormButtonWithWrap from '@/components/form-button-with-wrap'
import { CUSTOM_PERIOD } from '@/modules/affiliate/constants'
import IconCheck from '@/assets/iconCheck.svg'
import EllipseIcon from '@/assets/elipse.svg'
import { GET_REFERRALS_FILTERING, GET_REFERRALS_PERIOD_FILTERING } from '@/modules/affiliate/getter-types'
import { UPDATE_REFERRALS_TYPE_FILTER, UPDATE_REFERRALS_PERIOD_FILTER } from '@/modules/affiliate/mutation-types'

const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  layout: 'NoLayout',
  components: {
    IconCheck,
    EllipseIcon,
    WithCloseIcHeader,
    FilterButton,
    FormButtonWithWrap
  },
  computed: {
    ...mapGetters({
      orderFiltering: GET_REFERRALS_FILTERING,
      orderPeriodFiltering: GET_REFERRALS_PERIOD_FILTERING
    })
  },
  methods: {
    ...mapActions({
      updateOrderTypeFilter: UPDATE_REFERRALS_TYPE_FILTER,
      updateOrderPeriodFilter: UPDATE_REFERRALS_PERIOD_FILTER
    }),
    handleSelectFilters () {
      this.$router.back()
    },
    handleSelectCustomPeriod () {
      this.updateOrderPeriodFilter(CUSTOM_PERIOD)
      this.$router.push('/affiliate/custom-filter-referrals')
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.filter-history-setup-container {

}

.filter-history-setup-container .ok-button-container {
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;
}
.filter-history-setup-container .ok-button-wrapper {
  display: block;
}

.filter-history-setup-container .ok-button-wrapper button
{
  padding-top: 17px;
  padding-bottom: 17px;
  font-size: 15px;
  line-height: 14px;
}

.filter-history-setup-container .with-margin {
  margin-left: 5px;
}

.filter-history-setup-container h4{
  font-family: Montserrat,serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0;
  text-align: left;
  color: white;
}

.filter-history-type-container h4{
  padding-bottom: 20px;
}
.filter-history-period-container,
.filter-history-type-container {
  margin-top: 20px;
  margin-bottom: 40px;
}

.filter-history-type-container  .filter-button-component:last-child .text-block
{
  text-transform: none;
}

.light-theme .filter-history-setup-container h4
{
  color: #000000;
}

.light-theme .filter-history
{
  background: #F7F6FB;
}

</style>
