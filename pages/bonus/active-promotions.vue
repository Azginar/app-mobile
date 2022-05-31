<template>
  <div class="promotions-page">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goBack"
      />
    </div>
    <sub-menu-promotions />
    <div class="content-promo">
      <h3>Active promotions</h3>
      <promo-block-page :promo-info="promotionsInfo" />
    </div>
  </div>
</template>
<script>
import { GET_PROMOTIONS_INFO_BLOCKS } from '@/modules/promotions/getter-types'
import BackButton from '../../components/back-button'
import PromoBlockMain from '../../components/promotions/promoBlockPage'
import SubMenuPromotions from '../../components/sub-menu-promotions'
export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'back-button': BackButton,
    'promo-block-page': PromoBlockMain,
    'sub-menu-promotions': SubMenuPromotions
  },
  computed: {
    promotionsInfo () {
      return this.$store.getters[`promotions/${GET_PROMOTIONS_INFO_BLOCKS}`]
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.promotions-page
{
  padding-bottom: 60px;
}

.promotions-page .go-back-button
{
  margin-bottom: 40px;
  padding: 40px 20px 0;
}

.promotions-page h1
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.promotions-page .ul-tabs
{
  margin-bottom: 80px;
}

.promotions-page h3
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.promotions-page .content-promo
{
  padding-left: 20px;
  padding-right: 20px;
}

.light-theme .promotions-page h1,
.light-theme .promotions-page h3
{
  color: #000000;
}
</style>
