<template>
  <div class="selector-wrapper-black">
    <label class="selector-label-black">{{ this.label }}</label>
    <v-select
      :options="this.options"
      :value="selected"
      :clearable="false"
      :searchable="searchable"
      :loading="this.inProgress"
      @input="this.handleSelect"
    >
      <template #spinner="{ loading }">
        <div v-if="loading" style="border-left-color: rgba(88,151,251,0.71); " class="vs__spinner">
          The .vs__spinner class will hide the text for me.
        </div>
      </template>
    </v-select>
  </div>
</template>
<script>
import vSelect from 'vue-select'

export default {
  name: 'SimpleSelectBlack',
  components: {
    'v-select': vSelect
  },
  props: {
    label: String,
    options: {
      type: Array,
      default: () => []
    },
    handleSelect: {
      type: Function,
      default: () => {
      }
    },
    selected: {
      type: String,
      default: ''
    },
    inProgress: Boolean,
    searchable: Boolean
  }
}
</script>
<style>
.selector-wrapper-black .selector-label-black {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  color: #737373;
  text-transform: uppercase;
  padding-left: 20px;
  margin-bottom: 5px;
  display: block;
  outline: none !important;
}

.selector-wrapper-black .vs__selected-options {
  padding: 0;
}

.selector-wrapper-black .vs__dropdown-toggle {
  background: #1B1B1B;
  padding-bottom: 0;
  height: 50px;
  border: 1px solid #1B1B1B;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
}

.selector-wrapper-black .vs--open .vs__dropdown-toggle {
  background: #414141;
  border: 1px solid rgba(94, 94, 94, 0.5);
  border-radius: 5px 5px 0 0;
  -moz-border-radius: 5px 5px 0 0;
  -webkit-border-radius: 5px 5px 0 0;
}

.selector-wrapper-black .vs__dropdown-toggle:hover {
  background: #414141;
  border: 1px solid rgba(94, 94, 94, 0.5);
}

.selector-wrapper-black .vs__selected {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 50px;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 20px;
  margin: 0;
  color: #B2B2B2;
  border: none;
}

.selector-wrapper-black .vs__actions svg {
  display: none;
}

.selector-wrapper-black .vs__actions {
  padding: 4px 32px 0 3px;
  background: url('https://tifia.com/images/new-site/arrow-dawn.svg') no-repeat scroll 0 50%;
}

.selector-wrapper-black .vs--open .vs__actions {
  padding: 4px 32px 0 3px;

}

.selector-wrapper-black .vs__dropdown-menu {
  background: #414141;
  box-shadow: none;
  min-width: auto;
  border-left: 1px solid rgba(94, 94, 94, 0.5);
  border-right: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.selector-wrapper-black .vs__dropdown-menu li {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 13px 20px 12px;
  height: auto;
  line-height: 15px !important;
}

.selector-wrapper-black .vs__dropdown-menu li.vs__dropdown-option--highlight {
  background: transparent !important;
  color: #B2B2B2 !important;
}

.selector-wrapper-black .vs__dropdown-menu li.vs__dropdown-option--selected {
  background: #242424 !important;
  color: #ffffff !important;
}

.selector-wrapper-black .vs__dropdown-menu li:hover {
  color: #B2B2B2;
  background: transparent;
}

.selector-wrapper-black .vs--unsearchable .vs__search {
  display: none;
}

.selector-wrapper {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 22px;
  color: #555;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  margin-bottom: 15px;
  height: 41px;
  margin-right: -15px;
  margin-left: -15px;
}

@media (max-width: 767px) {
  .selector-label {
    width: 100%;
    margin-left: 0;
    text-align: left !important;
  }
}

.selector-label {
  padding-top: 7px;
  margin-bottom: 0;
  text-align: right;
}

.form-group {
  height: 41px;
}

.v-select {
  position: relative;
  font-family: inherit;

}

.v-select, .v-select * {
  box-sizing: border-box
}

@-webkit-keyframes vSelectSpinner {
  0% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(1turn)
  }
}

@keyframes vSelectSpinner {
  0% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(1turn)
  }
}

.vs__fade-enter-active, .vs__fade-leave-active {
  pointer-events: none;
  transition: opacity .15s cubic-bezier(1, .5, .8, 1)
}

.vs__fade-enter, .vs__fade-leave-to {
  opacity: 0
}

.vs--disabled .vs__clear, .vs--disabled .vs__dropdown-toggle, .vs--disabled .vs__open-indicator, .vs--disabled .vs__search, .vs--disabled .vs__selected {
  cursor: not-allowed;
  background-color: #f8f8f8
}

.v-select[dir=rtl] .vs__actions {
  padding: 0 3px 0 6px
}

.v-select[dir=rtl] .vs__clear {
  margin-left: 6px;
  margin-right: 0
}

.v-select[dir=rtl] .vs__deselect {
  margin-left: 0;
  margin-right: 2px
}

.v-select[dir=rtl] .vs__dropdown-menu {
  text-align: right
}

.vs__dropdown-toggle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  padding: 0 0 4px;
  background: none;
  border: 1px solid rgba(60, 60, 60, .26);
  border-radius: 4px;
  white-space: normal;
  height: 34px;
}

.vs__selected-options {
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 2px;
  position: relative;
  width: 87%;
}

