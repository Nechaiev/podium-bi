<template>
    <div class="container px-4 mx-auto">
      <h1 class="text-title_1">LoginView</h1>
      <p>danny@neweradrugtesting.com</p>
      <p>andrew@easlerlaw.com</p>
      <BaseForm @showModal="setOpenPopup"/>
      <BasePopup :openPopup="openPopup"/>
    </div>
</template>

<script setup>
import BaseForm from "@/components/ui/BaseForm.vue";
import BasePopup from "@/components/ui/BasePopup.vue";
import {ref} from "vue";

const openPopup = ref(false);

const setOpenPopup = () => {
  openPopup.value = true;
}
</script>
