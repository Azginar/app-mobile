<template>
  <div class="bitcoin-transfer-history-page">
    <history-btc :history-table="HISTORY_BTC_TRANSFER" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import HistoryBTC from '../../components/finance/historyBTC'
const { mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'history-btc': HistoryBTC
  },
  computed: {
    ...mapState([
      'HISTORY_BTC_TRANSFER'
    ])
  }
}
</script>
<style>
.bitcoin-transfer-history-page
{
  padding: 0 20px 80px;
}
</style>