.vs__actions {
  display: flex;
  align-items: center;
  padding: 4px 6px 0 3px
}

.vs--searchable .vs__dropdown-toggle {
  cursor: text
}

.vs--unsearchable .vs__dropdown-toggle {
  cursor: pointer
}

.vs--open .vs__dropdown-toggle {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0
}

.vs__open-indicator {
  fill: rgba(60, 60, 60, .5);
  transform: scale(1);
  transition: transform .15s cubic-bezier(1, -.115, .975, .855);
  transition-timing-function: cubic-bezier(1, -.115, .975, .855)
}

.vs--open .vs__open-indicator {
  transform: rotate(180deg) scale(1)
}

.vs--loading .vs__open-indicator {
  opacity: 0
}

.vs__clear {
  fill: rgba(60, 60, 60, .5);
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8px
}

.vs__dropdown-menu {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  z-index: 1000;
  padding: 0 0;
  margin: 0;
  width: 100%;
  max-height: 350px;
  min-width: 160px;
  overflow-y: auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .15);
  border: 1px solid rgba(60, 60, 60, .26);
  border-top-style: none;
  border-radius: 0 0 4px 4px;
  text-align: left;
  list-style: none;
  background: #fff
}

.vs__no-options {
  text-align: center
}

.vs__dropdown-option {
  line-height: 22px !important;
  display: block;
  padding: 6px;
  clear: both;
  color: #333;
  white-space: nowrap;
  height: 34px;
  cursor: pointer;
}

.vs__dropdown-option:hover {
  cursor: pointer
}

.vs__dropdown-option--highlight {
  background: #5897fb !important;
  color: #fff !important
}

.vs__dropdown-option--disabled {
  background: inherit;
  color: rgba(60, 60, 60, .5)
}

.vs__dropdown-option--disabled:hover {
  cursor: inherit
}

.vs__selected {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid rgba(60, 60, 60, .26);
  border-radius: 4px;
  color: #333;
  line-height: 1.4;
  margin: 4px 2px 0;
  padding: 0 .25em;
  z-index: 0
}

.vs__dropdown-option--selected {
  background-color: #ddd;
  color: #333;
}

.vs__deselect {
  display: inline-flex;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-left: 4px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: none;
  fill: rgba(60, 60, 60, .5);
  text-shadow: 0 1px 0 #fff
}

.vs--single .vs__selected {
  background-color: transparent;
  border-color: transparent
}

.vs--single.vs--open .vs__selected {
  /*position: absolute;*/
  /*opacity: .4*/
}

.vs--single.vs--searching .vs__selected {
  display: none
}

.vs__search::-webkit-search-cancel-button {
  display: none
}

.vs__search::-ms-clear, .vs__search::-webkit-search-decoration, .vs__search::-webkit-search-results-button, .vs__search::-webkit-search-results-decoration {
  display: none
}

.vs__search, .vs__search:focus {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1.4;
  font-size: 1em;
  border: 1px solid transparent;
  border-left: none;
  outline: none;
  margin: 4px 0 0;
  padding: 0 7px;
  background: none;
  box-shadow: none;
  width: 0;
  max-width: 100%;
  flex-grow: 1;
  z-index: 1
}

.vs__search::-webkit-input-placeholder {
  color: inherit
}

.vs__search::-moz-placeholder {
  color: inherit
}

.vs__search:-ms-input-placeholder {
  color: inherit
}

.vs__search::-ms-input-placeholder {
  color: inherit
}

.vs__search::placeholder {
  color: inherit
}

.vs--unsearchable .vs__search {
  opacity: 1
}

.vs--unsearchable:not(.vs--disabled) .vs__search:hover {
  cursor: pointer
}

.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {
  opacity: .2
}

.vs__spinner {
  align-self: center;
  opacity: 0;
  font-size: 5px;
  text-indent: -9999em;
  overflow: hidden;
  border: .5em solid hsla(0, 0%, 39.2%, .1);
  border-left-color: rgba(60, 60, 60, .45);
  transform: translateZ(0);
  -webkit-animation: vSelectSpinner 1.1s linear infinite;
  animation: vSelectSpinner 1.1s linear infinite;
  transition: opacity .1s
}

.vs__spinner, .vs__spinner:after {
  border-radius: 50%;
  width: 4em;
  height: 4em
}

.vs--loading .vs__spinner {
  opacity: 1
}

.light-theme .selector-wrapper-black .vs__dropdown-toggle
{
  border-color: #D4D4D4;
}

.light-theme .selector-wrapper-black .vs__dropdown-menu
{
  background-color: #F7F6FB;
}

.light-theme .selector-wrapper-black .vs__dropdown-menu li.vs__dropdown-option--selected
{
  background: #ffffff !important;
  color: #000000 !important;
}

.light-theme .selector-wrapper-black .vs__dropdown-menu li:hover,
.light-theme .selector-wrapper-black .vs__selected
{
  color: #989898;
}

.light-theme .selector-wrapper-black .vs__dropdown-menu li.vs__dropdown-option--highlight
{
  color: #989898 !important;
}

.light-theme .selector-wrapper-black .vs__dropdown-toggle
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

.light-theme .selector-wrapper-black .vs__dropdown-menu
{
  border-color: #D4D4D4;
}

</style>
