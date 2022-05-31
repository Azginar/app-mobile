<template>
  <div class="authorization-code-form">
    <with-close-ic-header
      :go-back="goBackPage"
    >
      <template v-slot:name>
        <div class="order-info-images-trading-pair-container">
          <h3>Authorization code will be sent via SMS</h3>
        </div>
      </template>
    </with-close-ic-header>
    <div class="central-part">
      <label>Authorization code</label>
      <black-input
        :value="AUTHORIZATION_CODE"
        :type="'number'"
      />
    </div>
    <div class="btn-block">
      <div>
        <default-button
          label="Ok"
          type="red-button"
          :click-event="goToModalSuccess"
        />
      </div>
      <div>
        <default-button
          label="Cancel"
          type="trans-button"
          :click-event="goBackPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import BlackInput from '@/components/black-input'
const { mapState } = createNamespacedHelpers('finance')
export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    BlackInput,
    WithCloseIcHeader
  },
  computed: {
    ...mapState([
      'AUTHORIZATION_CODE'
    ])
  },
  methods: {
    goBackPage () {
      this.$router.back()
    },
    goToModalSuccess () {
      this.$router.push(`/withdrawal/id/${this.$route.params.id}/withdrawal-success`)
    }
  }
}
</script>
<style>
.authorization-code-form
{
  padding: 0 20px 50px;
}

.authorization-code-form .container-close-ic-header
{
  padding: 0;
}

.authorization-code-form .container-close-ic-header .header-form
{
  margin-bottom: 80px;
}

.authorization-code-form label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 97.52%;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
}

.authorization-code-form .central-part
{
  margin-bottom: 40px;
}

.authorization-code-form h1
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

.authorization-code-form .btn-block
{
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.authorization-code-form .btn-block > div
{
  margin-bottom: 20px;
}

.authorization-code-form .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 16px 40px 17px;
}

.authorization-code-form .btn-block .trans-button
{
  background: #454545;
  border-color: #454545;
}

.light-theme .authorization-code-form .btn-block .trans-button
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

@media (max-width: 340px) {
  .authorization-code-form .btn-block button
  {
    margin-right: 5px;
    margin-left: 5px;
  }
}
</style>
