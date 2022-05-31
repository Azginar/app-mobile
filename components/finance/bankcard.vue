<template>
  <div class="container-card-element">
    <div v-for="row in bankCardElement" :key="row.title">
      <NuxtLink :to="`/deposit/bank-card/${row.id}`" class="block-card">
        <div class="block-card-wrapper">
          <div v-if="isRowTypeCard(row.type)" class="wrapper-img">
            <icMasterCard />
          </div>
          <div v-else class="wrapper-img">
            <icVisa />
          </div>
          <div class="info-text">
            <h4>{{ row.number }}</h4>
            <div v-if="isRowTitleStatusVerified(row.status)">
              <div class="verified block-status">
                <icVerified />
                <span>{{ row.status }}</span>
              </div>
            </div>
            <div v-else-if="isRowTitleStatusChecked(row.status)">
              <div class="checked block-status">
                <icChecked />
                <span>{{ row.status }}</span>
              </div>
            </div>
            <div v-else-if="isRowTitleStatusRejected(row.status)">
              <div>
                <div class="rejected block-status">
                  <icRejected />
                  <span>{{ row.status }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/deposit/bank-card/add-card" class="block-card empty-block">
        <div class="info-text">
          <h4>Add new Card</h4>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import icVerified from '../../assets/icons/verified-ic.svg'
import icChecked from '../../assets/icons/checked-ic.svg'
import icRejected from '../../assets/icons/rejected-ic.svg'
import icMasterCard from '../../assets/icons/master-card-ic.svg'
import icVisa from '../../assets/icons/visa-ic.svg'
export default {
  name: 'PaymentBlock',
  components: {
    icVerified,
    icChecked,
    icRejected,
    icMasterCard,
    icVisa
  },
  props: {
    bankCardElement: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    isRowTitleStatusVerified (status) {
      return status === 'verified'
    },
    isRowTitleStatusChecked (status) {
      return status === 'checked'
    },
    isRowTitleStatusRejected (status) {
      return status === 'rejected'
    },
    isRowTypeCard (type) {
      return type === 'mastercard'
    }
  }
}
</script>
<style>
.container-card-element
{
  margin-bottom: 50px;
  margin-right: -15px;
  margin-left: -15px;
}

.container-card-element > div
{
  margin-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
}

.container-card-element .block-card
{
  padding: 20px;
  display: block;
  text-decoration: none;
  flex-shrink: 0;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-card-element .block-card .block-card-wrapper
{
  display: flex;
  height: 100%;
  align-items: center;
}

.container-card-element .block-card .wrapper-img
{
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
}

.container-card-element .block-card .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-card-element .block-card .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-card-element .block-card .info-text h4
{
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 6px;
}

.container-card-element .block-card .info-text p
{
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 1px;
}

.container-card-element .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.container-card-element .block-card .info-text p span
{
  color: #989898;
}

.container-card-element .block-card .text-right
{
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-card-element .block-card .bg-transparent
{
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.container-card-element .empty-block
{
  min-height: 62px;
}

.container-card-element .empty-block .info-text
{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-card-element .empty-block .info-text h4
{
  margin-bottom: 0;
  text-align: center;
}

.container-card-element .block-card .block-status
{
  display: flex;
  align-items: center;
}

.container-card-element .block-card .block-status span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #ffffff;
}

.container-card-element .block-card .block-status svg
{
  margin-right: 5px;
}

.container-card-element .block-card .block-status.verified span
{
  color: #8DC640;
}

.container-card-element .block-card .block-status.checked span
{
  color: #D2AC75;
}

.container-card-element .block-card .block-status.rejected span
{
  color: #E52525;
}

.light-theme .container-card-element .block-card
{
  background: #ffffff;
}

.light-theme .container-card-element .block-card .info-text h4
{
  color: #000000;
}

@media (max-width: 340px) {
  .container-card-element .block-card .info-text h4
  {
    font-size: 15px;
    line-height: normal;
  }
}

</style>
