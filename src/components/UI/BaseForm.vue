<template>
  <div>

    <form
        @submit="onSubmit"
        class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
    >
<!--      <text-field
          type="email"
          name="email"
          label="Email"
          placeholder="Your email"

      />
      <password-field
          :type="showPassword ? 'text' : 'password'"
          name="password"
          label="password"
          placeholder="Your password"
      />-->
      <text-field-validate
          type="email"
          name="email"
          label="Email"
          placeholder="Your email"
          class="w-full"
      />

      <text-field-validate
          name="password"
          label="password"
          placeholder="Your password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible"
          class="w-full"
      />
      <combobox-validate
          name="city"
          label="City"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      ></combobox-validate>
<!--      <div class="flex items-center my-2">
        <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-green-500"
            id="togglePassword"
            v-model="showPassword"
        />
        <label for="togglePassword" class="ml-2">Show Password</label>
      </div>-->
      <BaseButton :disabled="loading">Submit</BaseButton>
      <pre>{{ error }}</pre>
    </form>

    <teleport to="body">
      <BaseModal
          :open-modal="openModal"
          @confirm="submitForm"
          @update:open-modal="onChangeModal"
      />
    </teleport>
    <div class="flex justify-center my-12">


    </div>
  </div>
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
import TextFieldValidate from "@/components/ui/TextFieldValidate.vue";
import ComboboxValidate from "@/components/ui/ComboboxValidate.vue";

defineProps({
  modelValue: String,
});

const emit = defineEmits(['showModal'])
const authStore = useAuthStore();
const showPassword = ref(false);
const visible = ref(false);
const openModal = ref(false);

const initialValue = {
  email: "",
  password: "",
  city: "",
};

const { handleSubmit, values, resetForm } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    city: yup.string().required(),
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