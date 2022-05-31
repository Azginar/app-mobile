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
import { UPDATE_CUSTOM_FILTER_PERIOD } from '@/modules/accounts/constants'
import CustomDateRangePicker from '../../components/account/custom-date-range-picker'

const { mapActions } = createNamespacedHelpers('accounts')
export default {
  components: {
    WithCloseIcHeader,
    CustomDateRangePicker
  },
  methods: {
    ...mapActions({
      updateCustomFilterPeriod: UPDATE_CUSTOM_FILTER_PERIOD
    }),
    goBack () {
      this.$router.back()
    },
    handleSelectedPeriod () {
      this.$router.push('/accounts/history?login=69868&server=40')
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
</style>
