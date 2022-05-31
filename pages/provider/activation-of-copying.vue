<template>
  <div class="activate-of-copying-page container">
    <with-close-ic-header
      :go-back="() => $router.back()"
    >
      <template v-slot:name>
        <h3>Activation of copying</h3>
      </template>
    </with-close-ic-header>
    <div class="simple-expert-mode">
      <default-button
        :click-event="() => changeCopyTraderMode(copyTraderMode)"
        :label="copyTraderMode"
        :type="'trans-button'"
      />
    </div>
    <div v-if="copyTraderMode === 'simple mode'" class="page-name">
      <p>Copying in proportion to investor’s equity</p>
    </div>

    <account-context-information
      :data-array="bankAndAccountDetails"
    />

    <div class="activate-copying-settings-block">
      <SimpleSelectBlack
        :options="['PAYMENT_METHOD', 'SimpleSelectBlack']"
        :handle-select="() => {}"
        :selected="'PAYMENT_METHOD'"
        :label="'Select YOUR account (only start micro type)'"
      />
      <div v-if="copyTraderMode === 'expert mode'" class="expert-mode-settings">
        <SimpleSelectBlack
          :options="['Copy full size 1 for 1', '- 500 USD']"
          :handle-select="() => {}"
          :selected="'Copy full size 1 for 1'"
          :label="'Copy type'"
        />
        <div class="volume-lots-input">
          <span>VOLUME (lots) </span>
          <black-input :value="'1'" />
        </div>
      </div>

      <SimpleSelectBlack
        :options="['- 500 USD', '- 500 USD']"
        :handle-select="() => {}"
        :selected="'- 500 USD'"
        :label="'STOP COPY (loss)'"
      />
      <SimpleSelectBlack
        :options="['- 500 USD', '- 500 USD']"
        :handle-select="() => {}"
        :selected="'- 500 USD'"
        :label="'STOP COPY (PROFIT)'"
      />
    </div>
    <div class="big-check-box-wrapper">
      <big-check-box />
    </div>
    <form-button-with-wrap
      :click-event="() => $router.back()"
    />
  </div>
</template>
<script>

import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import SimpleSelectBlack from '@/components/SimpleSelectBlack'
import BigCheckBox from '@/components/monitoring/big-check-box'
import FormButtonWithWrap from '@/components/form-button-with-wrap'
import BlackInput from '@/components/black-input'

export default {
  components: {
    WithCloseIcHeader,
    SimpleSelectBlack,
    BigCheckBox,
    FormButtonWithWrap,
    BlackInput
  },
  data () {
    return {
      bankAndAccountDetails: [
        {
          p: 'TRADER ACCOUNT',
          span: '@Dshadow'
        },
        {
          p: 'TRADER ACCOUNT',
          span: 'STR-6106390'
        },
        {
          p: 'Type ACCOUNT',
          span: 'Start Micro'
        }
      ],
      copyTraderMode: 'simple mode'
    }
  },
  methods: {
    changeCopyTraderMode (currentMode) {
      this.copyTraderMode = currentMode === 'simple mode' ? 'expert mode' : 'simple mode'
    }

  }
}
</script>
<style>

.expert-mode-settings .volume-lots-input {
  margin-top: 15px;
}

.expert-mode-settings .volume-lots-input span {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 97.52%;
  /* Neutral Gray */
  color: #737373;
  margin-left: 15px;
}

.expert-mode-settings .volume-lots-input input{
  margin-top: 5px;
}

.activate-of-copying-page .simple-expert-mode {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-right: 15px;
}

.activate-of-copying-page .simple-expert-mode .trans-button
{
  padding-right: 20px;
  padding-left: 20px;
  color: #737373;
  border: 1px solid rgba(94, 94, 94, 0.5);
}

.activate-of-copying-page .big-check-box-wrapper {
  margin-top: 0;
}

.activate-of-copying-page .container-close-ic-header
{
  padding-left: 0;
  padding-right: 0;
}

.activate-of-copying-page .ok-button-container {
  margin-top: 40px;
}

.activate-of-copying-page .check-box-with-html input[type=checkbox] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(5); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
}

.activate-of-copying-page .page-name p {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  color: #FFFFFF;
}

.activate-of-copying-page .page-name {
  margin-top: 20px;
}

.activate-of-copying-page .activate-copying-settings-block .selector-wrapper-black {
  margin-top: 20px;
}

.container {
  padding-left: 20px;
  padding-right: 20px;
}

.light-theme .activate-of-copying-page .page-name p,
.light-theme aside .col-details span
{
  color: #000000;
}

.light-theme aside .col-details p,
.light-theme .big-check-box-container .checkbox-text a
{
  color: #989898;
}

.light-theme aside
{
  background: #ffffff;
}
</style>
