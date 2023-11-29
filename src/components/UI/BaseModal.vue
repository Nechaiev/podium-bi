<template>
  <div
      v-if="openModal"
      class="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded p-4 shadow-lg"
  >
    <p class="text-xl mb-4">confirm sending data</p>
    <button
        @click="confirmForm"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
    >
      CONFIRM
    </button>
    <button
        @click="onCloseModal"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full mt-4"
    >
      REJECT
    </button>
  </div>
</template>

<script setup>
defineProps({
  openModal: Boolean
})

const emit = defineEmits(["confirm", "update:openModal"]);

const onCloseModal = () => {
  emit('update:openModal', false)
}

const confirmForm = () => {
  emit("confirm");
  onCloseModal()
};
</script>