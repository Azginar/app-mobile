<template>
  <div class="custom-filter-period-container">
    <with-close-ic-header :go-back="goBack">
      <template v-slot:name>
        <div />
      </template>
    </with-close-ic-header>
    <div class="date-range-container">
      <custom-date-range-picker
        :update-range-in-store="updateCustomFilterPeriod"
      />
    </div>
    <div class="ok-button-container container">
      <div class="ok-button-wrapper">
        <default-button
          :label="'OK'"
          :click-event="handleSelectedPeriod"
          :type="'red-button'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import CustomDateRangePicker from '@/components/account/custom-date-range-picker'

import { UPDATE_CUSTOM_FILTER_PERIOD_REFERRALS } from '@/modules/affiliate/mutation-types'

const { mapActions } = createNamespacedHelpers('affiliate')
export default {
  layout: 'NoLayout',
  components: {
    WithCloseIcHeader,
    CustomDateRangePicker
  },
  methods: {
    ...mapActions({
      updateCustomFilterPeriod: UPDATE_CUSTOM_FILTER_PERIOD_REFERRALS
    }),
    goBack () {
      this.$router.back()
    },
    handleSelectedPeriod () {
      this.$router.push('/affiliate/referrals')
    }
  }
}
</script>
<style>
.custom-filter-period-container .custom-period-date-view {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.custom-filter-period-container .custom-period-date-view .input-wrapper {
  display: block;
  width: 40%;
}

.custom-filter-period-container .ok-button-container {
  display: flex;
  margin-top: 400px;
  justify-content: center;
}

.custom-filter-period-container .ok-button-wrapper {
  display: block;
}

.light-theme .custom-filter-period-container
{
  background: #F7F6FB;
  min-height: 100vh;
}

</style>
