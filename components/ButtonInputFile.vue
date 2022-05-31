<template>
  <span class="span-wrapper">
    <span>{{ title }}</span>
    <input class="input-file-button" type="file" @change="handleFileChange">
  </span>
</template>
<script>
export default {
  name: 'ButtonInputFile',
  props: {
    onFileChange: {
      type: Function,
      default: () => {}
    },
    title: {
      type: String,
      default: 'Change avatar'
    }
  },
  methods: {
    handleFileChange (event) {
      this.$emit('onFileChange', event)
    }
  }
}
</script>
<style>
    .span-wrapper {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        margin-bottom: 0;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        background-image: none;
        user-select: none;
        position: relative;
        overflow: hidden;
        display: inline-block;
        white-space: normal;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        outline: none;
        cursor: pointer;
        line-height: 14px;
        text-transform: uppercase;
        color: #B2B2B2;
        padding: 12px 40px;
        background: transparent;
        border: 1px solid rgba(94, 94, 94, 0.5);
        border-radius: 300px;
        -moz-border-radius: 300px;
        -webkit-border-radius: 300px;
    }

    .span-wrapper:hover {
        background-color: rgb(255 255 255) !important;
        border-color: rgb(86 113 165) !important;
        color: rgb(86 113 165) !important;
        text-shadow: none !important;
    }

    .span-wrapper:active {
        background-color: rgb(255 255 255) !important;
        border-color: rgb(86 113 165) !important;
        color: rgb(86 113 165) !important;
        text-shadow: none !important;
    }

    .span-wrapper:focus {
        background-color: rgb(255 255 255) !important;
        border-color: rgb(86 113 165) !important;
        color: rgb(86 113 165) !important;
        text-shadow: none !important;
    }

    .input-file-button {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        user-select: none;
        box-sizing: border-box;
        color: inherit;
        font: inherit;
        font-family: inherit;
        line-height: inherit;
        outline: none;
        display: block;
        font-size: 200px !important;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        opacity: 0;
        direction: ltr;
        cursor: pointer;
    }
</style>
