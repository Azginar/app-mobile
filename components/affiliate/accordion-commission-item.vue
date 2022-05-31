<template>
  <div :id="groupId + '-' + item.id" class="accordion-item" :class="{'is-active': item.active}">
    <div class="accordion-item-title">
      <div class="accordion-item-trigger" @click="toggle()">
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
      </div>
    </transition>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { SET_ACTIVE_ITEM_ACCORDION } from '@/modules/affiliate/mutation-types'
const { mapActions } = createNamespacedHelpers('affiliate')
export default {
  name: 'AccordionItem',
  props: ['item', 'groupId'],
  methods: {
    ...mapActions([
      SET_ACTIVE_ITEM_ACCORDION
    ]),
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
</style>
