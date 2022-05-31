<template>
  <div class="finance-page-works-hours">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3 v-if="GET_NAME_PARTNER">
          {{ GET_NAME_PARTNER.title }}
        </h3>
      </template>
    </with-close-ic-header>
    <h4>Exchange rates and commission</h4>
    <div class="content-row">
      <div class="row-line">
        <div v-for="row in RATES_AND_COMMISSION" :key="row.title">
          <div class="form-group">
            <p>{{ row.title }}</p>
            <span>{{ row.value }}</span>
          </div>
        </div>
      </div>
      <h4>Working Hours</h4>
      <div class="content-row">
        <div class="row-line">
          <div v-for="row in WORKING_HOURS" :key="row.title">
            <div v-if="isRowTitleText(row.title)" class="form-group">
              <p>{{ row.title }}</p>
              <span>{{ row.value }}</span>
            </div>
            <div v-else class="text form-group">
              Monday to Friday ONLY<br>
              <i>Form submitted after working hours will be processed the next working day.</i>
            </div>
          </div>
        </div>
      </div>
      <h4>Support</h4>
      <div class="content-row support-row">
        <div class="row-line">
          <div v-for="row in SUPPORT_INFO_PARTNER" :key="row.title">
            <div class="form-group">
              <p>{{ row.title }}</p>
              <span>{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'ОК'"
          :click-event="goBack"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_ID_DEPOSIT_LOCAL, CHANGE_ID_PARTNER } from '@/modules/finance/mutation-types'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')

export default {
  layout: 'NoLayout',
  name: 'FinanceDepositMoreInfo',
  components: {
    WithCloseIcHeader
  },
  computed: {
    ...mapState([
      'RATES_AND_COMMISSION',
      'WORKING_HOURS',
      'SUPPORT_INFO_PARTNER'
    ]),
    ...mapGetters([
      'GET_TITLE_DEPOSIT_LOCAL_ELEM',
      'GET_NAME_PARTNER'
    ])
  },
  mounted () {
    this[CHANGE_ID_DEPOSIT_LOCAL](this.$route.params.id)
    this[CHANGE_ID_PARTNER](this.$route.params.form)
  },
  methods: {
    ...mapActions([CHANGE_ID_DEPOSIT_LOCAL, CHANGE_ID_PARTNER]),
    isRowTitleText (title) {
      return title !== 'Monday to Friday ONLY'
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style>
.finance-page-works-hours
{
  padding: 30px 20px 80px;
  background: #2B2B2B;
}

.finance-page-works-hours .container-close-ic-header
{
  padding-left: 0;
  padding-right: 0;
}

.finance-page-works-hours .container-close-ic-header .header-form
{
  margin-top: 0;
}

.finance-page-works-hours h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.finance-page-works-hours p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.finance-page-works-hours span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #B2B2B2;
}

.finance-page-works-hours .form-group
{
  margin-bottom: 20px;
}

.finance-page-works-hours .row-line
{
  margin-bottom: 40px;
}

.finance-page-works-hours .text
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.finance-page-works-hours .btn-block
{
  text-align: center;
}

.finance-page-works-hours .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.light-theme .finance-page-works-hours
{
  background: #F7F6FB;
}

.light-theme .finance-page-works-hours h4
{
  color: #000000;
}

.light-theme .finance-page-works-hours span
{
  color: #989898;
}
</style>
