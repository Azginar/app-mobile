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
    @update="updateValues"
  >
    <div slot="footer" slot-scope="data" class="slot">
      <div class="drp-buttons">
        <div class="range-text">
          {{ data.rangeText.replaceAll('/', '-') }}
        </div>
        <button class="cancelBtn btn btn-sm btn-default" type="button" @click="data.clickCancel">
          Cancel
        </button>
        <button class="applyBtn btn btn-sm btn-primary" type="button" @click="data.clickApply">
          Apply
        </button>
      </div>
    </div>
  </date-range-picker-lib>
</template>
<script>
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

import DateRangePicker from 'vue2-daterange-picker'

export default {
  name: 'DataRangePickerWithButtons',
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
    .date-picker-highlight .reportrange-text[data-v-4f8eb193]{
        border-color: rgb(51 187 255);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 136, 204, 0.3);
    }

</style>
