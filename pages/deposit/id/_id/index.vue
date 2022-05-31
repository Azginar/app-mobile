<template>
  <div class="finance-page finance-page-view">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToDepositIndex"
      />
    </div>
    <h3>{{ GET_TITLE_DEPOSIT_LOCAL_ELEM }}</h3>
    <payment-block v-if="ID_DEPOSIT_LOCAL" :id="$route.params.id" :payment-block-element="GET_DEPOSIT_LOCAL_ELEM_BY_ID" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_ID_DEPOSIT_LOCAL } from '../../../../modules/finance/mutation-types'
import paymentBlock from '../../../../components/finance/paymentBlock'
const { mapGetters, mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    'payment-block': paymentBlock
  },
  middleware: ['redirect', 'check-auth', 'auth'],
  computed: {
    ...mapGetters([
      'GET_DEPOSIT_LOCAL_ELEM_BY_ID',
      'GET_TITLE_DEPOSIT_LOCAL_ELEM'
    ]),
    ...mapState([
      'DEPOSIT_LOCAL_ELEM_BY_ID',
      'ID_DEPOSIT_LOCAL'
    ])
  },
  mounted () {
    this[CHANGE_ID_DEPOSIT_LOCAL](this.$route.params.id)
  },
  methods: {
    ...mapActions([CHANGE_ID_DEPOSIT_LOCAL]),
    goToDepositIndex () {
      this.$router.push('/deposit/local-deposit')
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

.finance-page-view h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}
.bank-card-block .block-card .wrapper-img
{
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
}

.bank-card-block .block-card .info-text p
{
  margin-bottom: 5px;
}

.bank-card-block .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.light-theme .finance-page-view h3
{
  color: #000000;
}
</style>
