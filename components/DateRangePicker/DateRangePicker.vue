<template>
  <date-range-picker-lib
    ref="picker"
    v-model="dateRange"
    :min-date="minDate"
    :max-date="maxDate"
    :single-date-picker="false"
    :time-picker="false"
    :locale-data="locale"
    :opens="'left'"
    :class="{'date-picker-highlight': isActive}"
    :toogle="isActive"
    :auto-apply="true"

    @update="updateValues"
  >
    <div slot="footer" class="slot" />
  </date-range-picker-lib>
</template>
<script>
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

import DateRangePicker from 'vue2-daterange-picker'

export default {
  name: 'DataRangePicker',
  components: {
    'date-range-picker-lib': DateRangePicker
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
  created () {
    this.dateRange = {
      startDate: new Date() - 7,
      endDate: new Date()
    }
  },
  methods: {
    updateValues (value) {
      const { endDate, startDate } = value

      this.dateRange.startDate = startDate
      this.dateRange.endDate = endDate
    },
    activate () {
      this.isActive = true
    }
  }
}

</script>
<style>
    .vue-daterange-picker
    {
      background: #1B1B1B;
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

    .vue-daterange-picker .form-control
    {
      padding: 0;
      background: #1B1B1B;
      height: inherit;
      border: none;
    }

    .ranges
    {
      display: none;
    }
    .range-text {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: "Open Sans",sans-serif;
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

    .vue-daterange-picker .dropdown-menu
    {
      background: #414141;
      border: 1px solid rgba(94, 94, 94, 0.5);
      min-width: auto !important;
    }

    .vue-daterange-picker .daterangepicker .calendar-table
    {
      background-color: #414141;
      border: none;
    }

    .vue-daterange-picker .daterangepicker .drp-calendar
    {
      width: 100%;
      max-width: 100%;
    }

    .vue-daterange-picker .daterangepicker.opensleft:before,
    .vue-daterange-picker .daterangepicker.opensleft:after
    {
      display: none;
    }

    .vue-daterange-picker .daterangepicker .calendar-table td,
    .vue-daterange-picker .daterangepicker .calendar-table th
    {
      background-color: #414141;
      width: 40px;
      height: 40px;
      border: none;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: 0;
    }

    .vue-daterange-picker .daterangepicker.show-ranges .drp-calendar.left
    {
      border-left: none;
    }

    .vue-daterange-picker .daterangepicker td.active,
    .vue-daterange-picker .daterangepicker td.in-range
    {
      background: #333333;
      color: #ffffff !important;
    }

    .vue-daterange-picker .daterangepicker td.end-date
    {
      position: relative;
    }

    .vue-daterange-picker .daterangepicker td.end-date:before
    {
      height: 100%;
      width: 2px;
      background: #737373;
      border-radius: 0px 2px 2px 0px;
      content: "";
      position: absolute;
      right: 0;
      top: 0;
    }

    .vue-daterange-picker .daterangepicker th.prev,
    .vue-daterange-picker .daterangepicker th.next
    {
      background: #333333 !important;
      position: relative;
      outline: none !important;
      border: 1px solid rgba(94, 94, 94, 0.5);
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
    }

    .daterangepicker .calendar-table .next span,
    .daterangepicker .calendar-table .prev span
    {
      border-color: #737373;
      border-width: 0 1px 1px 0;
      padding: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
    }

    .daterangepicker .calendar-table .next span
    {
      margin-left: -6px;
      margin-top: -6px;
    }

    .daterangepicker .calendar-table .prev span
    {
      margin-left: -2px;
      margin-top: -6px;
    }

    .vue-daterange-picker .daterangepicker th.prev:hover span,
    .vue-daterange-picker .daterangepicker th.next:hover span
    {
      border-color: #ffffff;
    }

    .vue-daterange-picker .daterangepicker .drp-calendar
    {
      padding: 9px;
    }

    .vue-daterange-picker .daterangepicker .calendars-container
    {
      display: block;
    }

    .vue-daterange-picker .daterangepicker td:hover
    {
      background: rgba(51, 51, 51, 0.5);
      color: #B2B2B2;
    }

    .vue-daterange-picker .daterangepicker .calendar-table th
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      color: #737373;
    }

    .vue-daterange-picker .daterangepicker .calendar-table td
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      text-transform: uppercase;
      color: #737373;
    }

    .vue-daterange-picker .daterangepicker.ltr .drp-calendar.left .calendar-table
    {
      padding-right: 0;
    }

    .vue-daterange-picker .daterangepicker th.month
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      text-transform: uppercase;
      color: #B2B2B2;
    }

    .date-picker-highlight .reportrange-text[data-v-4f8eb193]{
        border-color: rgb(51 187 255);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 136, 204, 0.3);
    }

    .light-theme .vue-daterange-picker .form-control,
    .light-theme .vue-daterange-picker
    {
      background: #F7F6FB;
      color: #989898;
    }

    .light-theme .vue-daterange-picker
    {
      border: 1px solid #D4D4D4;
    }

    .light-theme .date-range-picker-icon .icon-block
    {
      background: #F7F6FB;
    }

    .light-theme .vue-daterange-picker .daterangepicker.show-ranges .drp-calendar.left,
    .light-theme .vue-daterange-picker .daterangepicker.show-ranges .drp-calendar.right,
    .light-theme .vue-daterange-picker .daterangepicker .calendar-table,
    .light-theme .vue-daterange-picker .daterangepicker .calendar-table td,
    .light-theme .vue-daterange-picker .daterangepicker .calendar-table th
    {
      background: #EEEDF3;
    }

    .light-theme .vue-daterange-picker .dropdown-menu
    {
      border-color: #D4D4D4;
      background: #D4D4D4;
    }

    .light-theme .vue-daterange-picker .daterangepicker td.active,
    .light-theme .vue-daterange-picker .daterangepicker td.in-range
    {
      color: #000000 !important;
      background: #ffffff;
    }

    .light-theme .vue-daterange-picker .daterangepicker th.prev,
    .light-theme .vue-daterange-picker .daterangepicker th.next
    {
      background: #ffffff !important;
    }

    .light-theme .vue-daterange-picker .daterangepicker th.prev:hover span,
    .light-theme .vue-daterange-picker .daterangepicker th.next:hover span
    {
      border-color: #000000;
    }

    .light-theme .vue-daterange-picker .daterangepicker th.month
    {
      color: #989898;
    }

    .light-theme .date-range-picker-icon .icon-block,
    .light-theme .date-range-picker-icon .vue-daterange-picker
    {
      border-color: #D4D4D4;
    }

</style>
