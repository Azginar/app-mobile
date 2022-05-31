<template>
  <div class="container-card-investor">
    <div v-for="row in investorInfo" :key="row.title">
      <NuxtLink :to="row.link" class="block-card">
        <div class="avatar-block">
          <div class="user-avatar">
            <img :src="row.avatar">
          </div>
          <div class="user-info">
            <p> {{ row.nickname }}</p>
            <span>{{ row.account }}</span>
          </div>
        </div>
        <div class="row-line">
          <div class="col-line">
            <p>Copy type</p>
            <span>{{ row.copyType }}</span>
          </div>
          <div class="col-line">
            <p>Duration</p>
            <span>{{ row.duration }}</span>
          </div>
          <div class="col-line">
            <p>START EQUITY</p>
            <span>{{ row.startEquity }}</span>
          </div>
          <div class="col-line">
            <p>PROFIT</p>
            <span>{{ row.profit }}</span>
          </div>
          <div class="col-line">
            <p>MY profit commission</p>
            <span>{{ row.profitCommission }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>

export default {
  name: 'PaymentBlock',
  props: {
    investorInfo: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.container-card-investor
{
  margin-bottom: 50px;
}

.container-card-investor > div
{
  margin-bottom: 20px;
}

.container-card-investor .block-card
{
  padding: 20px 20px 10px;
  display: block;
  text-decoration: none;
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

.container-card-investor .block-card .avatar-block
{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.container-card-investor .block-card .avatar-block .user-avatar
{
  width: 40px;
  height: 40px;
  margin-right: 10px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.container-card-investor .block-card .avatar-block .user-avatar img
{
  max-width: 100%;
  height: 100%;
}

.container-card-investor .block-card .avatar-block .user-info p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  margin-bottom: 5px;
}

.container-card-investor .block-card .avatar-block .user-info span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  display: block;
}

.container-card-investor .block-card .row-line
{
  display: flex;
  flex-wrap: wrap;
}

.container-card-investor .block-card .row-line .col-line
{
  margin-right: 20px;
  margin-bottom: 10px;
}

.container-card-investor .block-card .row-line .col-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.container-card-investor .block-card .row-line .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #B2B2B2;
  display: block;
}
</style>
