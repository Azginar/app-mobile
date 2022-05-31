<template>
  <div class="button-percent-account">
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
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('affiliate')
export default {
  name: 'ButtonPercentAccount',
  props: {
    value: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: '0'
    },
    index: {
      type: Number,
      default: 0
    },
    itemIndex: {
      type: Number,
      default: 0
    },
    percentOld: {
      type: Number,
      default: 0
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
    ...mapActions([
      'SET_ACTIVE_PERCENT_ACCOUNT',
      'SET_PERCENT_ACCOUNTS',
      'UPDATE_PERCENT_ACCOUNTS'
    ]),
    handleClick () {
      const infoData = {
        percentOld: this.percentOld,
        switchTextField: this.switchTextField,
        accountNumber: this.id,
        index: this.index,
        itemIndex: this.itemIndex
      }
      this.SET_PERCENT_ACCOUNTS(infoData)
    },
    updateValue (event) {
      const percentUser = Number(event.target.value)
      const updateData = {
        percentUser,
        accountNumber: this.id,
        index: this.index,
        itemIndex: this.itemIndex
      }
      this.UPDATE_PERCENT_ACCOUNTS(updateData)
      this.$forceUpdate()
    }
  }
}
</script>
<style>
.button-percent-account
{
  display: flex;
  background: #1B1B1B;
  border: 1px solid rgba(94,94,94,.7);
  width: 110px;
  height: 30px;
  align-items: center;
  overflow: hidden;

  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.button-percent-account .switch-text
{
  color: #737373;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  flex-shrink: 0;
  font-size: 11px;
  text-transform: uppercase;
  background: #333333;
  text-align: center;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-percent-account .switch-text.active
{
  color: #8DC640;
}

.button-percent-account .percent
{
  font-family: Arial;
  background: #1B1B1B;
  font-style: normal;
  border: none;
  outline: none;
  font-weight: normal;
  font-size: 13px;
  color: #737373;
  width: 35px;
  line-height: 28px;
  padding-left: 10px;
}

.button-percent-account .percent-text
{
  font-family: Arial;
  background: #1B1B1B;
  font-style: normal;
  border: none;
  outline: none;
  font-weight: normal;
  font-size: 13px;
  color: #737373;
  line-height: 28px;
  padding-right: 10px;
}

.light-theme .button-percent-account,
.light-theme .button-percent-account .percent-text,
.light-theme .button-percent-account .percent
{
  background: #ffffff;
}

.light-theme .button-percent-account .switch-text
{
  background: #F7F6FB;
}

.light-theme .button-percent-account
{
  border-color: #D4D4D4;
}
</style>
