<template>
  <div class="instruments-page">
    <div class="go-back-button">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goBack"
      />
    </div>
    <div class="content-block">
      <h1>Popular instruments</h1>
      <popular-instruments-blocks :block-data="popularInstrumentsFullList" />
    </div>
  </div>
</template>
<script>
import PopularInstrumentsBlocks from '@/components/instruments/popularInstruments'
import { GET_LIST_POPULAR_INSTRUMENTS } from '@/modules/instruments/getter-types'
import BackButton from '@/components/back-button.vue'
export default {
  layout: 'NoLayout',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'back-button': BackButton,
    'popular-instruments-blocks': PopularInstrumentsBlocks
  },
  computed: {
    popularInstrumentsFullList () {
      return this.$store.getters[`instruments/${GET_LIST_POPULAR_INSTRUMENTS}`]
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.instruments-page
{
  padding-bottom: 60px;
}

.instruments-page .go-back-button
{
  margin-bottom: 40px;
  padding: 40px 20px 0;
}

.instruments-page h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 60px;
}

.instruments-page .content-block
{
  padding-right: 20px;
  padding-left: 20px;
}

.light-theme .instruments-page h1
{
  color: #000000;
}
</style>
