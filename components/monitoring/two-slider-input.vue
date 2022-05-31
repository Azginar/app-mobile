<template>
  <div style="margin-top: 10px">
    <p>{{ label }}</p>
    <div class="two-range-slider-container">
      <div class="two-field-select-input">
        <div>
          <black-input :value="`${transformView(value.min)}`" />
        </div>
        <div class="field-info">
          <span>{{ filedLabel }}</span>
        </div>
        <div>
          <black-input :value="`${transformView(value.max)}`" />
        </div>
        <div class="second-field-info">
          <span>{{ filedLabel }}</span>
        </div>
      </div>
      <div class="slider">
        <two-range-slider
          :min-threshold="value['defaultMin']"
          :max-threshold="value['defaultMax']"
          :min="value['min']"
          :max="value['max']"
          :value="value"
          :on-change="onChange"
          :zb-range-slider-id="label"
          :float-values="floatValues"
        />
      </div>
    </div>
  </div>
</template>
<script>
import BlackInput from '@/components/black-input'
import TwoRangeSlider from '@/components/monitoring/two-range-slider'
import numberFormat from '@/utils/formatted-summ'

export default {
  name: 'TwoSliderInput',
  components: {
    BlackInput,
    TwoRangeSlider
  },
  props: {
    filedLabel: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default: () => ({
        min: 0,
        max: 500
      })
    },
    onChange: {
      type: Function,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    floatValues: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    transformView (value) {
      const decimals = this.floatValues ? 2 : 0
      return numberFormat(value, decimals, '.', ' ')
    }
  }
}
</script>
<style>

.two-range-slider-container .slider {
  margin-top: 10px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}

.two-field-select-input {
  display: flex;
}

.two-field-select-input .second-field-info,
.two-field-select-input .field-info {
  background: #1B1B1B;
  color: white;
  height: 50px;
  line-height: 50px;
  text-align: left;
  width: 25%;
}

.two-field-select-input .second-field-info {
  border-radius: 0 25px 25px 0;
  -moz-border-radius: 0 25px 25px 0;
  -webkit-border-radius: 0 25px 25px 0;
}

.two-field-select-input .second-field-info span,
.two-field-select-input .field-info span{
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  color: #868686;
  font-size: 15px;
  margin-bottom: 6px;
  font-weight: normal;
}

.two-field-select-input > div:nth-of-type(3){
  padding-left: 1px;
}

.two-field-select-input > div:nth-of-type(3),
.two-field-select-input > div:first-child {
  width: 33%;
}

.two-field-select-input > div:first-child input {
  width: 100%;
  border-radius: 25px 0 0 25px;
  -moz-border-radius: 25px 0 0 25px;
  -webkit-border-radius: 25px 0 0 25px;
  text-align: right;
  font-size: 15px;
  font-weight: normal;
}

.two-field-select-input > div:nth-of-type(3) input {
  width: 100%;
  border-radius: 0 ;
  -moz-border-radius: 0 ;
  -webkit-border-radius: 0 ;
  text-align: right;
  font-size: 15px;
  font-weight: normal;
}

.two-field-select-input .black-input
{
  padding: 0 10px;
}

/*.light-theme .two-field-select-input .second-field-info,
.light-theme .two-field-select-input .field-info
{
  background: #F7F6FB;
}*/

.light-theme .two-field-select-input .second-field-info
{
  background: #F7F6FB;
  border-top: 1px solid  #D4D4D4;
  border-bottom: 1px solid  #D4D4D4;
  border-right: 1px solid  #D4D4D4;
}

.light-theme .two-field-select-input > div:nth-of-type(3) input,
.light-theme .two-field-select-input > div:first-child input
{
  border-right: none;
}

.light-theme .two-field-select-input .field-info
{
  background: #F7F6FB;
  border-top: 1px solid  #D4D4D4;
  border-bottom: 1px solid  #D4D4D4;
}

</style>
