<template>
  <div class="account-control-container">
    <with-close-ic-header
      :go-back="goBack"
    >
      <template v-slot:name>
        <h3>Account control</h3>
      </template>
    </with-close-ic-header>
    <div class="account-control-buttons-block-container container">
      <div class="setting-block">
        <div class="text-block">
          Deposit
        </div>
      </div>
      <div class="setting-block">
        <div class="text-block">
          internal transfer
        </div>
      </div>
      <div class="setting-block">
        <div class="text-block">
          Withdrawal
        </div>
      </div>
      <div class="setting-block">
        <div class="text-block">
          CHANGE LEVERAGE
        </div>
      </div>
      <div class="setting-block" @click="handleDeleteAccount">
        <div class="text-block">
          DELETE ACCOUNT
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WithCloseIcHeader from '@/components/account/with-close-ic-header'

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    WithCloseIcHeader
  },
  methods: {
    handleDeleteAccount () {
      this.$router.push('/accounts/delete-account?login=69868&server=40')
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.account-control-container .header-form {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 40px;
}

.account-control-container .close-ic {
  cursor: pointer;
}

.account-control-container h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  margin-right: 10px;
  color: #FFFFFF;
}

.account-control-container label {
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

.account-control-container .btn-block button {
  padding: 17px 40px;
  font-size: 15px;
  line-height: 16px;
}

.account-control-container .setting-block {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 36, 36, 0.5);
  margin-bottom: 10px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  cursor: pointer;
}

.account-control-container .setting-block .text-block {
  font-family: Montserrat;
  font-style: normal;
  text-transform: uppercase;
  color: #B2B2B2;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 23px;
  padding-bottom: 22px;
}

.account-control-container
{
  min-height: 100vh;
}

.light-theme .account-control-container h3
{
  color: #000000;
}

.light-theme .account-control-container .setting-block
{
  background: #ffffff;
}

.light-theme .account-control-container .setting-block .text-block
{
  color: #989898;
}
</style>
