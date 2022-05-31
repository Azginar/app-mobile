<template>
  <div class="container-card investor-card">
    <div class="block-card" @click="clickEvent">
      <div class="text-right">
        {{ leverage }}
      </div>
      <div class="block-card-wrapper">
        <div class="info-text">
          <h4>{{ account }}</h4>
          <div v-if="isManagerNotSelected" class="manager-not-selected-container">
            <p>managing trader</p>
            <span class="span">Manager Not Selected</span>
          </div>
          <div v-else>
            <p>managing trader</p>
            <div class="card-nickname-container">
              <div class="wrapper-img-investor">
                <img :src="avatar">
              </div>
              <p>{{ userName }}</p>
            </div>
            <div>
              <p>PROFIT of trading</p>
              <p>
                <span>{{ profit }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'InvestorTradingAccountCard',
  props: {
    leverage: {
      type: String,
      default: ''
    },
    account: {
      type: String,
      default: ''
    },
    profit: {
      type: String,
      default: '0.00 USD'
    },
    userName: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    clickEvent: {
      type: Function,
      required: true
    }
  },
  computed: {
    isManagerNotSelected () {
      return this.userName === null
    }
  }
}
</script>
<style>
.manager-not-selected-container > p > span {
  text-transform: none;
}

.container-card {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container-card > div {
  margin-bottom: 30px;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}

.trading-accounts-container .container-card .block-card {
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

.container-card .block-card .block-card-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
}

.container-card .block-card .card-nickname-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
}

.container-card .block-card .info-text .card-nickname-container p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #B2B2B2;
  text-transform: none;
}

.container-card .block-card .info-text .trader-nickname p:last-child {
  margin-top: -10px;
  font-family: Montserrat;
  text-transform: none;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #989898 !important;
}

.container-card .block-card .card-nickname-container .trader-nickname {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #B2B2B2;
}

.container-card .block-card .wrapper-img-investor {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 10px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.container-card .block-card .wrapper-img span {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-card .block-card .wrapper-img img {
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-card .block-card .info-text h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 10px;
}

.container-card .block-card .info-text p {
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
}

.container-card .block-card .info-text p:last-child {
  margin-bottom: 0;
}

.container-card .block-card .info-text span {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 120%;
  color: #989898;
}

.investor-card .block-card .info-text .span {
  text-transform: none !important;
  color: #B2B2B2 !important;
}

.container-card .block-card .text-right {
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-card .block-card .bg-transparent {
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.light-theme .container-card .block-card
{
  background: #ffffff;
}

.light-theme .container-card .block-card .info-text h4
{
  color: #000000;
}

.light-theme .container-card .block-card .info-text .card-nickname-container p
{
  color: #989898;
}

.light-theme .investor-card .block-card .info-text .span
{
  color: #989898 !important;
}
</style>
