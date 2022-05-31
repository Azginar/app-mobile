<template>
  <div class="verify-email">
    <div class="container">
      <div class="header-form">
        <h3>Verify Email</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="send-code-block">
        <div class="message-info">
          На Вашу почту пришло верификационное письмо c кодом
        </div>
        <default-button
          :type="'trans-button'"
          :label="'Resend code'"
          :click-event="() => {}"
        />
      </div>
      <div class="row-line">
        <label>Email</label>
        <input-with-button :value="'test@qmail.com'">
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
import BlackInput from '../../components/black-input'
import CloseSVG from '../../assets/layout/close.svg'
import InputWithButton from '../../components/input-with-button'
import DefaultButton from '../../components/default-button'
export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    CloseSVG,
    BlackInput,
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

  .verify-email .header-form
  {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .verify-email .close-ic
  {
    cursor: pointer;
  }

  .verify-email h3
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    margin-right: 10px;
    color: #FFFFFF;
  }

  .verify-email .message-info
  {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #8DC640;
    margin-bottom: 10px;
  }

  .verify-email label
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

  .verify-email .row-line
  {
    margin-bottom: 20px;
  }

  .verify-email .btn-block
  {
    text-align: center;
    padding: 20px 0 100px;
  }

  .verify-email .btn-block button
  {
    padding: 17px 40px;
    font-size: 15px;
    line-height: 16px;
  }

  .verify-email .send-code-block
  {
    margin-bottom: 40px;
  }

  .light-theme .verify-email h3
  {
    color: #000000;
  }
</style>
