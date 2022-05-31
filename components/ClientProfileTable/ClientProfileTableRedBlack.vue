<template>
    <div class="profile-page-red-black">
        <h3>Public information</h3>
        <div class="black-block">
            <div class="table-row">
                <div class="col-row" v-for="row in tableDataPublic" :key="row.title">
                    <div>
                        <p>{{row.title}}</p>
                        <span v-if="row.title === 'About me'" class="simple-text">
                            {{row.value}}
                        </span>
                        <span v-else-if="isRowTitleWithCountry(row.title)">
                            <img class="image-in-row" :src="row.img"/> {{row.value}}
                        </span>
                        <span v-else>
                            {{row.value}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="btn-block">
                <NuxtLink to="/settings/edit-personal-info">
                  <default-button
                    :type="'trans-button'"
                    :label="'Edit'"
                  />
                </NuxtLink>
            </div>
        </div>

        <h3>Security information</h3>
        <div class="black-block">
            <div class="table-row">
                <div class="col-row" v-for="row in tableDataSecurity" :key="row.title">
                    <p>{{row.title}}</p>
                    <span v-if="row.title === 'Address'" class="address-text">
                        {{row.value}}
                    </span>
                    <span v-else-if="isRowTitleWithCountry(row.title)">
                        <img class="image-in-row" :src="row.img"/> {{row.value}}
                    </span>
                    <span v-else>
                        {{row.value}}
                    </span>
                </div>
            </div>
            <div class="btn-block">
                <NuxtLink to="/settings/edit-personal-info"><default-button
                    :type="'trans-button'"
                    :label="'Edit'"
                /></NuxtLink>
            </div>
        </div>
        <h3>Verification status</h3>
        <div class="status-section">
            <div class="black-block status-block" v-for="row in tableDataStatus" :key="row.title">
                <div class="table-row">
                    <div class="col-row" v-if="row.title === 'Bank card'">
                        <span>{{row.title}}</span>
                        <verified-status
                            :customText="row.value"
                            :type="'Simple'"
                        />
                    </div>
                    <div class="col-row" v-else>
                        <span>{{row.title}}</span>
                        <verified-status
                            :type="row.value"
                        />
                    </div>
                    <div class="col-row">
                        <NuxtLink :to="row.url">
                          <default-button
                            :type="'trans-button'"
                            :label="row.button"
                          />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VerifiedStatus from './VerifiedStatus.vue';
import DefaultButton from '../default-button.vue';
export default {
  name: 'client-profile-table-red-black',
  props: {
    tableDataPublic: {
      type: Array,
      default: () => []
    },
    tableDataSecurity: {
      type: Array,
      default: () => []
    },
    tableDataStatus: {
      type: Array,
      default: () => []
    },
  },
  components: {
    'verified-status': VerifiedStatus,
    'default-button': DefaultButton,
  },
  methods: {
    isRowTitleWithCountry(title) {
      return title === 'Country';
    },
  },
};
</script>
<style>
    .profile-page-red-black
    {
        background: #333333;
    }

    .profile-page-red-black h3
    {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 20px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 30px;
    }

    .profile-page-red-black .black-block
    {
        margin-bottom: 80px;
    }

    .profile-page-red-black .black-block p
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

    .profile-page-red-black .black-block span
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #B2B2B2;
    }

    .profile-page-red-black .black-block .table-row
    {
        display: block;
    }

    .profile-page-red-black .black-block .table-row > div
    {
        margin-bottom: 20px;
        position: relative;
    }

    .profile-page-red-black .black-block .table-row > div img
    {
        width: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 3px !important;
        margin-top: -6px;
    }

    .profile-page-red-black .black-block .table-row > div:first-child span
    {
        color: #ffffff;
    }

    .profile-page-red-black .black-block .btn-block
    {
        position: relative;
    }

    .profile-page-red-black .black-block .row-full > div
    {
        width: 100%;
        margin-right: 0;
    }

    .profile-page-red-black .black-block .simple-text
    {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #989898 !important;
    }

    .profile-page-red-black .black-block .address-text
    {
        font-size: 15px;
        color: #B2B2B2 !important;
    }

    .profile-page-red-black .black-block .status,
    .profile-page-red-black .black-block .badge-with-text
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 100%;
        text-transform: uppercase;
        color: #737373;
        background: #242424;
        padding: 3px 5px 3px;
        display: inline-block;
        vertical-align: middle;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
    }

    .profile-page-red-black .black-block .badge-with-text.success
    {
        color: #8DC640;
    }

    .profile-page-red-black .black-block .badge-with-text.primary
    {
        color: #D2AC75;
    }

    .profile-page-red-black .black-block .badge-with-text.danger
    {
        color: #E52525;
    }

    .profile-page-red-black .black-block.status-block
    {
        margin-bottom: 10px;
    }

    .profile-page-red-black .black-block.status-block .table-row
    {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
    }

    .profile-page-red-black .black-block.status-block span
    {
        color: #B2B2B2 !important;
        display: block;
        font-size: 16px;
        line-height: 20px;
        padding-top: 3px;
        margin-bottom: -3px;
    }

    .profile-page-red-black .black-block.status-block .col-row
    {
        margin-bottom: 0;
        margin-right: 0;
        width: auto !important;
    }

    .profile-page-red-black .black-block.status-block .trans-button
    {
        line-height: 15px;
        padding-left: 20px;
        padding-right: 20px;
        min-width: 100px;
    }

    .profile-page-red-black .status-section
    {
        margin-bottom: 60px;
    }

    .light-theme .panel-change-avatar-red-black .title-change-avatar > p,
    .light-theme .profile-page-red-black h3,
    .light-theme .profile-page-red-black .black-block .table-row > div:first-child span
    {
      color: #000000;
    }

    .light-theme .profile-page-red-black .black-block span
    {
      color: #989898;
    }

    .light-theme .profile-page-red-black .black-block .address-text
    {
      color: #989898 !important;
    }

    .light-theme .profile-page-red-black .black-block .status,
    .light-theme .profile-page-red-black .black-block .badge-with-text
    {
      background: #ffffff;
      border: 1px solid #D4D4D4;
    }
</style>
