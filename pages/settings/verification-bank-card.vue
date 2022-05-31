<template>
  <div class="upload-documents">
    <div class="container">
      <div class="header-form">
        <h3>Add and verification bank card</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="master-card-info">
        <div>
          <masterCardSVG />
        </div>
        <div>
          <p>Текст про то, что принимаются только карты макстеркарда. </p>
        </div>
      </div>
      <div class="add-card-block">
        <h4>Add card</h4>
        <div class="row-line">
          <label>Card number</label>
          <black-input />
        </div>
        <div class="row-line">
          <label>Holder’s name</label>
          <black-input />
        </div>
        <div class="row-line">
          <label>Expiry date</label>
          <black-input />
        </div>
      </div>
      <div class="info-documents">
        <h4>Verification card</h4>
        <p>In compliance with the requirements of AML.</p>

        <p>To verify your Bank card, please upload the photos of the front and back sides of your card (with CVC/CVV code hidden).</p>

        <p>Full color copy, that shows all corners of the</p>
        <ul>
          <li>card,</li>
          <li>With the number and expiry date,</li>
          <li>With the full name of the card owner.</li>
        </ul>
        <p>If you use a virtual card, upload a screenshot of your online cabinet, which shows the card number and your name</p>
        <p><i>Only a full-sized color photo, in which all the edges of your card are visible, can be accepted.</i></p>
      </div>
      <div class="img-wrong">
        <div>
          <cardWrong1SVG />
        </div>
        <div>
          <cardWrong2SVG />
        </div>
      </div>
      <div class="info-documents">
        <p><i>You can hide CVC/CVV code while making a photo by using peace of paper or your finger.</i></p>
      </div>
      <div class="img-wrong">
        <div>
          <cardGood1SVG />
        </div>
        <div>
          <cardGood2SVG />
        </div>
      </div>
      <div class="add-photo-block-card">
        <div class="add-photo-block">
          <div>
            <cardPhoto1SVG />
          </div>
          <div class="btn-block-input-file">
            <button-input-file :title="'Add photo'" @onFileChange="onFileChange" />
          </div>
        </div>
        <div class="add-photo-block">
          <div>
            <cardPhoto2SVG />
          </div>
          <div class="btn-block-input-file">
            <button-input-file :title="'Add photo'" @onFileChange="onFileChange" />
          </div>
        </div>
      </div>
      <div class="btn-block-red">
        <default-button
          :type="'red-button'"
          :label="'Send'"
          :click-event="() => {}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CloseSVG from '../../assets/layout/close.svg'
import masterCardSVG from '../../assets/icons/master-card-img.svg'
import cardWrong1SVG from '../../assets/icons/card-wrong-1.svg'
import cardWrong2SVG from '../../assets/icons/card-wrong-2.svg'
import cardGood1SVG from '../../assets/icons/card-good-1.svg'
import cardGood2SVG from '../../assets/icons/card-good-2.svg'
import cardPhoto1SVG from '../../assets/icons/card-photo-1.svg'
import cardPhoto2SVG from '../../assets/icons/card-photo-2.svg'
import DefaultButton from '../../components/default-button'
import ButtonInputFile from '../../components/ButtonInputFile.vue'

import BlackInput from '../../components/black-input'
export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    BlackInput,
    CloseSVG,
    masterCardSVG,
    cardWrong1SVG,
    cardWrong2SVG,
    cardGood1SVG,
    cardGood2SVG,
    cardPhoto1SVG,
    cardPhoto2SVG,
    'default-button': DefaultButton,
    'button-input-file': ButtonInputFile
  },
  methods: {
    onFileChange (e) {
      const file = e.target.files[0]
      this.imgUrl = URL.createObjectURL(file)
      this.updateCrop = true
    }
  }
}
</script>

<style>
  .container
  {
    padding-left: 20px;
    padding-right: 20px;
  }

  .upload-documents .header-form
  {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .upload-documents .close-ic
  {
    cursor: pointer;
  }

  .upload-documents h3
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    margin-right: 10px;
    color: #FFFFFF;
  }

  .upload-documents .master-card-info
  {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .upload-documents label
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    padding-left: 20px;
    display: block;
    font-size: 11px;
    line-height: 97.52%;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #737373;
  }

  .upload-documents .row-line
  {
    margin-bottom: 20px;
  }

  .upload-documents .add-card-block
  {
    margin-bottom: 40px;
  }

  .upload-documents .master-card-info p
  {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #B2B2B2;
    padding-left: 10px;
    margin-bottom: 0;
  }

  .upload-documents h4
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 20px;
  }

  .upload-documents p
  {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #989898;
    margin-bottom: 20px;
  }

  .upload-documents p span
  {
    color: #ffffff;
  }

  .upload-documents p i
  {
    color: #B2B2B2;
  }

  .upload-documents ul
  {
    margin: 0 0 20px;
    padding-left: 0;
  }

  .upload-documents ul li
  {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #989898;
    position: relative;
    padding-left: 20px;
    list-style-type: none;
  }

  .upload-documents ul li:before
  {
    content: "";
    position: absolute;
    background: #B2B2B2;
    width: 5px;
    height: 5px;
    top: 6px;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .upload-documents .img-wrong
  {
    display: flex;
    max-width: 320px;
    margin-bottom: 20px;
  }

  .upload-documents .img-wrong > div
  {
    width: 50%;
    overflow: hidden;
  }

  .upload-documents .img-wrong > div svg
  {
    max-width: 100%;
    height: auto;
  }

  .upload-documents .img-wrong > div:first-child
  {
    margin-right: 10px;
  }

  .upload-documents .img-wrong > div:last-child
  {
    margin-left: 10px;
  }

  .upload-documents .add-photo-block
  {
    background: #242424;
    padding: 20px;
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .upload-documents .add-photo-block svg
  {
    margin-bottom: -4px;
  }

  .upload-documents .add-photo-block-card
  {
    padding: 20px 0;
  }

  .upload-documents .add-photo-block-card .add-photo-block
  {
    margin-bottom: 20px;
  }

  .upload-documents .btn-block-input-file .span-wrapper
  {
    background: #333333;
    padding-left: 20px;
    padding-right: 20px;
  }

  .upload-documents .text-center
  {
    text-align: center;
    font-size: 12px;
    line-height: 140%;
    margin-bottom: 10px;
  }

  .upload-documents .btn-block
  {
    text-align: center;
    margin-bottom: 40px;
  }

  .upload-documents .btn-block button
  {
    background: #333333;
  }

  .upload-documents .btn-block-red
  {
    text-align: center;
    margin-bottom: 100px;
  }

  .upload-documents .btn-block-red button
  {
    padding: 17px 40px;
    font-size: 15px;
    line-height: 16px;
  }

  .light-theme .upload-documents h3,
  .light-theme .upload-documents h4
  {
    color: #000000;
  }

  .light-theme .upload-documents .add-photo-block
  {
    background: #ffffff;
  }

  .light-theme .upload-documents .btn-block-input-file .span-wrapper
  {
    background: #F7F6FB;
    border: 1px solid #D4D4D4;
    color: #989898;
  }

  .light-theme .upload-documents p i,
  .light-theme .upload-documents .master-card-info p
  {
    color: #989898;
  }

</style>
