<template>
  <ul class="ul-tabs">
    <li
      v-for="link in links"
      :key="link.label"
    >
      <NuxtLink
        :to="link.link"
        :class="{'non-active-link': isNonActiveLink(link.link)}"
      >
        {{ link.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script>

export default {
  name: 'OneLineSubMenu',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    const accountsNewRoutesAndLabels = [
      { label: 'Account info', link: '/accounts-info' },
      { label: 'Account trading history', link: '/accounts-trading-history' },
      { label: 'History of copying', link: '/history-copying' }
    ]
    const accountsTypeNewRoutesAndLabels = [
      { label: 'Trading accounts', link: '/accounts/index' },
      { label: 'Investor\'s accounts', link: '/accounts/investors-accounts' },
      { label: 'Demo accounts', link: '/accounts/demo' },
      { label: 'Archive accounts', link: '/accounts/archive' },
      { label: 'Trading terminal', link: '/terminal/index' }
    ]
    const financeTypeNewRoutesAndLabels = [
      { label: 'Deposit', link: '/deposit/index' },
      { label: 'Withdrawal', link: '/' },
      { label: 'Internal transfer', link: '/' },
      { label: 'Transactions history', link: '/' },
      { label: 'History of BTC transfer', link: '/' }
    ]
    return {
      routesAndMenu: new Map()
        .set('accounts-info', accountsNewRoutesAndLabels)
        .set('accounts-trading-history', accountsNewRoutesAndLabels)
        .set('history-copying', accountsNewRoutesAndLabels)
        .set('accounts-index', accountsTypeNewRoutesAndLabels)
        .set('accounts-investors-accounts', accountsTypeNewRoutesAndLabels)
        .set('accounts-demo', accountsTypeNewRoutesAndLabels)
        .set('accounts-archive', accountsTypeNewRoutesAndLabels)
        .set('terminal-index', accountsTypeNewRoutesAndLabels)
        .set('deposit-index', financeTypeNewRoutesAndLabels)
        .set('deposit-id-id', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-index', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-add-card', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-verification-card', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-id', financeTypeNewRoutesAndLabels)
        .set('deposit-form', financeTypeNewRoutesAndLabels)
        .set('deposit-form-wire-transfer-form', financeTypeNewRoutesAndLabels)
        .set('deposit-form-bitcoin-form', financeTypeNewRoutesAndLabels),
      routesVSLinks: new Map()
        .set('accounts-info', '/accounts-info')
        .set('accounts-trading-history', '/accounts-trading-history')
        .set('history-copying', '/history-copying')
        .set('accounts-index', '/accounts/index')
        .set('accounts-investors-accounts', '/accounts/investors-accounts')
        .set('accounts-demo', '/accounts/demo')
        .set('accounts-archive', '/accounts/archive')
        .set('terminal-index', '/terminal/index')
        .set('deposit-index', '/deposit/index')
        .set('deposit-id-id', '/deposit/_id/id')
        .set('deposit-bank-card-index', '/deposit/deposit-bank-card/index')
        .set('deposit-bank-card-add-card', '/deposit/deposit-bank-card/add-card')
        .set('deposit-bank-card-verification-card', '/deposit/deposit-bank-card/verification-card')
        .set('deposit-bank-card-id', '/deposit/deposit-bank-card/id/_index')
        .set('deposit-form', '/deposit/form')
        .set('deposit-form-wire-transfer-form', '/deposit/form/wire-transfer-form')
        .set('deposit-form-bitcoin-form', 'deposit/form/bitcoin-form')
    }
  },
  computed: {
    links () {
      return this.routesAndMenu.get(this.$router.currentRoute.name) || []
    }
  },
  methods: {
    isNonActiveLink (link) {
      return link !== this.routesVSLinks.get(this.$router.currentRoute.name)
    }
  }
}
</script>

<style>
.ul-tabs {
  margin-top: 0;
  padding-left: 0;
  margin-left: -10px;
  margin-bottom: 80px;
}

.ul-tabs li {
  display: inline-block;
  margin-right: 10px;
}

.ul-tabs li a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid #E52525;
  color: #ffffff;
  padding: 10px 10px 8px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
}

.ul-tabs li a:hover {
  color: #ffffff;
}

.ul-tabs li a.non-active-link {
  border-bottom: 2px solid transparent;
  color: #B2B2B2;
}

</style>
