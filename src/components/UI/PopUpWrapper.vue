<template>
    <transition-group class="flex flex-col">
      <BasePopup :popupPosition="popupPosition">
        <template #default>
          <slot name="body"/>
        </template>
      </BasePopup>
    </transition-group>
</template>

<script setup>
  import BasePopup from "@/components/ui/BasePopup.vue";
  defineProps({
    popupPosition: String,
  })
</script>