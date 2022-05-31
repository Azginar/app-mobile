<template>
  <div class="security-info-account">
    <h3>Security</h3>
    <div class="table-row">
      <div class="col-row">
        <p>Trader's password</p>
        <span>******</span>
      </div>
      <div class="col-row">
        <default-button
          :type="'trans-button'"
          :label="'CHANGE'"
        />
      </div>
    </div>
    <div class="table-row">
      <div class="col-row">
        <p>INVESTOR'S PASSWORD</p>
        <span>******</span>
      </div>
      <div class="col-row">
        <default-button
          :type="'trans-button'"
          :label="'CHANGE'"
        />
      </div>
    </div>
    <div class="table-row">
      <div class="col-row">
        <p>PHONE PASSWORD</p>
        <span>******</span>
      </div>
      <div class="col-row">
        <default-button
          :type="'trans-button'"
          :label="'VIEW'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../default-button'
export default {
  name: 'SecurityAccountBlock',
  components: {
    'default-button': DefaultButton
  }
}
</script>
<style>
.security-info-account h3 {
  font-family: Montserrat,serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 30px !important;
}

.security-info-account .table-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
}

.security-info-account .table-row .col-row {
  width: 50%;
}

.security-info-account .table-row .col-row:last-child
{
  text-align: right;
}

.security-info-account .table-row .col-row p {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.security-info-account .table-row .col-row span {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
  display: block;
}

.security-info-account .table-row .col-row button {
  padding: 8px 20px 7px;
  min-width: 100px;
  height: 40px;
}

</style>
