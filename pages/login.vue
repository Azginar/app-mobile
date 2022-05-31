<template>
  <div class="login-authorization-page">
    <div class="tabs-login-registration">
      <div class="logo-block">
        <div class="black">
          <logoSvg />
        </div>
        <div class="white">
          <logoBlackSvg />
        </div>
      </div>
      <sub-menu-login-registration />
    </div>
    <div class="login-from-facebook-google">
      <div>
        <default-button
          :is-with-slot="true"
          :type="'trans-button'"
          :label="'Facebook'"
        >
          <template v-slot:icon>
            <div class="facebook-google-icon">
              <FacebookSVG />
            </div>
          </template>
        </default-button>
      </div>
      <div>
        <default-button
          :is-with-slot="true"
          :type="'trans-button'"
          :label="'Google'"
        >
          <template v-slot:icon>
            <div class="facebook-google-icon">
              <GoogleSVG />
            </div>
          </template>
        </default-button>
      </div>
    </div>
    <div class="hr-block">
      <div class="left-hr">
        <hr>
        <span>Or</span>
      </div>
    </div>
    <form :onsubmit="handleSubmit" class="login-form-container">
      <div class="row-line">
        <label>email</label>
        <black-input
          :handle-input="handleChangeEmail"
          :errors="ERRORS"
          :value="EMAIL"
          :attribute="'email'"
        />
      </div>
      <div class="row-line">
        <label>password</label>
        <black-input
          :handle-input="handleChangePassword"
          :type="'password'"
          :errors="ERRORS"
          :value="PASSWORD"
          :attribute="'password'"
        />
      </div>
      <div class="check-box-container">
        <div class="check-box">
          <div class="check-box-content">
            <div><switch-button :id="'remember-me'" /></div>
            <div class="text-block">
              Remember me
            </div>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'Login'"
          :click-event="handleSubmit"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import logoSvg from '@/assets/icons/logo.svg'
import SwitchButton from '@/components/switch-button'
import FacebookSVG from '@/assets/icons/facebook-ic.svg'
import GoogleSVG from '@/assets/icons/google-ic.svg'
import { AUTH_USER } from '@/modules/login/actions-types'
import { CHANGE_EMAIL, CHANGE_PASSWORD } from '@/modules/login/mutation-types'
import DefaultButton from '../components/default-button'
import BlackInput from '../components/black-input'
import logoBlackSvg from '../assets/icons/logo-black.svg'

