<template>
  <div class="filter-history">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3>Filter history</h3>
      </template>
    </with-close-ic-header>
    <div class="filter-history-setup-container container">
      <h4>Type</h4>
      <div class="filter-history-period-container">
        <filter-button
          :selected="orderPeriodFiltering['DEPOSITS_HISTORY']"
          :click-button="() => updateOrderPeriodFilter('DEPOSITS_HISTORY')"
          :label="'Deposits history'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['WITHDRAWAL_HISTORY']"
          :click-button="() => updateOrderPeriodFilter('WITHDRAWAL_HISTORY')"
          :label="'Withdrawals history'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
        <filter-button
          :selected="orderPeriodFiltering['INTERNAL_TRANSFER_HISTORY']"
          :click-button="() => updateOrderPeriodFilter('INTERNAL_TRANSFER_HISTORY')"
          :label="'Internal transfers history'"
        >
          <template v-slot:icon>
            <EllipseIcon />
          </template>
        </filter-button>
      </div>

      <div class="ok-button-container">
        <div class="ok-button-wrapper">
          <default-button
            :label="'OK'"
            :click-event="handleSelectFilters"
            :type="'red-button'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import FilterButton from '@/components/account/filter-button'

import EllipseIcon from '@/assets/elipse.svg'
import { GET_FILTER_METHOD_HISTORY } from '@/modules/finance/getter-types'
import { CHANGE_FILTER_METHOD_HISTORY } from '@/modules/finance/mutation-types'

const { mapGetters, mapActions } = createNamespacedHelpers('finance')

export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    EllipseIcon,
    WithCloseIcHeader,
    FilterButton
  },
  computed: {
    ...mapGetters({
      orderPeriodFiltering: GET_FILTER_METHOD_HISTORY
    })
  },
  methods: {
    ...mapActions({
      updateOrderPeriodFilter: CHANGE_FILTER_METHOD_HISTORY
    }),
    handleSelectFilters () {
      this.$router.back()
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
  margin-bottom: 40px;
}
.filter-history-setup-container .ok-button-wrapper {
  display: block;
}

.filter-history-setup-container .ok-button-wrapper button
{
  padding-top: 17px;
  padding-bottom: 17px;
  font-size: 15px;
  line-height: 14px;;
}

.filter-history-setup-container .with-margin {
  margin-left: 5px;
}

.filter-history-setup-container h4{
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
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

.light-theme .filter-history-setup-container h4
{
  color: #000000;
}

</style>
