<template>
  <div class="filter-history">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3>Filter referrals</h3>
      </template>
    </with-close-ic-header>
    <div class="rating-period-container container">
      <filter-button
        :selected="isPeriodSelected('ALL_REFERRALS')"
        :click-button="() => setSelectedPeriod('ALL_REFERRALS')"
        :label="'ALL REFERRALS'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('DIRECT_REFERRALS')"
        :click-button="() => setSelectedPeriod('DIRECT_REFERRALS')"
        :label="'DIRECT REFERRALS'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('SUB_IB')"
        :click-button="() => setSelectedPeriod('SUB_IB')"
        :label="'Sub-IBs'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
    </div>

    <form-button-with-wrap
      style="margin-top: 60px"
      :click-event="() => $nuxt.$router.back()"
    />
  </div>
</template>
<script>
import FormButtonWithWrap from '@/components/form-button-with-wrap'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import EllipseIcon from '@/assets/elipse.svg'
import FilterButton from '@/components/account/filter-button'
import { createNamespacedHelpers } from 'vuex'
import { GET_REBATE_FILTER_REFERRALS } from '@/modules/affiliate/getter-types'
import { SET_SELECTED_REBATE_FILTER_REFERRALS } from '@/modules/affiliate/mutation-types'

const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  layout: 'NoLayout',
  components: {
    EllipseIcon,
    FilterButton,
    WithCloseIcHeader,
    FormButtonWithWrap
  },
  computed: {
    ...mapGetters([
      GET_REBATE_FILTER_REFERRALS
    ])
  },
  methods: {
    ...mapActions([
      SET_SELECTED_REBATE_FILTER_REFERRALS
    ]),
    goBack () {
      this.$router.back()
    },
    isPeriodSelected (period) {
      return this[GET_REBATE_FILTER_REFERRALS] === period
    },
    setSelectedPeriod (period) {
      this[SET_SELECTED_REBATE_FILTER_REFERRALS](period)
    }
  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.light-theme .filter-history
{
  background: #F7F6FB;
  min-height: 100vh;
}

</style>
