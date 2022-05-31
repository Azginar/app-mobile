<template>
  <div class="delete-account-container">
    <with-close-ic-header :go-back="goBack">
      <template v-slot:name>
        <div />
      </template>
    </with-close-ic-header>
    <div class="delete-account-content-container container">
      <div class="delete-icon-container">
        <BinSVG />
      </div>
      <div class="delete-account-notification-text">
        <h1>Are you sure you want to delete <br> account CLS-6074081?</h1>
      </div>
      <div class="delete-account-button-container">
        <div style="display: block">
          <default-button
            :click-event="() => {}"
            :type="'red-button'"
            :label="'YES'"
          />
        </div>
        <div style="display: block">
          <default-button
            :click-event="goBack"
            :type="'trans-button'"
            :label="'Cancel'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import BinSVG from '../../assets/bin.svg'

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    BinSVG,
    WithCloseIcHeader
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.delete-account-container .header-form {
  display: flex;
  justify-content: flex-end;
}

.delete-account-container .close-ic {
  cursor: pointer;
}

.delete-account-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 500px;

}

.delete-account-content-container .delete-account-notification-text {
  display: block;
}

.delete-account-content-container .delete-account-notification-text > h1 {
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 10px;
}

.delete-account-content-container .delete-account-button-container {
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-between;
  width: 90%;
}

</style>
