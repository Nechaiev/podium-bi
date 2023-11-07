<template>
  <button @click="open = true" >Registration</button>
  <!-- Sing Out -->
  <Teleport to="body">
    <div v-if="open" class="modal fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-white text-black">
      <div class="overlay w-full h-full flex items-center justify-center">
        <RegistrationForm @onCloseModal="closeModal"/>

      </div>
    </div>
  </Teleport>
</template>
<script setup>
import { ref } from 'vue'
import RegistrationForm from '@/components/ui/RegistrationForm.vue'

const open = ref(false)

const closeModal = ()=> {
  open.value = false;
}


</script>