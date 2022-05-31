<template>
  <div class="promo-block-count">
    <div class="row-line">
      <div class="col-line">
        <p>{{ promoInfo.countAllPromo }}</p>
        <span>Active<br>promotions</span>
      </div>
      <div class="col-line">
        <p>{{ promoInfo.myPromo }}</p>
        <span>My<br>promotions</span>
      </div>
    </div>
    <div class="btn-block">
      <default-button
        label="See"
        type="trans-button"
        :click-event="goToPromoPage"
      />
    </div>
  </div>
</template>
<script>
import DefaultButton from '../../components/default-button'
export default {
  name: 'PromoBlockMain',
  components: {
    'default-button': DefaultButton
  },
  props: {
    promoInfo: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    goToPromoPage () {
      this.$router.push('/bonus/active-promotions')
    }
  }
}
</script>
<style>
.promo-block-count
{
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-top: 1px solid #484848;
  border-bottom: 1px solid #484848;
  margin-bottom: 80px;
}

.promo-block-count .row-line
{
  display: flex;
}

.promo-block-count .row-line .col-line
{
  margin-right: 40px;
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
}

.promo-block-count p
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-right: 5px;
}

.promo-block-count span
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
}

.promo-block-count .btn-block
{
  text-align: center;
}

.promo-block-count .btn-block button
{
  background: #333333;
}

.main-wrapper.light-theme .promo-block-count
{
  background: #ffffff;
}

.main-wrapper.light-theme .promo-block-count .left-col p
{
  color: #989898;
}

.main-wrapper.light-theme .promo-block-count
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .trans-button
{
  background: #F7F6FB;
}

@media (max-width: 340px) {
  .promo-block-count .row-line
  {
    flex-wrap: wrap;
  }
}
</style>
