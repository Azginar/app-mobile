<template>
  <div class="button-switch">
    <input :id="this.id" v-model="checked" type="checkbox" class="switch">
    <label :for="this.id" class="lbl-on">Yes</label>
    <label :for="this.id" class="lbl-off">No</label>
  </div>
</template>
<script>
export default {
  name: 'SwitchButton',
  props: {
    id: {
      type: String,
      required: true
    }

  },
  data () {
    return {
      checked: false
    }
  }
}
</script>
<style>
.button-switch {
  height: 40px;
  position: relative;
  width: 86px;
}

.button-switch .lbl-on,
.button-switch .lbl-off {
  cursor: pointer;
  display: block;
  position: absolute;
  color: #ffffff;
  top: 0.5em;
  transition: opacity 0.25s ease-out 0.1s;
  text-transform: uppercase;
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 97.52%;
  text-align: center;
}

.button-switch .lbl-on {
  opacity: 0;
  right: 14px;
  top: 14px;
}

.button-switch .lbl-off {
  left: 14px;
  top: 14px;
  color: #737373;
}

.button-switch .switch {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 0;
  font-size: 1em;
  left: 0;
  line-height: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0;
}

.button-switch .switch:before,
.button-switch .switch:after {
  content: '';
  font-size: 1em;
  position: absolute;
}

.button-switch .switch:before {
  border-radius: 1.25em;
  background: #333333;
  height: 40px;
  left: 0;
  top: 0;
  transition: background-color 0.25s ease-out 0.1s;
  width: 86px;
}

.button-switch .switch:after {
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0.25;
  height: 30px;
  transform: translate(0, 0);
  transition: transform 0.25s ease-out 0.1s;
  width: 30px;
  top: 5px;
  left: 50px;
}

.button-switch .switch:checked:after {
  transform: translate(-45px, 0);
  opacity: 1;
}

.button-switch .switch:checked ~ .lbl-on {
  opacity: 1;
}

.button-switch .switch:checked ~ .lbl-off {
  opacity: 0;
}

.button-switch .switch:checked:before {
  background: #333333;
}

.button-switch .switch:checked:before {
  background: #E52525;
}

.light-theme .button-switch .switch:before
{
  border: 1px solid #d4d4d4;
  background: #f7f6fb;
}

.light-theme .button-switch .switch:after
{
  background: #989898;
}

.light-theme .button-switch .switch:checked:before
{
  background: #e52525;
}

.light-theme .button-switch .switch:checked:after
{
  background: #ffffff;
}
</style>
