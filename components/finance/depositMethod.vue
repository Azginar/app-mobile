<template>
  <div>
    <div v-for="paymentMethod in paymentMethods" :key="paymentMethod.title" class="depositMethod">
      <h3>{{ paymentMethod.titleBlock }}</h3>
      <div class="container-card-finance">
        <div v-for="row in paymentMethod.methods" :key="row.title">
          <NuxtLink :to="row.link" class="block-card">
            <div class="text-right">
              {{ row.status }}
            </div>
            <div class="block-card-wrapper">
              <div v-if="isRowTypeBankSystem(row.type)" class="wrapper-img bg-transparent">
                <img v-if="isRowAvatarNoEmpty(row.avatar)" :src="row.avatar">
                <span v-else>{{ row.avatarText }}</span>
              </div>
              <div v-else class="wrapper-img">
                <img v-if="isRowAvatarNoEmpty(row.avatar)" :src="row.avatar">
                <span v-else>{{ row.avatarText }}</span>
              </div>

              <div class="info-text">
                <h4>{{ row.title }}</h4>
                <div v-if="isUndefinedRowInfo(row.info)">
                  <p>BANK</p>
                  <p><span>{{ row.info }}</span></p>
                </div>
                <p v-if="isUndefinedRowMinAmount(row.minAmount)">
                  Min. amount: <span>{{ row.minAmount }}</span>
                </p>
                <p v-if="isUndefinedRowMaxAmount(row.maxAmount)">
                  Max. amount: <span>{{ row.maxAmount }}</span>
                </p>
                <p v-if="isUndefinedRowFee(row.fee)">
                  Fee: <span>{{ row.fee }}</span>
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'DepositMethod',
  props: {
    paymentMethods: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    isRowTypeBankSystem (type) {
      return type === 'bankSystem'
    },
    isRowAvatarNoEmpty (avatar) {
      return avatar !== ''
    },
    isUndefinedRowInfo (info) {
      return info !== undefined
    },
    isUndefinedRowMinAmount (minAmount) {
      return minAmount !== undefined
    },
    isUndefinedRowMaxAmount (maxAmount) {
      return maxAmount !== undefined
    },
    isUndefinedRowFee (fee) {
      return fee !== undefined
    }
  }
}
</script>
<style>
.container-card-finance
{
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container-card-finance > div
{
  margin-bottom: 20px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.container-card-finance .block-card
{
  padding: 20px;
  display: block;
  flex-shrink: 0;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-card-finance .block-card .block-card-wrapper
{
  display: flex;
  height: 100%;
  align-items: center;
}

.container-card-finance .block-card .wrapper-img
{
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.container-card-finance .block-card .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-card-finance .block-card .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-card-finance .block-card .info-text h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.container-card-finance .block-card .info-text p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #737373;
}

.container-card-finance .block-card .info-text p:last-child
{
  font-size: 13px;
  line-height: 120%;
  color: #989898;
}

.container-card-finance .block-card .info-text p span
{
  color: #989898;
}

.container-card-finance .block-card .text-right
{
  font-family: Montserrat;
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-card-finance .block-card .bg-transparent
{
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.light-theme .container-card-finance .block-card
{
  background: #ffffff;
}

.light-theme .container-card-finance .block-card .info-text h4
{
  color: #000000;
}

</style>
