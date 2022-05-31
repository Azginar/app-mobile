<template>
  <div class="tabs">
    <div v-for="row in usersList" :key="row.item" @click="passData(row.nickname)">
      <div class="user-messages-block">
        <div class="avatar-block">
          <img :src="row.avatar">
        </div>
        <div class="name-block">
          <p>{{ row.nickname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UsersBlock',
  props: {
    usersList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    passData (nickname) {
      const nicknameUrl = nickname.split(' ').join('').replace('@', '')
      this.$router.push(`/notifications/${nicknameUrl}`)
    }
  }
}
</script>
<style>
.user-messages-block .avatar-block img
{
  max-width: 100%;
  height: auto;
}

.user-messages-block .avatar-block
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

.user-messages-block
{
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  padding: 10px 30px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.active .user-messages-block
{
  background: #1B1B1B;
}

.user-messages-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  color: #737373;
}
</style>
