<template>
  <div class="finance-page bank-card-page">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goToDepositIndex"
      />
    </div>
    <h1>Select or add yours cards</h1>
    <bank-card :bank-card-element="BANK_CARD_MASSIVE" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import bankcard from '../../../../components/finance/bankcard'
const { mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  components: {
    'bank-card': bankcard
  },
  computed: {
    ...mapState([
      'BANK_CARD_MASSIVE'
    ])
  },
  methods: {
    goToDepositIndex () {
      this.$router.push('/deposit/index')
    }
  }
}
</script>
<style>
.finance-page
{
  padding: 40px 20px 80px;
}

.bank-card-page h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.finance-page .go-back-button
{
  margin-bottom: 40px;
}

.bank-card-block .block-card .wrapper-img
{
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
}

.bank-card-block .block-card .wrapper-img img
{

}

.bank-card-block .block-card .info-text p
{
  margin-bottom: 5px;
}

.bank-card-block .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.light-theme .bank-card-page h1
{
  color: #000000;
}
</style>
