<template>
  <div class="big-check-box-container">
    <input id="opta" type="checkbox" name="optiona" checked>
    <label for="opta" class="checkbox-text">I have read and agree to the <a href="https://tifia.com/uploads/docs/social-trading-en.pdf">Regulations of the SocialTrading service</a></label>
  </div>
</template>
<script>
export default {
  name: 'BigCheckBox'
}
</script>
<style>

.big-check-box-container {
  position: relative;
}

.big-check-box-container input[type=checkbox] {
  margin-top: 0;
  opacity: 0;
  width: 0;
  height: 0;
}

.big-check-box-container input[type=checkbox] + label:before {
  position: absolute;
  width: 30px;
  height: 30px;
  content: "";
  left: 0;
  top: 24px;
  background: #737373;
  border-radius: 2px;
}

.big-check-box-container input[type=checkbox]:checked + label:before {
  content: "\2713";
  font-size: 30px;
  color: #ffffff;
  line-height: 30px;
  text-align: center;

}

.big-check-box-container .checkbox-text {
  font-size: 14px;
  font-family: Arial, serif;
  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  color: #737373;
  padding-left: 40px;
  display: block;
}

.big-check-box-container .checkbox-text a
{
  color: #B2B2B2;
  text-decoration: none;
  display: inline-block;
}
</style>
