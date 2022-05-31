<template>
  <div class="container-card">
    <div class="block-card">
      <div class="text-right">
        {{ leverage }}
      </div>
      <div class="block-card-wrapper">
        <div class="info-text-archive">
          <h4>{{ account }}</h4>
          <div class="info-container">
            <div class="info-archive-first-line">
              <two-line-info
                :label="'BALANCE'"
                :value="'0.00 USD'"
              />
              <two-line-info
                :label="'CREDIT'"
                :value="'0.00 USD'"
              />
            </div>
          </div>
          <div class="info-container" style="margin-top: 10px">
            <p>Equity</p>
            <p>
              <span>{{ balance }}</span>
            </p>
          </div>
          <div class="info-archive-button-line">
            <div style="display: block">
              <default-button
                :type="'trans-button'"
                :label="'Restore'"
                :click-event="handleRestoreAccount"
              />
            </div>
            <div style="display: block; margin-left: 5%">
              <default-button
                :type="'trans-button'"
                :label="'DELETE'"
                :click-event="handleDeleteAccount"
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
  name: 'ArchiveAccountCard',
  components: {
    TwoLineInfo
  },
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
    handleDeleteAccount: {
      type: Function,
      required: true
    },
    handleRestoreAccount: {
      type: Function,
      required: true
    }
  }
}
</script>
<style>
.info-archive-button-line {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.info-archive-button-line .trans-button {
  padding: 13px 30px 12px;
}

.info-archive-first-line {
  display: flex;
}

.info-text-archive {
  display: block;
}

.info-archive-first-line > div {
  margin-right: 80px;
}

.info-text-archive .info-container:last-child {
  margin-top: 10px;
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

.container-card .block-card {
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

.container-card .block-card .wrapper-img {
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

.container-card .block-card .info-text-archive h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 10px;
}

.container-card .block-card .info-text-archive p {
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
}

.container-card .block-card .info-text-archive p:last-child {
  margin-bottom: 0;
}

.container-card .block-card .info-text-archive p span {
  color: #989898;
  font-size: 13px;
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

.light-theme .container-card .block-card .info-text h4,
.light-theme .container-card .block-card .info-text-archive h4
{
  color: #000000;
}

</style>
