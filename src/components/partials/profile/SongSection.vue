<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Songs</div>
        <div class="bg-green-500 w-full h-1"></div>
        <div class="w-full mt-4">
          <RouterLinkButton
            class="ml-2"
            btnText="Delete song"
            color="red"
            url="delete-song"
          />
          <RouterLinkButton
            btnText="Add song"
            color="green"
            url="add-song"
          />
        </div>
      </div>
    </div>

    <div class="pb-4">
      <SongPlayer />
    </div>
  </div>
</template>

<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton";
import SongPlayer from "./SongPlayer.vue";
</script>
