<template>
  <div>
    <div ref="cropAvatar" />
    <div class="button-wrapper">
      <div>
        <default-button
          :type="buttonStyles.cancel"
          :label="titleCancel"
          @clickEvent="handleCancel"
        />
      </div>
      <div>
        <default-button
          :type="buttonStyles.save"
          :label="titleSave"
          @clickEvent="handleSaveImage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Croppie from 'croppie'
import DefaultButton from '../../default-button'
import 'croppie/croppie.css'

export default {
  name: 'AvatarCrop',
  components: {
    'default-button': DefaultButton
  },
  props: {
    changeAvatar: Boolean,
    imgUrl: {
      type: String,
      default: ''
    },
    cancel: {
      type: Function,
      default: () => {}
    },
    saveImage: {
      type: Function,
      default: () => {}
    },
    titleCancel: {
      type: String,
      default: 'Cancel'
    },
    titleSave: {
      type: String,
      default: 'Save'
    },
    isBlackDesign: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      croppie: '',
      image: ''
    }
  },

  computed: {
    buttonStyles () {
      return {
        cancel: this.isBlackDesign ? 'trans-button' : 'default-grey',
        save: this.isBlackDesign ? 'red-button' : 'default-red-button'
      }
    }
  },

  watch: {
    changeAvatar () {
      this.image = this.imgUrl
      this.croppie.destroy()
      this.setUpCroppie()
    }
  },

  mounted () {
    this.image = this.imgUrl
    this.setUpCroppie()
  },

  methods: {
    setUpCroppie () {
      this.croppie = new Croppie(this.$refs.cropAvatar, {
        enableExif: true,
        viewport: { width: 200, height: 200, type: 'circle' },
        boundary: { width: 250, height: 250 },
        showZoomer: true,
        enableOrientation: true
      })

      this.croppie.bind({
        url: this.image
      })
    },
    handleCancel () {
      this.$emit('cancel')
    },
    handleSaveImage () {
      // const result = this.croppie.get()
      this.$emit('cancel')
    }
  }
}

</script>
