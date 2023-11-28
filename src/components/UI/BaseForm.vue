<template>
  <div>
    <form
      @submit="onSubmit"
      class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
    >
      <text-field
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
      />
      <div class="flex items-center my-2">
        <input
          type="checkbox"
          class="form-checkbox h-5 w-5 text-green-500"
          id="togglePassword"
          v-model="showPassword"
        />
        <label for="togglePassword" class="ml-2">Show Password</label>
      </div>
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
      <PopUpWrapper popupPosition="topRight">
        <template #body>
          <div>
            <div>
              <h5 class="text-title_5 mb-[30px]">
                Good work!
              </h5>
            </div>
            <div>
              <img src="https://placehold.co/400" alt="img"/>
            </div>
          </div>
        </template>
      </PopUpWrapper>
    </div>
  </div>
</template>

<script setup>
import {ref, provide} from "vue";
import * as yup from "yup";
import {useForm} from "vee-validate";
import TextField from "@/components/ui/TextField.vue";
import PasswordField from "@/components/ui/PasswordField.vue";
import BaseModal from "@/components/ui/BaseModal.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import apiRouter from "@/servis/apiRouter.js";
import BasePopup from "@/components/ui/BasePopup.vue";
import PopUpWrapper from "@/components/ui/PopUpWrapper.vue"
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";
import useAuthStore from '@/stores/authStore.js'

const authStore = useAuthStore();


defineProps({
  modelValue: String,
});

const showPassword = ref(false);
const openModal = ref(false);

const initialValue = {
  email: "",
  password: "",
};

const {handleSubmit, values, errors, resetForm} = useForm({
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

const onSubmit = handleSubmit(async (data, {resetForm}) => {
  const res = await handler(apiRouter.auth.login(data))
  authStore.usersName = res.data.data.first_name
  console.log(authStore.usersName)
  if (!res.error) {
    resetForm()
  }
})
</script>