<template>
  <div>
    <app-header/>

    <main>
      <slot/>
    </main>

    <footer>

    </footer>
  </div>
</template>

<script setup>
import AppHeader from "@/components/common/AppHeader.vue";
</script>

<style scoped>

</style>