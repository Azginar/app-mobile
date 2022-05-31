<template>
  <div class="chat-page">
    <user-active :user-active-info="userActive" />
    <messages-block :messagesData="userActive.messages"/>
    <div class="send-message-block">
      <div class="block-container">
        <black-input />
        <div class="btn-chat">
          <sending-button :click-event="() => {}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userActive from '@/components/notification/user-active'
import MessagesBlock from '@/components/notification/messages-block'
import SendingButton from '@/components/notification/sending-button'
import { GET_USER_ACTIVE } from '@/modules/notifications/getter-types'
export default {
  layout: 'NoLayout',
  components: {
    'user-active': userActive,
    'messages-block': MessagesBlock,
    'sending-button': SendingButton
  },
  computed: {
    userActive () {
      const activeUser = this.$store.getters[`notifications/${GET_USER_ACTIVE}`]
      return activeUser[this.$route.params.users.replace('@', '')]
    }
  },
  methods: {

  }
}
</script>
<style>
.chat-page
{
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
}
.send-message-block
{
  position: absolute;
  display: flex;
  width: 100%;
  left: 0;
  padding-left: 20px;
  padding-right: 20px;
  bottom: 20px;
}

.send-message-block .block-container
{
  display: flex;
  width: 100%;
}

.send-message-block .block-container > div:first-child
{
  width: 100%;
  margin-right: 10px;
}

.send-message-block .black-input
{
  height: 40px;
  font-family: Arial;
  line-height: 40px;
}

.send-message-block .red-button
{
  font-size: 15px;
  line-height: 14px;
}
</style>
