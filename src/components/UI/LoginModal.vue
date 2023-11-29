<template>
  <button @click="open = true" class="whitespace-nowrap hover:text-primaryColor" >Sing In</button>
  <!-- Sing Out -->
  <Teleport to="body">
    <div v-if="open" class="modal fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-white text-black">
      <div class="overlay w-full h-full flex items-center justify-center">
          <LoginForm @onCloseModal="closeModal"/>
        
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import { ref } from 'vue'
import LoginForm from '@/components/ui/LoginForm.vue'

const open = ref(false)

const closeModal = ()=> {
  open.value = false;
}


</script>