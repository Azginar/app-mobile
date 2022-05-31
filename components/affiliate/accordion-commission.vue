<template>
  <div class="accordion box" role="presentation">
    <div v-for="item in content" :id="groupId + '-' + item.id" :key="item.id" class="accordion-item" :class="{'is-active': item.active}" @click="toggle(item.active, item.id)">
      <div class="accordion-item-title">
        <div class="accordion-item-trigger">
          <h4 class="accordion-item-title-text" v-html="item.title" />
          <span class="accordion-item-trigger-icon" />
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
          <div class="accordion-item-details-inner">
            <div v-for="rowInto in item.details" :key="rowInto.title" class="col-line">
              <p>{{ rowInto.title }}</p>
              <span>{{ rowInto.value }}</span>
            </div>
          </div>
          <div class="button-block">
            <div v-if="item.copyLink">
              <default-button
                :type="'trans-button'"
                :label="'Copy link'"
              />
            </div>
            <div v-if="item.deactivateLink">
              <default-button
                :type="'trans-button'"
                :label="'Deactivate'"
              />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { SET_ACTIVE_ITEM_ACCORDION } from '@/modules/affiliate/mutation-types'
import DefaultButton from '@/components/default-button'
const { mapActions } = createNamespacedHelpers('affiliate')
export default {
  name: 'Accordion',
  components: {
    'default-button': DefaultButton
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    functionOpen: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      groupId: null
    }
  },
  mounted () {
    this.groupId = this.$el.id
  },
  methods: {
    ...mapActions([
      SET_ACTIVE_ITEM_ACCORDION
    ]),
    toggle (item, id) {
      const payload = { showItem: !item, idItem: id }
      this.functionOpen(payload)
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
.accordion {
  padding: 0;
  margin-bottom: 80px;
}
.accordion div:not(:last-child) {

}

.accordion .accordion-item
{
  margin-bottom: 10px;
  padding: 20px 20px 10px;
  overflow: hidden;
  background: #2B2B2B;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.accordion-item-details-inner
{
  display: flex;
  flex-wrap: wrap;
}

.accordion-item-details-inner .col-line
{
  margin-right: 20px;
  margin-bottom: 10px;
}

.accordion-item-details-inner .col-line:last-child
{
  margin-right: 0;
}

.accordion-item-details-inner .col-line p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
}

.accordion-item-details-inner .col-line span
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

.accordion-item-trigger-icon {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 10px;
  height: 10px;
  border-right: 1px solid #737373;
  border-bottom: 1px solid #737373;
  transform: translateY(-2px) rotate(45deg);
  transition: transform 0.2s ease;
}
.is-active .accordion-item-trigger-icon {
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

.accordion-item-title {
  position: relative;
}
.is-active .accordion-item-title
{

}
.accordion-item-title h4 {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 10px;
  padding-right: 20px;
}

.accordion-item-title h4 span
{
  color: #B2B2B2;
}

.accordion-item .accordion-item-details .button-block
{
  display: flex;
  justify-content: space-between;
}

.accordion-item .accordion-item-details .button-block button
{
  margin: 10px 0;
}

.accordion-item .accordion-item-details .button-block button
{
  padding-left: 20px;
  padding-right: 20px;
}

.light-theme .accordion .accordion-item
{
  background: #ffffff;
}

.light-theme .accordion-item-title h4
{
  color: #000000;
  background: #ffffff;
}

.light-theme .accordion-item-details-inner .col-line span,
.light-theme .accordion-item-title h4 span
{
  color: #989898;
}
</style>
