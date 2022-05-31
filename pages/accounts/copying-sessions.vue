<template>
  <div class="copying-sessions-container container">
    <copying-sessions-card
      v-for="(copyingSession, index) in copyingSessions"
      :key="index"
      :click-event="() => {}"
      :user-name="copyingSession.userName"
      :avatar="copyingSession.avatar"
      :profit="copyingSession.profit"
      :stop-copying="copyingSession.stopCopying"
      :start-copying="copyingSession.startCopying"
    />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import CopyingSessionsCard from '@/components/account/copying-sessions-card'
import { GET_COPYING_SESSION } from '~/modules/accounts/constants'

const { mapGetters } = createNamespacedHelpers('accounts')
export default {
  layout: 'AccountInfoPage',
  components: {
    CopyingSessionsCard
  },
  computed: {
    ...mapGetters({
      copyingSessions: GET_COPYING_SESSION
    })
  },
  created () {
    // todo create middleware that check login and server param
    const { login } = this.$route.query
    if (this.$route.query['is-investor']) {
      this.isInvestor = true
      // todo this only for dev without backend
      this.$store.dispatch('accounts/_loadTraderAccountInfo')
    } else {
      this.$store.dispatch('accounts/LOAD_ACCOUNT_INFO', login)
    }
  }
}
</script>
