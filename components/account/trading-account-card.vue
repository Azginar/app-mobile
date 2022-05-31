<template>
  <div class="container-card">
    <div v-if="isInProgress" :class="{ 'blur-on-load': isInProgress}" class="block-card no-click">
      <div class="text-right">
        {{ leverage }}
      </div>
      <div class="block-card-wrapper">
        <div class="info-text">
          <h4>{{ account }}</h4>
          <div>
            <p>BALANCE</p>
            <span>{{ balance }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="block-card" @click="goToAccountPage">
      <div class="text-right">
        {{ leverage }}
      </div>
      <div class="block-card-wrapper">
        <div class="info-text">
          <h4>{{ account }}</h4>
          <div>
            <p>BALANCE</p>
            <span>{{ balance }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'TradingAccountCard',
  props: {
    leverage: {
      type: String,
      default: ''
    },
    account: {
      type: String,
      default: ''
    },
    balance: {
      type: String,
      default: '0.00 USD'
    },
    accountUID: {
      type: Number,
      required: false
    },
    serverId: {
      type: Number,
      required: false
    },
    isInProgress: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goToAccountPage () {
      if (!this.isInProgress) {
        this.$router.push(`/accounts/info?login=${this.accountUID}&server=${this.serverId}`)
      }
    }
  }
}
</script>
<style>
.no-click {
  pointer-events: none;
}

.blur-on-load {
  filter: blur(4px);
}

.container-card
{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container-card > div
{
  margin-bottom: 30px;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}

.container-card .block-card
{
  font-family: Montserrat;
  margin: 10px auto;
  padding: 20px;
  display: block;
  flex-shrink: 0;
  width: 90%;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-card .block-card .block-card-wrapper
{
  display: flex;
  height: 100%;
  align-items: center;
}

.container-card .block-card .wrapper-img
{
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.container-card .block-card .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-card .block-card .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-card .block-card .info-text h4
{
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 10px;
}

.container-card .block-card .info-text p
{
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
}

.container-card .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.container-card .block-card .info-text span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 120%;
  text-transform: uppercase;
  color: #989898;
}

.container-card .block-card .text-right
{
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-card .block-card .bg-transparent
{
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

</style>
