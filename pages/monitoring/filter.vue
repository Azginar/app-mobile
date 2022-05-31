<template>
  <div class="filter-rating">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3>Filter</h3>
      </template>
    </with-close-ic-header>
    <div class="rating-filter-container container">
      <div class="select-accounts-type-container">
        <div>
          <p>start micro</p>
          <switch-button id="'start-micro'" />
        </div>
        <div style="width: 10px" />
        <div>
          <p>ecn classic</p>
          <switch-button id="'ecn-classic'" />
        </div>
        <div style="width: 10px" />
        <div>
          <p>ecn pro</p>
          <switch-button id="'ecn-pro'" />
        </div>
      </div>

      <div class="filters-block">
        <two-slider-input
          :label="'Profitability'"
          :filed-label="'%'"
          :value="profitabilityFilter"
          :on-change="setProfitabilityFilter"
        />

        <two-slider-input
          :label="'Equity'"
          :filed-label="'USD'"
          :value="equityFilter"
          :on-change="setEquityFilter"
        />

        <two-slider-input
          :label="'Trader\'s commission'"
          :filed-label="'%'"
          :value="tradersCommissionFilter"
          :on-change="setTradersCommissionFilter"
        />

        <two-slider-input
          :label="'Lifespan'"
          :filed-label="'day'"
          :value="lifespanFilter"
          :on-change="setLifespanFilter"
        />

        <two-slider-input
          :label="'Investors'"
          :filed-label="''"
          :value="investorsFilter"
          :on-change="setInvestorsFilter"
        />

        <two-slider-input
          :float-values="true"
          :label="'Investors\' equity'"
          :filed-label="'USD'"
          :value="investorsEquityFilter"
          :on-change="setInvestorsEquityFilter"
        />
      </div>

      <form-button-with-wrap
        :click-event="goBack"
      />
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

import TwoSliderInput from '@/components/monitoring/two-slider-input'
import SwitchButton from '@/components/switch-button'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import FormButtonWithWrap from '@/components/form-button-with-wrap'
import {
  GET_EQUITY_FILTER, GET_INVESTOR_FILTER, GET_INVESTORS_EQUITY_FILTER, GET_LIFESPAN_FILTER,
  GET_PROFITABILITY_FILTER, GET_TRADERS_COMMISSION_FILTER,
  SET_EQUITY_FILTER, SET_INVESTORS_EQUITY_FILTER, SET_INVESTORS_FILTER, SET_LIFESPAN_FILTER,
  SET_PROFITABILITY_FILTER, SET_TRADERS_COMMISSION_FILTER
} from '@/modules/monitoring/constants'

const { mapGetters, mapActions } = createNamespacedHelpers('monitoring')

export default {
  components: {
    WithCloseIcHeader,
    SwitchButton,
    TwoSliderInput,
    FormButtonWithWrap
  },
  computed: {
    ...mapGetters({
      profitabilityFilter: GET_PROFITABILITY_FILTER,
      equityFilter: GET_EQUITY_FILTER,
      tradersCommissionFilter: GET_TRADERS_COMMISSION_FILTER,
      lifespanFilter: GET_LIFESPAN_FILTER,
      investorsFilter: GET_INVESTOR_FILTER,
      investorsEquityFilter: GET_INVESTORS_EQUITY_FILTER
    })
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    ...mapActions({
      setProfitabilityFilter: SET_PROFITABILITY_FILTER,
      setEquityFilter: SET_EQUITY_FILTER,
      setTradersCommissionFilter: SET_TRADERS_COMMISSION_FILTER,
      setLifespanFilter: SET_LIFESPAN_FILTER,
      setInvestorsFilter: SET_INVESTORS_FILTER,
      setInvestorsEquityFilter: SET_INVESTORS_EQUITY_FILTER
    })
  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}
.filter-rating .filters-block > div {
  margin-top: 40px !important;
}

.filter-rating .filters-block .two-field-select-input {
  padding-top: 10px;
}

.filter-rating .filters-block:first-child {
  padding-top: 20px;
}

.filter-rating .filters-block div p {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  /* Neutral Gray */
  color: #737373;
  text-align: center;
}

.select-accounts-type-container {
  display: flex;
  justify-content: space-around;
}

.select-accounts-type-container div p {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  /* Neutral Gray */
  color: #737373;
  text-align: center;
}

.select-accounts-type-container div .button-switch {
  margin-top: 10px;
}

.select-accounts-type-container div .button-switch .lbl-off {
  color: #ffffff;
}

.select-accounts-type-container div .button-switch .switch:before {
  background: #737373;
}

.select-accounts-type-container div .button-switch .switch:checked:before {
  background: #E52525;
}

.filter-rating .button-switch
{
  height: 24px;
  width: 60px;
  margin-left: auto;
  margin-right: auto;
}

.filter-rating .button-switch .switch:before
{
  height: 24px;
  width: 60px;
}

.filter-rating .button-switch .switch:after
{
  width: 18px;
  height: 18px;
  top: 3px;
  left: 37px;
}

.filter-rating .button-switch .lbl-on,
.filter-rating .button-switch .lbl-off
{
  font-size: 10px;
  line-height: 97.52%;
}

.filter-rating .button-switch .lbl-on
{
  right: 9px;
  top: 7px;
}

.filter-rating .button-switch .lbl-off
{
  top: 7px;
  left: 9px;
}

.filter-rating .button-switch .switch:checked:after {
  transform: translate(-34px, 0);
  opacity: 1;
}

.filter-rating  .button-switch .switch:checked ~ .lbl-on {
  opacity: 1;
}

.filter-rating .ok-button-container
{
  margin-top: 40px;
}

@media (max-width: 340px) {
  .page-container .period-button .filter-block .trans-button {
    width: 140px !important;
  }

  .filter-container {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
}

</style>
