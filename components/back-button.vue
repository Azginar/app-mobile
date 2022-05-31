<template>
  <button
    :class="classes"
    @click="clickEvent"
  >
    <arrowLeft />
    <span>{{ label }}</span>
  </button>
</template>
<script>
import arrowLeft from '@/assets/icons/arrow-left.svg'
export default {
  name: 'BackButton',
  components: {
    arrowLeft
  },
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    clickEvent: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes () {
      const ButtonColors = new Map()
        .set('back-button', { 'back-button': true })
      return ButtonColors.get(this.type)
    }
  }
}
</script>
<style>
  /*back button */
  .back-button
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    outline: none;
    cursor: pointer;
    line-height: 14px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 12px 20px !important;
    background: #E52525;
    border: 1px solid #E52525;
    box-sizing: border-box;
    border-radius: 300px;
    -moz-border-radius: 300px;
    -webkit-border-radius: 300px;
  }

  .back-button svg
  {
    fill: #ffffff;
    margin-right: 6px;
  }

  .back-button svg,
  .back-button span
  {
    display: inline-block;
    vertical-align: middle;
  }
  .back-button:hover,
  .back-button:active
  {
    background: #ffffff;
    color: #E52525;
    border-color: #ffffff;
  }

  .back-button:active
  {
    margin-top: 1px;
    margin-bottom: -1px;
  }

  .back-button:hover svg,
  .back-button:active svg
  {
    fill: #E52525;
  }

</style>
