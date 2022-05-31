<template>
  <div class="current-orders-container">
    <order-card
      v-for="(order, index) in currentOrderList"
      :key="index"
      :type="order.type"
      :number="order.number"
      :profit="order.profit"
      :trading-pair="order.tradingPair"
      :trading-pair-images="order.tradingPairImages"
    />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CURRENT_ORDERS_LIST } from '@/modules/accounts/constants'
import OrderCard from '@/components/account/order-card'
import { GET_ACCOUNT_GENERAL_INFORMATION, LOAD_ACCOUNT_INFO } from '../../modules/accounts/constants'
const { mapState } = createNamespacedHelpers('accounts')

export default {
  name: 'CurrentOrders',
  middleware: ['redirect', 'check-auth', 'auth', 'accounts-info'],
  layout: 'AccountInfoPage',
  components: {
    OrderCard
  },
  async asyncData (ctx) {
    const generalAccountInfo = await ctx.store.getters[`accounts/${GET_ACCOUNT_GENERAL_INFORMATION}`]

    if (generalAccountInfo.login === '') {
      const { login, server } = ctx.query
      await ctx.store.dispatch(`accounts/${LOAD_ACCOUNT_INFO}`, { login, server })
    }
  },
  computed: {
    ...mapState({
      currentOrderList: CURRENT_ORDERS_LIST
    })
  }
}
</script>
<style>
.current-orders-container > .order-container-card:first-child > div
{
  margin-top: 20px;
}
</style>