const { mapActions, mapState } = createNamespacedHelpers('login')
export default {
  components: {
    BlackInput,
    DefaultButton,
    logoSvg,
    logoBlackSvg,
    SwitchButton,
    GoogleSVG,
    FacebookSVG
  },
  computed: {
    ...mapState(['ERRORS', 'EMAIL', 'PASSWORD'])
  },
  layout: 'NoLayoutAuthorization',
  methods: {
    ...mapActions([AUTH_USER, CHANGE_PASSWORD, CHANGE_EMAIL]),
    handleChangeEmail (event) {
      this[CHANGE_EMAIL](event.target.value)
    },
    handleChangePassword (event) {
      this[CHANGE_PASSWORD](event.target.value)
    },
    handleSubmit (e) {
      e.preventDefault()
      this[AUTH_USER](this.$router)
    }
  }
}
</script>
<style>
  .login-authorization-page
  {
    background: #2B2B2B;
    position: relative;
  }

  .login-authorization-page .black
  {
    display: block;
  }

  .login-authorization-page .white
  {
    display: none;
  }

  .login-authorization-page .tabs-login-registration
  {
    padding: 50px 20px 0;
    text-align: center;
  }

  .login-authorization-page .logo-block
  {
    margin-bottom: 40px;
  }

  .login-authorization-page .ul-tabs
  {
    margin-left: 0;
    margin-bottom: 40px;
  }

  .login-authorization-page .ul-tabs li
  {
    margin-right: 0;
  }

  .login-authorization-page .facebook-google-icon svg {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translate(0, -50%);
  }

  .login-authorization-page .login-from-facebook-google .trans-button
  {
    padding-left: 56px;
  }

  .login-authorization-page .login-from-facebook-google .trans-button
  {
    position: relative;
    padding-right: 30px;
  }

  .login-authorization-page .login-from-facebook-google
  {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-authorization-page .login-from-facebook-google > div
  {
    margin: 0 10px;
  }

  .login-authorization-page .hr-block {
    margin: 15px 0 5px;
    position: relative;
    text-align: center;
  }

  .login-authorization-page .hr-block span
  {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    position: relative;
    z-index: 1;
    background: #2b2b2b;
    text-transform: uppercase;
    color: #737373;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
  }

  .login-authorization-page .left-hr hr {
    line-height: 22px;
    border: 0;
    top: 12px;
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgb(67,67,67);
    background: linear-gradient(120deg, rgba(67,67,67,0) 0%, rgba(67,67,67,1) 50%, rgba(67,67,67,0) 100%);
  }

  .login-authorization-page .login-form-container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .login-form-container .row-line {
    padding-top: 20px;
  }

  .login-form-container label {
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

  .login-form-container .btn-block {
    text-align: center;
    padding: 40px 0 100px;
  }

  .login-form-container .btn-block button {
    padding: 17px 40px;
    font-size: 15px;
    line-height: 16px;
  }

  .login-authorization-page .check-box {
    display: block;
    margin-top: 20px;
  }

  .login-authorization-page .check-box-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    width: 155px;
  }

  .login-authorization-page .check-box-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
  }

  .login-authorization-page .check-box .text-block {
    font-family: Montserrat,serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    text-transform: uppercase;
    color: #737373;

  }

  .login-authorization-page .button-switch {
    height: 24px !important;
    position: relative;
    width: 60px !important;
  }

  .login-authorization-page .button-switch .lbl-on,
  .login-authorization-page .button-switch .lbl-off {
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

  .login-authorization-page .button-switch .lbl-on {
    opacity: 0;
    right: 9px;
    top: 8px;
  }

  .login-authorization-page .button-switch .lbl-off {
    padding: 0;
    left: 9px;
    top: 8px;
    color: #737373;
  }

  .login-authorization-page .button-switch .switch {
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

  .login-authorization-page .button-switch .switch:before,
  .login-authorization-page .button-switch .switch:after {
    content: '';
    font-size: 1em;
    position: absolute;
  }

  .login-authorization-page .button-switch .switch:before {
    border-radius: 1.25em;
    background: #737373;
    height: 24px;
    left: 0;
    top: 0;
    transition: background-color 0.25s ease-out 0.1s;
    width: 60px;
  }

  .login-authorization-page .button-switch .switch:after {
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

  .login-authorization-page .button-switch .switch:checked:after {
    transform: translate(-32px, 0);
    opacity: 1;
  }

  .login-authorization-page .button-switch .switch:checked ~ .lbl-on {
    opacity: 1;
  }

  .login-authorization-page .button-switch .switch:checked ~ .lbl-off {
    opacity: 0;
  }

  .login-authorization-page .button-switch .switch:checked:before {
    background: #333333;
  }

  .login-authorization-page .button-switch .switch:checked:before {
    background: #E52525;
  }

  .light-theme .login-authorization-page
  {
    background: #F7F6FB;
  }

  .light-theme .login-authorization-page .ul-tabs li a
  {
    color: #989898;
  }

  .light-theme .login-authorization-page .ul-tabs li a.nuxt-link-active
  {
    color: #000000;
  }

  .light-theme .login-authorization-page .facebook-google-icon svg path
  {
    fill: #989898;
  }

  .light-theme .login-authorization-page .login-from-facebook-google .trans-button:hover .facebook-google-icon svg path
  {
    fill: #000000;
  }

  .light-theme .login-authorization-page .hr-block span
  {
    background: #F7F6FB;
  }

  .light-theme .login-authorization-page .black
  {
    display: none;
  }

  .light-theme .login-authorization-page .white
  {
    display: block;
  }

  @media (max-width: 350px) {
    .login-authorization-page .login-from-facebook-google .trans-button
    {
      padding-right: 20px;
      padding-left: 45px;
    }

    .login-authorization-page .facebook-google-icon svg
    {
      left: 22px;
    }
  }

</style>
