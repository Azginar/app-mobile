<template>
  <div class="search-by-number-container">
    <with-close-ic-header :go-back="goBack">
      <template v-slot:name>
        <h3>Search by number ticket</h3>
      </template>
    </with-close-ic-header>

    <div class="search-button-container container">
      <input-with-icon
        :type="'text'"
        :errors="[]"
        :placeholder="'Number ticket'"
        :handle-input="() => {}"
      />
    </div>
    <div class="search-button-container container">
      <div class="search-button-wrapper">
        <default-button
          :click-event="goBack"
          :type="'red-button'"
          :label="'Search'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import InputWithIcon from '@/components/input-with-icon'

export default {
  components: {
    WithCloseIcHeader,
    InputWithIcon
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style>
.search-by-number-container .search-button-container {
  display: flex;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
}
.search-by-number-container .search-button-wrapper {
  display: block;
}

.search-by-number-container .search-button-container .input-with-icon
{
  height: 50px;
}

.search-by-number-container .search-button-wrapper .red-button
{
  font-size: 15px;
  line-height: 14px;
}
</style>
