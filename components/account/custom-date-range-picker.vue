<template>
  <div class="date-range-picker-full-page">
    <date-range-picker-lib
      ref="picker"
      v-model="dateRange"
      :min-date="minDate"
      :max-date="maxDate"
      :single-date-picker="'range'"
      :time-picker="false"
      :locale-data="locale"
      :opens="'center'"
      :class="{'date-picker-highlight': true}"
      :toogle="isActive"
      :auto-apply="true"

      @update="updateValues"
    >
      <div slot="footer" class="slot" />
      <template
        #input="picker"
      >
        <div class="custom-period-date-view">
          <div class="input-wrapper">
            <label>From</label>
            <black-input
              :value="new Date(picker.startDate).toLocaleDateString()"
              :disabled="true"
            />
          </div>
          <div class="input-wrapper">
            <label>Till</label>
            <black-input
              :value="new Date(picker.endDate).toLocaleDateString()"
              :disabled="true"
            />
          </div>
        </div>
      </template>
    </date-range-picker-lib>
  </div>
</template>
<script>
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

import DateRangePicker from 'vue2-daterange-picker'

export default {
  name: 'CustomDateRangePicker',
  components: {
    'date-range-picker-lib': DateRangePicker
  },
  props: {
    updateRangeInStore: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      minDate: null,
      maxDate: null,
      dateRange: {
        startDate: null,
        endDate: null
      },
      locale: {
        direction: 'ltr',
        format: 'yyyy-mm-dd',
        separator: ' - '
      },
      isActive: false
    }
  },
  mounted () {
    /**
     * manual open picker and then disable to close it
     */
    this.$refs.picker.togglePicker(true)
    this.$refs.picker.togglePicker = () => {}
  },
  created () {
    const endDate = new Date()
    const startDate = new Date()
    this.dateRange = {
      startDate: startDate.setDate(startDate.getDate() - 30),
      endDate
    }
    this.updateRangeInStore({ startDate, endDate })
  },
  methods: {
    updateValues (value) {
      const { endDate, startDate } = value

      this.dateRange.startDate = startDate
      this.dateRange.endDate = endDate

      this.updateRangeInStore({ startDate, endDate })
    },
    activate () {
      this.isActive = true
    }
  }
}

</script>
<style>
.custom-period-date-view
{
  display: flex;
}

.custom-filter-period-container .custom-period-date-view .input-wrapper
{
  width: 50% !important;
}

.custom-filter-period-container .custom-period-date-view .input-wrapper:first-child
{
  padding-right: 10px;
}

.custom-filter-period-container .custom-period-date-view .input-wrapper:last-child
{
  padding-left: 10px;
}

.ok-button-container
{
  margin-top: 40px !important;
}

.custom-filter-period-container .ok-button-container
{
  padding-bottom: 40px;
}

.custom-filter-period-container .ok-button-container button
{
  font-size: 15px;
  line-height: 15px;
  padding-top: 16px;
  padding-bottom: 17px;

}

.date-range-picker-full-page .custom-period-date-view label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 97.52%;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
}

.date-range-picker-full-page .vue-daterange-picker
{
  height: auto !important;
  background: transparent;
}

.date-range-picker-full-page .daterangepicker.single.show-ranges .drp-calendar.left {
  border-left: #1B1B1B !important;
}

.date-range-picker-full-page .vue-daterange-picker {
  /*background: #1B1B1B;*/
  width: 100%;
  padding: 0 20px;
  height: 50px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 50px;
  color: #B2B2B2;
  border: none;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
}

.date-range-picker-full-page .daterangepicker
{
  margin-top: 40px;
  position: static;
  transform: none !important;
  -webkit-transform: none !important;
  min-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.date-range-picker-full-page .vue-daterange-picker .form-control {
  padding: 0;
  background: #333333;
  height: inherit;
  border: none;
}

.date-range-picker-full-page .ranges {
  display: none;
}

.date-range-picker-full-page .range-text {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Open Sans", sans-serif;
  direction: ltr;
  text-align: right;
  line-height: 12px;
  box-sizing: border-box;
  float: left;
  display: inline-block;
  font-size: 13px;
  padding: 8px 8px 0 0;
  color: #005cbf;
}

.date-range-picker-full-page .vue-daterange-picker .dropdown-menu {
  background: transparent;
  border: none;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendar-table {
  background-color: transparent;
  border: none;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .drp-calendar {
  width: 100%;
  max-width: 100%;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker.opensleft:before,
.date-range-picker-full-page .vue-daterange-picker .daterangepicker.opensleft:after {
  display: none;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendar-table td,
.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendar-table th {
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker.show-ranges .drp-calendar.left {
  border-left: none;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker td.in-range {
  background-color: #272727;
  color: #ffffff !important;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker td.end-date {
  position: relative;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker td.end-date:before {
  height: 100%;
  width: 2px;
  background: #737373;
  border-radius: 0px 2px 2px 0px;
  content: "";
  position: absolute;
  right: 0;
  top: 0;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker th.prev,
.date-range-picker-full-page .vue-daterange-picker .daterangepicker th.next {
  background: #333333 !important;
  position: relative;
  outline: none !important;
  border: 1px solid rgba(94, 94, 94, 0.5);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.date-range-picker-full-page .daterangepicker .calendar-table .next span,
.date-range-picker-full-page .daterangepicker .calendar-table .prev span {
  border-color: #737373;
  border-width: 0 1px 1px 0;
  padding: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
}

.date-range-picker-full-page .daterangepicker .calendar-table .next span {
  margin-left: -6px;
  margin-top: -6px;
}

.date-range-picker-full-page .daterangepicker .calendar-table .prev span {
  margin-left: -2px;
  margin-top: -6px;
}

.date-range-picker-full-page .daterangepicker.openscenter:after,
.date-range-picker-full-page .daterangepicker.openscenter:before
{
  display: none;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker th.prev:hover span,
.date-range-picker-full-page .vue-daterange-picker .daterangepicker th.next:hover span {
  border-color: #ffffff;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .drp-calendar {
  padding: 0;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendars-container {
  display: block;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendar-table th {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #737373;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendar-table td {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #737373;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker.ltr .drp-calendar.left .calendar-table {
  padding-right: 0;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker th.month {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #B2B2B2;
}

.date-range-picker-full-page .date-picker-highlight .reportrange-text[data-v-4f8eb193] {
  border-color: rgb(51 187 255);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 136, 204, 0.3);
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendar-table td.start-date:hover
{
  color: #E52525 !important;
  background: transparent !important;
}

.date-range-picker-full-page .vue-daterange-picker .daterangepicker .calendar-table td.start-date:hover:before
{
  display: none;
}

.light-theme .date-range-picker-full-page .vue-daterange-picker .form-control
{
  background: transparent;
}

.light-theme .custom-period-date-view .black-input
{
  background: #ffffff;
}

.light-theme .date-range-picker-full-page .vue-daterange-picker .daterangepicker th.prev,
.light-theme .date-range-picker-full-page .vue-daterange-picker .daterangepicker th.next
{
  background: #ffffff !important;
}

.light-theme .date-range-picker-full-page .vue-daterange-picker .daterangepicker td.in-range
{
  color: #000000 !important;
  background-color: #ffffff;
}

</style>
