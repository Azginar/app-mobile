<template>
  <div class="edit-personal-avatar">
    <div class="container">
      <div class="header-form">
        <h3>Edit profile photo</h3>
        <div class="close-ic">
          <NuxtLink to="/settings/index">
            <CloseSVG />
          </NuxtLink>
        </div>
      </div>
      <div class="btn-block-input-file">
        <button-input-file :title="'Change Avatar'" @onFileChange="onFileChange" />
      </div>
      <avatar-crop
        :img-url="img"
        :change-avatar="updateCrop"
        :title-save="titleSave"
        :is-black-design="isBlackDesign"
        @cancel="resize"
        @saveImage="saveImage"
      />
    </div>
  </div>
</template>

<script>
import AvatarCrop from '../../components/component-lib/croppie-image/AvatarCropEdit'
import CloseSVG from '../../assets/layout/close.svg'
import ButtonInputFile from '../../components/ButtonInputFile.vue'
export default {
  middleware: ['redirect', 'check-auth', 'auth'],
  components: {
    'avatar-crop': AvatarCrop,
    CloseSVG,
    'button-input-file': ButtonInputFile
  },
  props: {
    title: {
      type: String,
      default: 'Profile photo'
    },
    titleSave: {
      type: String,
      default: 'Save'
    },
    imgUrl: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    },
    originImg: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    },
    isBlackDesign: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      updateCrop: false,
      showImageCrop: false,
      croppieImg: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    }
  },
  computed: {
    img () {
      return this.croppieImg
    },
    wrapClasses () {
      return {
        'panel-change-avatar': true,
        'panel-change-avatar-red-black': this.isBlackDesign
      }
    },
    buttonType () {
      return this.isBlackDesign ? 'default-red-button' : 'trans-button'
    }
  },
  mounted () {
    this.croppieImg = this.imgUrl
  },
  methods: {
    onFileChange (e) {
      const file = e.target.files[0]
      this.imgUrl = URL.createObjectURL(file)
      this.updateCrop = true
    },

    resize () {
      this.croppieImg = this.originImg
      this.showImageCrop = !this.showImageCrop
    },
    saveImage () {
      // console.info(e)
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

  .edit-personal-avatar .header-form
  {
    display: flex;
    justify-content: space-between;
    padding: 30px 0 40px;
  }

  .edit-personal-avatar .close-ic
  {
    cursor: pointer;
  }

  .edit-personal-avatar h3
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    margin-right: 10px;
    color: #FFFFFF;
  }

  .edit-personal-avatar label
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

  .edit-personal-avatar .btn-block-input-file
  {
    text-align: center;
    margin-bottom: 20px;
  }

  .edit-personal-avatar .button-wrapper
  {
    text-align: center;
    padding: 20px 0 100px;
  }

  .edit-personal-avatar .button-wrapper button
  {
    padding: 17px 40px;
    font-size: 15px;
    line-height: 16px;
  }

  .edit-personal-avatar .croppie-container
  {
    max-width: 320px;
    margin: 0 auto;
  }

  .edit-personal-avatar .croppie-container .cr-slider-wrap,
  .edit-personal-avatar .croppie-container .cr-slider
  {
    width: 100%;
  }

  .edit-personal-avatar input[type=range]::-webkit-slider-thumb {
    background: #B2B2B2;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  /* All the same stuff for Firefox */
  .edit-personal-avatar input[type=range]::-moz-range-thumb {
    background: #B2B2B2;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  /* All the same stuff for IE */
  .edit-personal-avatar input[type=range]::-ms-thumb {
    background: #B2B2B2;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .edit-personal-avatar .croppie-container .cr-boundary
  {
    width: 100% !important;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    background: #414141;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    width: 100%;
    background: #414141;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    background: #414141;
  }

  input[type=range]::-ms-track {
    width: 100%;
    background: #414141;
  }
  input[type=range]::-ms-fill-lower {
    width: 100%;
    background: #414141;
  }
  input[type=range]:focus::-ms-fill-lower {
    width: 100%;
    background: #414141;
  }
  input[type=range]::-ms-fill-upper {
    width: 100%;
    background: #414141;
  }
  input[type=range]:focus::-ms-fill-upper {
    width: 100%;
    background: #414141;
  }

  .light-theme .edit-personal-avatar h3
  {
    color: #000000;
  }
</style>
