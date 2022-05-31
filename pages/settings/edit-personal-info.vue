<template>
  <div class="edit-personal-info">
    <div class="container">
      <div class="header-form">
        <h3>Edit your personal info</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="row-line">
        <label>Full name</label>
        <black-input
          :value="FULL_NAME_CLIENT"
          :errors="ERRORS"
          :handle-input="CHANGE_USER_SETTINGS_FORM_FULL_NAME"
        />
      </div>
      <div class="row-line">
        <SimpleSelectBlack
          :options="['Male', 'Female']"
          :handle-select="() => {}"
          :label="'Gender'"
          :selected="'Male'"
        />
      </div>
      <div class="row-line">
        <label>Date of birth</label>
        <DateRangePicker />
      </div>
      <div class="row-line">
        <SimpleSelectBlack
          :options="getRootCountries"
          :handle-select="CHANGE_USER_SETTINGS_FORM_COUNTRY"
          :label="'Country'"
          :selected="COUNTRY_DATA_USER"
        />
      </div>
      <div class="row-line">
        <label>Region</label>
        <black-input
          :value="REGION_DATA_USER"
          :attribute="'region'"
          :errors="ERRORS"
          :handle-input="CHANGE_USER_SETTINGS_FORM_REGION"
        />
      </div>
      <div class="row-line">
        <label>City</label>
        <black-input
          :value="CITY_DATA_USER"
          :errors="ERRORS"
          :attribute="'city'"
          :handle-input="CHANGE_USER_SETTINGS_FORM_CITY"
        />
      </div>
      <div class="row-line">
        <label>Address</label>
        <black-input
          :value="ADDRESS_DATA_USER"
          :errors="ERRORS"
          :attribute="'address'"
          :handle-input="CHANGE_USER_SETTINGS_FORM_ADDRESS"
        />
      </div>
      <div class="row-line">
        <label>Postcode</label>
        <black-input
          :value="POSTCODE_DATA_USER"
          :handle-input="CHANGE_USER_SETTINGS_FORM_POSTCODE"
          :attribute="'postcode'"
          :errors="ERRORS"
        />
      </div>
      <div class="row-line">
        <label>Phone</label>
        <input-with-button
          :value="PHONE_DATA_USER"
          :errors="ERRORS"
          :handle-input="CHANGE_USER_SETTINGS_FORM_PHONE"
        >
          <template v-slot:button>
            <default-button
              :label="'Change'"
              :click-event="() => {}"
              :type="'trans-button'"
            />
          </template>
        </input-with-button>
      </div>
      <div class="row-line">
        <label>About me</label>
        <black-input
          :value="ABOUT_USER_DATA_USER"
          :errors="ERRORS"
          :handle-input="CHANGE_USER_SETTINGS_FORM_ABOUT"
        />
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'Save'"
          :click-event="SAVE_CHANGES"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsFormRequests from '@/services/userSettingsFormRequests'
import BlackInput from '../../components/black-input'
import SimpleSelectBlack from '../../components/SimpleSelectBlack.vue'
import InputWithButton from '../../components/input-with-button'
import DefaultButton from '../../components/default-button'
import CloseSVG from '../../assets/layout/close.svg'
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker'
import getAllowCountryList from '../../services/loadAllowCountryList'

const { mapGetters, mapActions, mapState } = createNamespacedHelpers('settings')

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    BlackInput,
    SimpleSelectBlack,
    'default-button': DefaultButton,
    InputWithButton,
    CloseSVG,
    DateRangePicker
  },
  async asyncData (context) {
    const getAllowCountryListPromise = getAllowCountryList(context)
    const userSettings = userSettingsFormRequests(context)
    await Promise.all([
      getAllowCountryListPromise,
      userSettings
    ])
  },
  computed: {
    ...mapState(['ERRORS']),
    ...mapGetters([
      'FULL_NAME_CLIENT',
      'COUNTRY_DATA_USER',
      'CITY_DATA_USER',
      'POSTCODE_DATA_USER',
      'REGION_DATA_USER',
      'ADDRESS_DATA_USER',
      'PHONE_DATA_USER',
      'ABOUT_USER_DATA_USER',
      'getRootCountries'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_USER_SETTINGS_FORM_FULL_NAME',
      'CHANGE_USER_SETTINGS_FORM_CITY',
      'CHANGE_USER_SETTINGS_FORM_REGION',
      'CHANGE_USER_SETTINGS_FORM_POSTCODE',
      'CHANGE_USER_SETTINGS_FORM_ADDRESS',
      'CHANGE_USER_SETTINGS_FORM_PHONE',
      'CHANGE_USER_SETTINGS_FORM_ABOUT',
      'SAVE_CHANGES',
      'CHANGE_USER_SETTINGS_FORM_COUNTRY'
    ])
  }
}
</script>

<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.daterangepicker {
  left: 0 !important;
  right: auto !important;
}

.daterangepicker ul {
  width: 100%;
}

.edit-personal-info .header-form {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 40px;
}

.edit-personal-info .close-ic {
  cursor: pointer;
}

.edit-personal-info h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  margin-right: 10px;
  color: #FFFFFF;
}

.edit-personal-info label {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  padding-left: 20px;
  display: block;
  font-size: 11px;
  line-height: 97.52%;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #737373;
}

.edit-personal-info .row-line {
  margin-bottom: 20px;
}

.edit-personal-info .btn-block {
  text-align: center;
  padding: 20px 0 100px;
}

.edit-personal-info .btn-block button {
  padding: 17px 40px;
  font-size: 15px;
  line-height: 16px;
}

.light-theme .edit-personal-info h3
{
  color: #000000;
}

.light-theme .vue-daterange-picker .reportrange-text
{
  height: 48px;
}

</style>
