<template>
  <TopNavigation />
  <div id="AccountView" class="max-w-4xl mx-auto">
    <router-view />
  </div>
  <FooterSection />
</template>

<script setup>
import TopNavigation from "@/components/structure/TopNavigation";
import FooterSection from "@/components/structure/FooterSection";
</script>

<style lang="scss">
#AccountView {
  min-height: 70vh;
}
</style>
