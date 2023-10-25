<template>
  <header class="flex items-center gap-3 container mx-auto w-full">
    <app-logo/>
    <ul class="flex flex-wrap gap-3 justify-center px-8 mx-auto">
      <li>
        <base-link :to="{name: 'home'}">
          home
        </base-link>
      </li>
      <li>
        <base-link :to="{name: 'podiumBiPortal'}">
          podiumBiPortal
        </base-link>
      </li>
      <li>
        <base-link :to="{name: 'walmartRetailData'}">
          walmartRetailData
        </base-link>
      </li>
      <li>
        <base-link :to="{name: 'contact'}">
          contact
        </base-link>
      </li>
      <li>
        <base-link :to="{name: 'blog'}">
          blog
        </base-link>
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