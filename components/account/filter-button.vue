<template>
  <div class="filter-button-component" @click="clickButton">
    <div class="icon-block">
      <slot v-if="selected" name="icon" />
    </div>
    <div class="text-block" :class="{'selected-filter': selected}">
      {{ label }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'FilterButton',
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    clickButton: {
      type: Function,
      default: () => {}
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.filter-button-component {
  display: flex;
  justify-content: flex-start;
  background: rgba(36, 36, 36, 0.5);
  margin-bottom: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  cursor: pointer;
}

.filter-button-component .icon-block {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  margin-left: 20px;
  width: 15px;
}

.filter-button-component .text-block {
  font-family: Montserrat;
  display: block;
  font-style: normal;
  text-transform: uppercase;
  color: #737373;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  padding-top: 23px;
  padding-bottom: 22px;
  margin-left: 16px;
}

.filter-button-component .text-block.selected-filter {
  color: white;
}

.light-theme .filter-button-component .text-block.selected-filter
{
  color: #000000;
}

.light-theme .filter-button-component
{
  background: #ffffff;
}
</style>
