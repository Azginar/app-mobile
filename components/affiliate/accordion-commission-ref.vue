<template>
  <div class="accordion box" role="presentation">
    <accordion-item-ref
      v-for="item in content"
      :key="item.id"
      :item="item"
      :group-id="groupId"
    />
  </div>
</template>

<script>
import AccordionItemRef from '@/components/affiliate/accordion-commission-item-ref'
export default {
  name: 'AccordionRef',
  components: {
    'accordion-item-ref': AccordionItemRef
  },
  props: {
    content: {
      type: Array,
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

.accordion .accordion-item-ref
{
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
</style>
