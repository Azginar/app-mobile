<template>
  <div class="main-wrapper" :class="{ 'light-theme': valueLightTheme }">
    <Nuxt />
  </div>
</template>
<script>
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'
export default {
  name: 'NoLayout',
  middleware: ['switch-theme'],
  computed: {
    valueLightTheme () {
      return this.$store.getters[`menu/${GET_LIGHT_THEME}`]
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
    width: 100%;
  }

  .main-wrapper
  {
    min-height: 100vh;
    background: #333333;
    position: relative;
    z-index: 3;
  }

  .light-body
  {
    background: #F7F6FB;
  }

  .main-wrapper.light-theme
  {
    background: #F7F6FB;
  }
</style>
