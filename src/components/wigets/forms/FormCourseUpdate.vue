<template>
  <form
    @submit="onSubmit"
    class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
    <div v-if="error" class="border border-red-500 text-red-500 rounded-lg mb-5 p-4">
      {{error}}
    </div>
    <text-field-validate
      name="title"
      label="Title"
      placeholder="title"
      class="w-full"
    />
    <text-field-validate
      name="slug"
      label="Slug"
      placeholder="slug"
      class="w-full"
    />
    <text-field-validate
      name="id"
      label="Course ID: "
      placeholder="slug"
      class="w-full"
      disabled
    />


    <!-- type="file" component -->
    <input name="file" type="file" class="my-6">
    <textarea-field-validate
      name="info"
      label="Call to action box "
      placeholder="Enter action"
      class="w-full"
    />
    <textarea-field-validate
      name="summary"
      label="Summary"
      placeholder="Enter action"
      class="w-full"
    />
    <textarea-field-validate
      name="description"
      label="Course Description"
      placeholder="Enter description"
      class="w-full"
    />
    <textarea-field-validate
      name="objective"
      label="Objectives"
      placeholder="Enter objectives"
      class="w-full"
    />
    <text-field-validate
      name="video"
      label="Video url"
      placeholder="Enter video url"
      class="w-full"
    />

    <!--  <v-select
            v-model="selectedLanguage"
            name="language"
            label="Select Language"
            :items='[props.source.language.name ? null : "English"]'
            class="w-full"
        ></v-select>-->
    <!--
        <v-select
             name="author_id"
             label="Select Author"
             :items="[props.source.author_id ? null : 1]"
             class="w-full"
         ></v-select>-->

    <v-combobox
      name="state_ids"
      label="Other Training Options"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      chips
      multiple
      hide-selected
      filter-keys
      closable-chips
      class="w-full"
    ></v-combobox>
    <!-- Other Training Options *  component: v-select -->
    <!-- Select Feature *  component: v-combobox -->
    <!-- Course Topics *  component: v-combobox -->
    <!-- Select Subtitles *  component: v-select  -->
    <!-- Select State  *  component: v-combobox  -->
    <!-- Select Tags   *  component: v-select  -->

    <text-field-validate
      name="meta_title"
      label="Meta Title"
      placeholder="Enter meta title *"
      class="w-full"
    />
    <textarea-field-validate
      name="meta_description"
      label="Meta Description"
      placeholder="Enter meta description"
      class="w-full"
    />
    <!-- type="file" component -->
    <!-- Search Phrases & Words   *  component: v-combobox  -->
    <div class="text-center">
      <v-btn type="submit" :loading="loading">Submit</v-btn>
    </div>
  </form>
</template>

<script setup>
import {computed, ref} from "vue";
import TextFieldValidate from "@/components/ui/TextFieldValidate.vue";
import {useForm} from "vee-validate";
import * as yup from "yup";
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";
import apiRouter from "@/api/apiRouter.js";
import TextareaFieldValidate from "@/components/ui/TextareaFieldValidate.vue";

const props = defineProps({
  courseId: {
    type: [String, Number],
    required: true,
  },
  source: {
    type: Object,
    default: ()=> ({
      title: "",
      slug: "",
      id: "",
      info: "",
      summary: "",
      description: "",
      objective: "",
      video: "",
      // language: {
      //   name: "",
      //   code: "" },
      // author_id: "",
      state_ids: "",
      meta_title: "",
      meta_description: "",
    }),
  },

})

const emit = defineEmits(['success'])

//const selectedLanguage = ref(props.source.language.name);
const selectedState_ids = ref(props.source.state_ids);
console.log(selectedState_ids.value)
const initialValue = computed( ()=> ({
  title: props.source.title,
  slug: props.source.slug,
  id: props.source.id,
  info: props.source.info,
  summary: props.source.summary,
  description: props.source.description,
  objective: props.source.objective,
  video: props.source.video,
  // language: props.source.language.name,
  // author_id: props.source.author_id,
  state_ids: props.source.state_ids,
  meta_title: props.source.meta_title,
  meta_description: props.source.meta_description,
}) )
const {handler, loading, error} = useHandleLoadingAndError()

const { handleSubmit } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    title: yup.string().max(255).required(),
    slug: yup.string().matches(/^[0-9A-Z_-]*$/i, "invalid slug").max(255).required(),
    id: yup.string().required(),
    info: yup.string(),
    summary: yup.string(),
    description: yup.string(),
    objective: yup.string(),
    video: yup.string().max(255),
    meta_title: yup.string().max(255).required(),
    meta_description: yup.string().max(255).required(),
    // language: yup.string().required(),
    // author_id: yup.string().required(),
    state_ids: yup.string().required(),
  }),
});

const onSubmit =  handleSubmit(async (data) => {
  // data.language =  { id: 11, portal_id: 1, name: selectedLanguage.value, code: 'en' };
  //data.language = 1; // ????


  const res =  await handler(apiRouter.admin.courses.update(props.courseId, data))

  if (!res.error) {
    console.log(res)
    console.log(res.data)
    emit('success', res.data)
  }
});
</script>

<style scoped>

</style>style>