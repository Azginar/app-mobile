<template>
  <div class="password-change">
    <div class="container">
      <div class="header-form">
        <h3>Tifia Client's profile password changing</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="message-simple">
        Please set a new password which contains at least 8 symbols, capital and small letters, numbers and special
        symbols (#, @,! and so on).
      </div>
      <div class="row-line">
        <label>Enter your current password</label>
        <black-input />
      </div>
      <div class="row-line">
        <label>New password</label>
        <black-input />
      </div>
      <div class="row-line">
        <label>Confirm new password</label>
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
import DefaultButton from '../../components/default-button'
import BlackInput from '../../components/black-input'

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    BlackInput,
    CloseSVG,
    'default-button': DefaultButton
  }
}
</script>

<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.password-change .header-form {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;
}

.password-change .close-ic {
  cursor: pointer;
}

.password-change h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  margin-right: 10px;
  color: #FFFFFF;
}

.password-change .message-simple {
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #989898;
  margin-bottom: 20px;
}

.password-change label {
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

.password-change .row-line {
  margin-bottom: 20px;
}

.password-change .btn-block {
  text-align: center;
  padding: 20px 0 100px;
}

.password-change .btn-block button {
  padding: 17px 40px;
  font-size: 15px;
  line-height: 16px;
}

.password-change .send-code-block {
  margin-bottom: 40px;
}

.light-theme .password-change h3
{
  color: #000000;
}
</style>
