<template>
  <div class="container max-w-4xl mx-auto flex">
    <div class="w-1/3">
      <img
        class="w-full rounded-lf h-auto shadow-lg"
        src="https://via.placeholder.com/500"
        alt="Profile Pic"
      />
    </div>
    <div class="w-full pl-4">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-2xl md:text-4xl text-left text-gray-900">
            John Cash
          </h1>
          <span class="text-md text-gray-700">
            <i><b>London, UK</b></i>
          </span>
        </div>
        <div class="w-1/2 mt-2">
          <RouterLinkButton 
            btnText="Edit Profile"
            color="green"
            url="edit-profile"
          />
        </div>
      </div>
      <ProfileInfoSection />
      <ProfileAboutSection />
    </div>
  </div>
  <SongSection />
  <YoutubeVideosSection />
  <PostsSection />
</template>

<script setup>
import ProfileInfoSection from "@/components/partials/profile/ProfileInfoSection";
import ProfileAboutSection from "@/components/partials/profile/ProfileAboutSection";
import RouterLinkButton from "@/components/global/RouterLinkButton";
import SongSection from "@/components/partials/profile/SongSection";
import YoutubeVideosSection from "@/components/partials/profile/YoutubeVideosSection";
import PostsSection from "@/components/partials/profile/PostsSection";

</script>
