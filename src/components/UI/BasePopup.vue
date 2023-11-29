<template>
  <div class="z-10">
    <BaseButton @click="togglePopup">open popUp</BaseButton>
    <transition name="fade"  class="transition-opacity">
      <div v-if="isPopupVisible" :class="popupPosition" class="fixed bg-white p-8 border border-gray-300 shadow-md transition-transform duration-500 ease-out">
          <span @click="togglePopup" class="absolute top-2 right-2 cursor-pointer text-gray-500">&times;</span>
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import {computed, ref} from "vue";
const isPopupVisible = ref(false);
// import useAuthStore from '@/stores/authStore.js'
// const authStore = useAuthStore();

const props = defineProps({
  popupPosition: {
    type: String,
    validator(value) {
      return ['center', 'topLeft', 'topRight', 'bottomRight', 'bottomLeft'].includes(value)
    },
    default: 'center',
  },
  openPopup: Boolean,
})


const togglePopup = () => {

  isPopupVisible.value = !isPopupVisible.value;
};







const popupPosition = computed(() => {
  return {
    center: 'center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    topLeft: 'topLeft top-4 left-4',
    topRight: 'topRight top-4 right-4',
    bottomRight: 'bottomRight bottom-4 right-4',
    bottomLeft: 'bottomLeft bottom-4 left-4',
  } [props.popupPosition]
})


</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>