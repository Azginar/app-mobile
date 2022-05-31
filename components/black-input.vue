<template>
  <div>
    <input
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      :class="{'has-error-border': hasError}"
      class="black-input"
      :attribute="attribute"
      @input="handleInput"
    >
    <p class="has-error-text">
      {{ errorText }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'BlackInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    attribute: {
      type: String,
      default: ''
    },
    handleInput: {
      type: Function,
      default: () => {}
    },
    errors: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasError () {
      return this.errors.filter(e => e.attribute === this.attribute).length > 0
    },
    errorText () {
      if (this.hasError) {
        return this.errors.find(e => e.attribute === this.attribute).message
      }
      return ''
    }
  }
}
</script>
<style>
  .black-input {
    background: #1B1B1B;
    width: 100%;
    display: block;
    padding: 0 20px;
    height: 50px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 50px;
    color: #B2B2B2;
    outline: none !important;
    border: none;
    border-radius: 25px;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
  }

  .only-input:focus {
    border-color: #33bbff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 136, 204, 0.3);
  }

  .has-error-text
  {
    color: #ffffff;
    padding-left: 20px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input.black-input:-webkit-autofill,
  input.black-input:-webkit-autofill:hover,
  input.black-input:-webkit-autofill:focus,
  input.black-input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0px 1000px #1B1B1B inset !important;
  }

  input.black-input:-webkit-autofill{
    -webkit-text-fill-color: #989898 !important;
  }

  .light-theme .black-input
  {
    background: #F7F6FB;
    color: #989898;
    border: 1px solid #D4D4D4;
  }

  .light-theme .has-error-text
  {
    color: #000000;
  }
</style>
