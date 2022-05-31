<template>
  <div :class="{ 'light-theme': valueLightTheme }">
    <div class="switch-theme-layout" @click="switchLight">
      <light-svg v-if="!valueLightTheme" />
      <dark-svg v-else />
    </div>
    <Nuxt />
  </div>
</template>
<script>
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'
import { CHANGE_LIGHT_THEME } from '@/modules/menu/mutation-types'
import Cookie from 'js-cookie'
import LightSvg from '../assets/icons/menu/light-ic-grey.svg'
import DarkSvg from '../assets/icons/menu/dark-ic-grey.svg'
export default {
  name: 'NoLayoutAuthorization',
  middleware: ['switch-theme'],
  components: {
    'light-svg': LightSvg,
    'dark-svg': DarkSvg
  },
  computed: {
    valueLightTheme () {
      return this.$store.getters[`menu/${GET_LIGHT_THEME}`]
    }
  },
  methods: {
    switchLight () {
      const colorTheme = localStorage.getItem('lightTheme') === 'true'
      const newColorTheme = !colorTheme
      this.$store.commit(`menu/${CHANGE_LIGHT_THEME}`, newColorTheme)
      localStorage.setItem('lightTheme', String(newColorTheme))
      Cookie.set('lightTheme', String(newColorTheme))
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.valueLightTheme ? 'light-body' : ''
      }
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

  .light-theme
  {
    min-height: 100vh;
  }

  .light-body
  {
    background: #F7F6FB;
  }

  .switch-theme-layout
  {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
  }
</style>
