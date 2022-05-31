<template>
  <div class="filter-history">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3>Period</h3>
      </template>
    </with-close-ic-header>
    <div class="rating-period-container container">
      <filter-button
        :selected="isPeriodSelected('OVERALL')"
        :click-button="() => setSelectedPeriod('OVERALL')"
        :label="'OVERALL'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('ONE_YEAR')"
        :click-button="() => setSelectedPeriod('ONE_YEAR')"
        :label="'1 year'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('SIX_MONTH')"
        :click-button="() => setSelectedPeriod('SIX_MONTH')"
        :label="'6 months'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('THREE_MONTH')"
        :click-button="() => setSelectedPeriod('THREE_MONTH')"
        :label="'3 month'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('ONE_MONTH')"
        :click-button="() => setSelectedPeriod('ONE_MONTH')"
        :label="'1 month'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('ONE_WEEK')"
        :click-button="() => setSelectedPeriod('ONE_WEEK')"
        :label="'1 week'"
      >
        <template v-slot:icon>
          <EllipseIcon />
        </template>
      </filter-button>
      <filter-button
        :selected="isPeriodSelected('CUSTOM_PERIOD')"
        :click-button="handleSelectCustomPeriod"
        :label="'custom period'"
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
import { GET_SELECTED_PERIOD_STATISTIC } from '@/modules/affiliate/getter-types'
import { SET_SELECTED_PERIOD_STATISTIC } from '@/modules/affiliate/mutation-types'

const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    EllipseIcon,
    FilterButton,
    WithCloseIcHeader,
    FormButtonWithWrap
  },
  computed: {
    ...mapGetters([
      GET_SELECTED_PERIOD_STATISTIC
    ])
  },
  methods: {
    ...mapActions([
      SET_SELECTED_PERIOD_STATISTIC
    ]),
    goBack () {
      this.$router.back()
    },
    isPeriodSelected (period) {
      return this[GET_SELECTED_PERIOD_STATISTIC] === period
    },
    setSelectedPeriod (period) {
      this[SET_SELECTED_PERIOD_STATISTIC](period)
    },
    handleSelectCustomPeriod () {
      this.setSelectedPeriod('CUSTOM_PERIOD')
      this.$router.push('/affiliate/custom-filter-period-statistics')
    }

  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

</style>
