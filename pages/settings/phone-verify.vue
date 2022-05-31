<template>
  <div class="verify-phone">
    <div class="container">
      <div class="header-form">
        <h3>Verify Phone via SMS</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="send-code-block">
        <div class="message-info">
          Verification code was sent by SMS to<br>+79520552333
        </div>
        <default-button
          :type="'trans-button'"
          :label="'Resend code'"
          :click-event="() => {}"
        />
      </div>
      <div class="row-line">
        <label>Phone</label>
        <input-with-button :value="'+7 9520552333'">
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
        <label>Enter a code</label>
        <black-input />
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'Verify'"
          :click-event="() => {}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CloseSVG from '../../assets/layout/close.svg'
import InputWithButton from '../../components/input-with-button'
import DefaultButton from '../../components/default-button'
import BlackInput from '../../components/black-input'
export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    BlackInput,
    CloseSVG,
    'default-button': DefaultButton,
    InputWithButton
  }
}
</script>

<style>
  .container
  {
    padding-left: 20px;
    padding-right: 20px;
  }

  .verify-phone .header-form
  {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .verify-phone .close-ic
  {
    cursor: pointer;
  }

  .verify-phone h3
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    margin-right: 10px;
    color: #FFFFFF;
  }

  .verify-phone .message-info
  {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #8DC640;
    margin-bottom: 10px;
  }

  .verify-phone label
  {
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

  .verify-phone .row-line
  {
    margin-bottom: 20px;
  }

  .verify-phone .btn-block
  {
    text-align: center;
    padding: 20px 0 100px;
  }

  .verify-phone .btn-block button
  {
    padding: 17px 40px;
    font-size: 15px;
    line-height: 16px;
  }

  .verify-phone .send-code-block
  {
    margin-bottom: 40px;
  }

  .light-theme .verify-phone h3
  {
    color: #000000;
  }
</style>
