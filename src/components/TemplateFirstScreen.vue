<template>
  <section
    class="test bg-black text-white pt-[104px] bg-[url('/assets/img/gradient-first-screen.png')] bg-center-bottom bg-scale-100 bg-no-repeat">
    <div class="container max-w-[978px] min-h-[1628px] mx-auto px-3">
      <BaseTitle title="Podium BI" subtitle="Your Data. Only Smarter." titleSize="large"/>
      <BaseAdvantages :items="advantages" :vertical="true"/>
    </div>
  </section>
</template>

<script setup>
import BaseTitle from "@/components/BaseTitle.vue";
import BaseAdvantages from "@/components/BaseAdvantages.vue";

const advantages = [{
  text: 'Power BI Embded',
  icon: String,
},
  {
    text: 'Unlimited Users',
    icon: String,
  },
  {
    text: 'Access Anywhere',
    icon: String,
  },
]
</script>

<style scoped>
.test {
  background-position: center bottom;
  background-size: 100%;
}
</style>