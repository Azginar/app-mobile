<template>
  <div :id="groupId + '-' + item.id" class="accordion-item-ref" :class="{'is-active': item.active}" @click="toggle">
    <div class="accordion-item-title-ref">
      <div class="accordion-item-trigger">
        <div class="wrapper" :class="(item.verification === 'unverified')?'no-active':''">
          <div class="left-part">
            <div class="wrapper-img">
              <idFlag />
            </div>
          </div>
          <div class="right-part">
            <div class="trigger">
              <span class="uid">uid {{ item.uid }}</span>
              <h4>{{ item.fullName }}</h4>
              <div class="status-info">
                <span v-if="item.verification === 'verified'" class="verified">Verified</span>
                <span v-else-if="item.verification === 'partly-verified'" class="partly-verified">Partly Verified</span>
                <span v-else-if="item.verification === 'unverified'" class="unverified">Unverified</span>
                <span v-if="item.partnerStatus" class="partner-status">
                  {{ item.partnerStatus }}
                </span>
                <span v-if="item.activeReferrals" class="active-referrals">
                  {{ item.activeReferrals }} active referrals
                </span>
              </div>

              <div class="row-line">
                <div class="col-line">
                  <p>Registered</p>
                  <span>{{ item.registered }}</span>
                </div>
                <div class="col-line">
                  <p>Commission</p>
                  <span>{{ item.commission }}</span>
                </div>
              </div>
            </div>

            <div v-if="item.activeReferrals" class="btn-block">
              <button class="trans-button" @click="handleButton(item.uid)">
                VIEW REFERRALS
              </button>
            </div>
          </div>
        </div>
        <span class="accordion-item-trigger-icon-ref" />
      </div>
    </div>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-if="item.active" class="accordion-item-details">
        <div class="accordion-item-details-inner-ref">
          <div v-for="rowDetails in item.accounts" :key="rowDetails.type" class="block-line">
            <h5>{{ rowDetails.type }}</h5>
            <div v-if="rowDetails.data !== ''" class="row-line">
              <div v-for="rowData in rowDetails.data" :key="rowData.data" class="col-line">
                <p>{{ rowData.title }}</p>
                <span>{{ rowData.value }}</span>
              </div>
            </div>
            <p v-else>
              no activity
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { SET_ACTIVE_ITEM_ACCORDION_REF } from '@/modules/affiliate/mutation-types'
import idFlag from '@/assets/flags/id.svg'
const { mapActions } = createNamespacedHelpers('affiliate')
export default {
  name: 'AccordionItem',
  components: {
    idFlag
  },
  props: ['item', 'groupId'],
  methods: {
    ...mapActions([
      SET_ACTIVE_ITEM_ACCORDION_REF
    ]),
    toggle (event) {
      if (event.target.className !== 'trans-button') {
        const payload = { showItem: !this.item.active, idItem: this.item.id }
        this[SET_ACTIVE_ITEM_ACCORDION_REF](payload)
      }
    },
    handleButton (uid) {
      this.$router.push(`/affiliate/referral/${uid}`)
    },

    startTransition (el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition (el) {
      el.style.height = ''
    }
  }
}

</script>

<style>
.accordion-item-title-ref
{
  margin-bottom: 1px;
}

.accordion-item-title-ref .wrapper
{
  display: flex;
}

.accordion-item-title-ref .wrapper-img
{
  width: 24px;
  height: 24px;
  margin-top: 10px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.accordion-item-title-ref .wrapper-img svg
{
  max-width: 100%;
  height: auto;
}

.accordion-item-title-ref .wrapper .uid
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 2px;
}

.accordion-item-title-ref .wrapper .row-line
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.accordion-item-title-ref .wrapper.no-active h4
{
  color: #737373;
}

.accordion-item-title-ref .wrapper .btn-block
{
  margin-bottom: 10px;
}

.accordion-item-title-ref .wrapper .btn-block button
{
  padding: 8px 20px 7px;
  color: #737373;
}

.accordion-item-title-ref .wrapper .btn-block button:active,
.accordion-item-title-ref .wrapper .btn-block button:hover
{
  border: 1px solid rgba(229, 37, 37, 0.5);
  color: #ffffff;
}

.accordion-item-title-ref .wrapper .btn-block button
{

}

.accordion-item-title-ref .wrapper .row-line .col-line
{
  margin-right: 40px;
}

.accordion-item-title-ref .wrapper .row-line .col-line:last-child
{
  margin-right: 0;
}

.accordion-item-title-ref .wrapper .row-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.accordion-item-title-ref .wrapper .row-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: #B2B2B2;
  display: block;
}

