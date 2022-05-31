<template>
  <div class="button-percent">
    <div class="switch-text" :class="{ active: isActive }" @click="handleClick">
      <span>{{ switchTextField }}</span>
    </div>
    <input
      class="percent"
      type="number"
      :value="value"
      min="0"
      max="100"
      @input="updateValue"
    >
    <span class="percent-text">%</span>
  </div>
</template>
<script>
export default {
  name: 'ButtonPercent',
  props: {
    value: {
      type: Number,
      default: 0
    },
    percentOld: {
      type: Number,
      default: 0
    },
    changeDate: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      switchText: 'on'
    }
  },
  computed: {
    isActive () {
      return this.value
    },
    switchTextField () {
      if (this.value > 0) {
        return 'on'
      } else {
        return 'off'
      }
    }
  },
  methods: {
    handleClick () {
      if (this.switchTextField === 'on') {
        this.changeDate(0)
      } else {
        this.changeDate(this.percentOld)
      }
    },
    updateValue (event) {
      const percent = Number(event.target.value)
      if (percent <= 100) {
        this.changeDate(percent)
      } else {
        this.changeDate(100)
      }
      this.$forceUpdate()
    }
  }
}
</script>
<style>
.button-percent
{
  display: flex;
  background: #1B1B1B;
  border: 1px solid rgba(94,94,94,.7);
  width: 130px;
  height: 40px;
  overflow: hidden;
  align-items: center;

  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.button-percent .switch-text
{
  color: #737373;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 11px;
  text-transform: uppercase;
  background: #333333;
  text-align: center;
  width: 50px;
}

.button-percent .switch-text.active
{
  color: #8DC640;
}

.button-percent .percent
{
  font-family: Arial;
  background: #1B1B1B;
  font-style: normal;
  border: none;
  outline: none;
  font-weight: normal;
  font-size: 15px;
  color: #737373;
  width: 40px;
  line-height: 38px;
  padding-left: 10px;
}

.button-percent .percent-text
{
  font-family: Arial;
  background: #1B1B1B;
  font-style: normal;
  border: none;
  outline: none;
  font-weight: normal;
  font-size: 15px;
  color: #737373;
  line-height: 38px;
  padding-right: 10px;
}

.light-theme .button-percent,
.light-theme .button-percent .percent-text,
.light-theme .button-percent .percent
{
  background: #ffffff;
}

.light-theme .button-percent .switch-text
{
  background: #F7F6FB;
}

.light-theme .button-percent
{
  border-color: #D4D4D4;
}
</style>
