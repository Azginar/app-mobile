<template>
  <div class="duplicator-social-page">
    <div class="summary-statistics-block">
      <SimpleSelectBlack
        :options="SUMMARY_STATISTICS"
        :handle-select="CHANGE_SUMMARY_STATISTICS"
        :label="'Summary statistics'"
        :selected="SUMMARY_STATISTICS_SELECTED"
      />
    </div>
    <div class="graph-info">
      <div class="left-side">
        <h5>Equity / balance</h5>
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
    <account-investor :accounts-investor="ACCOUNT_INVESTOR_TRADER" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import accountInvestor from '../../../components/socialTrading/accountInvestor'
import graphSocial2 from '../../../assets/icons/graph-social-2.svg'
import plusIc from '../../../assets/icons/plus-ic.svg'
import minusIc from '../../../assets/icons/minus-ic.svg'
const { mapState, mapActions } = createNamespacedHelpers('socialTrading')
export default {
  components: {
    'account-investor': accountInvestor,
    graphSocial2,
    plusIc,
    minusIc
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'SUMMARY_STATISTICS',
      'SUMMARY_STATISTICS_SELECTED',
      'ACCOUNT_INVESTOR_TRADER'
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
.duplicator-social-page
{
  padding-left: 20px;
  padding-right: 20px;
}

.duplicator-social-page h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.duplicator-social-page .btn-block
{
  display: block;
  text-align: center;
}

.duplicator-social-page .trans-button
{
  padding: 13px 20px 12px;
  line-height: 13px;
}

.duplicator-social-page .summary-statistics-block label
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

.duplicator-social-page .selector-wrapper-black .vs__dropdown-toggle
{
  background: transparent;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
}

.duplicator-social-page .v-select
{
  width: 180px;
  margin-bottom: 20px;
}

.duplicator-social-page .selector-wrapper-black .vs__selected
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #B2B2B2;
  line-height: 40px;
}

.duplicator-social-page .graph-block h5,
.duplicator-social-page .graph-info h5
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

.duplicator-social-page
{
  padding-bottom: 120px;
}

.duplicator-social-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 20px;
}

.duplicator-social-page .graph-info .right-side ul li
{
  margin-right: 10px;
  list-style-type: none;
}

.duplicator-social-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.duplicator-social-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.duplicator-social-page .graph-info .right-side ul li span
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

.duplicator-social-page .graph-info .right-side ul li .line
{
  width: 16px;
  height: 1px;
  margin-right: 5px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  vertical-align: middle;
}

.duplicator-social-page .graph-info .right-side ul li .line-dashed
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

.duplicator-social-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: -1px;
}

.duplicator-social-page .graph-img
{
  margin: 0 -20px 80px;
}

.duplicator-social-page .graph-img svg
{
  max-width: 100%;
  width: 100%;
  height: auto;
}

.light-theme .duplicator-social-page .summary-statistics-block label,
.light-theme .duplicator-social-page h3
{
  color: #000000;
}

.light-theme .duplicator-social-page .graph-block h5,
.light-theme .duplicator-social-page .graph-info h5
{
  color: #989898;
}

</style>
