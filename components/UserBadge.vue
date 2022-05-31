<template>
  <div class="user-info-new">
    <div class="avatar-wrapper">
      <a href="#"><img :src="AVATAR_LINK_CLIENT" alt=""></a>
    </div>
    <div class="info-user">
      <h3>{{ FULL_NAME_CLIENT }}</h3>
      <p>
        <span>{{ NICKNAME_CLIENT }}</span>
        <span v-if="STATUS_NAME_CLIENT === 'Party Verified'" class="status-verified" :class="STATUS_NAME_CLIENT">Partly verified</span>
        <span v-else class="status-verified" :class="STATUS_NAME_CLIENT">{{ STATUS_NAME_CLIENT }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
const { mapGetters } = createNamespacedHelpers('settings')
export default {
  name: 'UserBadge',
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'AVATAR_LINK_CLIENT',
      'NICKNAME_CLIENT',
      'FULL_NAME_CLIENT',
      'STATUS_NAME_CLIENT'
    ])
  }
}
</script>
<style>

.user-info-new {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.user-info-new .avatar-wrapper {
  width: 60px;
  margin-right: 10px;
  flex-shrink: 0;
  overflow: hidden;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.user-info-new .avatar-wrapper img {
  width: 60px;
  height: 60px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.info-user {

}

.info-user h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  color: #ffffff;
  margin-bottom: 5px;
}

.info-user p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  color: #737373;
}

.info-user p span {
  display: inline-block;
  vertical-align: middle;
}

.info-user span.status-verified {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  margin-top: 3px;
  line-height: 100%;
  text-transform: uppercase;
  padding: 3px 5px;
  background: #242424;
  display: inline-block;
  vertical-align: middle;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.info-user span.unverified {
  color: #E52525;
}

.light-theme .info-user span.status-verified
{
  background: #FFFFFF;
  border: 1px solid #E1E1E1;
}

</style>
