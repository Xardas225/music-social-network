<template>
  <div>
    <label
      class="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-900"
    >
      {{ label }}
    </label>

    <img
      class="rounded w-full border-solid border-4 border-green-500"
      :src="image"
    />
  </div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";

const props = defineProps({
  image: String,
  label: String,
});

const { image, label } = toRefs(props);
</script>
