<template>
  <div id="EditProfile" class="max-w-4xl mx-auto">
    <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>

    <CropperModal
      v-if="showModal"
      :minAspectRatioProp="{ width: 8, height: 8 }"
      :maxAspectRatioProp="{ width: 8, height: 8 }"
      @croppedImageData="setCroppedImageData"
      @showModal="showModal = false"
    />

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="First Name"
          placeholder="John"
          inputType="text"
          v-model:input="firstName"
          error="This is a text error"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="Last Name"
          placeholder="Cash"
          inputType="text"
          v-model:input="lastName"
          error="This is a text error"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="Location"
          placeholder="london"
          inputType="text"
          v-model:input="location"
          error="This is a text error"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <CroppedImage label="Cropped Image" :image="image" />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton
          label="Profile Image"
          btnText="Update Profile Image"
          @showModal="showModal = true"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextArea
          label="Description"
          placeholder="Please enter some information here"
          error="This is a text error"
          v-model="description"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-8 mb-6">
      <div class="w-full px-3">
        <SubmitFormButton btnText="Update Profile" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "@/components/global/TextInput.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";

const firstName = ref(null);
const lastName = ref(null);
const location = ref(null);
const description = ref(null);
const showModal = ref(false);
// const imageData = null;
const image = ref(null);

const setCroppedImageData = (data) => {
  // imageData = data;
  image.value = data.imageUrl;
};
</script>
