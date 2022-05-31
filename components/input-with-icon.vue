<template>
  <div>
    <div class="input-with-icon">
      <searchIc />
      <input
        class="payment-method-input"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        @input="handleInput"
      >
    </div>
    <p v-if="hasError" class="help-block-error">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>
import searchIc from '@/assets/search-ic.svg'
export default {
  name: 'InputWithIcon',
  components: {
    searchIc
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      required: true
    },
    handleInput: {
      type: Function,
      default: () => {}
    },
    errors: {
      type: Array,
      default: () => []
    },
    attribute: {
      type: String,
      default: 'phone'
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    hasError () {
      return this.errors.filter(e => e.attribute === this.attribute).length > 0
    },
    errorMessage () {
      if (this.errors.filter(e => e.attribute === this.attribute).length > 0) {
        return this.errors.find(e => e.attribute === this.attribute).message
      }

      return ''
    },
    hasSuccess () {
      return this.success && !this.hasError
    }
  }
}
</script>
<style>
.input-with-icon
{
  background: #1B1B1B;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 40px;
  font-family: Arial;
  min-width: 300px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 50px;
  color: #B2B2B2;
  flex-shrink: 0;
  border: none;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
}

.input-with-icon input
{
  background: #1B1B1B;
  border: none;
  outline: none !important;
  font-size: 14px;
  line-height: 140%;
  width: 100%;
  color: #737373;
}

.input-with-icon svg
{
  margin-right: 11px;
}

p.help-block-error
{
  color: #ffffff;
  padding-left: 20px;
}

.light-theme .input-with-icon
{
  background: #F7F6FB;
  border: 1px solid #D4D4D4;
}

.light-theme .input-with-icon input
{
  background: #F7F6FB;
  color: #989898;
}
</style>
