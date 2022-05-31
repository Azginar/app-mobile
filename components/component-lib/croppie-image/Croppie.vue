<template>
  <div :class="wrapClasses">
    <div v-if="showImageCrop" class="panel-change-avatar-body">
      <div class="title-change-avatar">
        <p>{{ title }}</p>
      </div>
      <div class="bg-black">
        <div class="avatar-block">
          <avatar-crop
            :img-url="img"
            :change-avatar="updateCrop"
            :title-cancel="titleCancel"
            :title-save="titleSave"
            :is-black-design="isBlackDesign"
            @cancel="resize"
            @saveImage="saveImage"
          />
        </div>
      </div>
    </div>
    <div v-else class="panel-change-avatar-body">
      <div class="title-change-avatar">
        <p>{{ title }}</p>
      </div>
      <div class="bg-black">
        <div class="avatar">
          <img :src="img" alt="'avatar'">
        </div>
        <div class="button-wrapper">
          <div>
            <NuxtLink to="/settings/edit-personal-avatar"><default-button
              :type="buttonType"
              :label="'Change avatar'"
              :click-event="() => {}"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// -------------------- croppie css
import 'croppie/croppie.css'
// --------------------

import DefaultButton from '../../default-button'
import AvatarCrop from './AvatarCrop.vue'

export default {
  name: 'Croppie',
  components: {
    'avatar-crop': AvatarCrop,
    'default-button': DefaultButton
  },
  props: {
    title: {
      type: String,
      default: 'Profile photo'
    },
    titleCancel: {
      type: String,
      default: 'Cancel'
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
    .panel-change-avatar {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        box-sizing: border-box;
        margin-bottom: 20px;
        border-radius: 4px;
        background: transparent;
        box-shadow: none;
        border: none;
    }
    .panel-change-avatar-body {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        box-sizing: border-box;
        padding: 15px;
        background: #fdfdfd;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
    }
    .title-change-avatar {
        text-align: center;
    }
    .title-change-avatar > p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 100%;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
    .button-wrapper {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        text-align: center !important;
        box-sizing: border-box;
        margin-top: 15px !important;
    }
    .avatar {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        box-sizing: border-box;
        vertical-align: middle;
        text-align: center;
        padding: 0;
        position: relative;
    }

    .avatar > img {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        text-align: center;
        box-sizing: border-box;
        vertical-align: middle;
        border-radius: 50%;
        background-color: #fff;
        border: 0 solid #a7a7a7;
        width: 200px;
        height: 200px;
    }

    .panel-change-avatar-red-black .panel-change-avatar-body {
      background: #333333;
      border-radius: 0;
      -moz-border-radius: 0;
      -webkit-border-radius: 0;
    }

    .panel-change-avatar-red-black .panel-change-avatar-body {
      text-align: left;
      padding: 0;
    }

    .panel-change-avatar-red-black .button-wrapper .span-wrapper,
    .panel-change-avatar-red-black .button-wrapper button {
      margin-right: 10px;
      margin-left: 10px;
      vertical-align: top;
    }

    .panel-change-avatar-red-black .button-wrapper {
      margin-top: 20px !important;
    }

    .panel-change-avatar-red-black .title-change-avatar > p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 100%;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      margin-bottom: 30px;
    }

    .panel-change-avatar-red-black .avatar-block {
      padding: 40px 35px;
    }

    .panel-change-avatar-red-black .avatar > img {
      width: 250px;
      height: 250px;
    }

    .panel-change-avatar-red-black .avatar,
    .panel-change-avatar-red-black .button-wrapper {
      position: relative;
    }

    .panel-change-avatar-body {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      line-height: 22px;
      color: #555;
      font-size: 12px;
      font-family: "Open Sans", sans-serif;
      box-sizing: border-box;
      padding: 15px;
      background: #fdfdfd;
      box-shadow: none;
      border-radius: 5px;
    }

    .panel-change-avatar-red-black .avatar > img
    {
      max-width: 250px;
      height: auto !important;
      width: 100% !important;
    }

    .panel-change-avatar-red-black .red-outlet-button,
    .panel-change-avatar-red-black .button-wrapper .span-wrapper,
    .panel-change-avatar-red-black .button-wrapper button
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      outline: none;
      cursor: pointer;
      line-height: 14px;
      text-transform: uppercase;
      color: #B2B2B2;
      padding: 12px 40px;
      background: #333333 !important;
      border: 1px solid rgba(94, 94, 94, 0.5) !important;
      box-sizing: border-box;
      border-radius: 300px;
      -moz-border-radius: 300px;
      -webkit-border-radius: 300px;
    }

    .panel-change-avatar-red-black .button-wrapper > div
    {
      margin-bottom: 20px;
    }

    .panel-change-avatar-red-black .red-outlet-button:hover,
    .panel-change-avatar-red-black .red-outlet-button:active,
    .panel-change-avatar-red-black .button-wrapper .span-wrapper:hover,
    .panel-change-avatar-red-black .button-wrapper .span-wrapper:active,
    .panel-change-avatar-red-black .button-wrapper button:hover,
    .panel-change-avatar-red-black .button-wrapper button:active
    {
      border: 1px solid rgba(229, 37, 37, 0.5) !important;
      color: #ffffff !important;
    }

    .panel-change-avatar-red-black .red-outlet-button:active,
    .panel-change-avatar-red-black .button-wrapper .span-wrapper:active,
    .panel-change-avatar-red-black .button-wrapper button:active
    {
      margin-top: 1px;
      margin-bottom: -1px;
    }

    .light-theme .panel-change-avatar-red-black .panel-change-avatar-body,
    .light-theme .profile-page-red-black
    {
      background: #F7F6FB;
    }

    .light-theme .panel-change-avatar-red-black .red-outlet-button,
    .light-theme .panel-change-avatar-red-black .button-wrapper .span-wrapper,
    .light-theme .panel-change-avatar-red-black .button-wrapper button
    {
      background: #F7F6FB !important;
      color: #989898;
      border-color: #D4D4D4 !important;
      text-shadow: none;
    }

    .light-theme .panel-change-avatar-red-black .red-outlet-button:active,
    .light-theme .panel-change-avatar-red-black .button-wrapper .span-wrapper:active,
    .light-theme .panel-change-avatar-red-black .button-wrapper button:active,
    .light-theme .panel-change-avatar-red-black .red-outlet-button:hover,
    .light-theme .panel-change-avatar-red-black .button-wrapper .span-wrapper:hover,
    .light-theme .panel-change-avatar-red-black .button-wrapper button:hover
    {
      border-color: #000000 !important;
      color: #000000 !important;
      box-shadow: none;
    }
</style>
