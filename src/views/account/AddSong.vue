<template>
  <div id="AddSong" class="container mx-auto max-w-4xl px-6">
    <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2">
        <TextInput
          label="Title"
          placeholder="Name new song"
          inputType="text"
          v-model:input="title"
          error="This is a text error"
        />
      </div>
    </div>

    <div class="mb-3 w-full">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        Select Song
      </label>
      <input
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="file"
        id="image"
        ref="fileInput"
        @change="getUploadedImage"
      />
    </div>


    <SubmitFormButton btnText="Add Song" />
  </div>
</template>

<script setup>
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
</script>
