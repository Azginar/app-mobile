<template>
  <div class="deposit-form-success">
    <div class="icon-block">
      <OkSVG />
    </div>
    <h1>Money has been sent to you</h1>
    <div class="btn-block">
      <default-button
        :click-event="goToWithdrawalIndex"
        :type="'red-button'"
        :label="'OK'"
      />
    </div>
  </div>
</template>
<script>
import OkSVG from '../../../../assets/ok.svg'

export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    OkSVG
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    goToWithdrawalIndex () {
      this.$router.push('/withdrawal/index')
    }
  }
}
</script>
<style>
.deposit-form-success
{
  padding: 150px 20px 50px;
}

.deposit-form-success .icon-block
{
  text-align: center;
  margin-bottom: 20px;
}

.deposit-form-success h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 40px;
}

.deposit-form-success .btn-block
{
  text-align: center;
}

.deposit-form-success .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.light-theme .deposit-form-success h1
{
  color: #000000;
}

</style>
