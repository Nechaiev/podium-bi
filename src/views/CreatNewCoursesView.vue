<template>
  <div class="container mx-auto" v-show="!loading">
    <h1 class="text-title_1 mb-5">Creat new courses:</h1>
    <b v-if="loading">Loading...</b>
    <CreatCoursesForm/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import CreatCoursesForm from "@/components/ui/CreatCoursesForm.vue";

export default defineComponent({
  components: {CreatCoursesForm}
})
</script>>