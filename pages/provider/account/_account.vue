<template>
  <div class="trader-social-page trader-social-page-public">
    <div class="back-btn-block">
      <back-button
        :type="'back-button'"
        :label="'Back'"
        :click-event="goBack"
      />
    </div>
    <h1>My public accounts <span>{{ functionUpperCase($route.params.account) }}</span></h1>
    <menu-no-link :tabs-menu="MASSIVE_MENU_INNER_TRADING_ACCOUNT">
      <template v-slot:overview>
        <trader-account-table :table-data-public="GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT" />
        <div class="summary-statistics-block">
          <SimpleSelectBlack
            :options="SUMMARY_STATISTICS"
            :handle-select="CHANGE_SUMMARY_STATISTICS"
            :label="'Summary statistics'"
            :selected="SUMMARY_STATISTICS_SELECTED"
          />
        </div>
        <div class="graph-block">
          <h5>Profitability</h5>
          <div class="graph-img">
            <graphSocial1 />
          </div>
        </div>
        <div class="graph-info">
          <div class="left-side">
            <h5>Balance</h5>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="line" /><span>Balance</span></li>
              <li><plusIc /><span>Deposit</span></li>
              <li><minusIc /><span>Withdrawal</span></li>
            </ul>
          </div>
        </div>
        <div class="graph-img">
          <graphSocial2 />
        </div>
        <div class="graph-block">
          <h5>Deposit utilization rate</h5>
          <div class="graph-img">
            <graphSocial3 />
          </div>
        </div>
      </template>
      <template v-slot:investors>
        <investor-card :investor-info="INVESTOR_CARD" />
      </template>
    </menu-no-link>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import BackButton from '../../../components/back-button'
import TraderAccountTable from '../../../components/socialTrading/traderAccountTable'
import investorCard from '../../../components/socialTrading/investorCard'
import { CHANGE_ACCOUNT_SOCIAL_TRADER } from '../../../modules/socialTrading/mutation-types'
import graphSocial1 from '../../../assets/icons/graph-social-1.svg'
import graphSocial2 from '../../../assets/icons/graph-social-2.svg'
import graphSocial3 from '../../../assets/icons/graph-social-3.svg'
import plusIc from '../../../assets/icons/plus-ic.svg'
import minusIc from '../../../assets/icons/minus-ic.svg'
import menuNolink from '../../../components/menu-no-link'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('socialTrading')
export default {
  layout: 'NoLayout',
  components: {
    'back-button': BackButton,
    'trader-account-table': TraderAccountTable,
    graphSocial1,
    graphSocial2,
    graphSocial3,
    plusIc,
    minusIc,
    'menu-no-link': menuNolink,
    'investor-card': investorCard
  },
  middleware: ['redirect', 'check-auth', 'auth'],
  computed: {
    ...mapState([
      'MASSIVE_MENU_INNER_TRADING_ACCOUNT',
      'SUMMARY_STATISTICS',
      'SUMMARY_STATISTICS_SELECTED',
      'INVESTOR_CARD'
    ]),
    ...mapGetters([
      'GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_ACCOUNT_SOCIAL_TRADER',
      'CHANGE_SUMMARY_STATISTICS'
    ]),
    functionUpperCase (str) {
      return str.toUpperCase()
    },
    goBack () {
      this.$router.back()
    }
  },
  mounted () {
    this[CHANGE_ACCOUNT_SOCIAL_TRADER](this.$route.params.account)
  }
}
</script>
<style>
.trader-social-page
{
  padding: 40px 20px 0;
}

.trader-social-page .back-btn-block
{
  margin-bottom: 40px;
}

.trader-social-page h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #B2B2B2;
  margin-bottom: 20px;
}

.trader-social-page h1 span
{
  color: #ffffff;
}

.trader-social-page h4
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

.trader-social-page .summary-statistics-block label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-transform: none;
  padding-left: 0;
}

.trader-social-page .selector-wrapper-black .vs__dropdown-toggle
{
  background: transparent;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
}

.trader-social-page .v-select
{
  width: 180px;
  margin-bottom: 20px;
}

.trader-social-page .selector-wrapper-black .vs__selected
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #B2B2B2;
  line-height: 40px;
}

.trader-social-page .graph-block h5,
.trader-social-page .graph-info h5
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 20px;
}

.trader-social-page
{
  padding-bottom: 120px;
}

.trader-social-page .graph-info
{

}

.trader-social-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 20px;
}

.trader-social-page .graph-info .right-side ul li
{
  margin-right: 10px;
  list-style-type: none;
}

.trader-social-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.trader-social-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.trader-social-page .graph-info .right-side ul li span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  display: inline-block;
  vertical-align: middle;
}

.trader-social-page .graph-info .right-side ul li .line
{
  width: 16px;
  height: 1px;
  margin-right: 5px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  vertical-align: middle;
}

.trader-social-page .graph-info .right-side ul li .line-dashed
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

.trader-social-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: -1px;
}

.trader-social-page .graph-img
{
  margin: 0 -20px 20px;
}

.trader-social-page .graph-img svg
{
  max-width: 100%;
  width: 100%;
  height: auto;
}

.light-theme .trader-social-page h1,
.light-theme .trader-social-page .graph-block h5,
.light-theme .trader-social-page .graph-info h5,
.light-theme .container-card-investor .block-card .row-line .col-line span
{
  color: #989898;
}

.light-theme .trader-social-page h1 span,
.light-theme .trader-profile-table h3,
.light-theme .trader-social-page .summary-statistics-block label,
.light-theme .container-card-investor .block-card .avatar-block .user-info p
{
  color: #000000;
}

.light-theme .trader-profile-table .black-block .simple-text
{
  color: #000000 !important;
}

.light-theme .container-card-investor .block-card
{
  background: #ffffff;
}

</style>
