<template>
  <label class="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
    {{ label }}
  </label>
  <textarea
    class="apperance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus: border-gray-500"
    :placeholder="placeholder"
    v-model="descriptionComputed"
    cols="30"
    rows="10"
  ></textarea>
  <span v-if="error" class="text-red-500">
    {{ error }}
  </span>
</template>

<script setup>
import { defineProps, toRefs, computed, defineEmits } from "vue";

const props = defineProps({
  label: String,
  placeholder: {type: String, default: ''},
  description: String,
  error: String
});

const emit = defineEmits(["update:description"]);

const descriptionComputed = computed({
  get: () => descriptionComputed.value,
  set: (val) => emit("update:description", val),
});

const { label, placeholder, error } = toRefs(props);
</script>
