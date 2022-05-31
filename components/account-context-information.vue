<template>
  <aside>
    <div class="border">
      <div
        v-for="(data, index) in dataArray"
        :key="index"
        class="col-details"
      >
        <p>{{ data.p }}</p>
        <span>{{ data.span }}</span>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  name: 'AccountContextInformation',
  props: {
    dataArray: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
aside {
  background: #1B1B1B;
  display: flex;
  flex-wrap: wrap;
  padding: 3px 3px;
  margin-bottom: 20px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  margin-top: 20px;
}

aside .col-details p {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 5px;
}
aside .col-details span {
  font-family: Montserrat, serif;
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
}

aside .border {
  padding: 16px 17px 0;
  position: relative;
}

aside .border:before {
  position: absolute;
  content: "";
  width: 3px;
  height: 100%;
  top: 0;
  left: 0;
  background: #E52525;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

aside .border > div {
  margin-bottom: 20px;
}

aside .border > div:last-child
{
  margin-bottom: 17px;
}
</style>
