<template>
  <div class="history-transaction-page">
    <div v-if="selectDepositHistory(SELECTED_METHOD_HISTORY_FILTER)">
      <div class="filter-history-btn">
        <div>
          <default-button
            label="Deposits history"
            type="trans-button"
            :click-event="goToFilter"
          />
        </div>
      </div>
      <history-deposit :history-table="DEPOSIT_HISTORY_DATA" />
    </div>
    <div v-else-if="selectWithdrawalHistory(SELECTED_METHOD_HISTORY_FILTER)">
      <div class="filter-history-btn">
        <div>
          <default-button
            label="Withdrawals history"
            type="trans-button"
            :click-event="goToFilter"
          />
        </div>
      </div>
      <history-withdrawal :history-table="WITHDRAWAL_HISTORY_DATA" />
    </div>
    <div v-else-if="selectInternalTransferHistory(SELECTED_METHOD_HISTORY_FILTER)">
      <div class="filter-history-btn">
        <div>
          <default-button
            label="Internal transfers history"
            type="trans-button"
            :click-event="goToFilter"
          />
        </div>
      </div>
      <history-internal-transfer :history-table="INTERNAL_TRANSFER_HISTORY_DATA" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import historyDeposit from '../../components/finance/historyDeposit'
import historyWithdrawal from '../../components/finance/historyWithdrawal'
import historyInternalTransfer from '../../components/finance/historyInternalTransfer'
const { mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'history-deposit': historyDeposit,
    'history-withdrawal': historyWithdrawal,
    'history-internal-transfer': historyInternalTransfer
  },
  computed: {
    ...mapState([
      'DEPOSIT_HISTORY_DATA',
      'WITHDRAWAL_HISTORY_DATA',
      'INTERNAL_TRANSFER_HISTORY_DATA',
      'SELECTED_METHOD_HISTORY_FILTER'
    ])
  },
  methods: {
    goToFilter () {
      this.$router.push('/transaction/filter-history')
    },
    selectDepositHistory (filterValue) {
      return filterValue === 'DEPOSITS_HISTORY'
    },
    selectWithdrawalHistory (filterValue) {
      return filterValue === 'WITHDRAWAL_HISTORY'
    },
    selectInternalTransferHistory (filterValue) {
      return filterValue === 'INTERNAL_TRANSFER_HISTORY'
    }
  }
}
</script>
<style>
.history-transaction-page
{
  padding: 0 20px 80px;
}

.history-transaction-page .filter-history-btn
{
  margin-bottom: 20px;
}

.history-transaction-page .filter-history-btn > div
{
  position: relative;
  display: inline-block;
}

.history-transaction-page .filter-history-btn > div:before,
.history-transaction-page .filter-history-btn > div:after,
.history-transaction-page .filter-history-btn > div button:before
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

.history-transaction-page .filter-history-btn > div:before
{
  top: 12px;
}

.history-transaction-page .filter-history-btn > div:after
{
  bottom: 12px;
}

.history-transaction-page .filter-history-btn > div button:before
{
  top: 17px;
  right: 19px;
}

.history-transaction-page .filter-history-btn > div button
{
  padding: 13px 34px 11px 20px;
  position: relative;
}
</style>
