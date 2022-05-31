<template>
  <div class="container-copying-sessions-card">
    <div class="block-card" @click="clickEvent">
      <div class="block-card-wrapper">
        <div class="info-text">
          <div class="card-nickname-container">
            <div class="wrapper-img-investor">
              <img :src="avatar" alt="avatar">
            </div>
            <p>
              {{ userName }}
            </p>
          </div>
          <div class="info-container">
            <div class="two-line-info-wrapper">
              <two-line-info
                :label="'Start copying'"
                :value="startCopying"
              />
            </div>
            <div class="two-line-info-wrapper">
              <two-line-info
                :label="'STOP copying'"
                :value="stopCopying"
              />
            </div>
          </div>
          <div class="info-profit-container">
            <div class="two-line-info-wrapper">
              <two-line-info
                :label="'PROFIT'"
                :value="profit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TwoLineInfo from '@/components/account/two-line-info'
export default {
  name: 'CopyingSessionsCard',
  components: {
    TwoLineInfo
  },
  props: {
    startCopying: {
      type: String,
      default: ''
    },
    stopCopying: {
      type: String,
      default: ''
    },
    profit: {
      type: String,
      default: ''
    },
    account: {
      type: String,
      default: ''
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
  }
}
</script>
<style>

.manager-not-selected-container > p > span {
  text-transform: none;
}

.container-copying-sessions-card {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container-copying-sessions-card .info-container {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 250px;
  justify-content: space-between;
}

.container-copying-sessions-card .info-profit-container {
  display: flex;
  margin-top: 20px;
}

.container-copying-sessions-card .block-card .info-profit-container p:last-child span {
  color: white;
}

.info-container  .two-line-info-wrapper{
  display: block;
}

.container-copying-sessions-card > div {
  margin-bottom: 30px;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}

.container-copying-sessions-card .block-card {
  font-family: Montserrat,serif;
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

.container-copying-sessions-card .block-card .block-card-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
}

.container-copying-sessions-card .block-card .card-nickname-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.container-copying-sessions-card .block-card .info-text .trader-nickname p:last-child {
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

.container-copying-sessions-card .block-card .wrapper-img-investor {
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

.container-copying-sessions-card .block-card .wrapper-img span {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-copying-sessions-card .block-card .wrapper-img img {
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-copying-sessions-card .block-card .info-text h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 10px;
}

.container-copying-sessions-card .block-card .info-text .card-nickname-container p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #B2B2B2;
  text-transform: none;
}

.container-copying-sessions-card .block-card .info-text p {
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.container-copying-sessions-card .block-card .info-text p:last-child {
  margin-bottom: 0;
}

.container-copying-sessions-card .block-card .info-text p span {
  color: #989898;
  font-size: 13px;
}

</style>
