<template>
  <div class="partners-promo-material">
    <div v-for="row in promoBlockData" :key="row.title" class="block-promo">
      <img :src="row.image">
      <div class="content-block">
        <h5>
          {{ row.title }}
        </h5>
        <div class="btn-block">
          <div>
            <button class="trans-button" @click="handleClick(row.downloadLinkPDF)">
              <label>{{ row.btnFirstText }}</label>
            </button>
          </div>
          <div>
            <button class="trans-button" @click="handleClick(row.downloadLinkEPS)">
              <label>{{ row.btnSecondText }}</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '@/components/default-button'
export default {
  name: 'PromoMaterial',
  components: {
    'default-button': DefaultButton
  },
  props: {
    promoBlockData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (link) {
      window.location.href = link
    }
  }
}
</script>
<style>
.partners-promo-material
{
  margin-bottom: 80px;
}

.partners-promo-material .block-promo
{
  margin-bottom: 20px;
  text-align: center;
  background: #2B2B2B;
  overflow: hidden;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.partners-promo-material .block-promo img
{
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.partners-promo-material .block-promo .content-block
{
  padding: 20px 20px 10px;
}

.partners-promo-material .block-promo h5
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  color: #B2B2B2;
  margin-bottom: 13px;
}

.partners-promo-material .block-promo .btn-block
{
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
  justify-content: center;
}

.partners-promo-material .block-promo .btn-block > div
{
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
}

.partners-promo-material .trans-button
{
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;
}

.light-theme .partners-promo-material .block-promo .content-block
{
  background: #ffffff;
}

.light-theme .partners-promo-material .block-promo h5
{
  color: #989898;
}

@media (max-width: 350px) {
  .partners-promo-material .block-promo .btn-block > div
  {
    padding-right: 10px;
    padding-left: 10px;
  }

  .partners-promo-material .block-promo .btn-block
  {
    margin-right: -10px;
    margin-right: -10px;
  }
}
</style>
