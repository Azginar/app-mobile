<template>
  <button
    :class="classes"
    @click="clickEvent"
  >
    <div v-if="isWithSlot" class="with-slot">
      <div>
        <slot name="icon" />
      </div>
      <div style="display: block">
        {{ label }}
      </div>
    </div>
    <div v-else>
      {{ label }}
    </div>
  </button>
</template>
<script>

export default {
  name: 'DefaultButton',
  props: {
    label: {
      type: String,
      required: true
    },
    isWithSlot: {
      type: Boolean,
      default: false
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
        .set('default-red-button', { 'red-outlet-button': true })
        .set('short-red-button', { 'red-outlet-button-short': true })
        .set('light-button', { 'outline-light-button': true })
        .set('default-blue', { 'default-blue': true })
        .set('default-grey', { 'default-grey': true })
        .set('short-blue-button', { 'blue-outlet-button-short': true })
        .set('short-grey-button', { 'grey-outlet-button-short': true })
        .set('back-button', { 'back-button': true })
        .set('red-button', { 'red-button': true })
        .set('trans-button', { 'trans-button': true })

      return ButtonColors.get(this.type)
    }
  }
}
</script>
<style>
.with-slot {
  display: flex;
  align-items: flex-start;
}
/*  red button styles  */
.red-outlet-button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  padding: 6px 12px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  font-size: 13px;
  white-space: normal;
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #D92727 !important;
  border: 1px solid #D92727 !important;
  outline: none !important;
}

.red-outlet-button-short {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  user-select: none;
  padding: 1px 5px;
  line-height: 1.5;
  border-radius: 3px;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  margin-right: 5px !important;
  font-size: 13px;
  white-space: normal;
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #D92727 !important;
  border: 1px solid #D92727 !important;
  outline: none !important;
}

.red-outlet-button:hover, .red-outlet-button-short:hover {
  background-color: #fff !important;
  border-color: #DD3D3D !important;
  color: #DD3D3D !important;
  text-shadow: none !important;

}

.red-outlet-button:focus, .red-outlet-button-short:focus {
  box-shadow: none !important;
}

.red-outlet-button:active, .red-outlet-button-short.active {
  background-color: #fff !important;
  border-color: #DD3D3D !important;
  color: #DD3D3D !important;
  text-shadow: none !important;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

/* short blue button */
.blue-outlet-button-short {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  user-select: none;
  padding: 1px 5px;
  line-height: 1.5;
  border-radius: 3px;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  margin-right: 5px !important;
  font-size: 13px;
  white-space: normal;
  color: #ffffff;
  text-shadow: 0 -1px 0 #00000040;
  background-color: #5671a5;
  border: 1px solid #5671a5;
  outline: none !important;
}

.blue-outlet-button-short:hover {
  background-color: #ffffff !important;
  border-color: #5671a5 !important;
  color: #5671a5 !important;
  text-shadow: none !important;

}

.blue-outlet-button-short:focus {
  box-shadow: none !important;
}

.blue-outlet-button-short:active {
  background-color: #ffffff !important;
  border-color: #5671a5 !important;
  color: #5671a5 !important;
  text-shadow: none !important;
}

/* short blue button */

/* short grey button */

.grey-outlet-button-short {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  user-select: none;
  padding: 1px 5px;
  line-height: 1.5;
  border-radius: 3px;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  margin-right: 5px !important;
  font-size: 13px;
  white-space: normal;
  color: #ffffff;
  text-shadow: none;
  background-color: rgb(124 123 123);
  border: 1px solid rgb(124 123 123);
  outline: none !important;
}

.grey-outlet-button-short:hover {
  background-color: #ffffff;
  border-color: #7c7b7b !important;
  color: #7c7b7b;

}

.grey-outlet-button-short:focus {
  box-shadow: none !important;
}

.grey-outlet-button-short:active {
  background-color: #ffffff;
  border-color: #7c7b7b !important;
  color: #7c7b7b;
}

/* short grey button */

/*  light-button  */

.outline-light-button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  padding: 6px 12px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  margin-left: 10px !important;
  font-size: 13px;
  white-space: normal;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  outline: none !important;
}

.outline-light-button:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}

.outline-light-button:focus {
  box-shadow: none !important;
  color: #333 !important;
  background-color: #e6e6e6 !important;
  border-color: #8c8c8c !important;
}

.outline-light-button:active {
  box-shadow: none !important;
  color: #333 !important;
  background-color: #e6e6e6 !important;
  border-color: #adadad !important;
}

/*  blue button  */

.default-blue {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  overflow: visible;
  text-transform: none;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  padding: 6px 12px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  font-size: 13px;
  white-space: normal;
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #5671a5;
  border: 1px solid #5671a5;
}

.default-blue:active, .default-blue:hover, .default-blue:focus {
  box-shadow: none !important;
  background-color: #fff !important;
  border-color: #5671a5 !important;
  color: #5671a5 !important;
  text-shadow: none !important;
}

/*grey button */
.default-grey {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font: inherit;
  margin: 0;
  overflow: visible;
  text-transform: none;
  font-family: inherit;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  padding: 6px 12px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  font-size: 13px;
  white-space: normal;
  color: #ffffff;
  text-shadow: none;
  background-color: #7c7b7b;
  border: 1px solid #7c7b7b;
}

.default-grey:active, .default-grey:hover, .default-grey:focus {
  background-color: rgb(255 255 255) !important;
  border-color: rgb(124 123 123) !important;
  color: rgb(124 123 123) !important;
}

/*transparent button */
.trans-button {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  line-height: 14px;
  text-transform: uppercase;
  color: #B2B2B2;
  padding: 13px 40px 11px;
  background: transparent;
  border: 1px solid rgba(94, 94, 94, 0.5);
  box-sizing: border-box;
  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.trans-button:hover,
.trans-button:active {
  border: 1px solid rgba(229, 37, 37, 0.5);
  color: #ffffff;
}

.trans-button:active {
  margin-top: 1px;
  margin-bottom: -1px;
}

/*red button */
.red-button {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 13px 40px 11px;
  background: #E52525;
  border: 1px solid #E52525;
  box-sizing: border-box;
  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.red-button:hover,
.red-button:active {
  background: #ffffff;
  color: #E52525;
  border-color: #ffffff;
}

.red-button:active {
  margin-top: 1px;
  margin-bottom: -1px;
}

/*back button */
.back-button {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 12px 20px 12px 60px;
  border: 1px solid #E52525;
  box-sizing: border-box;
  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.back-button:hover,
.back-button:active {
  color: #E52525;
  border-color: #ffffff;
}

.back-button:active {
  margin-top: 1px;
  margin-bottom: -1px;
}

.light-theme .red-button:hover,
.light-theme .red-button:active {
  background: #EEEDF3;
  border-color: #EEEDF3;
}

.light-theme .trans-button
{
  color: #989898;
  border-color: #D4D4D4;
}

.light-theme .trans-button:hover
{
  border-color: #000000;
  color: #000000;
}

</style>
