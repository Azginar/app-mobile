<template>
  <div class="black-block">
    <h3>General information</h3>
    <div class="table-row">
      <div class="col-row">
        <div>
          <p>Login</p>
          <span id="account-info-login">
            {{ login }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Server</p>
          <span id="account-info-server">
            {{ server }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Leverage</p>
          <span id="account-info-leverage">
            {{ leverage }}
          </span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Registered</p>
          <span id="account-info-reg-date-time" class="simple-text"><i>{{ registeredTime }}</i> {{ registeredDate }}</span>
        </div>
      </div>
      <div class="col-row">
        <div>
          <p>Last login</p>
          <span id="account-info-last-login-date-time">
            <i>{{ lastLoginTime }}</i> {{ lastLoginDate }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GeneralInformationBlock',
  props: {
    login: {
      type: String,
      default: ''
    },
    server: {
      type: String,
      default: ''
    },
    leverage: {
      type: String,
      default: ''
    },
    registeredTime: {
      type: String,
      default: ''
    },
    registeredDate: {
      type: String,
      default: ''
    },
    lastLoginDate: {
      type: String,
      default: ''
    },
    lastLoginTime: {
      type: String,
      default: ''
    }
  }
}
</script>
