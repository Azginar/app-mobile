<template>
  <div class="input-range-block">
    <input
      v-model="value"
      class="only-input-black"
    >
    <div class="input-range">
      <input v-model="value" type="range" min="0" max="500" step="1">
    </div>
    <div class="range-text">
      <span>0%</span>
      <span>500%</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputRangeWithInput',
  props: {
    placeholder: String
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>
<style>
  .input-range-block .only-input-black {
    background: #1B1B1B;
    width: 100px;
    text-align: center;
    display: block;
    padding: 0 20px;
    margin-bottom: 20px;
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

  .input-range-block input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }

  .input-range-block input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  .input-range-block input[type=range]:focus {
    outline: none;
  }

  .input-range-block input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  .input-range-block .range-text {
    display: flex;
    justify-content: space-between;
  }

  .input-range-block .range-text span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 100%;
    text-transform: uppercase;
    color: #737373;
  }

  /* Special styling for WebKit/Blink */
  .input-range-block input[type=range]::-webkit-slider-thumb {
    width: 30px;
    height: 30px;
    background: #B2B2B2;
    cursor: pointer;
    margin-top: -15px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  /* All the same stuff for Firefox */
  .input-range-block input[type=range]::-moz-range-thumb {
    width: 30px;
    height: 30px;
    background: #B2B2B2;
    cursor: pointer;
    margin-top: -15px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  /* All the same stuff for IE */
  .input-range-block input[type=range]::-ms-thumb {
    width: 30px;
    height: 30px;
    background: #B2B2B2;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .input-range-block input[type=range] {
    -webkit-appearance: none;
    margin: 15px 0;
    width: 100%;
  }

  .input-range-block input[type=range]:focus {
    outline: none;
  }

  .input-range-block input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: #414141;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .input-range-block input[type=range]:focus::-webkit-slider-runnable-track {
    background: #414141;
  }

  .input-range-block input[type=range]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: #414141;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .input-range-block input[type=range]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }

  .input-range-block input[type=range]::-ms-fill-lower {
    background: #414141;
  }

  .input-range-block input[type=range]:focus::-ms-fill-lower {
    background: #414141;
  }

  .input-range-block input[type=range]::-ms-fill-upper {
    background: #414141;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .input-range-block input[type=range]:focus::-ms-fill-upper {
    background: #414141;
  }

  .light-theme .input-range-block .only-input-black
  {
    background: #F7F6FB;
    border: 1px solid #D4D4D4;
    color: #989898;
  }

</style>
