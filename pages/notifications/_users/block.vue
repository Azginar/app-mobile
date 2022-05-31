<template>
  <div class="user-page">
    <div class="close-button">
      <CloseSVG @click="goBackPage" />
    </div>
    <user-screen :user-info="userActive" />
    <div class="btn-block-bottom">
      <default-button
        :type="'trans-button'"
        :label="'Cancel'"
        :click-event="goBackPage"
      />
    </div>
  </div>
</template>

<script>
import UserScreen from '@/components/notification/user-screen'
import CloseSVG from 'assets/layout/close.svg'
import { GET_USER_ACTIVE } from '@/modules/notifications/getter-types'
export default {
  layout: 'NoLayout',
  components: {
    'user-screen': UserScreen,
    CloseSVG
  },
  computed: {
    userActive () {
      const activeUser = this.$store.getters[`notifications/${GET_USER_ACTIVE}`]
      return activeUser[this.$route.params.users.replace('@', '')]
    }
  },
  methods: {
    goBackPage () {
      this.$router.back()
    }
  }
}
</script>
<style>
.user-page
{
  min-height: 100vh;
  position: relative;
  padding-top: 10px;
  padding-bottom: 50px;
}

.user-page .close-button
{
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

.user-page .btn-block-bottom
{
  position: absolute;
  text-align: center;
  bottom: 50px;
  width: 100%;
}
</style>
