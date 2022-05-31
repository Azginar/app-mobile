<template>
  <div class="user-info-block">
    <div class="back" @click="goBackPage()">
      <backGreySvg />
    </div>
    <div class="avatar-block">
      <img :src="userActiveInfo.avatar">
    </div>
    <div class="name-block">
      <h3>{{ userActiveInfo.nickname }}</h3>
      <p class="date">{{ userActiveInfo.dateLast }}</p>
    </div>
    <div class="more-btn" @click="goBlockPage(userActiveInfo.nickname)">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
import backGreySvg from '@/assets/icons/back-grey.svg'
export default {
  name: 'UserActive',
  components: {
    backGreySvg
  },
  props: {
    userActiveInfo: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      activeTab: 'Tifia'
    }
  },
  methods: {
    goBackPage () {
      this.$router.back()
    },
    goBlockPage (nickname) {
      const nicknameUrl = nickname.split(' ').join('').replace('@', '')
      this.$router.push(`/notifications/${nicknameUrl}/block`)
    }
  }
}
</script>
<style>
.user-info-block
{
  display: flex;
  align-items: center;
  background: #2B2B2B;
  padding: 10px 0;
  margin-bottom: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.user-info-block .back
{
  width: 60px;
  height: 60px;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
}

.user-info-block .btn-block
{
  margin-left: auto;
}

.user-info-block .avatar-block img
{
  max-width: 100%;
  height: auto;
}

.user-info-block .avatar-block
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

.user-info-block h3
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  color: #FFFFFF;
  margin-bottom: 3px;
}

.user-info-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #737373;
}

.user-info-block .more-btn
{
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin-left: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.user-info-block .more-btn span
{
  display: inline-block;
  width: 4px;
  margin: 1px 0;
  height: 4px;
  background: #C4C4C4;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.light-theme .user-info-block
{
  background: #ffffff;
}

.light-theme .user-info-block h3
{
  color: #000000;
}
</style>
