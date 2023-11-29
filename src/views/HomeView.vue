<template>
    <TemplateFirstScreen/>
    <PopUpWrapper popupPosition="topRight">
      <template #body>
        <div>
          <div>
            <h5 class="text-title_5 mb-[30px]">
              Good work!
            </h5>
          </div>
          <div>
            <img src="https://placehold.co/400" alt="img"/>
          </div>
        </div>
      </template>
    </PopUpWrapper>
    <section class="mb-24">
      <div class="container mx-auto px-4 max-w-[986px]">
        <AccordionWrapper :items="accordionList">
          <template #body="{bodyClass, item}">
            <div class="relative grid grid-cols-[1fr_1fr] gap-[30px] items-center before:absolute before:inline-block before:top-0 before:left-[30px] before:w-[calc(100%-60px)] before:h-[2px]" :class="bodyClass">
              <div>
                <h5 class="text-title_5 mb-[30px]">
                  {{item.content.description}}
                </h5>
                <PrepareButton> {{item.content.button}}</PrepareButton>
              </div>
              <div>
                <img :src="item.content.img" />
              </div>
            </div>
          </template>
        </AccordionWrapper>
      </div>
    </section>
</template>

<script setup>
    import TemplateFirstScreen from "@/components/TemplateFirstScreen/TemplateFirstScreen.vue";
    import AccordionWrapper from "@/components/ui/AccordionWrapper.vue";
    import PrepareButton from "@/components/PrepareButton.vue";
    import BaseForm from "@/components/ui/BaseForm.vue";
    import BasePopup from "@/components/ui/BasePopup.vue";
    import {ref} from "vue";

    const openPopup = ref(false);

    const setOpenPopup = () => {
       openPopup.value = true;
    }

    const accordionList = [
      {
        id: 1,
        title: 'Ultimate report sharing',
        content: {
          description: '2. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
          button: 'start for free 1',
          img: '/assets/img/accordion-1.png',
          alt: "Ultimate"
        },
      },
      {
        id: 2,
        title: 'Feeling Overwhelmed by managing Power BI content?',
        content: {
          description: '1. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
          button: 'start for free 2',
          img: '/assets/img/accordion-1.png',
          alt: "solution"
        },
      },
      {
        id: 3,
        title: 'Want to manage and share content easily and do it all with just one Power BI license?',
        content: {
          description: '3. The Podium BI tool is the solution to removing the complexity of managing all of your Power BI content easily.',
          button: 'start for free 3',
          img: '/assets/img/accordion-1.png',
          alt: "PodiumBI"
        },
      },
    ];
</script>
<style>
.relative.grid.grid-cols-\[1fr_1fr\].gap-\[30px\].items-center.bg-white.p-\[30px\].overflow-hidden:before {
  background: linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, #D9D9D9 50%, rgba(217, 217, 217, 0.00) 100%);
}
</style>