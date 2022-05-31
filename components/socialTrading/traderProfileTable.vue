<template>
  <div class="trader-profile-trader">
    <h3>General information</h3>
    <div class="black-block">
      <div class="avatar-block">
        <img :src="avatarTrader">
      </div>
      <div class="info-block">
        <div class="table-row">
          <div v-for="row in tableDataPublic" :key="row.title" class="col-row">
            <div>
              <p>{{ row.title }}</p>
              <span v-if="isRowTitleWithAboutMe(row.title)" class="simple-text">
                {{ row.value }}
              </span>
              <span v-else-if="isRowTitleWithCountry(row.title)">
                <img class="image-in-row" :src="row.img"> {{ row.value }}
              </span>
              <span v-else>
                {{ row.value }}
              </span>
            </div>
          </div>
          <div class="btn-block">
            <default-button
              label="Edit about me"
              type="trans-button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../../components/default-button.vue'
export default {
  name: 'TraderProfileTable',
  components: {
    'default-button': DefaultButton
  },
  props: {
    tableDataPublic: {
      type: Array,
      default: () => []
    },
    avatarTrader: {
      type: String,
      default: ''
    }
  },
  methods: {
    isRowTitleWithCountry (title) {
      return title === 'Country'
    },
    isRowTitleWithAboutMe (title) {
      return title === 'About me'
    }
  }
}
</script>
<style>
    .trader-profile-trader
    {
        background: #333333;
    }

    .trader-profile-trader h3
    {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 40px !important;
    }

    .trader-profile-trader .black-block
    {
        position: relative;
        margin-bottom: 80px;
    }

    .trader-profile-trader .black-block .avatar-block
    {
      width: 120px;
      height: 120px;
      display: block;
      margin: 0 auto 20px;
      overflow: hidden;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
    }

    .trader-profile-trader .black-block .avatar-block img
    {
      max-width: 100%;
      height: auto;

    }

    .trader-profile-trader .black-block p
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

    .trader-profile-trader .black-block span
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #B2B2B2;
    }

    .trader-profile-trader .black-block .table-row
    {

    }

    .trader-profile-trader .black-block .table-row > div
    {
        margin-bottom: 20px;
        position: relative;
    }

    .trader-profile-trader .black-block .table-row > div:last-child
    {
        margin-right: 0;
    }

    .trader-profile-trader .black-block .table-row > div img
    {
        width: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0 !important;
        margin-top: -6px;
    }

    .trader-profile-trader .black-block .table-row > div:first-child span
    {
        color: #B2B2B2;
    }

    .trader-profile-trader .black-block .btn-block
    {
        position: relative;
        margin-bottom: 0 !important;
    }

    .trader-profile-trader .black-block .row-full > div
    {
        width: 100%;
        margin-right: 0;
    }

    .trader-profile-trader .black-block .simple-text
    {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #989898 !important;
        display: block;
    }

    .trader-profile-trader .black-block .address-text
    {
        font-size: 15px;
        color: #B2B2B2 !important;
    }

    .trader-profile-trader .black-block .table-row > div:first-child p
    {
        display: none;
    }

    .light-theme .trader-profile-trader
    {
      background: transparent;
    }

    .light-theme .trader-profile-trader .black-block span
    {
      color: #989898;
    }
</style>
