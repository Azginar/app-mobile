<template>
  <div class="profile-page">
    <div class="container">
      <h1>Client's Profile</h1>
      <div class="info-user">
        <h3>{{ FULL_NAME_CLIENT }}</h3>
        <p>
          <span>{{ NICKNAME_CLIENT }}</span>
          <span v-if="STATUS_NAME_CLIENT === 'Party Verified'" class="status-verified" :class="STATUS_NAME_CLIENT">Partly Verified</span>
          <span v-else class="status-verified" :class="STATUS_NAME_CLIENT">{{ STATUS_NAME_CLIENT }}</span>
        </p>
      </div>
      <croppie
        :title="'Profile photo'"
        :title-cancel="'Cancel'"
        :title-save="'Save'"
        :is-black-design="true"
        :img-url="AVATAR_LINK_CLIENT"
        :origin-img="AVATAR_LINK_CLIENT"
      />
      <client-profile-table-red-black
        :table-data-public="PUBLICK_CLIENT_DATA"
        :table-data-security="SECURE_CLIENT_DATA"
        :table-data-status="VERIFICATION_CLIENT_DATA"
      />
      <h3>Security</h3>
      <div class="password-block">
        <p>Пароль не менялся 124 дня</p>
        <NuxtLink to="/settings/password-change">
          <default-button
            :type="'trans-button'"
            :label="'Change password'"
            :click-event="() => {}"
          />
        </NuxtLink>
      </div>
      <notifications-block
        :data-margin-level="DATA_MARGIN_LEVEL"
        :data-withdrawal-confirmation="DATA_WITHDRAWAL_CONFIRMATION"
        :data-email-notifications="DATA_EMAIL_NOTIFICATIOS"
        :data-email-subscriptions="DATA_EMAIL_SUBSCRIPTIONS"
      />
      <div class="login-history-section">
        <h3>Login history</h3>
        <div class="black-block">
          <div
            v-if="inProgress"
            class="loader-wrapper"
          >
            <div class="loader-faq __mini" />
          </div>
          <table-login-history v-else :history-list="[]" />
          <div class="btn-block">
            <NuxtLink to="/settings/login-history">
              <default-button
                :type="'trans-button'"
                :label="'Full login history'"
                :click-event="() => {}"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import Croppie from '../../../components/component-lib/croppie-image/Croppie'
import DefaultButton from '../../../components/default-button'
import ClientProfileTableRedBlack from '../../../components/ClientProfileTable/ClientProfileTableRedBlack'
import NotificationsBlock from '../../../components/notifications'
import Table from '../../../components/login-history/table'

const { mapGetters, mapState, mapActions } = createNamespacedHelpers('settings')

export default {
  /**
   * this block show transition animation, css you can find in file "assets/transactions.css"
   * @param to
   * @param from
   * @returns {string}
   */
  transition (to, from) {
    if (!from) {
      return 'noTransition'
    }
    /**
     *
     * @type {string[]} - this is array for transition on page settings
     */
    const settingsTransitionRoutes = [
      '/settings/edit-personal-info',
      '/settings/edit-notifications',
      '/settings/password-change',
      '/settings/edit-personal-avatar',
      '/settings/phone-verify',
      '/settings/email-verify',
      '/settings/upload-documents',
      '/settings/verification-bank-card'
    ]

    const isFromSettingsToMain = to.path === '/settings/index' && settingsTransitionRoutes.includes(from.path)
    const isFromMainToSettings = from.path === '/settings/index' && settingsTransitionRoutes.includes(to.path)

    if (isFromSettingsToMain) {
      return 'editSettingsTransactionLeaveSettings'
    }

    if (isFromMainToSettings) {
      return 'editSettingsTransactionEnterSettings'
    }

    return 'noTransition'
  },
  components: {
    croppie: Croppie,
    'client-profile-table-red-black': ClientProfileTableRedBlack,
    'default-button': DefaultButton,
    'notifications-block': NotificationsBlock,
    'table-login-history': Table
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  data () {
    return {
      inProgress: false
    }
  },
  computed: {
    ...mapGetters([
      'PUBLICK_CLIENT_DATA',
      'SECURE_CLIENT_DATA',
      'VERIFICATION_CLIENT_DATA',
      'FULL_NAME_CLIENT',
      'STATUS_NAME_CLIENT',
      'AVATAR_LINK_CLIENT',
      'NICKNAME_CLIENT'
    ]),
    ...mapState([
      'DATA_MARGIN_LEVEL',
      'DATA_WITHDRAWAL_CONFIRMATION',
      'DATA_EMAIL_NOTIFICATIOS',
      'DATA_EMAIL_SUBSCRIPTIONS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PROFILE_DATA'
    ])
  }
}
</script>

<style>

.container {
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.info-user {
  margin-bottom: 80px;
}

.info-user h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  color: #ffffff;
  margin-bottom: 5px;
}

.info-user p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  color: #737373;
}

.info-user p span {
  display: inline-block;
  vertical-align: middle;
}

.info-user span.status-verified {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  margin-top: 3px;
  line-height: 100%;
  text-transform: uppercase;
  padding: 3px 5px;
  background: #242424;
  display: inline-block;
  vertical-align: middle;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.info-user span.Unverified {
  color: #E52525;
}

.info-user span.Verified {
    color: #8DC640;
}

.info-user span.Party {
    color: #D2AC75 !important;
}

h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.profile-page .panel-change-avatar-red-black {
  margin-bottom: 60px;
}

.profile-page .password-block {
  margin-bottom: 80px;
}

.profile-page .password-block p {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
  margin-bottom: 10px;
}

.profile-page .login-history-section {
  padding-bottom: 80px;
}

.login-history-section .header-title,
.login-history-section .login-history-block {
  display: none;
}

.login-history-section .login-history-block:first-child + div,
.login-history-section .login-history-block:first-child + div + div,
.login-history-section .login-history-block:first-child + div + div + div {
  display: block;
}

.light-theme .profile-page h3
{
  color: #000000;
}

.light-theme .info-user span.status-verified
{
  background: #ffffff;
  border: 1px solid #D4D4D4;
}
</style>
