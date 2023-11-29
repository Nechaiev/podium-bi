<template>
<div class="flex flex-col">
  <transition-group >
    <BasePopup :popupPosition="popupPosition">
      <template #default>
        <slot name="body"/>
      </template>
    </BasePopup>
  </transition-group>
</div>
</template>

<script setup>
import BasePopup from "@/components/ui/BasePopup.vue";

defineProps({
  popupPosition: String,
})
</script>