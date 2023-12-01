<template>
  <form
    @submit="onSubmit"
    class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
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

    <BaseButton :disabled="loading">Submit</BaseButton>
    <pre>{{ error }}</pre>
  </form>
</template>
<script setup>
import { ref } from "vue";
import * as yup from "yup";
import { useForm } from "vee-validate";
import TextField from "@/components/ui/TextField.vue";
import PasswordField from "@/components/ui/PasswordField.vue";
import BaseModal from "@/components/ui/BaseModal.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import apiRouter from "@/api/apiRouter.js";
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";
import useAuthStore from '@/stores/authStore.js'

defineProps({
  modelValue: String,
});

const emit = defineEmits(['showModal'])
const authStore = useAuthStore();
const showPassword = ref(false);
const openModal = ref(false);

const initialValue = {
  email: "",
  password: "",
};

const { handleSubmit, values, resetForm } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  }),
});

const submitForm = async () => {
  loading.value = true;

  try {
    await apiRouter.auth.login(values)

    resetForm();
  } catch (error) {

    console.log(error);
  } finally {
    loading.value = false;
  }
};
const onChangeModal = (newVal) => {
  openModal.value = newVal;
};

const {handler, loading, error} = useHandleLoadingAndError()

const onSubmit =  handleSubmit(async (data, {resetForm}) => {
  const res =  await handler(authStore.logIn(data))

  if (!res.error) {
    emit('showModal')
    resetForm()
  }
});
</script>