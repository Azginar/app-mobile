<template>
  <div class="finance-page-local-depo-form">
    <div class="go-back-button">
      <NuxtLink :to="`/deposit/id/${$route.params.id}`">
        <back-button
          :type="'back-button'"
          :label="'Back'"
        />
      </NuxtLink>
    </div>
    <div class="two-parts">
      <div class="left-parts">
        <partner-local-depo-form v-if="GET_NAME_PARTNER" :partner-localnfo="GET_NAME_PARTNER" :link-works="$nuxt.$route.path" />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_ID_DEPOSIT_LOCAL, CHANGE_ID_PARTNER } from '@/modules/finance/mutation-types'
import partnerLocalDepoForm from '../../../../../../components/finance/partnerLocalDepoForm'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')

export default {
  layout: 'NoLayout',
  name: 'FinanceDepositMoreInfo',
  components: {
    'partner-local-depo-form': partnerLocalDepoForm
  },
  computed: {
    ...mapState([
      'RATES_AND_COMMISSION',
      'WORKING_HOURS',
      'SUPPORT_INFO_PARTNER'
    ]),
    ...mapGetters([
      'GET_TITLE_DEPOSIT_LOCAL_ELEM',
      'GET_NAME_PARTNER'
    ])
  },
  mounted () {
    this[CHANGE_ID_DEPOSIT_LOCAL](this.$route.params.id)
    this[CHANGE_ID_PARTNER](this.$route.params.form)
  },
  methods: {
    ...mapActions([CHANGE_ID_DEPOSIT_LOCAL, CHANGE_ID_PARTNER])
  }
}
</script>
<style>
.finance-page-local-depo-form
{
  padding: 40px 20px 80px;
  background: #2B2B2B;
}

.finance-page-local-depo-form .go-back-button
{
  margin-bottom: 40px;
}

.finance-page-local-depo-form .go-back-button button
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  color: #B2B2B2;
}

.finance-page-local-depo-form .go-back-button .back-button svg
{
  fill: #B2B2B2;
}

.finance-page-local-depo-form h3,
.finance-page-local-depo-form h3 a
{
  font-size: 16px;
  line-height: 100%;
  color: #B2B2B2;
  font-weight: 600;
  margin-bottom: 20px;
}

.finance-page-local-depo-form h3 span
{
  color: #FFFFFF;
}

.finance-page-local-depo-form
{
  padding-bottom: 60px;
}

.light-theme .finance-page-local-depo-form
{
  background: #F7F6FB;
}

.light-theme .partner-local-depo-form h4,
.light-theme .partner-local-depo-form h5,
.light-theme .partner-local-depo-form .payment-details-block .payment-details span
{
  color: #000000;
}

.light-theme .finance-page-local-depo-form .go-back-button button
{
  border: 1px solid #E52525;
  background: #E52525;
  color: #ffffff;
}

.light-theme .finance-page-local-depo-form .go-back-button .back-button svg
{
  fill: #ffffff;
}

.light-theme .partner-local-depo-form .payment-details-block .payment-details
{
  background: #ffffff;
}

.light-theme .partner-local-depo-form .payment-details-block .payment-details p
{
  color: #989898;
}

.light-theme .partner-local-depo-form .block-wrapper-partners .trans-button
{
  background: #F7F6FB;
}

@media (max-width: 1300px) {
  .finance-page-local-depo-form .right-parts
  {
    padding-left: 30px;
  }
}

</style>
