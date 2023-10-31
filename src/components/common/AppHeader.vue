<template>
  <header class=" bg-black text-white">
    <div class="flex w-full max-w-[1464px] mx-auto px-3 py-6 pr-[60px]">
      <app-logo class="mr-[-57px]"/>
      <base-nav :items="nav" variant="header"/>
    </div>
<!--    <ul class="flex flex-wrap gap-3 justify-center px-8 mx-auto">-->
<!--      <li>-->
<!--        <base-link :to="{name: 'home'}">-->
<!--          home-->
<!--        </base-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <base-link :to="{name: 'podiumBiPortal'}">-->
<!--          podiumBiPortal-->
<!--        </base-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <base-link :to="{name: 'walmartRetailData'}">-->
<!--          walmartRetailData-->
<!--        </base-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <base-link :to="{name: 'contact'}">-->
<!--          contact-->
<!--        </base-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <base-link :to="{name: 'blog'}">-->
<!--          blog-->
<!--        </base-link>-->
<!--      </li>-->
<!--    </ul>-->
  </header>
</template>

<script setup>
import AppLogo from "@/components/UI/AppLogo.vue";
import BaseLink from "@/components/UI/BaseLink.vue";
import BaseNav from "@/components/UI/BaseNav.vue";

const nav = [
  {
    text: 'Home',
    to: {name: 'home'},
    children: [
      {
        name: 'Nested nav',
        href: 'https://google.com',
      }
    ]
  },
  {
    text: 'PodiumBiPortal',
    to: {name: 'podiumBiPortal'}
  },
  {
    text: 'WalmartRetailData',
    to: {name: 'walmartRetailData'}
  },
  {
    text: 'Contact',
    to: {name: 'contact'}
  },
  {
    text: 'Blog',
    to: {name: 'blog'}
  }
]
</script>

<style scoped>

</style>