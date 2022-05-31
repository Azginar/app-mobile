<template>
  <div class="promotions-page-block">
    <a class="promo-block" v-for="row in promoInfo" :key="row.title" :href="`https://tifia.com/${row.linkPromo}`" :class="row.classPromo">
      <div v-if="row.bonus100" class="bonus-100">
        <img class="bonus-line" src="@/assets/promo/bonus-line.png" />
        <div class="line-border">
          <h5 v-html="row.titleBlock"></h5>
          <p>Loyalty program</p>
          <span>* limited offer</span>
          <img class="bonus-code" src="@/assets/promo/bonus-code.png" />
          <span class="left">Tifia's clients only</span>
        </div>
      </div>
      <div v-else-if="row.bonus30" class="bonus-30">
        <img class="bonus-line" src="@/assets/promo/bonus-30-line.png" />
        <div class="line-border">
          <h5 v-html="row.titleBlock"></h5>
          <p>Tradable bonus</p>
          <span>* limited offer</span>
          <img class="bonus-code" src="@/assets/promo/bonus-30-code.png" />
          <span class="left">Tifia's clients only</span>
        </div>
      </div>
      <div v-else>
        <div v-if="row.prizeFund">
          <p>Prize fund</p>
          <h5 v-html="row.prizeFund"></h5>
        </div>
        <h5 v-else v-html="row.titleBlock"></h5>
        <img :src="require(`@/assets/promo/${row.slugImage}`)" />
      </div>
      <h4>{{ row.titlePromo }}</h4>
      <p>{{ row.descriptionPromo }}</p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'promoBlockPage',
  props: {
    promoInfo: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goToPromoPage () {
      this.$router.push('/bonus/active-promotions')
    },
  }
}
</script>
<style>
.promotions-page-block .promo-block
{
  max-width: 360px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 40px;
  display: block;
}

.promotions-page-block .promo-block > div
{
  background: #242424;
  position: relative;
  overflow: hidden;
  width: 360px;
  height: 200px;
  box-shadow: 0 15px 25px rgb(0 0 0 / 25%);
  padding: 30px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}

.promotions-page-block .promo-block.bonus-100 > div
{

}

.promotions-page-block .promo-block h5
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 110%;
  text-transform: uppercase;
  color: #FFFFFF;
}

.promotions-page-block .promo-block:hover h4
{
  color: #e52525;
  transition: all .5s;
}

.promotions-page-block .promo-block h4
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 5px;
  color: #FFFFFF;
  transition: all .5s;
}

.promotions-page-block .promo-block h4 + p
{
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #989898;
}

.promotions-page-block .promo-block > div p
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 97.52%;
  text-transform: uppercase;
  color: #E52525;
  margin-bottom: 5px;

}

.promotions-page-block .promo-block img
{
  position: absolute;
  bottom: -1px;
  right: 20px;
}

.promotions-page-block .promo-block .bonus-100
{
  background: #e52525;
  padding: 10px;
}

.promotions-page-block .promo-block .bonus-30
{
  background: #242424;
  padding: 10px;
}

.promotions-page-block .promo-block .bonus-100 img.bonus-code,
.promotions-page-block .promo-block .bonus-30 img.bonus-code
{
  position: absolute;
  top: 22px;
  right: 16px;
}

.promotions-page-block .promo-block .bonus-100 .line-border,
.promotions-page-block .promo-block .bonus-30 .line-border
{
  border: 1px solid rgba(255,255,255,.25);
  height: 100%;
  position: relative;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}

.promotions-page-block .promo-block .bonus-100 .line-border h5 span,
.promotions-page-block .promo-block .bonus-30 .line-border h5 span
{
  padding: 6px;
  display: inline-block;
  color: #ffffff;
}

.promotions-page-block .promo-block .bonus-100 .line-border h5 span
{
  background: #000000;
}

.promotions-page-block .promo-block .bonus-30 .line-border h5 span
{
  background: #E52525;
}

.promotions-page-block .promo-block .bonus-100 .line-border h5,
.promotions-page-block .promo-block .bonus-30 .line-border h5
{
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 34px;
  line-height: 33px;
  padding-top: 65px;
  padding-left: 20px;
  margin-bottom: 13px;
  text-transform: uppercase;
}

.promotions-page-block .promo-block .bonus-100 .line-border h5,
.promotions-page-block .promo-block .bonus-100 .line-border h5 + p,
.promotions-page-block .promo-block .bonus-100 .line-border h5 + p + span,
.promotions-page-block .promo-block .bonus-100 span.left
{
  color: #000000;
}

.promotions-page-block .promo-block .bonus-30 .line-border h5,
.promotions-page-block .promo-block .bonus-30 .line-border h5 + p
{
  color: #ffffff;
}

.promotions-page-block .promo-block .bonus-30 .line-border h5 + p
{
  border-bottom: 1px solid #e52525;
}

.promotions-page-block .promo-block .bonus-100 .line-border h5 + p,
.promotions-page-block .promo-block .bonus-30 .line-border h5 + p
{
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: inline-block;
}

.promotions-page-block .promo-block .bonus-100 .line-border h5 + p + span,
.promotions-page-block .promo-block .bonus-30 .line-border h5 + p + span
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 8px;
  display: block;
  margin-left: 20px;
  text-transform: uppercase;
}

.promotions-page-block .promo-block .bonus-30 .line-border h5 + p + span,
.promotions-page-block .promo-block .bonus-30 span.left
{
  color: #5E5E5E;
}

.promotions-page-block .promo-block .bonus-100 span.left,
.promotions-page-block .promo-block .bonus-30 span.left
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 8px;
  width: 180px;
  position: absolute;
  text-transform: uppercase;
  transform: rotate(-90deg);
  top: 85px;
  right: -84px;
  text-align: center;
}

.promotions-page-block .promo-block .bonus-100 .bonus-line,
.promotions-page-block .promo-block .bonus-30 .bonus-line
{
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -162px;
}

.light-theme .promotions-page-block .promo-block h4,
.light-theme .promotions-page-block .promo-block h5
{
  color: #000000;
}

.light-theme .promotions-page-block .promo-block:hover h4
{
  color: #e52525;
}

.light-theme .promotions-page-block .promo-block > div
{
  background: #ffffff;
}

.light-theme .promotions-page-block .promo-block .bonus-100
{
  background: #e52525;
}

.light-theme .promotions-page-block .promo-block .bonus-30
{
  background: #242424;
}

.light-theme .promotions-page-block .promo-block .bonus-30 .line-border h5
{
  color: #ffffff;
}

@media (max-width: 420px) {
  .promotions-page-block .promo-block > div
  {
    width: 100%;
  }

  .promotions-page-block .promo-block img
  {
    right: 0;
  }

  .promotions-page-block .promo-block .bonus-100 .line-border h5 span,
  .promotions-page-block .promo-block .bonus-30 .line-border h5 span
  {
    margin-right: -8px;
  }
}

@media (max-width: 380px) {
  .promotions-page-block .promo-block .bonus-100 .line-border h5,
  .promotions-page-block .promo-block .bonus-30 .line-border h5
  {
    font-size: 26px;
  }
}

@media (max-width: 330px) {
  .promotions-page-block .promo-block img
  {
    right: -20px;
  }
}
</style>
