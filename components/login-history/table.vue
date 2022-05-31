<template>
  <div>
    <div class="login-history-block header-title">
      <div class="row-line">
        <p>Date</p>
      </div>
      <div class="row-line">
        <p>IP</p>
      </div>
      <div class="row-line">
        <p>Browser</p>
      </div>
    </div>
    <div v-for="(item, index) in historyList" :key="index" class="login-history-block">
      <div class="row-line">
        <p>Date</p>
        <span>{{ safeGetter(item, 'attributes.time') }}</span>
      </div>
      <div class="row-line">
        <p>IP</p>
        <span>{{ safeGetter(item, 'attributes.last_ip') }}</span>
      </div>
      <div class="row-line">
        <p>Browser</p>
        <span>{{ safeGetter(item, 'attributes.browser') }}</span>
      </div>
    </div>
    <!--    <div v-if="viewLoader" class="loader-wrapper">-->
    <!--      <div class="loader-faq __mini little-wrapper">-->
    <!--        <div v-if="canVueLoadMoreButtonAndAllDataNotInStore">-->
    <!--          <div v-view.once="viewHandler" />-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import get from 'lodash/get'

export default {
  name: 'Table',
  // eslint-disable-next-line vue/require-prop-types
  props: ['historyList'],
  computed: {
    // ...mapGetters([
    //   'canViewLoadMoreButton',
    //   'currentPage',
    //   'isAllDataInStore'
    // ]),
    // canVueLoadMoreButtonAndAllDataNotInStore () {
    //   return !this.isAllDataInStore && this.canViewLoadMoreButton
    // },
    // viewLoader () {
    //   return !this.isAllDataInStore
    // }
  },
  methods: {
    // ...mapActions([
    //   'loginHistoryLoadMore'
    // ]),
    // viewHandler () {
    //   this.loginHistoryLoadMore()
    // },
    safeGetter (item, key) {
      return get(item, key, '')
    }
  }
}
</script>
<style>
  .loader-wrapper .little-wrapper {
    width: 32px;
    height: 32px;
  }

  .login-history-block
  {
      margin-bottom: 20px;
  }

  .login-history-block p
  {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      text-transform: uppercase;
      color: #737373;
      margin-bottom: 5px;
  }

  .login-history-block span
  {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      color: #B2B2B2;
      border-radius: 5px;
  }

  .login-history-block .row-line
  {
    margin-bottom: 10px;
  }

  .login-history-block .header-title
  {
    display: none;
  }

</style>
