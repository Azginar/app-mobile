<template>
  <div class="container-transaction">
    <div v-for="row in historyTable" :key="row.title" class="block-card">
      <div class="text-right">
        {{ row.id }}
      </div>
      <div class="col-line">
        <p>Date</p>
        <p><span>{{ row.date }}</span></p>
      </div>
      <div class="col-line">
        <p>Account</p>
        <p><span>{{ row.account }}</span></p>
      </div>
      <div class="col-line">
        <p>Bitcoin purse for money transfer</p>
        <p><span>{{ row.bitcoinPurse }}</span></p>
      </div>
      <div class="col-line">
        <p>Amount</p>
        <p><span>{{ row.amount }}</span></p>
      </div>
      <div class="col-line">
        <p>Status</p>
        <div v-if="isRowStatusAccepted(row.status)" class="status-block">
          <div>
            <icStatusAccepted />
          </div>
          <div>
            <p class="statusAccepted">
              {{ row.status }}
            </p>
          </div>
        </div>
        <div v-else-if="isRowStatusNotConfirmed(row.status)" class="status-block">
          <div>
            <icStatusNotConfirmed />
          </div>
          <div>
            <p class="statusNotConfirmed">
              {{ row.status }}
            </p>
          </div>
        </div>
        <div v-else-if="isRowStatusRejected(row.status)" class="status-block">
          <div>
            <icStatusRejected />
          </div>
          <div>
            <p class="statusRejected">
              {{ row.status }}
            </p>
          </div>
        </div>
        <div v-if="isRowStatusNotConfirmed(row.status)" class="status-btn">
          <default-button
            label="Confirmed"
            type="trans-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import icStatusAccepted from '@/assets/icons/status-accepted.svg'
import icStatusRejected from '@/assets/icons/status-rejected.svg'
import icStatusNotConfirmed from '@//assets/icons/status-not-confirmed.svg'
export default {
  name: 'HistoryBTC',
  components: {
    icStatusAccepted,
    icStatusNotConfirmed,
    icStatusRejected
  },
  props: {
    historyTable: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    isRowStatusAccepted (status) {
      return status === 'accepted'
    },
    isRowStatusNotConfirmed (status) {
      return status === 'not confirmed'
    },
    isRowStatusRejected (status) {
      return status === 'rejected'
    }
  }
}
</script>
<style>
.container-transaction
{
  margin-bottom: 50px;
}

.container-transaction .block-card
{
  padding: 20px 20px 10px;
  text-decoration: none;
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-transaction .block-card > .col-line
{
  width: 50%;
  margin-bottom: 10px;
}

.container-transaction .block-card .col-line:nth-child(4)
{
  width: 100%;
}

.container-transaction .block-card .col-line:nth-child(4) span
{
  font-size: 11px;
  line-height: 120%;
  word-wrap: break-word;
}

.container-transaction .block-card p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #737373;
  text-transform: uppercase;
}

.container-transaction .block-card span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 120%;
  text-transform: uppercase;
  color: #B2B2B2;
  display: block;
}

.container-transaction .block-card .text-right
{
  font-family: Montserrat;
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-transaction .status-block
{
  display: flex;
  align-items: center;
}

.container-transaction .status-block > div:first-child
{
  margin-right: 5px;
}

.container-transaction .status-block p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.container-transaction .status-block p.statusAccepted
{
  color: #8DC640;
}

.container-transaction .status-block p.statusNotConfirmed
{
  color: #D2AC75;
  margin-right: 10px;
}

.container-transaction .status-block p.statusRejected
{
  color: #E52525;
}

.container-transaction .status-btn
{
  margin-top: 10px;
}

.container-transaction .status-btn .trans-button
{
  font-size: 12px;
  line-height: 15px;
  color: #B2B2B2;
  padding: 13px 20px 12px;
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
}

.light-theme .container-transaction .block-card
{
  background: #ffffff;
}

.light-theme .container-transaction .block-card span
{
  color: #989898;
}

.container-transaction .status-btn .trans-button
{
  color: #989898;
  background: #ffffff;
}
</style>
