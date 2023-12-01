<template>
  <div class="container mx-auto">
    <form
      @submit="onSubmit"
      class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
    >

      <text-field
        type="text"
        name="portal_id"
        label="portal_id"
        placeholder="Write portal_id"
      />
      <text-field
        type="text"
        name="title"
        label="Title"
        placeholder="Write title"
      />
      <password-field
        type="text"
        name="meta_title"
        label="meta_title"
        placeholder="Write meta_title"
      />
      <password-field
        type="text"
        name="meta_description"
        label="meta_description"
        placeholder="Write meta_description"
      />
      <password-field
        type="text"
        name="slug"
        label="slug"
        placeholder="Write slug"
      />
      <password-field
        type="text"
        name="description"
        label="description"
        placeholder="Write description"
      />

      <BaseButton :disabled="loading" >{{ loading ? "...Loading" : "Submit" }}</BaseButton>
      <pre>{{ error }}</pre>
      <pre>{{ initialValue }}</pre>
    </form>
  </div>
</template>
<script setup>
import * as yup from "yup";
import { useForm } from "vee-validate";
import TextField from "@/components/ui/TextField.vue";
import PasswordField from "@/components/ui/PasswordField.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import apiRouter from "@/api/apiRouter.js";
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";
import useCreatCoursesStore from '@/stores/creatCoursesStore';

const creatCoursesStore = useCreatCoursesStore();

const initialValue = {
  portal_id: "",
  title: "",
  meta_title: "",
  meta_description: "",
  slug: "",
  description: "",
};

const { handleSubmit, values, resetForm } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    portal_id: yup.string().required(),
    title: yup.string().required(),
    meta_title: yup.string().required(),
    meta_description: yup.string().required(),
    slug: yup.string().required(),
    description: yup.string().required(),
  }),
});

/*
const submitForm = async () => {
  loading.value = true;

  try {
    await apiRouter.admin.courses.create(values)
    console.log(values)
    resetForm();
  } catch (error) {

    console.log(error);
  } finally {
    loading.value = false;
  }
  alert(JSON.stringify(values, null, 2));
};
*/

const {handler, loading, error} = useHandleLoadingAndError()

const onSubmit =  handleSubmit(async (data, {resetForm}) => {
  const res =  await handler(creatCoursesStore.creatCourses(data))
  console.log('11111res: ', res)
  console.log('22222data: ', data)
  if (!res.error) {
    resetForm()
  }
  console.log('Форма успешно отправлена');
});
</script>