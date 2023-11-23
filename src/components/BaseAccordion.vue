<template>
  <div class="flex flex-col gap-3 pb-5 border-b-2 border-red-300 mb-5">
    <div v-for="(item, index) in items" :key="index">
      <h5 class="bg-gray-100 rounded-t-lg px-4 py-2" @click="onToggleItem(index)">
        {{item.title}}
      </h5>
      <p class="p-4 rounded-b-lg border-2 border-gray-100 " :class="{'hidden': !hasItem(index)}">
        {{item.content && item.content.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  items: Array,
  initialValue: Array,
  multiple: Boolean,
  mandatory: Boolean
})

const activeItems = ref([]);

const hasItem = (index) => activeItems.value.includes(index)

const onToggleItem = (currentIndex) => {
  const isActive = hasItem(currentIndex);
  if (isActive) {
    if (props.mandatory && activeItems.value.length <= 1) {
      return;
    }
    activeItems.value = activeItems.value.filter((idx) => idx !== currentIndex)
    return
  }
  if (props.multiple) {
    activeItems.value.push(currentIndex);
    return;
  }
  activeItems.value = [currentIndex];
}

const init = () => {
  let initVal = props.initialValue;
  if (props.mandatory && !initVal) {
    initVal = [0];
  }
  activeItems.value = initVal || [];
}

onMounted(() => {
  init();
})
</script>
