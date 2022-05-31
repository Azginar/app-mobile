<template>
  <div>
    <div id="main-menu" class="main-menu" style="max-width: 330px;">
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.label"
        >
          <menu-item
            :label="item.label"
            :icon-component="item.icon"
            :click-handler="setActive"
            :is-active="isMenuItemActive(item.label)"
            :link="item.link"
            :count-new-messages="item.countNewMessages"
          />
        </li>
        <li @click="switchLight">
          <div v-if="!valueLightTheme">
            <light-svg /> Light theme
          </div>
          <div v-else>
            <dark-svg /> Dark theme
          </div>
        </li>
        <li class="logout" @click="handleLogout">
          <NuxtLink to="/">
            <div><power-regular-svg /> Logout</div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { createNamespacedHelpers } from 'vuex'
import { LOGOUT } from '@/modules/login/actions-types'
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'
import { CHANGE_LIGHT_THEME } from '@/modules/menu/mutation-types'
// ------------- icons
import RoutesManager from '@/services/RoutesManager'
import HomeIcGreySvg from '../assets/icons/menu/home-ic-grey.svg'
import ProfileIcGreySvg from '../assets/icons/menu/profile-ic-grey.svg'
import AccountIcGreySvg from '../assets/icons/menu/account-ic-grey.svg'
import FinanceIcGreySvg from '../assets/icons/menu/finance-ic-grey.svg'
import SocialIcGreySvg from '../assets/icons/menu/social-ic-grey.svg'
import PartnersIcGreySvg from '../assets/icons/menu/partners-ic-grey.svg'
import HelpIcGreySvg from '../assets/icons/menu/help-ic-grey.svg'
import MessageIcGreySvg from '../assets/icons/menu/message-ic-grey.svg'
import PowerRegularSvg from '../assets/icons/menu/logout-ic-grey.svg'
import LightSvg from '../assets/icons/menu/light-ic-grey.svg'
import DarkSvg from '../assets/icons/menu/dark-ic-grey.svg'
// -------------

import MenuItem from './menu-item.vue'

const { mapActions } = createNamespacedHelpers('login')

export default {
  name: 'SideMenu',
  components: {
    'menu-item': MenuItem,
    'power-regular-svg': PowerRegularSvg,
    'light-svg': LightSvg,
    'dark-svg': DarkSvg
  },
  props: {
    closeMenu: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      activeMenuItem: 'Home',
      menuItems: [
        {
          icon: HomeIcGreySvg,
          label: 'Home',
          link: '/'
        },
        {
          icon: ProfileIcGreySvg,
          label: 'Client\'s Profile',
          link: '/settings/index'
        },
        {
          icon: AccountIcGreySvg,
          label: 'Accounts',
          link: '/accounts/index'
        },
        {
          icon: FinanceIcGreySvg,
          label: 'Finance',
          link: '/deposit/index'
        },
        {
          label: 'Social trading',
          icon: SocialIcGreySvg,
          link: '/monitoring/index'
        },
        {
          label: 'Affiliate',
          icon: PartnersIcGreySvg,
          link: '/affiliate/index'
        },
        {
          label: 'Help',
          icon: HelpIcGreySvg,
          link: '/'
        },
        {
          label: 'Messages',
          icon: MessageIcGreySvg,
          link: '/notifications/index',
          countNewMessages: 4
        }
      ]
    }
  },
  computed: {
    valueLightTheme () {
      return this.$store.getters[`menu/${GET_LIGHT_THEME}`]
    }
  },
  created () {
    const RoutesManagerWorker = new RoutesManager(this.$route.path)

    this.activeMenuItem = RoutesManagerWorker.getCurrentActiveSideMenuItem()
  },
  methods: {
    ...mapActions([LOGOUT]),
    handleLogout () {
      this[LOGOUT](true)
      this.$router.replace('/login')
    },
    isMenuItemActive (menuItem) {
      return this.activeMenuItem === menuItem
    },
    setActive (menuItem, link) {
      const isNotWorkMenuItem = !['Help'].includes(menuItem)
      if (isNotWorkMenuItem) {
        this.closeMenu()
        this.activeMenuItem = menuItem
        this.$router.push(link)
      }
    },
    switchLight () {
      const colorTheme = localStorage.getItem('lightTheme') === 'true'
      const newColorTheme = !colorTheme
      this.$store.commit(`menu/${CHANGE_LIGHT_THEME}`, newColorTheme)
      localStorage.setItem('lightTheme', String(newColorTheme))
      Cookie.set('lightTheme', String(newColorTheme))
      setTimeout(() => document.body.classList.add('overflow'), 100)
    }
  }
}
</script>
<style>
    .main-menu {
        background: #242424;
        z-index: 500;
        height: 100vh;
        padding-bottom: 100px;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        width: 300px;
    }

    .height-fix
    {
      overflow: hidden;
    }

    .main-menu ul {
        padding-left: 0;
        margin: 0;
        padding-top: 30px;
    }

    .main-menu ul li > div,
    .main-menu ul li > a {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        position: relative;
        line-height: 12px;
        text-transform: uppercase;
        color: #737373;
        padding: 15px 30px;
        display: inline-block;
        width: 100%;
        text-decoration: none;
        cursor: pointer;
    }

    .main-menu ul li div
    {
        display: flex;
        align-items: center;
    }

    .main-menu ul li div svg
    {
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }

    .main-menu ul li:hover svg path
    {
        fill: #E52525;
    }

    /*TODO use this settings for active tab*/
    .main-menu ul li div.is-active:before{
        box-shadow: 0px 0px 15px #E52525;
        content: "";
        height: 100%;
        width: 2px;
        background: #E52525;
        top: 0;
        left: 0;
        position: absolute;

    }

    .main-menu ul li:hover div {
        color: #ffffff;
    }

    .main-menu ul li {
        margin-bottom: 10px;
    }

    .main-menu ul li a.is-active {
      color: #ffffff;
    }

    .main-menu ul li div.is-active svg path {
       fill: #E52525;
    }

    .main-menu ul li.logout {
        margin-top: 30px;
        position: relative;
    }

    .main-menu ul li.logout:after {
        position: absolute;
        content: "";
        width: 89%;
        height: 1px;
        background: rgba(72, 72, 72, 0.5);
        left: 50%;
        top: -15px;
        transform: translate(-50%);
    }

    .main-menu .message-number
    {
        background: #333333;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 100%;
        text-transform: uppercase;
        color: #B2B2B2;
        padding: 3px 5px 3px 15px;
        margin-bottom: 1px;
        position: relative;
        margin-left: 10px;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
    }

    .main-menu .message-number:before
    {
      position: absolute;
      width: 5px;
      height: 5px;
      background: #E52525;
      content: "";
      left: 5px;
      top: 5px;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
    }

    .light-theme .main-menu
    {
      background: #EEEDF3;
    }

    .light-theme .main-menu .is-active,
    .light-theme .main-menu ul li:hover div
    {
      color: #000000;
    }

    .light-theme .main-menu .message-number
    {
      background: #FFFFFF;
      border: 1px solid #E1E1E1;
      color: #737373;
    }

    @media (max-width: 350px) {
    .main-menu
        {
            width: 270px;
        }
    }
</style>
