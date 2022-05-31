<template>
  <div class="trading-terminal-page-container container">
    <terminal-block
      :title="'MT4 for iPhone/iPad'"
    >
      <template v-slot:icon>
        <ipadIc />
      </template>
      <template v-slot:button>
        <a href="https://download.mql5.com/cdn/mobile/mt4/ios?server=Tifia-Universal" target="_blank">
          <appstoreIC class="button-svg" />
        </a>
      </template>
    </terminal-block>
    <terminal-block
      :title="'MT4 for Android'"
    >
      <template v-slot:icon>
        <androidIC />
      </template>
      <template v-slot:button>
        <a href="https://download.mql5.com/cdn/mobile/mt4/android?server=Tifia-Universal" target="_blank">
          <googlePlayIC class="button-svg" />
        </a>
      </template>
    </terminal-block>
    <terminal-block
      :title="'MT5 for iPhone/iPad'"
    >
      <template v-slot:icon>
        <ipadIc />
      </template>
      <template v-slot:button>
        <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=Tifia-MT5" target="_blank">
          <appstoreIC class="button-svg" />
        </a>
      </template>
    </terminal-block>
    <terminal-block
      :title="'MT5 for Android'"
    >
      <template v-slot:icon>
        <androidIC />
      </template>
      <template v-slot:button>
        <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=Tifia-MT5" target="_blank">
          <googlePlayIC class="button-svg" />
        </a>
      </template>
    </terminal-block>
  </div>
</template>

<script>
import ipadIc from '@/assets/icons/ipad-ic.svg'
import androidIC from '@/assets/icons/android-ic.svg'
import appstoreIC from '@/assets/icons/appstore.svg'
import googlePlayIC from '@/assets/icons/google-pay.svg'

import TerminalBlock from '@/components/account/terminal-block'

export default {
  layout: 'default',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    ipadIc,
    androidIC,
    appstoreIC,
    googlePlayIC,
    'terminal-block': TerminalBlock
  }
}
</script>
<style>
.trading-terminal-page-container
{
  padding-bottom: 80px;
}

.trading-terminal-page-container .button-svg
{
  fill: #5E5E5E;
}

.trading-terminal-page-container .button-svg:hover
{
  fill: #ffffff;
}

.light-theme .trading-terminal-page-container .button-svg:hover
{
  fill: #000000;
}
</style>
