<template>
  <div>
    <button
      @click="open = !open"
      class="bg-transparent hover:bg-green-400 text-white font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
    >
      <i class="fa-solid fa-bars fa-xl"></i>
    </button>

    <div
      v-show="open"
      class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm"
    >
      <div class="bg-black absolute w-full h-full opacity-75"></div>
      <div class="my-auto fixed border-white w-80 pt-16">
        <p class="text-2xl text-center text-white font-bold">Menu</p>
        <RouterLinkButton
          @click="open = !open"
          class="w-full text-white text-center text-lg mt-4"
          btnText="Profile"
          color="green"
          url="profile"
        />
        <RouterLinkButton
          @click="open = !open"
          class="w-full text-white text-center text-lg mt-4"
          btnText="Posts"
          color="green"
          url="posts"
        />
        <RouterLinkButton
          @click="open = !open"
          class="w-full text-white text-center text-lg mt-4"
          btnText="Close"
          color="red"
          url=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton";
import { ref } from "vue";

const open = ref(false);
</script>
