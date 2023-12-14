<template>
  <div v-if="loading">
    loading
  </div>
  <Suspense v-else>
    <RouterView v-slot="{ Component, route }">
      <component :is="route.meta.layout ? route.meta.layout : AppLayout">
          <pre>{{route.meta.layout}}</pre>
          <component v-if="Component" :is="Component"></component>
        </component>
    </RouterView>
  </Suspense>
</template>


<script setup>
    import AppLayout from './layouts/AppLayout.vue';
    import useAuthStore from "@/stores/authStore";
    import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";

    const authStore = useAuthStore()
    const {handler, loading, error} = useHandleLoadingAndError({loading: true})
    handler(authStore.fetchUser)

</script>
<!--suslovros@gmail.com-->
<!--suslovros+1@gmail.com-->