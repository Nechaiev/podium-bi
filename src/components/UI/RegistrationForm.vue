<template>
  <section class="bg-white dark:bg-gray-900 rounded-lg">
    <div class="container flex items-center justify-center px-6 mx-auto">

      <form @submit.prevent="onSubmit" class="w-full max-w-md">
        <h2 class="text-[24px] mb-3 text-white mt-4">Registration</h2>
        <div class="relative flex items-center mt-8">
          <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </span>
          <input type="text"
                 class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 placeholder="Username"
                 v-bind="firstName"
          >
        </div>

<!--        <h2 class="text-[24px] mb-3">Registration</h2>-->
<!--        <input type="text" v-bind="firstName" placeholder="firstName" class="border w-full border-black p-3 mb-4"/>-->
<!--        <div class="text-red-500">{{ errors.firstName }}</div>-->

<!--        <input type="text" v-bind="lastname" placeholder="lastname" class="border w-full border-black p-3 mb-4"/>-->
<!--        <div class="text-red-500">{{ errors.lastname }}</div>-->

<!--        <input type="text" v-bind="login" placeholder="login" class="border w-full border-black p-3 mb-4"/>-->
<!--        <div class="text-red-500">{{ errors.login }}</div>-->
        <div class="relative flex items-center mt-6">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </span>

          <input type="email"
                 class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 placeholder="Email address"
                 v-bind="email"
          >
        </div>
<!--        <input type="email" v-bind="email" placeholder="email" class="border w-full border-black p-3 mb-4"/>-->
<!--        <div class="text-red-500">{{ errors.email }}</div>-->
        <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                </span>

          <input type="password"
                 class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 placeholder="Password"
                 v-bind="password"
          >
        </div>
<!--        <input type="password" v-bind="password" placeholder="password" class="border w-full border-black p-3 mb-4"/>-->
<!--        <div class="text-red-500">{{ errors.password }}</div>-->

        <div class="flex button-row gap-4 pt-4 pb-4">
          <button @click="onCloseModal" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-900 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Close</button>
          <button :disabled="isSubmitting" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-900 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            {{ isSubmitting ? "...Loading" : "Submit" }}
          </button>
        </div>
      </form>
    </div>
  </section>

</template>

<script setup>
import {useForm} from 'vee-validate';
import * as yup from 'yup';
import {ref} from 'vue';
import useAuthStore from "@/stores/authStore.js"


const emit = defineEmits(['onCloseModal'])
const onCloseModal = () => {
  emit('onCloseModal');
}

const auth = useAuthStore();

const initialValue = {
  firstName: '',
  lastname: '',
  email: '',
  login: '',
  password: '',
}

const { errors, handleSubmit, defineInputBinds, isSubmitting} = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required(),

    email: yup.string().email().required(),

    password: yup.string().min(6).required(),
  }),
});


const req = async (values) => {
  try{
    await auth.onRegister(values)
    emit('onCloseModal');
  }catch(error) {
    alert(error.message)
  }
  // alert(JSON.stringify(values, null, 2));
}

const onSubmit = handleSubmit(req);


const firstName = defineInputBinds('firstName');

const email = defineInputBinds('email');

const password = defineInputBinds('password');
</script>