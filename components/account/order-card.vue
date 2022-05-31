<template>
  <div class="order-container-card" @click="goToTicketPage">
    <div class="block-card">
      <div class="text-right">
        {{ number }}
      </div>
      <div class="arrow-right">
        <ArrowRight />
      </div>
      <div class="block-card-wrapper">
        <div class="info-text">
          <div class="trading-images-trading-pair-container">
            <img :src="tradingPairImages[0]">
            <img :src="tradingPairImages[1]">
            <h4>{{ tradingPair }}</h4>
          </div>
          <div class="info-container">
            <div class="info-order-first-line">
              <two-line-info
                :label="'TYPE'"
                :value="type"
              />
              <two-line-info
                :label="'PROFIT'"
                :value="profit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TwoLineInfo from '@/components/account/two-line-info'
import ArrowRight from '@/assets/icons/arrow-right.svg'
export default {
  name: 'OrderCard',
  components: {
    TwoLineInfo,
    ArrowRight
  },
  props: {
    number: {
      type: String,
      default: ''
    },
    tradingPair: {
      type: String,
      default: ''
    },
    tradingPairImages: {
      type: Array,
      default: () => []
    },
    profit: {
      type: String,
      default: '0.00 USD'
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToTicketPage () {
      this.$router.push('/accounts/order-info')
    }
  }
}
</script>
<style>
.trading-images-trading-pair-container{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.trading-images-trading-pair-container img{
  margin: -5px 0;
  flex-shrink: 0;
}

.trading-images-trading-pair-container h4{
  padding-left: 10px;
}

.info-order-first-line{
  display: flex;
}

.info-order-first-line > div
{
  width: 50%;
}

.order-container-card {
  display: flex;
  flex-wrap: wrap;
}

.order-container-card .arrow-right
{
  position: absolute;
  right: 10px;
  bottom: 16px;
}

.order-container-card > div {
  margin-bottom: 30px;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}

.order-container-card .block-card {
  font-family: Montserrat;
  margin: 10px auto;
  padding: 20px;
  display: block;
  flex-shrink: 0;
  width: 90%;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.order-container-card .block-card .block-card-wrapper {
  height: 100%;
}

.order-container-card .block-card .wrapper-img {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.order-container-card .block-card .wrapper-img span {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.order-container-card .block-card .wrapper-img img {
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.order-container-card .block-card .info-text h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
}

.order-container-card .block-card .info-text p {
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.order-container-card .block-card .info-text p:last-child {
  margin-bottom: 0;
}

.order-container-card .block-card .info-text p span {
  color: #989898;
  font-size: 13px;
}

.order-container-card .block-card .text-right {
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.order-container-card .block-card .bg-transparent {
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.light-theme .order-container-card .block-card
{
  background: #ffffff;
}

.light-theme .order-container-card .block-card .info-text h4
{
  color: #000000;
}

</style>
