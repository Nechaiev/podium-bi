<template>
  <div class="flex flex-col min-h-[100vh]">
    <app-header/>

    <main>
      <slot/>
    </main>

    <app-footer/>
  </div>
</template>

<script setup>
import AppHeader from "@/components/common/AppHeader.vue";
import AppFooter from "@/components/common/AppFooter.vue";
</script>

<style scoped>

</style>