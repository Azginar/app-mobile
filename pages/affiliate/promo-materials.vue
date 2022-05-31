<template>
  <div class="affiliate-promo-materials">
    <div class="content-container">
      <div class="select-country">
        <SimpleSelectBlackWithIcon
          :options="GET_COUNTRY_LIST"
          :handle-select="CHANGE_SELECTED_COUNTRY_LIST"
          :label="'Select the language of promotional materials'"
          :selected="GET_SELECTED_COUNTRY_LIST"
        />
      </div>
      <promo-block :promo-block-data="GET_PROMO_BLOCK_DATA" />
    </div>
  </div>
</template>

<script>
import SimpleSelectBlackWithIcon from '@/components/SimpleSelectBlackWithIcon'
import { createNamespacedHelpers } from 'vuex'
import getUserSettingsRequest from '@/services/userSettingsFormRequests'
import PromoBlock from '@/components/affiliate/promo-block'
const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  layout: 'default',
  name: 'Index',
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    SimpleSelectBlackWithIcon,
    'promo-block': PromoBlock
  },
  async asyncData (context) {
    await getUserSettingsRequest(context)
  },
  data () {
    return {
      countryList: [
        {
          title: 'Indonesia',
          image: 'https://tifia.com/images/new-site/economic-calendar/flags/indonesia.svg'
        },
        {
          title: 'Malaysia',
          image: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Nigeria',
          image: 'https://tifia.com/images/new-site/economic-calendar/flags/nigeria.svg'
        }
      ],
      selectedCountryList: [
        {
          title: 'Nigeria',
          image: 'https://tifia.com/images/new-site/economic-calendar/flags/nigeria.svg'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'GET_PROMO_BLOCK_DATA',
      'GET_COUNTRY_LIST',
      'GET_SELECTED_COUNTRY_LIST'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_SELECTED_COUNTRY_LIST'
    ]),
    goToPeriodPage () {
      this.$router.push('/affiliate/filter-rebate')
    }
  }
}
</script>
<style>
.affiliate-promo-materials .content-container
{
  padding: 0 20px 80px;
}

.affiliate-promo-materials .select-country
{
  margin-bottom: 20px;
}
</style>
