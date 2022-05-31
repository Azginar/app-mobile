<template>
  <div>
    <div class="container">
      <h1>Accounts</h1>
      <ul class="ul-tabs menu-container">
        <li
          v-for="link in availableLinks"
          :key="link.label"
          @click="setActiveLink(link)"
        >
          <NuxtLink
            :to="link.link"
            :class="{'non-active-link': activeLink !== link.link}"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SubMenu',
  middleware: ['redirect', 'check-auth', 'auth'],
  data () {
    return {
      availableLinks: [
        { label: 'Trading accounts', link: '/accounts/index' },
        { label: 'Investor\'s accounts', link: '/accounts/investors-accounts' },
        { label: 'Demo accounts', link: '/accounts/demo' },
        { label: 'Archive accounts', link: '/accounts/archive' },
        { label: 'Trading terminal', link: '/terminal/index' }
      ],
      activeLink: '/accounts/index'
    }
  },
  created () {
    this.activeLink = this.$route.path
  },
  methods: {
    setActiveLink ({ link }) {
      this.activeLink = link
    }
  }
}
</script>
<style>

html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #333333;
}

.ul-tabs {
  margin-top: 0;
  padding-left: 0;
  margin-left: -10px;
  margin-bottom: 60px;
}

.ul-tabs li {
  display: inline-block;
  margin-right: 10px;
}

.ul-tabs li a {
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

.ul-tabs li a:hover {
  color: #ffffff;
}

.ul-tabs li a.non-active-link {
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

.container {
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.light-theme .ul-tabs li a:hover,
.light-theme .ul-tabs li a.nuxt-link-active
{
  color: #000000;
}

.light-theme .ul-tabs li a.non-active-link
{
  color: #989898;
}

</style>
