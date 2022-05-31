<template>
  <div class="ok-button-container">
    <div class="ok-button-wrapper">
      <default-button
        :label="label"
        :click-event="clickEvent"
        :type="type"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormButtonWithWrap',
  props: {
    clickEvent: {
      type: Function,
      required: true
    },
    label: {
      type: String,
      default: 'OK'
    },
    type: {
      type: String,
      default: 'red-button'
    }
  }
}
</script>
<style>
.ok-button-container {
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;
}
.ok-button-wrapper {
  display: block;
}

.ok-button-wrapper button
{
  padding-top: 17px;
  padding-bottom: 17px;
  font-size: 15px;
  line-height: 14px;;
}
</style>
