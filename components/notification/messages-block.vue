<template>
  <div class="messages-list">
    <div v-for="row in messagesData" :key="row.item">
      <div class="message">
        <div class="avatar-block">
          <img :src="row.avatar">
        </div>
        <div class="info-block">
          <h3><i>{{ row.nickname }}</i> <span>{{ row.date }}</span></h3>
        </div>
      </div>
      <div class="message-text">
        <p>{{ row.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MessagesBlock',
  props: {
    messagesData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.message
{
  display: flex;
  padding: 0 20px;
}

.message .info-block
{
  margin-top: 13px;
}

.message .info-block h3
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.message .info-block h3 i
{
  display: inline-block;
  margin-right: 20px;
  font-style: normal;
}

.message-text
{
  padding: 10px 20px 20px;
}

.message-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #989898;
}

.message .info-block h3 span
{
  font-size: 12px;
  line-height: 14px;
  color: #737373;
  font-family: Arial;
  font-weight: normal;
}

.message .avatar-block img
{
  max-width: 100%;
  height: auto;
}

.message .avatar-block
{
  overflow: hidden;
  width: 40px;
  flex-shrink: 0;
  margin-right: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.light-theme .message .info-block h3 i
{
  color: #000000;
}
</style>
