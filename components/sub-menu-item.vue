<template>
  <NuxtLink
    :to="`${link}${queryForTabItem}`"
    :class="{'non-active-link': isNonActiveLink}"
  >
    {{ label }}
  </NuxtLink>
</template>
<script>
export default {
  name: 'SubMenuItem',
  props: {
    link: {
      type: String,
      required: true
    },
    queryForTabItem: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    isNonActiveLink () {
      return this.link !== this.$route.path
    }
  }
}
</script>
