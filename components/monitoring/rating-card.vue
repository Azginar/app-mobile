<template>
  <div class="container-card rating-card" @click="$router.push('/provider/Dshadow')">
    <div class="block-card" @click="clickEvent">
      <div class="text-right">
        {{ days }}
      </div>
      <div class="block-card-wrapper">
        <div class="info-text">
          <div>
            <div class="avatar-nick-account-container">
              <div>
                <div class="card-nickname-container">
                  <div class="wrapper-img-rating">
                    <img :src="avatar">
                  </div>
                  <p>{{ userNickName }}</p>
                </div>
              </div>

              <div class="account">
                <p>{{ account }}</p>
              </div>
            </div>

            <div class="percent">
              <div class="average-monthly-profitability">
                <div>
                  <p>
                    {{ percent }}
                  </p>
                </div>
                <div>
                  <span>average monthly</span>
                  <span>profitability</span>
                </div>
              </div>
            </div>

            <div class="additional-information-line">
              <two-line-info
                :label="'Equity'"
                :value="equity"
              />
              <two-line-info
                :label="'Investors'"
                :value="investors"
              />
              <two-line-info
                :label="'Investors\' equity'"
                :value="investorsEquity"
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
  name: 'RatingCard',
  components: {
    TwoLineInfo
  },
  props: {
    days: {
      type: String,
      default: ''
    },
    account: {
      type: String,
      default: ''
    },
    percent: {
      type: String,
      default: ''
    },
    userNickName: {
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
    },
    equity: {
      type: String,
      default: ''
    },
    investors: {
      type: String,
      default: ''
    },
    investorsEquity: {
      type: String,
      default: ''
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
.rating-card .avatar-nick-account-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.rating-card .avatar-nick-account-container .account {
  position: absolute;
  right: 10px;
  top: 32px;
}

.rating-card .additional-information-line {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.rating-card .additional-information-line div {
  /*width: 100px;*/
  margin-right: 20px;
  margin-bottom: 20px;
}

.rating-card .additional-information-line div:last-child
{
  margin-right: 0;
}

.container-card {
  display: flex;
  flex-wrap: wrap;
}

.container-card > div {
  margin-bottom: 30px;
  width: 25%;
}

.container-card .block-card {
  font-family: Montserrat;
  margin: 10px auto;
  padding: 20px 20px 0;
  display: block;
  flex-shrink: 0;
  width: 100%;
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
  margin-top: 0;
  margin-bottom: 7px;
}

.container-card .block-card .info-text .card-nickname-container p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
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

.container-card .block-card .wrapper-img-rating {
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
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
}

.rating-card .avatar-nick-account-container .account p
{
  font-size: 13px;
  line-height: 16px;
}

.container-card .block-card .info-text p:last-child {
  margin-bottom: 0;
}

.container-card .block-card .info-text .percent p {
  font-size: 24px;
  line-height: 120%;
  font-weight: 600;
  color: #B2B2B2;
}

.container-card .block-card .info-text .percent .average-monthly-profitability {
  display: flex;
  align-items: center;
}

.container-card .block-card .info-text .percent .average-monthly-profitability div:first-child {
  margin-right: 10px;
}

.container-card .block-card .info-text .percent .average-monthly-profitability div:last-child {
  text-transform: uppercase;
  line-height: 11px;
}

.container-card .block-card .info-text span {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: #737373;
  display: block;
}

.container-card .block-card .info-text .additional-information-line span {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  color: #B2B2B2;
}

.rating-card .block-card .info-text .span {
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

.light-theme .container-card .block-card .info-text .card-nickname-container p
{
  color: #000000;
}

.light-theme .container-card .block-card .info-text .percent p,
.light-theme .container-card .block-card .info-text .additional-information-line span
{
  color: #989898;
}

.light-theme .container-card .block-card
{
  background: #ffffff;
}

</style>
