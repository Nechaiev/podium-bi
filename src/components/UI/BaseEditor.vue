<template>
  <input-wrapper :label="label" :name="name">
    <TinyEditor
      v-model="innerValue"
      :init="defaultOptions"
      tinymce-script-src="/assets/js/tinymce/tinymce.min.js"
    />
  </input-wrapper>
</template>

<script setup>
import TinyEditor from '@tinymce/tinymce-vue'
import { useField } from 'vee-validate'
import InputWrapper from '@/components/ui/InputWrapper.vue'

const defaultOptions = {
  mobile: {
    plugins:
      'preview importcss searchreplace autolink directionality visualblocks visualchars fullscreen link table charmap pagebreak nonbreaking anchor insertdatetime advlist lists help charmap  media image'
  },
  link_rel_list: [
    { title: 'dofollow', value: 'dofollow' },
    { title: 'nofollow', value: 'nofollow' }
  ],
  menubar: 'file edit view insert format tools table tc help',
  toolbar:
    'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap | fullscreen  preview | mediaLibrary link anchor codesample | ltr rtl | code',
  plugins:
    'autoresize preview importcss searchreplace autolink directionality visualblocks visualchars fullscreen link code table charmap pagebreak nonbreaking anchor insertdatetime advlist lists help  media image',
  relative_urls: false,
  paste_data_images: false,
  contextmenu: 'link table image',
  tinycomments_mode: 'embedded',
  branding: false
}

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  label: String,
  error: String,
  placeholder: String,
  modelValue: String,
  syncVModel: Boolean,
  variant: {
    type: String,
    default: 'outlined'
  }
})
defineEmits(['update:modelValue'])

const { value: innerValue, errors } = useField(() => props.name, props.validationSchema, {
  syncVModel: props.syncVModel
})
</script>
