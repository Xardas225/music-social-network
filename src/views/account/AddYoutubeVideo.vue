<template>
  <div id="AddSong" class="container mx-auto max-w-4xl px-6">
    <div class="text-gray-900 text-xl">Add Youtube Video</div>
    <div class="bg-green-500 w-full h-1"></div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2">
        <TextInput
          label="Title Video"
          placeholder="Title video"
          inputType="text"
          v-model:input="title"
          error="This is a text error"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2">
        <TextInput
          label="URL Video"
          placeholder="Enter URL Video"
          inputType="text"
          v-model:input="url"
          error="This is a text error"
        />
      </div>
    </div>


    <SubmitFormButton btnText="Add Video" />
  </div>
</template>

<script setup>
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
</script>
