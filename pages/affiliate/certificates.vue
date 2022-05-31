<template>
  <div class="certificate-page">
    <with-close-ic-header
      :go-back="() => $router.back()"
    >
      <template v-slot:name>
        <h3>Сertificate</h3>
      </template>
    </with-close-ic-header>
    <div class="container">
      <h4>Get the certificate from Tifia to prove your affiliate status</h4>
      <div class="input-block">
        <label>Check your name here and correct if needed</label>
        <black-input
          :value="GET_USER_NAME"
        />
        <div class="btn-block">
          <default-button
            label="Send request"
            type="red-button"
            :click-event="handleClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import BlackInput from '@/components/black-input'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import DefaultButton from '@/components/default-button.vue'
const { mapGetters } = createNamespacedHelpers('affiliate')
export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    BlackInput,
    WithCloseIcHeader,
    'default-button': DefaultButton
  },
  computed: {
    ...mapGetters([
      'GET_USER_NAME'
    ])
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  methods: {
    handleClick () {
      this.$router.push('/affiliate/index')
    }
  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.certificate-page h4
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.certificate-page label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 97.52%;
  text-transform: uppercase;
  display: block;
  color: #737373;
  padding: 0 20px;
  margin-bottom: 5px;
}

.certificate-page .btn-block
{
  margin-top: 40px;
  text-align: center;
}

.certificate-page .btn-block button
{
  padding-left: 20px;
  padding-right: 20px;
}

.light-theme .certificate-page h4
{
  color: #000000;
}

</style>
