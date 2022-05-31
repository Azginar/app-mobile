<template>
  <div class="table-row general-information">
    <div class="col-row">
      <div>
        <p>Country</p>
        <span>
          {{ country }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Language</p>
        <span>
          {{ language }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Registration date</p>
        <span>
          {{ registrationDate }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Equity</p>
        <span>
          {{ equity }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>investors</p>
        <span>
          {{ investors }}
        </span>
      </div>
    </div>
    <div class="col-row">
      <div>
        <p>Investors' equity</p>
        <span>
          {{ investorsEquity }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProviderGeneralInformationBlock',
  props: {
    language: {
      type: String,
      default: 'English'
    },
    country: {
      type: String,
      default: 'Malaysia'
    },
    registrationDate: {
      type: String,
      default: '16 03 2018'
    },
    equity: {
      type: String,
      default: '10 355.83 USD'
    },
    investors: {
      type: String,
      default: '514'
    },
    investorsEquity: {
      type: String,
      default: '123 451.50 USD'
    }
  }
}
</script>
<style>
.general-information {
  margin-top: 20px;
}

.general-information .col-row p {
  margin-top: 15px;
  /* sub */
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: #737373;
}

.general-information .col-row
{
  margin-top: 20px;
}

.general-information .col-row span {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
}
</style>
