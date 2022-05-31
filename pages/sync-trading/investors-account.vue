<template>
  <div class="open-trading-account-page">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goBack"
      />
    </div>
    <sub-menu-open-account/>
    <div class="form-block">
      <h4>Open investor’s accounts</h4>
      <div class="row-line">
        <div class="col-line">
          <SimpleSelectBlack
            :options="openAccountType"
            :handle-select="changeAccountType"
            :label="'Account type'"
            :selected="selectedOpenAccountType"
          />
        </div>
        <div class="row-line-col">
          <div class="col-line">
            <SimpleSelectBlack
              :options="leverage[selectedOpenAccountType]"
              :handle-select="changeLeverage"
              :selected="selectedLeverage[selectedOpenAccountType]"
              :label="'Leverage'"
            />
          </div>
          <div class="col-line">
            <SimpleSelectBlack
              :options="currency"
              :handle-select="changeCurrency"
              :selected="selectedCurrency"
              :label="'Currency'"
            />
          </div>
        </div>
      </div>
      <div class="check-box-container">
        <div class="check-box">
          <div class="check-box-content">
            <div><switch-button :id="'remember-me'" /></div>
            <div class="text-block">
              <p>I have read and agree to the following agreements:</p>
              <ul>
                <li>– <a href="https://tifia.com/uploads/docs/terms-of-business-en.pdf">Terms of Business</a></li>
                <li>– <a href="https://tifia.com/uploads/docs/client-agreement-en.pdf">Client agreement</a></li>
                <li>– <a href="https://tifia.com/uploads/docs/cfds-trading-conditions-and-risk-disclosure-en.pdf">CFDs trading conditions and risk disclosure</a></li>
                <li>– <a href="https://tifia.com/uploads/docs/tifia-swap-free-agreement-en.pdf">Agreement on the use of Swap Free accounts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'Open investor’s accounts'"
          :click-event="() => {}"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  GET_LEVERAGE_TYPE,
  GET_SELECTED_LEVERAGE_TYPE,
  GET_OPEN_ACCOUNT_TYPE,
  GET_SELECTED_OPEN_ACCOUNT_TYPE,
  GET_CURRENCY_ACCOUNT,
  GET_SELECTED_CURRENCY_ACCOUNT
} from '@/modules/accounts/getter-types'
import { CHANGE_SELECTED_OPEN_ACCOUNT_TYPE, CHANGE_SELECTED_LEVERAGE_TYPE, CHANGE_CURRENCY_ACCOUNT } from '@/modules/accounts/mutation-types'
import DefaultButton from '../../components/default-button'

export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    DefaultButton
  },
  computed: {
    openAccountType () {
      return this.$store.getters[`accounts/${GET_OPEN_ACCOUNT_TYPE}`]
    },
    selectedOpenAccountType () {
      return this.$store.getters[`accounts/${GET_SELECTED_OPEN_ACCOUNT_TYPE}`]
    },
    leverage () {
      return this.$store.getters[`accounts/${GET_LEVERAGE_TYPE}`]
    },
    selectedLeverage () {
      return this.$store.getters[`accounts/${GET_SELECTED_LEVERAGE_TYPE}`]
    },
    currency () {
      return this.$store.getters[`accounts/${GET_CURRENCY_ACCOUNT}`]
    },
    selectedCurrency () {
      return this.$store.getters[`accounts/${GET_SELECTED_CURRENCY_ACCOUNT}`]
    }
  },
  methods: {
    goBack () {
      this.$router.push('/accounts/investors-accounts')
    },
    changeAccountType (selected) {
      return this.$store.commit(`accounts/${CHANGE_SELECTED_OPEN_ACCOUNT_TYPE}`, selected)
    },
    changeLeverage (selected) {
      return this.$store.commit(`accounts/${CHANGE_SELECTED_LEVERAGE_TYPE}`, { leverage: selected, typeAccount: this.selectedOpenAccountType })
    },
    changeCurrency (selected) {
      return this.$store.commit(`accounts/${CHANGE_CURRENCY_ACCOUNT}`, selected)
    }
  }
}
</script>
<style>
.open-trading-account-page
{
  padding-bottom: 60px;
}

