<template>
  <div
    class="custom-link"
    :class="{'non-active-link': isNonActiveLink}"
    @click="clickEvent"
  >
    {{ label }}
  </div>
</template>
<script>

import { createNamespacedHelpers } from 'vuex'
import { GET_SELECTED_PROVIDER_SUB_PAGE } from '@/modules/monitoring/constants'

const { mapGetters } = createNamespacedHelpers('monitoring')
export default {
  name: 'AccountSubMenuItem',
  props: {
    label: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    clickEvent: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      selectedProviderSubPage: GET_SELECTED_PROVIDER_SUB_PAGE
    }),
    isNonActiveLink () {
      return this.link !== this.selectedProviderSubPage
    }
  }
}
</script>
