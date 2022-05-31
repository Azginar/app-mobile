<template>
  <div>
    <div class="summary-account-container container">
      <p class="header-title">
        General information
      </p>
      <div class="main-avatar-wrapper">
        <img :src="traderSummaryInfo.avatar">
      </div>
      <blockquote class="description-text">
        Текстовка от управляющего, макс ширина 600 пикселей. Минимальный нижний отступ до окончания блока 20 пикселей
      </blockquote>
      <provider-general-information-block />
    </div>
    <statistics-account-block
      :available-statistics-periods="['3 MONTH']"
      :selected-statistics-period="'3 MONTH'"
      class="statistics-account-block"
      :name-stat="'Summary statistics'"
    />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { GET_TRADER_SUMMARY_INFO } from '@/modules/monitoring/constants'

import ProviderGeneralInformationBlock from '@/components/monitoring/provider-pages/general-information-block'
import StatisticsAccountBlock from '@/components/account/statistics-account-block'

const { mapGetters } = createNamespacedHelpers('monitoring')
export default {
  name: 'ProviderPagesSummary',
  components: {
    ProviderGeneralInformationBlock,
    StatisticsAccountBlock
  },
  computed: {
    ...mapGetters({
      traderSummaryInfo: GET_TRADER_SUMMARY_INFO
    })
  }
}
</script>
<style>
.summary-account-container .header-title {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
}

.summary-account-container .with-margin {
  margin-top: 40px;
}

.summary-account-container .main-avatar-wrapper {
  width: 100%;
  text-align: center;
  margin-top: 40px;
}

.summary-account-container .main-avatar-wrapper img {
  border-radius: 100px;
  max-width: 120px;
  height: auto;
  overflow: hidden;
}

.summary-account-container blockquote {
  margin-top: 20px;
}

.summary-account-container blockquote {
  max-width: 600px;
  font-family: Arial, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
}

.statistics-account-block {
  margin-top: 60px;
}

.statistics-account-block h3 {
  color: white;
  font-family: Montserrat, serif;
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 100%;
}

</style>
