<template>
  <div>
    <router-view/>
  </div>
</template>

<script setup>

</script>
<!--<template>-->
<!--  <div>-->
<!--    &lt;!&ndash;    <router-view/>&ndash;&gt;-->
<!--    <ul v-if="episodeData.result">-->
<!--      <li v-for="item in episodeData.result" :key="item.id">-->
<!--        <a :href="item.url" target="_blank">{{ item.name }}</a>-->

<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import {ref} from "vue";-->
<!--import {useRoute} from "vue-router";-->
<!--import apiClient from "@/servis/apiClient.js";-->

<!--const route = useRoute()-->

<!--const episodeData = ref({})-->
<!--const fetchData = async () => {-->
<!--  try {-->
<!--    const res = await apiClient.get('episode');-->
<!--    episodeData.value = (await res).data;-->
<!--    return res;-->
<!--  } catch (error) {-->
<!--    console.log('error fetch:', error)-->
<!--  } finally {-->
<!--    console.log('finally')-->
<!--  }-->
<!--};-->
<!--await fetchData();-->
<!--</script>-->
