<template>
  <div class="demo-accounts-container container">
    <div
      v-for="(accounts, index) in archiveAccountList"
      :key="index"
    >
      <h2>{{ accounts['ACCOUNT_TYPE'] }}</h2>
      <archive-account-card
        v-for="(card, indexAccount) in accounts['ACCOUNTS']"
        :key="indexAccount"
        :balance="card['BALANCE']"
        :leverage="card['LEVERAGE']"
        :account="card['ACCOUNT']"
        :handle-restore-account="goToRestorePage"
        :handle-delete-account="goToDeletePage"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { ARCHIVE_ACCOUNT_LIST } from '@/modules/accounts/constants'
import ArchiveAccountCard from '@/components/account/archive-account-card'

const { mapState } = createNamespacedHelpers('accounts')

export default {
  layout: 'default',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    ArchiveAccountCard
  },
  computed: {
    ...mapState({
      archiveAccountList: ARCHIVE_ACCOUNT_LIST
    })
  },
  methods: {
    goToRestorePage () {
      this.$router.push('/accounts/restore-account')
    },
    goToDeletePage () {
      this.$router.push('/accounts/delete-account')
    }
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

.demo-accounts-container h2 {
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.demo-accounts-container .container-card .block-card .block-card-wrapper
{
  display: block;
}

.demo-accounts-container > div:not(:first-child) > h2{
  margin-top: 80px;
}

.light-theme .demo-accounts-container h2
{
  color: #000000;
}

</style>
