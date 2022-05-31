<template>
  <date-range-picker
    v-model="dateRange"
    class="single"
    :single-date-picker="'single'"
    :time-picker="false"
    :show-week-numbers="false"
    :auto-apply="true"
    :show-dropdowns="allowChangeYearAndMonth"
    :ranges="false"
    :locale-data="locale"
    :opens="'right'"
    @update="updateValues"
  />
</template>
<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: 'DatePicker',
  components: {
    DateRangePicker
  },
  props: {
    storeValue: {
      type: String,
      default: ''
    },
    allowChangeYearAndMonth: {
      type: Boolean,
      default: false
    },
    update: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      dateRange: {
        startDate: new Date(this.storeValue)
      },
      locale: {
        direction: 'ltr',
        format: 'yyyy-mm-dd',
        separator: ' - '
      }
    }
  },
  methods: {
    updateValues (value) {
      this.dateRange.startDate = value.startDate
      this.update(value.startDate)
    }
  }
}
</script>
<style>
  .single.vue-daterange-picker{
    width: 100px !important;
  }
</style>
