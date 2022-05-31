<template>
  <div class="social-trading-block-account">
    <h3>Social trading</h3>
    <div style="text-align: center">
      <default-button

        :label="'Make account public'"
        :click-event="() => {}"
        :type="'trans-button'"
      />
    </div>
    <div class="social-trading-block-account-desc">
      <p>Публичный счет будет отображаться в топе счетов и будет доступен для копирования потенциальными инвесторами.</p>
      <br>
      <p>Должны быть соблюдены следующие условия: </p>
      <br>
      <p> – Баланс счета не менее 100 USD</p>
      <p>– Активная торговля на счете не менее 1 месяца</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SocialTradingBlock'
}
</script>
<style>
.black-block .info-text-social-trading-text p {
  font-family: Arial;
  font-size: 13px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: none;
}

.info-text-social-trading-text{
  margin-bottom: 127px;
}

.social-trading-block-account
{
  padding: 20px 20px 60px;
  position: relative;
  overflow: hidden;
}

.social-trading-block-account h3
{
  margin-top: 45px;
  margin-bottom: 20px !important;
}

.social-trading-block-account .social-trading-block-account-desc
{
  margin-top: 20px;
}

.social-trading-block-account .social-trading-block-account-desc p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #737373;
  text-transform: none;
}

.light-theme .main-info-account h3
{
  color: #000000;
}
</style>
