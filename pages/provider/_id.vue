<template>
  <div class="container-provider ">
    <div class="go-back-button container">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="() => $nuxt.$router.back()"
      />
    </div>
    <div class="trader-name-block container">
      <p>Trader <span>{{ traderName }}</span></p>
    </div>
    <account-ul-menu
      class="container"
      style="margin-top: 20px"
      :links="linkFromAccountNames"
      :set-selected-provider-sub-page="setSelectedProviderSubPage"
    />

    <div class="account-info-container">
      <provider-pages-summary v-if="selectedProviderSubPage === 'Summary'" />
      <provider-pages-account v-if="selectedProviderSubPage !== 'Summary'" />
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import AccountUlMenu from '@/components/monitoring/custom-ul-menu/accounts-ul-menu'
import ProviderPagesSummary from '@/components/monitoring/provider-pages/summary'
import ProviderPagesAccount from '@/components/monitoring/provider-pages/account-info'

import {
  GET_SELECTED_PROVIDER_SUB_PAGE,
  GET_TRADER_ACCOUNTS_NAMES,
  SET_SELECTED_PROVIDER_SUB_PAGE
} from '@/modules/monitoring/constants'

const { mapGetters, mapActions } = createNamespacedHelpers('monitoring')
export default {
  components: {
    AccountUlMenu,
    ProviderPagesSummary,
    ProviderPagesAccount
  },
  data () {
    return {
      traderName: ''
    }
  },
  computed: {
    ...mapGetters({
      traderAccountsNames: GET_TRADER_ACCOUNTS_NAMES,
      selectedProviderSubPage: GET_SELECTED_PROVIDER_SUB_PAGE
    }),
    linkFromAccountNames () {
      return [{
        label: 'Summary',
        link: 'Summary'
      }].concat(this.traderAccountsNames.map(name => ({ label: name, link: name })))
    }
  },
  created () {
    this.traderName = `@${this.$route.params.id}`
  },
  methods: {
    ...mapActions({
      setSelectedProviderSubPage: SET_SELECTED_PROVIDER_SUB_PAGE
    })
  }
}
</script>
<style>
.container-provider .trader-name-block p {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 30px */
  color: #B2B2B2;
}

.container-provider .trader-name-block p span {
  color: white;
}

.container-provider .go-back-button {
  padding: 40px 20px 40px;
}

.container {
  padding-left: 20px;
  padding-right: 20px;
}

.container-provider .account-info-container {
  margin-top: 80px;
}

.light-theme .container-provider .trader-name-block p,
.light-theme .profit-title
{
  color: #989898;
}

.light-theme .container-provider .trader-name-block p span,
.light-theme .account-info-container .header-title,
.light-theme .statistics-account-block h3
{
  color: #000000;
}

.light-theme .ul-tabs li .custom-link
{
  color: #000000;
}

.light-theme .ul-tabs li div.non-active-link
{
  color: #989898;
}
</style>