.open-trading-account-page .go-back-button
{
  margin-bottom: 40px;
  padding: 40px 20px 0;
}

.open-trading-account-page h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.open-trading-account-page .ul-tabs
{
  margin-bottom: 80px;
}

.open-trading-account-page .form-block
{
  padding-left: 20px;
  padding-right: 20px;
}

.open-trading-account-page .form-block h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.open-trading-account-page .form-block .row-line-col
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.open-trading-account-page .form-block .row-line-col .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  width: 50%;
}

.open-trading-account-page .form-block .col-line
{
  margin-bottom: 20px;
}

.open-trading-account-page .check-box {
  display: block;
}

.open-trading-account-page .check-box-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-content: center;
  width: 100%;
}

.open-trading-account-page .check-box-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.open-trading-account-page .check-box .text-block {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-top: 6px;
}

.open-trading-account-page .check-box .text-block ul
{
  padding-left: 0;
}

.open-trading-account-page .check-box .text-block ul li
{
  list-style-type: none;
  margin-top: 15px;
}

.open-trading-account-page .check-box .text-block ul li:first-child
{
  margin-top: 0;
}

.open-trading-account-page .check-box .text-block p
{
  margin-bottom: 10px;
}

.open-trading-account-page .check-box .text-block a
{
  color: #B2B2B2;
  text-decoration: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 140%;
  text-transform: uppercase;
}

.open-trading-account-page .check-box .text-block a:hover
{
  color: #ffffff;
}

.open-trading-account-page .button-switch {
  height: 24px;
  position: relative;
  width: 60px;
  margin-right: 10px;
}

.open-trading-account-page .button-switch .lbl-on,
.open-trading-account-page .button-switch .lbl-off {
  cursor: pointer;
  display: block;
  position: absolute;
  color: #ffffff !important;
  top: 0.5em;
  transition: opacity 0.25s ease-out 0.1s;
  text-transform: uppercase;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 97.52%;
  text-align: center;
}

.open-trading-account-page .button-switch .lbl-on {
  opacity: 0;
  right: 9px;
  top: 8px;
}

.open-trading-account-page .button-switch .lbl-off {
  padding: 0;
  left: 9px;
  top: 8px;
  color: #737373;
}

.open-trading-account-page .button-switch .switch {
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

.open-trading-account-page .button-switch .switch:before,
.open-trading-account-page .button-switch .switch:after {
  content: '';
  font-size: 1em;
  position: absolute;
}

.open-trading-account-page .button-switch .switch:before {
  border-radius: 1.25em;
  background: #737373;
  height: 24px;
  left: 0;
  top: 0;
  transition: background-color 0.25s ease-out 0.1s;
  width: 60px;
}

.open-trading-account-page .button-switch .switch:after {
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0.25;
  height: 18px;
  transform: translate(0, 0);
  transition: transform 0.25s ease-out 0.1s;
  width: 18px;
  top: 3px;
  left: 36px;
}

.open-trading-account-page .button-switch .switch:checked:after {
  transform: translate(-32px, 0);
  opacity: 1;
}

.open-trading-account-page .button-switch .switch:checked ~ .lbl-on {
  opacity: 1;
}

.open-trading-account-page .button-switch .switch:checked ~ .lbl-off {
  opacity: 0;
}

.open-trading-account-page .button-switch .switch:checked:before {
  background: #333333;
}

.open-trading-account-page .button-switch .switch:checked:before {
  background: #E52525;
}

.open-trading-account-page .btn-block
{
  text-align: center;
}

.open-trading-account-page .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 17px 40px 16px;
}
</style>
