<template>
  <div class="notifications-block">
    <h3>Notifications</h3>
    <div class="black-block">
      <div class="table-row">
        <div class="col-row">
          <p>Language</p>
          <span> English </span>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Low margin level</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataMarginLevel" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Withdrawal confirmation</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataWithdrawalConfirmation" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Email notifications</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataEmailNotifications" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Email subscriptions</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataEmailSubscriptions" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-block">
        <NuxtLink to="/settings/edit-notifications"><default-button
          :type="'trans-button'"
          :label="'Edit'"
          :click-event="() => {}"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from './default-button.vue';
export default {
  name: 'NotificationsBlock',
  components: {
    'default-button': DefaultButton
  },
  props: {
    dataMarginLevel: Array,
    dataWithdrawalConfirmation: Array,
    dataEmailNotifications: Array,
    dataEmailSubscriptions: Array
  }
}
</script>
<style>
  .notifications-block
  {
    margin-bottom: 80px;
  }

  .notifications-block h3
  {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 30px;
  }

  .notifications-block .black-block p
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: #737373;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .notifications-block .black-block span
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #B2B2B2;
  }

  .notifications-block .black-block .table-row
  {
    padding-bottom: 10px;
  }

  .notifications-block .black-block > .table-row span
  {
    color: #B2B2B2 !important;
  }

  .notifications-block .black-block .table-row > div
  {
    margin-right: 60px;
    margin-bottom: 20px;
    position: relative;
  }

  .notifications-block .black-block .table-row>div
  {
    width: auto;
    color: #B2B2B2;
  }

  .notifications-block .black-block .table-row-border
  {

  }

  .notifications-block .black-block > .table-row
  {

  }

  .notifications-block .black-block .table-row > div
  {
    margin-right: 40px;
    margin-bottom: 20px;
  }

  .notifications-block .black-block .table-row > div:last-child
  {
    margin-right: 0;
    width: auto;
  }

  .notifications-block .black-block .table-row > div i
  {
    font-style: normal;
    color: #B2B2B2;
  }

  .notifications-block .black-block .table-row > div span
  {
    color: #737373;
  }

  .notifications-block .black-block .title-table h5
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 100%;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 20px;
  }

  .notifications-block .black-block .btn-block
  {
    margin-top: -10px;
  }

  .notifications-block .black-block .btn-block .trans-button
  {
    background: #333333;
  }

  .light-theme .notifications-block .black-block .title-table h5
  {
    color: #000000;
  }

  .light-theme .notifications-block .black-block .table-row > div i
  {
    color: #989898;
  }

  .light-theme .notifications-block .black-block .btn-block .trans-button
  {
    background: #F7F6FB;
  }
</style>
