<template>
  <form @submit.prevent="onSubmit" class="border border-black p-8 w-96">
    <h2 class="text-[24px] mb-3">Log in</h2>
    <input type="email" v-bind="email" placeholder="email" class="border w-full border-black p-3 mb-4" />
    <div class="text-red-500">{{ errors.email }}</div>

    <input type="password" v-bind="password" placeholder="password"  class="border w-full border-black p-3 mb-4" />
    <div class="text-red-500">{{ errors.password }}</div>

    <div class="flex button-row gap-4">
      <button @click="onCloseModal" class="border border-black p-3 w-full bg-amber-400">Close</button>
      <button :disabled="isSubmitting" class="border border-black  p-3 w-full bg-green-400 disabled:bg-gray-600">
        {{ isSubmitting ? "...Loading" : "Submit" }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import useAuthStore from "@/stores/authStore.js"


const emit = defineEmits(['onCloseModal'])
const onCloseModal = () => {
  emit('onCloseModal');
}

const auth = useAuthStore();

const initialValue = {
  email: '',
  password: '',
}

const { errors, handleSubmit, defineInputBinds, isSubmitting} = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),

  }),
});

const req = async (values) => {
  try{
    await auth.onLogin(values)
    emit('onCloseModal');
  }catch(error) {
    alert(error.message)
  }
  // alert(JSON.stringify(values, null, 2));
}
const onSubmit = handleSubmit(req);
const email = defineInputBinds('email');
const password = defineInputBinds('password');
</script>