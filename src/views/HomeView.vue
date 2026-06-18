<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ValueProp from '@/components/sections/ValueProp.vue'
import PlaceCards from '@/components/sections/PlaceCards.vue'
import GalleryEmbed from '@/components/sections/GalleryEmbed.vue'
import ReviewsSection from '@/components/sections/ReviewsSection.vue'
import OperationInfo from '@/components/sections/OperationInfo.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import JoinCTA from '@/components/sections/JoinCTA.vue'
</script>

<template>
  <main>
    <HeroSection />
    <ValueProp />
    <PlaceCards />
    <GalleryEmbed />
    <ReviewsSection />
    <AboutSection />
    <OperationInfo />

    <JoinCTA />
  </main>
</template>
