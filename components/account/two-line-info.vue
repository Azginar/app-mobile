<template>
  <div>
    <p>{{ label }}</p>
    <p>
      <span>{{ value }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'TwoLineInfo',
  props: {
    label: {
      type: String,
      default: 'BALANCE'
    },
    value: {
      type: String,
      default: '0.00 USD'
    }
  }
}
</script>
