<template>
  <div class="ticket-history-deposit-page">
    <with-close-ic-header
      :go-back="goBackPage"
    >
      <template v-slot:name>
        <div class="order-info-images-trading-pair-container">
          <h3>Deposit</h3>
        </div>
      </template>
    </with-close-ic-header>
    <div v-if="GET_DEPOSITS_HISTORY_MORE_INFO" class="ticket-block">
      <div v-for="row in GET_DEPOSITS_HISTORY_MORE_INFO" :key="row.title" class="row-line">
        <div class="col-line">
          <p>Ticket</p>
          <span>{{ row.id }}</span>
        </div>
        <div class="col-line">
          <p>Account</p>
          <span>{{ row.account }}</span>
        </div>
        <div class="col-line">
          <p>Date</p>
          <span>{{ row.date }}</span>
        </div>
        <div class="col-line">
          <p>System</p>
          <span>{{ row.system }}</span>
        </div>
        <div class="col-line">
          <p>Deposit amount</p>
          <span>{{ row.amountDeposit }}</span>
        </div>
        <div class="col-line">
          <p>Commission reimbursement</p>
          <span>{{ row.commission }}</span>
        </div>
        <div class="col-line">
          <p>Bonus</p>
          <span>{{ row.bonus }}</span>
        </div>
        <div class="col-line">
          <p>Total</p>
          <span>{{ row.total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import { CHANGE_TICKET_DEPOSIT_INFO } from '@/modules/finance/mutation-types'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    WithCloseIcHeader
  },
  computed: {
    ...mapState([
      'ID_TICKET_DEPOSIT'
    ]),
    ...mapGetters([
      'GET_DEPOSITS_HISTORY_MORE_INFO'
    ])
  },
  mounted () {
    this[CHANGE_TICKET_DEPOSIT_INFO](this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'CHANGE_TICKET_DEPOSIT_INFO'
    ]),
    goBackPage () {
      this.$router.back()
    }
  }
}
</script>
<style>
.ticket-history-deposit-page
{
  padding: 0 20px 50px;
}

.ticket-history-deposit-page .container-close-ic-header
{
  padding: 0;
}

.ticket-history-deposit-page .container-close-ic-header .header-form
{
  margin-bottom: 40px;
}

.ticket-history-deposit-page .ticket-block
{
  padding-bottom: 80px;
}

.ticket-history-deposit-page .ticket-block .row-line
{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-left: -10px;
  margin-right: -10px;
}

.ticket-history-deposit-page .ticket-block .row-line .col-line
{
  margin-bottom: 20px;
  width: 50%;
  padding-right: 10px;
  padding-left: 10px;
}

.ticket-history-deposit-page .ticket-block .row-line .col-line:first-child,
.ticket-history-deposit-page .ticket-block .row-line .col-line:nth-child(4)
{
  width: 100%;
}

.ticket-history-deposit-page .ticket-block .row-line .col-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.ticket-history-deposit-page .ticket-block .row-line .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B2B2B2;
}

.light-theme .ticket-history-deposit-page .ticket-block .row-line .col-line span
{
  color: #989898;
}
</style>
