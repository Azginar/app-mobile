<template>
  <div class="investor-social-page">
    <with-close-ic-header
      :go-back="goBackPage"
    >
      <template v-slot:name>
        <h3>Investor <span v-if="GET_NICKNAME_INVESTOR">{{ GET_NICKNAME_INVESTOR }}</span></h3>
      </template>
    </with-close-ic-header>
    <investor-profile-table :table-data-public="INFO_INVESTOR" />
    <div class="graph-block">
      <h5>Profitability</h5>
      <div class="graph-img">
        <graphSocial4 />
      </div>
      <div class="btn-block">
        <default-button
          label="ОК"
          type="red-button"
          :click-event="goBackPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import WithCloseIcHeader from '@/components/account/with-close-ic-header'
import { CHANGE_NICKNAME_INVESTOR } from '../../../../modules/socialTrading/mutation-types'
import investorProfileTable from '../../../../components/socialTrading/investorProfileTable'
import graphSocial4 from '../../../../assets/icons/graph-social-4.svg'
import DefaultButton from '../../../../components/default-button.vue'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('socialTrading')
export default {
  layout: 'NoLayout',
  components: {
    graphSocial4,
    'investor-profile-table': investorProfileTable,
    WithCloseIcHeader,
    'default-button': DefaultButton
  },
  computed: {
    ...mapState([
      'INFO_INVESTOR'
    ]),
    ...mapGetters([
      'GET_NICKNAME_INVESTOR'
    ])
  },
  methods: {
    ...mapActions([
      CHANGE_NICKNAME_INVESTOR
    ]),
    goBackPage () {
      this.$router.back()
    }
  },
  mounted () {
    this[CHANGE_NICKNAME_INVESTOR](this.$route.params.nickname)
  }
}
</script>
<style>
.investor-social-page h3
{
  color: #B2B2B2;
}

.investor-social-page h3 span
{
  color: #ffffff;
}

.investor-social-page h1
{
  color: #B2B2B2;
  margin-bottom: 80px;
}

.investor-social-page h1 span
{
  color: #ffffff;
}

.investor-social-page h4
{
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
  padding-bottom: 18px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.investor-social-page .massive-button
{
  margin-bottom: 60px;
}

.investor-social-page .graph-block
{
  margin-bottom: 68px;
}

.investor-social-page h5
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 25px;
}

.investor-social-page
{
  padding-bottom: 120px;
}

.investor-social-page .graph-info
{
  display: flex;
  justify-content: space-between;
}

.investor-social-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
}

.investor-social-page .graph-info .right-side ul li
{
  margin-right: 40px;
  margin-bottom: 5px;
}

.investor-social-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.investor-social-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.investor-social-page .graph-info .right-side ul li span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  display: inline-block;
  vertical-align: middle;
}

.investor-social-page .graph-info .right-side ul li .line
{
  width: 30px;
  height: 1px;
  margin-right: 5px;
  margin-bottom: 1px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  vertical-align: middle;
}

.investor-social-page .graph-info .right-side ul li .line-dashed
{
  width: 30px;
  height: 1px;
  margin-bottom: 1px;
  background: transparent;
  margin-right: 5px;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  display: inline-block;
  vertical-align: middle;
}

.investor-social-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 2px;
}

.investor-social-page .graph-img
{
  margin-bottom: 40px;
}

.investor-social-page .graph-img svg
{
  max-width: 100%;
  height: auto;
}

.investor-social-page .trader-profile-table .copy-trader-block > div .right
{
  display: block;
}

.investor-social-page .trader-profile-table .copy-trader-block > div > div:first-child
{
  margin-right: 60px;
}

.investor-social-page .graph-block h5
{
  padding-left: 20px;
  padding-right: 20px;
}

.investor-social-page .btn-block
{
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

.investor-social-page .btn-block .red-button
{
  padding-top: 17px;
  padding-bottom: 16px;
  font-size: 15px;
  line-height: 15px;
}

.light-theme .investor-social-page .container-close-ic-header h3
{
  color: #989898;
}

.light-theme .investor-social-page h3 span
{
  color: #000000;
}

@media (max-width: 1500px) {

}

@media (max-width: 1200px) {

}

</style>
