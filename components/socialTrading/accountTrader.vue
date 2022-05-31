<template>
  <div class="account-social">
    <h3>My public accounts</h3>
    <div class="container-account">
      <div v-for="row in accountsTrader" :key="row.title">
        <NuxtLink :to="`/provider/account/${row.link}`" class="block-card">
          <div class="text-right">
            {{ row.typeAccount }}
          </div>
          <div class="block-account-wrapper">
            <div class="info-text">
              <h4>{{ row.account }}</h4>
              <div class="block-row">
                <h5>{{ row.averageMonthlyProfitability }}</h5>
                <p>average monthly<br>profitability</p>
              </div>
              <div class="row-line-inner">
                <div>
                  <p>Investors</p>
                  <p><span>{{ row.investors }}</span></p>
                </div>
                <div>
                  <p>Investors' equity</p>
                  <p><span>{{ row.investorsEquity }}</span></p>
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
  name: 'AccountTrader',
  props: {
    accountsTrader: {
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
.account-social h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}
.container-account
{
  margin-bottom: 50px;
}

.container-account > div
{
  margin-bottom: 20px;
  width: 100%;
}

.account-social > div a
{
  text-decoration: none;
}

.container-account .block-card
{
  padding: 20px 20px 0;
  display: block;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-account .block-card .block-account-wrapper
{
  display: block;
}

.container-account .block-row
{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.container-account .block-row h5
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  text-align: right;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-right: 10px;
}

.container-account .block-card .add-account-new
{
  padding-bottom: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-account .block-card .add-account-new h4
{
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.container-account .block-card .block-account-wrapper .row-line-inner
{
  display: flex;
  margin-top: 10px;
}

.container-account .block-card .block-account-wrapper .row-line-inner > div:first-child
{
  margin-right: 20px;
}

.container-account .block-card .block-account-wrapper .row-line-inner > div
{
  margin-bottom: 20px;
}

.container-account .block-card .info-text h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.container-account .block-card .info-text p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
}

.container-account .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.container-account .block-card .info-text p span
{
  color: #989898;
}

.container-account .block-card .text-right
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

.container-account .block-card .bg-transparent
{
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.light-theme .container-account .block-card
{
  background: #ffffff;
}

.light-theme .container-account .block-card .info-text h4
{
  color: #000000;
}

.light-theme .container-account .block-row h5
{
  color: #989898;
}

</style>
