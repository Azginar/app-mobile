<template>
  <div class="affiliate-promo-materials-view">
    <div class="content-container">
      <div class="go-back-button">
        <back-button
          :type="'back-button'"
          :label="'Back'"
          :click-event="goBack"
        />
      </div>
      <h2>Presentations</h2>
      <promo-material :promo-block-data="GET_PROMO_LOGO_AND_CARD" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import PromoMaterial from '@/components/affiliate/promo-material'
const { mapGetters } = createNamespacedHelpers('affiliate')
export default {
  layout: 'NoLayout',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'promo-material': PromoMaterial
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_PROMO_LOGO_AND_CARD'
    ])
  },
  methods: {
    goBack () {
      this.$router.push('/affiliate/promo-materials')
    }
  }
}
</script>
<style>
.affiliate-promo-materials-view .content-container
{
  padding: 0 20px 80px;
}

.affiliate-promo-materials-view .go-back-button
{
  padding: 40px 0;
}

.affiliate-promo-materials-view h2
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 50px;
}

.light-theme .affiliate-promo-materials-view
{
  background: #F7F6FB;
}

.light-theme .affiliate-promo-materials-view h2
{
  color: #000000;
}
</style>
