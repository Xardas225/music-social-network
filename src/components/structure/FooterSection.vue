<template>
  <div class="w-full bg-black text-gray-100">
    <div class="container mx-auto max-w-4xl h-full flex flex-wrap justify-between items-start text-sm pt-8 pb-4">
      <div class="mb-4">
        <div class="mb-4">
          Quick links
        </div>
        <router-link to="/" class="block mb-2">
          Home
        </router-link>
      </div>
      <div class="mb-4">
        <div class="mb-4">
          About our company
        </div>
        <p class="mb-4 leading-normal">
          123 Main Street <br>
          London <br>
          SW1
        </p>
        <p class="text-sm">
          8 922 3149134
        </p>
      </div>
    </div>
    <div class="container mx-auto max-w-4xl h-full flex flex-wrap justify-between items-center text-sm py-6">
      &copy;2023 MSN Company. All rights reserved.
      <div class="pt-4 md:p-0 text-center md:text-right text-xs">
        <div class="no-inderline hover:underline">Privacy policy</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
