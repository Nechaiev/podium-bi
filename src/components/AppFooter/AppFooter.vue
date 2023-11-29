<template>
  <footer
    class="bg-black mt-auto pt-[300px] pb-[50px] text-white bg-[url('/assets/img/gradient-footer.png')] bg-center-bottom bg-no-repeat bg-cover">
    <div class="flex justify-between max-w-[1024px] px-3 mx-auto">
      <div class="flex flex-col justify-between">
        <app-logo class="pt-1"></app-logo>
        <div>Copyright @ Podium BI 2023</div>
      </div>
      <div class="flex font-fontSecondary max-w-[640px] w-full justify-between mb-16 mt-6 ">
        <nav v-for="({title, items}) in navGroup">
          <h6 class="text-title_5 font-bold mb-3">{{ title }}</h6>
          <template-nav variant="footer" :items="items" />
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import AppLogo from "@/components/ui/AppLogo.vue";
  import TemplateNav from "@/components/ui/TemplateNav.vue";

 

const navGroup = [
  {
    title: 'Quick links',
    items: [
      {
        text: 'Home',
        to: {name: 'home'},
      },
      {
        text: 'podium bi portal',
        to: {name: 'podium-bi-portal'},
      },
      {
        text: 'walmart retail data',
        to: {name: 'walmart-retail-data'},
      },
      {
        text: 'contact',
        to: {name: 'contact'},
      },
      {
        text: 'blog',
        to: {name: 'blog'},
      },
    ]
  },  
  {
    title: 'Support',
    items: [
      {
        text: 'Help Desk',
        href: 'https://google.com',
      },
      {
        text: 'Roadmap',
        to: {name: 'blog'}
      },
      {
        text: 'Facebook Group',
        to: {name: 'blog'}
      },
    ]
  },
  {
    title: 'Company',
    items: [
      {
        text: 'Terms',
        to: {name: 'blog'}
      },
      {
        text: 'Privacy',
        to: {name: 'blog'}
      },
      {
        text: 'Don’t sell my info',
        to: {name: 'blog'}
      },
      {
        text: 'Privacy Center',
        to: {name: 'blog'}
      },
    ]
  }
]
</script>