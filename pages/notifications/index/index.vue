<template>
  <div class="messages-page">
    <div class="input-layout">
      <input-with-icon :placeholder="'Search by user nickname'" />
    </div>
    <users-block :usersList="usersList" />
  </div>
</template>

<script>
import InputWithIcon from '@/components/input-with-icon'
import UsersBlock from '@/components/notification/users-block'
import { GET_USERS_LIST } from '@/modules/notifications/getter-types'
export default {
  layout: 'messagesLayout',
  name: 'Index',
  components: {
    'input-with-icon': InputWithIcon,
    'users-block': UsersBlock
  },
  middleware: ['redirect', 'check-auth', 'auth'],
  computed: {
    usersList () {
      return this.$store.getters[`notifications/${GET_USERS_LIST}`]
    }
  }
}
</script>
<style>
.input-layout
{
  padding: 0 62px 20px 20px;
  margin-top: -70px;
}

.input-layout .input-with-icon
{
  min-width: auto;
}

.messages-page
{
  padding-bottom: 50px;
  min-height: 100vh;
}
</style>
