<template>
  <div class="affiliate-page">
    <div class="content-container">
      <h4>{{ GET_USER_NAME }}</h4>
      <partners-main-info :partners-main-data="GET_PARTNERS_MAIN_INFO" />

      <h4>Affiliate accounts</h4>
      <partners-card :partners-card-data="GET_AFFILIATE_ACCOUNTS" />

      <h4>Affiliate commission summary: <span>all time</span></h4>
      <affiliate-commission :affiliate-commission-data="GET_AFFILIATE_COMMISSION_ALL_TIME" />

      <h4>Affiliate commission summary: <span>last month</span></h4>
      <affiliate-commission :affiliate-commission-data="GET_AFFILIATE_COMMISSION_LAST_MONTH" />

      <h4>Сertificate</h4>
      <div class="btn-block">
        <default-button
          label="Get the certificate"
          type="trans-button"
          :click-event="handleGetCertificate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import partnersMainInfo from '@/components/affiliate/partner-main-info'
import partnersCard from '@/components/affiliate/partner-card'
import affiliateCommission from '@/components/affiliate/affiliate-comisson'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import DefaultButton from '@/components/default-button.vue'
const { mapGetters } = createNamespacedHelpers('affiliate')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'default-button': DefaultButton,
    'partners-main-info': partnersMainInfo,
    'partners-card': partnersCard,
    'affiliate-commission': affiliateCommission
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_PARTNERS_MAIN_INFO',
      'GET_USER_NAME',
      'GET_AFFILIATE_ACCOUNTS',
      'GET_AFFILIATE_COMMISSION_ALL_TIME',
      'GET_AFFILIATE_COMMISSION_LAST_MONTH'
    ])
  },
  methods: {
    handleGetCertificate () {
      this.$router.push('/affiliate/certificates')
    }
  }
}
</script>
<style>
.content-container
{
  padding: 0 20px 80px;
}

.affiliate-page h4
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.affiliate-page h4 span
{
  color: #B2B2B2;
}

.affiliate-page .trans-button
{
  padding-left: 30px;
  padding-right: 30px;
}

.light-theme .affiliate-page h4
{
  color: #000000;
}

.light-theme .affiliate-page h4 span
{
  color: #989898;
}
</style>
