<template>
  <header class="flex items-center gap-3 container mx-auto">
    <app-logo/>
    <ul class="flex flex-wrap gap-3 justify-center px-8 mx-auto">
      <li>
        <base-link :to="{name: 'home'}"/>
        home
      </li>
      <li>
        <base-link :to="{name: 'podiumBiPortal'}"/>
        podiumBiPortal
      </li>
      <li>
        <base-link :to="{name: 'walmartRetailData'}"/>
        walmartRetailData
      </li>
      <li>
        <base-link :to="{name: 'contact'}"/>
        contact
      </li>
      <li>
        <base-link :to="{name: 'blog'}"/>
        blog
      </li>
    </ul>
  </header>
</template>

<script setup>

import AppLogo from "@/components/UI/AppLogo.vue";
import BaseLink from "@/components/UI/BaseLink.vue";
</script>

<style scoped>

</style>