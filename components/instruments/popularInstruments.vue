<template>
  <div class="popular-instruments-blocks">
    <div class="instrument-block" v-for="row in blockData" :key="row.item">
      <div class="instrument-title">
        <img :src="row.images[0]">
        <img :src="row.images[1]">
        <span>{{ row.instrument }}</span>
      </div>
      <div class="row-line-block">
        <div>
          <p>Trades</p>
          <span>{{ row.traders }}</span>
        </div>
        <div>
          <p>Buy</p>
          <span>{{ row.percentBuy }}</span>
        </div>
        <div>
          <p>sell</p>
          <span>{{ row.percentSell }}</span>
        </div>
      </div>
      <div class="percent-block">
        <div class="buy">
          <div class="green-block" :style="`width: ${row.percentBuy};`"></div>
        </div>
        <div class="sell">
          <div class="red-block" :style="`width: ${row.percentSell};`"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PopularInstrumentsBlocks',
  props: {
    blockData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.popular-instruments-blocks
{
  margin-bottom: 60px;
}

.popular-instruments-blocks .instrument-block
{
  background: rgba(36, 36, 36, 0.5);
  margin-bottom: 10px;
  padding: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.popular-instruments-blocks .instrument-block .instrument-title
{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.popular-instruments-blocks .instrument-block .instrument-title span
{
  margin-left: 10px;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}

.popular-instruments-blocks .instrument-block .row-line-block p
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  display: block;
}

.popular-instruments-blocks .instrument-block .row-line-block span
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #989898;
  display: block;
}

.popular-instruments-blocks .instrument-block .row-line-block
{
  display: flex;
  flex-wrap: wrap;
}

.popular-instruments-blocks .instrument-block .row-line-block > div
{
  margin-right: 40px;
  margin-bottom: 20px;
}

.popular-instruments-blocks .instrument-block .row-line-block > div:first-child span
{
  color: #ffffff;
}

.popular-instruments-blocks .instrument-block .percent-block
{
  display: flex;
}

.popular-instruments-blocks .instrument-block .percent-block > div
{
  width: 50%;
  background: #484848;
  overflow: hidden;
  height: 2px;
}

.popular-instruments-blocks .instrument-block .percent-block .sell
{
  border-radius: 0px 2px 2px 0px;
  -webkit-border-radius: 0px 2px 2px 0px;
  -moz-border-radius: 0px 2px 2px 0px;
}

.popular-instruments-blocks .instrument-block .percent-block .buy
{
  border-radius: 2px 0px 0px 2px;
  -webkit-border-radius: 2px 0px 0px 2px;
  -moz-border-radius: 2px 0px 0px 2px;
}

.popular-instruments-blocks .instrument-block .percent-block .green-block
{
  background: #8DC640;
  height: 100%;
  margin-left: auto;
}

.popular-instruments-blocks .instrument-block .percent-block .red-block
{
  background: #FF4B55;
  height: 100%;
}

.main-wrapper.light-theme .popular-instruments-blocks .instrument-block
{
  background: #ffffff;
}

.main-wrapper.light-theme .popular-instruments-blocks .instrument-block .instrument-title span,
.main-wrapper.light-theme .popular-instruments-blocks .instrument-block .row-line-block > div:first-child span
{
  color: #000000;
}

.main-wrapper.light-theme .popular-instruments-blocks .instrument-block .percent-block .buy,
.main-wrapper.light-theme .popular-instruments-blocks .instrument-block .percent-block .sell
{
  background: #989898;
}

@media (max-width: 350px) {
  .popular-instruments-blocks .instrument-block .row-line-block > div
  {
    margin-right: 20px;
  }
}

</style>
