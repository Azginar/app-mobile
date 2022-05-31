<template>
  <div class="password-with-icon">
    <input
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="{'has-error-border': hasError}"
      class="black-input"
      :attribute="attribute"
      @input="handleInput"
    >
    <iconPassword @click="showPassword" />
  </div>
</template>
<script>
import iconPassword from '../assets/icons/icon-password.svg'
export default {
  name: 'BlackInputPassword',
  components: {
    iconPassword
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    attribute: {
      type: String,
      default: ''
    },
    handleInput: {
      type: Function,
      default: () => {
      }
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
  data () {
    return {
      type: 'password'
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
  },
  methods: {
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    }
  }
}
</script>
<style>
.password-with-icon
{
  position: relative;
}
.password-with-icon svg
{
  position: absolute;
  right: 20px;
  top: 13px;
  cursor: pointer;
}
.black-input {
  background: #1B1B1B;
  width: 100%;
  display: block;
  padding: 0 20px;
  height: 50px;
  font-family: Montserrat;
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
}

.has-error-text {
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

input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
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

</style>
