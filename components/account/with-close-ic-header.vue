<template>
  <div class="container-close-ic-header">
    <div class="header-form">
      <slot name="name" />
      <div class="close-ic">
        <div @click="goBack">
          <CloseSVG />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CloseSVG from 'assets/layout/close.svg'

export default {
  name: 'WithCloseIcHeader',
  components: {
    CloseSVG
  },
  props: {
    goBack: {
      type: Function,
      required: true
    }
  }
}
</script>
<style>
.container-close-ic-header {
  padding-left: 20px;
  padding-right: 20px;
}

.container-close-ic-header .header-form {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 40px;
}

.container-close-ic-header .close-ic {
  cursor: pointer;
}

.container-close-ic-header h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  margin-right: 10px;
  color: #FFFFFF;
}

.light-theme .container-close-ic-header h3
{
  color: #000000;
}

</style>
