<template>
  <div class="trader-profile-table trader-account-table">
    <h3>General information</h3>
    <div class="black-block">
      <div class="info-block">
        <div class="table-row">
          <div v-for="row in tableDataPublic" :key="row.title" class="col-row">
            <div v-if="isRowTitleProfitability(row.title)" class="copy-trader-block">
              <div>
                <div>
                  <p>{{ row.title }}</p>
                  <span>{{ row.value }}</span>
                </div>
              </div>
            </div>
            <div v-else-if="isRowTitleAbout(row.title)" class="block-full">
              <div>
                <div>
                  <p>{{ row.title }}</p>
                  <span v-if="isRowTitleAbout(row.title)" class="simple-text">
                    {{ row.value }}
                  </span>
                  <div class="btn-block">
                    <default-button
                      label="Edit account info"
                      type="trans-button"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <p>{{ row.title }}</p>
              <span v-if="isRowTitleAbout(row.title)" class="simple-text">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../../components/default-button.vue'
export default {
  name: 'TraderAccountTable',
  components: {
    'default-button': DefaultButton
  },
  props: {
    tableDataPublic: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    isRowTitleWithCountry (title) {
      return title === 'Country'
    },
    isRowTitleProfitability (title) {
      return title === 'Average monthly profitability'
    },
    isRowTitleAbout (title) {
      return title === 'Copy trading information'
    }
  }
}
</script>
<style>
    .trader-profile-table h3
    {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 20px;
    }

    .trader-account-table .black-block
    {
        margin-bottom: 60px;
    }

    .trader-profile-table .black-block p
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

    .trader-profile-table .black-block span
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #B2B2B2;
    }

    .trader-profile-table .black-block .table-row
    {
      display: flex;
      flex-wrap: wrap;
    }

    .trader-profile-table .black-block .table-row > .col-row
    {
        margin-bottom: 20px;
        position: relative;
        width: 50%;
    }

    .trader-profile-table .black-block .table-row > div:nth-child(10)
    {

        margin-right: 0;
    }

    .trader-profile-table .black-block .table-row > div img
    {
        width: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0 !important;
        margin-top: -6px;
    }

    .trader-profile-table .black-block .table-row > div:first-child span
    {
        color: #B2B2B2;
    }

    .trader-profile-table .black-block .btn-block
    {
        position: relative;
    }

    .trader-profile-table .black-block .row-full > div
    {
        width: 100%;
        margin-right: 0;
    }

    .trader-profile-table .black-block .simple-text
    {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #FFFFFF !important;
    }

    .trader-profile-table .black-block .btn-block
    {
      margin-top: 20px;
    }

    .trader-profile-table .black-block .btn-block button
    {
      padding: 13px 20px 12px;
      line-height: 12px;
    }

    .trader-profile-table .black-block .address-text
    {
        font-size: 15px;
        color: #B2B2B2 !important;
    }

    .trader-profile-table .copy-trader-block
    {
      background: #1B1B1B;
      text-align: center;
      padding: 20px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }

    .trader-profile-table .copy-trader-block > div > div:first-child
    {
      margin-right: 0;
    }

    .trader-profile-table .copy-trader-block .trans-button
    {
      background: #333333;
      border: 1px solid rgba(94, 94, 94, 0.5);
    }

    .trader-profile-table .black-block .copy-trader-block p
    {
      font-size: 9px;
      line-height: 100%;
      color: #B2B2B2;
    }

    .trader-profile-table .black-block .copy-trader-block span
    {
      font-size: 24px;
      line-height: 120%;
      color: #ffffff;
    }

    .trader-profile-table .black-block .btn-block
    {
      text-align: center;
      margin-bottom: 20px;
    }

    .trader-profile-table .black-block .table-row > .col-row:first-child,
    .trader-profile-table .black-block .table-row > .col-row:last-child
    {
      width: 100%;
    }

    .light-theme .trader-profile-table .black-block span,
    .light-theme .trader-profile-table .black-block .copy-trader-block p,
    .light-theme .ul-tabs-inner li a
    {
      color: #989898;
    }

    .light-theme .trader-profile-table .copy-trader-block
    {
      background: #ffffff;
    }

    .light-theme .ul-tabs-inner li a.active
    {
      color: #000000;
    }
</style>
