<template>
  <div class="menu-home">
    <ul>
      <li
        v-for="item in menuItems"
        :key="item.label"
      >
        <menu-item
          :label="item.label"
          :icon-component="item.icon"
          :link="item.link"
          :click-handler="handleClick"
        />
      </li>
      <li class="messages" @click="goMessagesPage">
        <div>
          <i>
            <MessageIcGreySvg />
          </i>
          <p>
            Messages
          </p>
          <div class="messages-new-block">
            <span class="messages-count">4 NEW</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// ------------- icons
import ProfileIcGreySvg from '../assets/icons/menu/profile-ic-grey.svg'
import AccountIcGreySvg from '../assets/icons/menu/account-ic-grey.svg'
import FinanceIcGreySvg from '../assets/icons/menu/finance-ic-grey.svg'
import SocialIcGreySvg from '../assets/icons/menu/social-ic-grey.svg'
import PartnersIcGreySvg from '../assets/icons/menu/partners-ic-grey.svg'
import HelpIcGreySvg from '../assets/icons/menu/help-ic-grey.svg'
import MessageIcGreySvg from '../assets/icons/menu/message-ic-grey.svg'
// -------------

import MenuItem from './menu-item.vue'

export default {
  name: 'MenuHome',
  components: {
    'menu-item': MenuItem,
    MessageIcGreySvg
  },
  data () {
    return {
      activeMenuItem: 'Home',
      menuItems: [
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
          link: '/'
        },
        {
          label: 'Help',
          icon: HelpIcGreySvg,
          link: '/'
        }
      ]
    }
  },
  methods: {
    handleClick (menuItem, link) {
      this.$router.push(link)
    },
    goMessagesPage () {
      this.$router.push('/notifications/index')
    }
  }
}
</script>
<style>
    .menu-home ul
    {
      display: flex;
      padding-left: 0;
      flex-wrap: wrap;
      margin-left: -5px;
      margin-right: -5px;
    }

    .menu-home ul li
    {
      margin-bottom: 10px;
      padding-left: 5px;
      padding-right: 5px;
      list-style-type: none;
      /*flex: 0 0 33.333333%;
      max-width: 33.333333%;*/
      width: 33.333333%;

    }

    .menu-home ul li > div
    {

      background: rgba(36, 36, 36, 0.5);
      text-align: center;
      list-style-type: none;
      padding: 30px 5px 15px;
      height: 100%;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }

    .menu-home ul li a
    {
      background: rgba(36, 36, 36, 0.5);
      display: flex;
      padding-left: 10px;
      padding-right: 10px;
      align-items: center;
      text-decoration: none;
      justify-content: center;
      min-height: 100px;
      border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
    }

    .menu-home ul li span
    {
      display: block;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      text-transform: uppercase;
      color: #737373;
    }

    .menu-home ul li i
    {
      min-height: 24px;
      display: block;
      margin-bottom: 5px;
    }

    .menu-home ul li.messages
    {
      width: 100%;
    }

    .menu-home ul li.messages > div
    {
      height: auto;
      display: flex;
      align-items: center;
      padding: 20px;
    }

    .menu-home ul li.messages p
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      text-transform: uppercase;
      color: #737373;
      margin-bottom: 0;
      margin-right: 20px;
    }

    .menu-home ul li .messages-count
    {
      background: #333333;
      padding: 3px 5px 3px 15px;
      position: relative;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 9px;
      line-height: 100%;
      text-transform: uppercase;
      color: #B2B2B2;
      border-radius: 2px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
    }

    .menu-home ul li .messages-count:before
    {
      position: absolute;
      content: "";
      background: #E52525;
      width: 5px;
      height: 5px;
      top: 5px;
      left: 5px;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
    }

    .menu-home ul li.messages i
    {
      margin-bottom: 0;
      min-height: auto;
      height: 20px;
      margin-right: 20px;
    }

    .menu-home ul li.messages .messages-new-block
    {
      margin-left: auto;
    }

    .light-theme .menu-home ul li > div
    {
      background: #ffffff;
    }

    .light-theme .menu-home ul li .messages-count
    {
      background: #FFFFFF;
      border: 1px solid #E1E1E1;
      color: #737373;
    }
</style>
