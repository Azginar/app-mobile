<template>
  <div class="finance-page">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToDepositIndex"
      />
    </div>
    <deposit-method :payment-methods="LOCAL_DEPOSIT_DATA" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import DepositMethod from '../../components/finance/depositMethod'
const { mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    'deposit-method': DepositMethod
  },
  middleware: ['redirect', 'check-auth', 'auth'],
  computed: {
    ...mapState([
      'LOCAL_DEPOSIT_DATA'
    ])
  },
  methods: {
    goToDepositIndex () {
      this.$router.push('/deposit/index')
    }
  }
}
</script>
<style>
.finance-page
{
  padding: 40px 20px 80px;
}

.finance-page .go-back-button
{
  margin-bottom: 40px;
}

.bank-card-block .block-card .wrapper-img
{
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
}

.bank-card-block .block-card .wrapper-img img
{

}

.bank-card-block .block-card .info-text p
{
  margin-bottom: 5px;
}

.bank-card-block .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.light-theme .depositMethod h3
{
  color: #000000;
}
</style>
