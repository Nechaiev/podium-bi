<template>
  <section class="bg-white dark:bg-gray-900">
    <div v-show="!loading" class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Photo</h1>
      <b v-if="loading">Loading...</b>
      <button v-show="selectedAlbum" class=" text-white" @click="onSetAlbum(null)">
        Back
      </button>
      <div v-show="!selectedAlbum" class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        <div v-for="item in albumsData" :key="item.id" class="lg:flex ">
          <!--          <img :src="item.url" :alt="item.id" class="object-cover w-full h-56 rounded-lg lg:w-64 border">-->
          <div class="flex flex-col justify-between py-6 lg:mx-6">
            <button @click="onSetAlbum(item.id)"
                    class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              {{ item.title }}
            </button>
            <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
          </div>
        </div>
      </div>
      <div v-show="selectedAlbum" class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        <div v-for="item in photoData" :key="item.id" class="lg:flex ">
          <img :src="item.url" :alt="item.id" class="object-cover w-full h-56 rounded-lg lg:w-64 border">
          <div class="flex flex-col justify-between py-6 lg:mx-6">
            <button class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              {{ item.title }}
            </button>
            <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import apiRouter from '../servis/apiRouter';
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";
import {ref} from "vue";

const selectedAlbum = ref();
const albumsData = ref()
const photoData = ref()

const {loading, handler} = useHandleLoadingAndError()

const fetchData = async () => {
  const {data} = await handler(() => apiRouter.albums.index())
  albumsData.value = data
};

const fetchPhoto = async () => {
  const {data} = await handler(() => apiRouter.albums.photos.index(selectedAlbum.value))
  photoData.value = data
};

const onSetAlbum = (id) => {
  selectedAlbum.value = id
  if (id) {
    fetchPhoto()
  }
};

fetchData();
</script>