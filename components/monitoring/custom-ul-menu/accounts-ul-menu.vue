<template>
  <ul class="ul-tabs menu-container">
    <li
      v-for="link in links"
      :key="link.label"
    >
      <account-sub-menu-item
        :label="link.label"
        :link="link.link"
        :click-event="() => setSelectedProviderSubPage(link.link)"
      />
    </li>
  </ul>
</template>
<script>
import AccountSubMenuItem from '@/components/monitoring/custom-ul-menu/account-sub-menu-item'
export default {
  name: 'AccountUlMenu',
  components: {
    AccountSubMenuItem
  },
  props: {
    links: {
      type: Array,
      required: true
    },
    setSelectedProviderSubPage: {
      type: Function,
      required: true
    }
  }
}
</script>
<style>
.ul-tabs {
  margin-top: 0;
  padding-left: 0;
  margin-left: -10px;
  /*margin-bottom: 80px;*/
}

.ul-tabs li {
  display: inline-block;
  margin-right: 10px;
}

.ul-tabs li .custom-link {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid #E52525;
  color: #ffffff;
  padding: 10px 10px 8px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
}

.ul-tabs li div:hover {
  color: #ffffff;
}

.ul-tabs li div.non-active-link {
  border-bottom: 2px solid transparent;
  color: #B2B2B2;
}

/* for horizontal scroll    */
.menu-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;  /* IE 10+ */
  scrollbar-width: none; /* Firefox */
}

.menu-container::-webkit-scrollbar { /* chrome based */
  width: 0;
  background: transparent;
}
</style>
