<template>
  <button
    class="send-button"
    @click="clickEvent"
  >
    <sendIconSvg />
  </button>
</template>
<script>
import sendIconSvg from '@/assets/icons/send-icon.svg'
export default {
  name: 'SendingButton',
  components: {
    sendIconSvg
  },
  props: {
    clickEvent: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
<style>
.send-button
{
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E52525;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
}

</style>
