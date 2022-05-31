<template>
  <div class="content">
    <div
      :id="zbRangeSliderId"
      :se-min="minThreshold"
      :se-step="step"
      :se-min-value="min"
      :se-max-value="max"
      :se-max="maxThreshold"
      class="slider"
    >
      <div class="slider-touch-left">
        <span />
      </div>
      <div class="slider-touch-right">
        <span />
      </div>
      <div class="slider-line">
        <span />
      </div>
    </div>
  </div>
</template>

<script>
import ZbRangeSlider from './ZbRangeSlider'
export default {
  name: 'TwoRangeSlider',
  props: {
    minThreshold: {
      type: Number,
      default: -100
    },
    maxThreshold: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    },
    zbRangeSliderId: {
      type: String,
      required: true
    },
    floatValues: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new ZbRangeSlider(this.zbRangeSliderId)
    this.instance.onChange = (min, max) => this.updateValues(min, max)
  },
  destroyed () {
    this.instance = null
  },
  methods: {
    updateValues (min, max) {
      const minValue = this.floatValues ? parseFloat(min) : parseInt(min)
      const maxValue = this.floatValues ? parseFloat(max) : parseInt(max)

      this.onChange({ field: 'min', value: minValue })
      this.onChange({ field: 'max', value: maxValue })
    }
  }
}
</script>

<style>
.slider {
  display: block;
  position: relative;
  height: 36px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.slider .slider-touch-left,
.slider .slider-touch-right {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 36px;
  width: 36px;
  padding: 3px;
  z-index: 2;
}
.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  width: 100%;
  height: 100%;
  background: #B2B2B2;
  border-radius: 50%;
}
.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 36px);
  left: 18px;
  top: 16px;
  height: 4px;
  border-radius: 4px;
  background: #B2B2B2;
  z-index: 0;
  overflow: hidden;
}
.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
  background: #B2B2B2;
}
</style>
