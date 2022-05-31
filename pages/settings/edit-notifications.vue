<template>
  <div class="edit-notifications">
    <div class="container">
      <div class="header-form">
        <h3>Notifications</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="language-block">
        <div class="row-line">
          <SimpleSelectBlack
            :options="['English', 'Spanish', 'Malay']"
            :handle-select="() => {test}"
            :label="'Language of notifications'"
            :value="'English'"
          />
        </div>
      </div>
      <div class="margin-level-block">
        <h4>Low margin level</h4>
        <label>Critical margin level</label>
        <input-range-with-input />
      </div>
      <setting-block :data-settings="marginLevelData" />
      <h4>Withdrawal confirmation</h4>
      <setting-block :data-settings="withdrawalData" />
      <h4>Email notifications</h4>
      <setting-block :data-settings="emailNotificationsData" />
      <h4>Email subscriptions</h4>
      <setting-block :data-settings="emailSubscriptionsData" />
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'OK'"
          :click-event="() => {}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputTypeRangeWithInput from '../../components/inputTypeRangeWithInput'
import SimpleSelectBlack from '../../components/SimpleSelectBlack.vue'
import DefaultButton from '../../components/default-button'
import SettingBlock from '../../components/settingBlock'
import CloseSVG from '../../assets/layout/close.svg'

export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'input-range-with-input': InputTypeRangeWithInput,
    SimpleSelectBlack,
    'default-button': DefaultButton,
    'setting-block': SettingBlock,
    CloseSVG
  },
  data () {
    return {
      marginLevelData: [
        {
          title: 'Notify via Email',
          id: 'checkIdEmail'
        },
        {
          title: 'Notify via SMS',
          id: 'checkIdSms'
        }
      ],
      withdrawalData: [
        {
          title: 'Get by email',
          id: 'checkWithdrawalIdEmail'
        },
        {
          title: 'Notify via SMS',
          id: 'checkWithdrawalIdSmsl'
        }
      ],
      emailNotificationsData: [
        {
          title: 'MetaTrader statements',
          id: 'checkMtId'
        },
        {
          title: 'Traders and investors notifications',
          id: 'checkTradersId'
        },
        {
          title: 'Notifications of Investors trading',
          id: 'checkInvestorsId'
        },
        {
          title: 'New affiliate referrals',
          id: 'checkRefId'
        }
      ],
      emailSubscriptionsData: [
        {
          title: 'Analytics news',
          id: 'checkAnalId'
        },
        {
          title: 'Company news',
          id: 'checkCompanyNewsId'
        },
        {
          title: 'Contests news',
          id: 'checkContestsNewsId'
        },
        {
          title: 'Education news',
          id: 'checkEducationNewsId'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  padding-left: 20px;
  padding-right: 20px;
}

.edit-notifications .header-form {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;
}

.edit-notifications .close-ic {
  cursor: pointer;
}

.edit-notifications h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  margin-right: 10px;
  color: #FFFFFF;
}

.edit-notifications .language-block {
  margin-bottom: 40px;
}

.edit-notifications .language-block label {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 20px;
  padding-left: 0;
  text-transform: none;
}

.edit-notifications .row-line {
  margin-bottom: 20px;
}

.edit-notifications .margin-level-block {
  margin-bottom: 40px;
}

.edit-notifications .margin-level-block h4 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  display: flex;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.edit-notifications .margin-level-block label {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  padding-left: 0;
  display: block;
  font-size: 11px;
  line-height: 97.52%;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #737373;
}

.edit-notifications .margin-level-block .input-range input {
  width: 100%;
}

.edit-notifications h4 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.edit-notifications .btn-block {
  text-align: center;
  padding-bottom: 100px;
}

.edit-notifications .btn-block button {
  padding: 17px 40px;
  font-size: 15px;
  line-height: 16px;
}

.light-theme .edit-notifications h3,
.light-theme .edit-notifications .language-block label,
.light-theme .edit-notifications .margin-level-block h4,
.light-theme .edit-notifications h4
{
  color: #000000;
}

</style>
