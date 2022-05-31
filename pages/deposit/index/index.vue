<template>
  <div class="deposit-menu-container">
    <h3>Deposit method</h3>
    <div class="setting-block" @click="handleLocalDeposit">
      <div class="text-block">
        Local Deposit
      </div>
    </div>
    <div class="setting-block" @click="handleBankCard">
      <div class="text-block">
        Bank card
      </div>
    </div>
    <div class="setting-block" @click="handleElectronicSystems">
      <div class="text-block">
        Electronic systems
      </div>
    </div>
    <div class="setting-block" @click="handleBankWireTransfer">
      <div class="text-block">
        Bank wire transfer
      </div>
    </div>
    <div class="setting-block" @click="handleBitcoin">
      <div class="text-block">
        Cryptocurrencies
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  methods: {
    handleLocalDeposit () {
      this.$router.push('/deposit/local-deposit')
    },
    handleBankCard () {
      this.$router.push('/deposit/bank-card/index')
    },
    handleElectronicSystems () {
      this.$router.push('/deposit/electronic-systems')
    },
    handleBankWireTransfer () {
      this.$router.push('/deposit/form?method=wire-transfer')
    },
    handleBitcoin () {
      this.$router.push('/deposit/form?method=btc')
    }
  }
}
</script>
<style>
.deposit-menu-container
{
  padding: 0 20px 80px;
}

.deposit-menu-container h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.deposit-menu-container .setting-block
{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 36, 36, 0.5);
  margin-bottom: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  cursor: pointer;
}

.deposit-menu-container .setting-block .text-block
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #B2B2B2;
  padding-top: 23px;
  padding-bottom: 22px;
}

.light-theme .deposit-menu-container h3
{
  color: #000000;
}

.light-theme .deposit-menu-container .setting-block
{
  background: #ffffff;
}

.light-theme .deposit-menu-container .setting-block .text-block
{
  color: #989898;
}

</style>
