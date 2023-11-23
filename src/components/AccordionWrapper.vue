<template>
  <transition-group tag="div" name="list" class="flex flex-col gap-[30px]">
    <accordion-item v-for="(item, index) in items"
                    :key="index"
                    :isExpanded="hasItem(index)"
                    :title="item?.title"
                    @toggle="onToggleItem(index)"
                    :body="item?.body">
      <template #header="{toggle, isExpanded}">
        <slot name="header" :toggle="toggle" :item="item" :isExpanded="isExpanded"/>
      </template>
      <template #default="{isExpanded, bodyClass}">
        <slot name="body" :item="item" :isExpanded="isExpanded" :bodyClass="bodyClass"/>
      </template>
    </accordion-item>
  </transition-group>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import AccordionItem from "@/components/AccordionItem.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  initialValue: {
    type: Array,
    default: () => ([])
  },
  multiple: Boolean,
  mandatory: Boolean
})

const activeItems = ref([]);
const hasItem = (currentIndex) => activeItems.value.includes(currentIndex)
const onToggleItem = (currentIndex) => {
  const isActive = hasItem(currentIndex);
  if (isActive) {
    if (props.mandatory && activeItems.value.length <= 1) {
      return;
    }
    activeItems.value = activeItems.value.filter((idx) => idx !== currentIndex);
    return
  }
  if (props.multiple) {
    activeItems.value.push(currentIndex)
    return;
  }
  activeItems.value = [currentIndex];
}

onMounted(() => {
  if (props.initialValue?.length) {
    activeItems.value = props.initialValue;
  }
  if (props.mandatory) {
    activeItems.value = [0];
  }
})

</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>