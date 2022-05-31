<template>
  <div class="account-investor-social">
    <h3>My investor accounts</h3>
    <div class="container-account-investor">
      <div v-for="row in accountsInvestor" :key="row.title">
        <NuxtLink :to="`/accounts/info?login=69868&server=40&is-investor=true`" class="block-card">
          <div class="text-right">
            {{ row.typeAccount }}
          </div>
          <div class="block-account-wrapper">
            <div class="info-text">
              <h4>{{ row.account }}</h4>
              <div class="row-line-inner">
                <div>
                  <p>Attached to</p>
                  <p><span><i>{{ row.attachedTo }}</i></span></p>
                </div>
                <div>
                  <p>Start balance</p>
                  <p><span>{{ row.startBalance }}</span></p>
                </div>
              </div>
              <div class="row-line-inner">
                <div>
                  <p>Current balance</p>
                  <p><span>{{ row.currentBalance }}</span></p>
                </div>
                <div>
                  <p>Profit of trading</p>
                  <p><span>{{ row.profitTrading }}</span></p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AccountInvestor',
  props: {
    accountsInvestor: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.account-investor-social h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding-bottom: 18px;
  margin-bottom: 20px;
  border-bottom: 1px solid #484848;
}
.container-account-investor
{
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container-account-investor > div
{
  margin-bottom: 30px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.container-account-investor .block-card
{
  padding: 20px;
  display: block;
  flex-shrink: 0;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-account-investor .block-card .block-account-wrapper
{
  display: block;
}

.container-account-investor .block-card .add-account-new
{
  padding-bottom: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-account-investor .block-card .add-account-new h4
{
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.container-account-investor .block-card .block-account-wrapper .row-line-inner
{
  display: flex;
  margin-top: 10px;
}

.container-account-investor .block-card .block-account-wrapper .row-line-inner i
{
  color: #ffffff;
  text-decoration: none;
  font-style: normal;
}

.container-account-investor .block-card .block-account-wrapper .row-line-inner > div:first-child
{
  margin-right: 20px;
}

.container-account-investor .block-card .wrapper-img
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

.container-account-investor .block-card .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-account-investor .block-card .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-account-investor .block-card .info-text h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 10px;
  border-bottom: none;
  padding-bottom: 0;
}

.container-account-investor .block-card .info-text p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.container-account-investor .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.container-account-investor .block-card .info-text p span
{
  color: #B2B2B2;
}

.container-account-investor .block-card .text-right
{
  font-family: Montserrat;
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-account-investor .block-card .bg-transparent
{
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.light-theme .container-account-investor .block-card
{
  background: #ffffff;
}

.light-theme .container-account-investor .block-card .info-text h4,
.light-theme .container-account-investor .block-card .block-account-wrapper .row-line-inner i
{
  color: #000000;
}
</style>
