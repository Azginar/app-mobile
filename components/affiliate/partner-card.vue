<template>
  <div class="partners-card-block">
    <div v-for="row in partnersCardData" :key="row.titleBlock" class="partners-card" :style="styleElement" @click="handleClick(row.slug)">
      <h5>
        <span>{{ row.titleBlock }}</span>
        <span v-if="row.status" class="status">
          <i v-if="row.status === 'active'" class="active">{{ row.status }}</i>
          <i v-else>{{ row.status }}</i>
        </span>
      </h5>
      <div class="row">
        <div v-for="rowInto in row.date" :key="rowInto.title" class="col-line">
          <p>{{ rowInto.title }}</p>
          <span>{{ rowInto.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PartnersCard',
  props: {
    partnersCardData: {
      type: Array,
      default: () => []
    },
    styleElement: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (slug) {
      if (slug !== undefined) {
        this.$router.push(`/affiliate/campaigns/${slug}`)
      }
    }
  }
}
</script>
<style>
.partners-card-block
{
  margin-bottom: 80px;
}

.partners-card-block .partners-card
{
  padding: 20px 20px 10px;
  margin-bottom: 20px;
  background: #2B2B2B;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.partners-card-block .partners-card h5
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.partners-card-block .partners-card h5 span
{
  display: inline-block;
  vertical-align: middle;
}

.partners-card-block .partners-card h5 .status
{
  background: #242424;
  padding: 2px 5px 3px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  margin-bottom: -1px;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.partners-card-block .partners-card h5 .status i
{
  font-style: normal;
  color: #D2AC75;
}

.partners-card-block .partners-card h5 .status i.active
{
  color: #8DC640;
}

.partners-card-block .partners-card .row
{
  display: flex;
  flex-wrap: wrap;
}

.partners-card-block .partners-card .col-line
{
  margin-right: 20px;
  margin-bottom: 10px;
}

.partners-card-block .partners-card .col-line:last-child
{
  margin-right: 0;
}

.partners-card-block .partners-card .col-line p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.partners-card-block .partners-card .col-line span
{
  display: block;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #B2B2B2;
}

.light-theme .partners-card-block .partners-card
{
 background: #ffffff;
}

.light-theme .partners-card-block .partners-card h5 span
{
  color: #000000;
}

.light-theme .partners-card-block .partners-card .col-line span
{
  color: #989898;
}

.light-theme .partners-card-block .partners-card h5 span.status
{
  background: #ffffff;
  border: 1px solid #D4D4D4;
}
</style>
