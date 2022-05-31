<template>
  <div class="upload-documents">
    <div class="container">
      <div class="header-form">
        <h3>Upload your documents</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="info-documents">
        <h4>Identity</h4>
        <p>In compliance with the requirements of regulation</p>
        <p>upload a color copy of the document (<span>passport, driving license or local identification card</span>) with:</p>
        <ul>
          <li>Your photo</li>
          <li>Name and Surname</li>
          <li>Date of birth</li>
          <li>Expiry Date</li>
          <li>Number of the document</li>
        </ul>
        <p>Full-size color copy showing the document in full. Copies which show your documents with the edges cut off will not be accepted.</p>
        <p><i>Only a full-sized color photo, in which all the edges of your card are visible, can be accepted.</i></p>
      </div>
      <div class="img-wrong">
        <div>
          <div class="black">
            <img src="~/assets/icons/img-doc.png" />
          </div>
          <div class="white">
            <img src="~/assets/icons/id-good-white.png" />
          </div>
        </div>
        <div>
          <div class="black">
            <img src="~/assets/icons/img-doc-wrong.png" />
          </div>
          <div class="white">
            <img src="~/assets/icons/id-wrong-white.png" />
          </div>
        </div>
      </div>
      <div class="add-photo-block">
        <div>
          <imgPhotoSVG />
        </div>
        <div class="btn-block-input-file">
          <button-input-file :title="'Add photo'" @onFileChange="onFileChange" />
        </div>
      </div>

      <div class="info-documents">
        <h4>Address</h4>
        <p>In compliance with the requirements of regulation</p>
        <p>upload a color copy of the document (utility bill, bank or credit card statement, tax invoice or certificate from local authorities with the name and address of organization that is internationally recognized) with:</p>
        <ul>
          <li>Name and Surname</li>
          <li>Actual residential address</li>
          <li>Dated within the last 3 months</li>
        </ul>
        <p>Full-size color copy showing the document in full. Copies which show your documents with the edges cut off will not be accepted.</p>
        <p><i>Only a full-sized color photo, in which all the edges of your card are visible, can be accepted.</i></p>
      </div>
      <div class="img-wrong">
        <div>
          <div class="black">
            <img src="~/assets/icons/img-address.png" />
          </div>
          <div class="white">
            <img src="~/assets/icons/doc-good-white.png" />
          </div>
        </div>
        <div>
          <div class="black">
            <img src="~/assets/icons/img-address-wrong.png" />
          </div>
          <div class="white">
            <img src="~/assets/icons/doc-wrong-white.png" />
          </div>
        </div>
      </div>
      <div class="add-photo-block">
        <div>
          <imgAddressScreenSVG />
        </div>
        <div class="btn-block-input-file">
          <button-input-file :title="'Add photo'" @onFileChange="onFileChange" />
        </div>
      </div>
      <p class="text-center">
        Напоминаем, если вы планируете использовать банковскую карточку MasterCard, ее необходимо верифицировать (требование регулятора-банкира чего то там)
      </p>
      <div class="btn-block">
        <default-button
          :type="'trans-button'"
          :label="'Verification Bank card'"
          :click-event="() => {}"
        />
      </div>
      <div class="btn-block-red">
        <default-button
          :type="'red-button'"
          :label="'ОК'"
          :click-event="() => {}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CloseSVG from '../../assets/layout/close.svg'
import imgPhotoSVG from '../../assets/icons/img-photo.svg'
import imgAddressScreenSVG from '../../assets/icons/img-address-screen.svg'
import DefaultButton from '../../components/default-button'
import ButtonInputFile from '../../components/ButtonInputFile.vue'
export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    CloseSVG,
    imgPhotoSVG,
    imgAddressScreenSVG,
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
    font-family: Montserrat,serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    margin-right: 10px;
    color: #FFFFFF;
  }

  .upload-documents h4
  {
    font-family: Montserrat,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 20px;
  }

  .upload-documents p
  {
    font-family: Arial,serif;
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
    font-family: Arial,serif;
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

  .upload-documents .img-wrong > div svg,
  .upload-documents .img-wrong > div img
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

  .upload-documents .white
  {
    display: none;
  }

  .light-theme .upload-documents h3,
  .light-theme .upload-documents h4,
  .light-theme .upload-documents p span
  {
    color: #000000;
  }

  .light-theme .upload-documents p i
  {
    color: #989898;
  }

  .light-theme .upload-documents .add-photo-block
  {
    background: #ffffff;
  }

  .light-theme .upload-documents .btn-block-input-file .span-wrapper,
  .light-theme .upload-documents .btn-block button
  {
    background: #F7F6FB;
    color: #989898;
    border-color: #D4D4D4;
  }

  .light-theme .upload-documents .white
  {
    display: block;
  }

  .light-theme .upload-documents .black
  {
    display: none;
  }

</style>