.accordion-item-title-ref .wrapper h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 0;
}

.accordion-item-title-ref .wrapper h4 a
{
  color: #FFFFFF;
  text-decoration: none;
}

.accordion-item-title-ref .wrapper .verified
{
  color: #8DC640;
}

.accordion-item-title-ref .wrapper .status-info
{
  margin-bottom: 5px;
}

.accordion-item-title-ref .wrapper .status-info span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  background: #242424;
  display: inline-block;
  padding: 4px 5px 4px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.accordion-item-title-ref .wrapper .partly-verified
{
  color: #D2AC75;
}

.accordion-item-title-ref .wrapper .partner-status
{
  color: #FFFFFF !important;
  background: #E52525 !important;
}

.accordion-item-title-ref .wrapper .active-referrals
{
  color: #737373;
}

.accordion-item-title-ref .wrapper .unverified
{
  color: #E52525;
}

.accordion-item-details-inner-ref .col-line
{
  margin-right: 20px;
  margin-bottom: 10px;
}

.accordion-item-details-inner-ref .col-line:last-child
{
  margin-right: 0;
}

.accordion-item-details-inner-ref .col-line p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
}

.accordion-item-details-inner-ref .col-line span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #B2B2B2;
  display: block;
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  background: #2B2B2B;
}

.accordion-item-trigger-icon-ref {
  display: block;
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  margin: auto;
  width: 10px;
  height: 10px;
  border-right: 1px solid #737373;
  border-bottom: 1px solid #737373;
  transform: translateY(-2px) rotate(45deg);
  transition: transform 0.2s ease;
}
.is-active .accordion-item-trigger-icon-ref {
  transform: translateY(2px) rotate(225deg);
}

.accordion-item-details {
  overflow: hidden;
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}

.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}

.accordion-item-title-ref {
  position: relative;
  background: #2B2B2B;
  padding: 20px 20px 10px;
}
.is-active .accordion-item-title-ref
{

}
.accordion-item-title-ref h4 {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 10px;
  padding-right: 20px;
}

.accordion-item-title-ref h4 span
{
  color: #B2B2B2;
}

.accordion-item-details-inner-ref .block-line
{
  background: #2B2B2B;
  display: block;
  padding: 20px 20px 10px;
  margin-bottom: 1px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.accordion-item-details-inner-ref .block-line h5
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  margin-bottom: 5px;
}

.accordion-item-details-inner-ref .block-line .row-line
{
  display: flex;
  flex-wrap: wrap;
}

.accordion-item-details-inner-ref .block-line .row-line .col-line
{
  margin-right: 20px;
}

.accordion-item-details-inner-ref .block-line h5  + p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 10px;
}

.light-theme .accordion-item-title-ref,
.light-theme .accordion-item-title-ref .wrapper
{
  background: #ffffff;
}

.light-theme .accordion-item-title-ref .wrapper h4,
.light-theme .accordion-item-details-inner-ref .block-line h5
{
  color: #000000;
}

.light-theme .accordion-item-title-ref .wrapper .row-line span
{
  color: #989898;
}

.light-theme .accordion-item-title-ref .wrapper .status-info span
{
  background: #ffffff;
  border: 1px solid #D4D4D4;
}

.light-theme .accordion-item-details-inner-ref .block-line
{
  background: #ffffff;
}

.light-theme .accordion-item-details-inner-ref .col-line span
{
  color: #989898;
}

.accordion-item-title-ref .wrapper .btn-block button:active,
.accordion-item-title-ref .wrapper .btn-block button:hover
{
  color: #000000;
}
</style>
