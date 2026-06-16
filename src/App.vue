<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/sections/SiteHeader.vue'
import SiteFooter from '@/components/sections/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
</template>
