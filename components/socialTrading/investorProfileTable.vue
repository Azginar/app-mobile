<template>
  <div class="investor-profile-trader">
    <div class="black-block">
      <div class="info-block">
        <div class="table-row">
          <div v-for="row in tableDataPublic" :key="row.title" class="col-row">
            <div>
              <p>{{ row.title }}</p>
              <span>
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
export default {
  name: 'InvestorProfileTable',
  props: {
    tableDataPublic: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
    .investor-profile-trader
    {
        background: #333333;
        padding-left: 20px;
        padding-right: 20px;
    }

    .investor-profile-trader h3
    {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 18px;
    }

    .investor-profile-trader .black-block
    {
        position: relative;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .investor-profile-trader .black-block p
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

    .investor-profile-trader .black-block span
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #B2B2B2;
    }

    .investor-profile-trader .black-block .col-row:last-child span
    {
        color: #737373;
    }

    .investor-profile-trader .black-block .col-row:last-child span
    {
      color: #ffffff;
    }

    .investor-profile-trader .black-block .table-row
    {
        height: 100%;
    }

    .investor-profile-trader .black-block .table-row > div
    {
        margin-bottom: 20px;
        position: relative;
    }

    .investor-profile-trader .black-block .table-row > div img
    {
        width: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0 !important;
        margin-top: -6px;
    }

    .investor-profile-trader .black-block .table-row > div:first-child span
    {
        color: #B2B2B2;
    }

    .light-theme .investor-profile-trader
    {
      background: transparent;
    }

    .light-theme .investor-profile-trader .black-block span,
    .light-theme .investor-social-page .graph-block h5
    {
      color: #989898;
    }

    .light-theme .investor-profile-trader .black-block .col-row:last-child span
    {
      color: #000000;
    }
</style>
