<template>
  <div class="provider-social-page">
    <account-trader :accounts-trader="ACCOUNT_SOCIAL_TRADER" />
    <trader-profile-table :avatar-trader="AVATAR_LINK_CLIENT" :table-data-public="GENERAL_INFORMATION_TRADER" />
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
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import accountTrader from '../../../components/socialTrading/accountTrader'
import traderProfileTable from '../../../components/socialTrading/traderProfileTable'
import graphSocial1 from '../../../assets/icons/graph-social-1.svg'
import graphSocial2 from '../../../assets/icons/graph-social-2.svg'
import graphSocial3 from '../../../assets/icons/graph-social-3.svg'
import plusIc from '../../../assets/icons/plus-ic.svg'
import minusIc from '../../../assets/icons/minus-ic.svg'
const { mapState, mapActions } = createNamespacedHelpers('socialTrading')
const { mapGetters } = createNamespacedHelpers('settings')
export default {
  components: {
    'account-trader': accountTrader,
    'trader-profile-table': traderProfileTable,
    graphSocial1,
    graphSocial2,
    graphSocial3,
    plusIc,
    minusIc
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'ACCOUNT_SOCIAL_TRADER',
      'GENERAL_INFORMATION_TRADER',
      'SUMMARY_STATISTICS',
      'SUMMARY_STATISTICS_SELECTED'
    ]),
    ...mapGetters([
      'AVATAR_LINK_CLIENT'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_SUMMARY_STATISTICS'
    ])
  }
}
</script>
<style>
.provider-social-page
{
  padding-left: 20px;
  padding-right: 20px;
}

.provider-social-page h3
{
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.provider-social-page .btn-block
{
  display: block;
  text-align: center;
}

.provider-social-page .trans-button
{
  padding: 13px 20px 12px;
  line-height: 13px;
}

.provider-social-page .summary-statistics-block label
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

.provider-social-page .selector-wrapper-black .vs__dropdown-toggle
{
  background: transparent;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
}

.provider-social-page .v-select
{
  width: 180px;
  margin-bottom: 20px;
}

.provider-social-page .selector-wrapper-black .vs__selected
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #B2B2B2;
  line-height: 40px;
}

.provider-social-page .graph-block h5,
.provider-social-page .graph-info h5
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

.provider-social-page
{
  padding-bottom: 120px;
}

.provider-social-page .graph-info
{

}

.provider-social-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 20px;
}

.provider-social-page .graph-info .right-side ul li
{
  margin-right: 10px;
  list-style-type: none;
}

.provider-social-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.provider-social-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.provider-social-page .graph-info .right-side ul li span
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

.provider-social-page .graph-info .right-side ul li .line
{
  width: 16px;
  height: 1px;
  margin-right: 5px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  vertical-align: middle;
}

.provider-social-page .graph-info .right-side ul li .line-dashed
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

.provider-social-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: -1px;
}

.provider-social-page .graph-img
{
  margin: 0 -20px 20px;
}

.provider-social-page .graph-img svg
{
  max-width: 100%;
  width: 100%;
  height: auto;
}

.light-theme .provider-social-page h3,
.light-theme .provider-social-page .summary-statistics-block label
{
  color: #000000;
}

.light-theme .provider-social-page .graph-block h5,
.light-theme .provider-social-page .graph-info h5
{
  color: #989898;
}

</style>
