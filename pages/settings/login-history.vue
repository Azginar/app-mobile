<template>
  <div class="login-history">
    <div class="header-form">
      <h3>Login history</h3>
      <div class="close-ic">
        <NuxtLink to="/settings/index">
          <CloseSVG />
        </NuxtLink>
      </div>
    </div>
    <div class="black-block">
      <div
        v-if="inProgress"
        class="loader-wrapper"
      >
        <div class="loader-faq __mini" />
      </div>
      <table-login-history v-else :history-list="[]" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import CloseSVG from '../../assets/layout/close.svg'
import Table from '../../components/login-history/table'

const { mapState, mapGetters } = createNamespacedHelpers('settings')

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  layout: 'NoLayout',
  components: {
    CloseSVG,
    'table-login-history': Table
  },
  data () {
    return {
      inProgress: false
    }
  },
  computed: {
    ...mapGetters(['getPublicUserData', 'getSecurityUserData', 'getVerificationUserStatus']),
    ...mapState([

    ])
  }
}
</script>

<style>
.login-history .header-form {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.login-history .close-ic {
  cursor: pointer;
}

.login-history h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  margin-right: 10px;
  color: #FFFFFF;
  margin-bottom: 0;
}

.login-history .black-block > div {
  display: table;
  width: 100%;
  background: #333333;
}

.login-history .login-history-block span {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #737373;
}

.login-history .login-history-block > div.row-line {
  display: table-cell;
  vertical-align: middle;
  padding: 9px 20px;
}

.login-history .login-history-block > div.row-line p {
  display: none;
}

.login-history .login-history-block.header-title > div.row-line p {
  display: block;
  margin-bottom: 0;
}

.login-history .login-history-block.header-title > div.row-line {
  padding-top: 10px;
  padding-bottom: 9px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
}

.login-history .login-history-block.header-title {
  background: #242424;
}

.login-history .login-history-block {
  display: table-row;
}

.login-history {
  padding-bottom: 100px;
}

.light-theme .login-history h3
{
  color: #000000;
}

.light-theme .login-history .black-block > div,
.light-theme .login-history .login-history-block.header-title
{
  background: #ffffff;
}

</style>
