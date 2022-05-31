<template>
    <badge
        :label="badgeLabel"
        :type="badgeType"
    />
</template>
<script>
import Badge from '../Badge/Badge.vue';

export default {
  name: 'verified-status',
  props: {
    type: String,
    customText: {
      type: String,
      default: '',
    },
  },
  components: {
    badge: Badge,
  },
  computed: {
    badgeType() {
      const BadgeType = new Map()
        .set('Verified', 'success')
        .set('Unverified', 'danger')
        .set('Party Verified', 'primary')
        .set('Simple', 'simple');
      return BadgeType.get(this.type);
    },
    badgeLabel() {
      if (this.customText === '') {
        const BadgeLabel = new Map()
          .set('Verified', 'Verified')
          .set('Unverified', 'Unverified')
          .set('Party Verified', 'Partly Verified')
          .set('Simple', 'Simple');
        return BadgeLabel.get(this.type);
      }
      return this.customText;
    },
  },
};
</script>
