<template>
  <div class="users-info">
    <div class="avatar-block">
      <img :src="userInfo.avatar">
    </div>
    <div class="name-block">
      <p>{{ userInfo.nickname }}</p>
    </div>
    <div class="btn-block">
      <default-button
        :type="'trans-button'"
        :label="'Block this user'"
        :click-event="() => {}"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserScreen',
  props: {
    userInfo: {
      type: Object,
      default: () => []
    }
  }
}
</script>
<style>
.users-info
{
  text-align: center;
  padding: 20px;
}

.users-info .avatar-block img
{
  max-width: 100%;
  height: auto;
}

.users-info .avatar-block
{
  overflow: hidden;
  width: 100px;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  height: 100px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.users-info p
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.light-theme .users-info p
{
  color: #000000;
}
</style>
