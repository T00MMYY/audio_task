<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <section class="italic">
    <Header />
    <RouterView />
  </section>
</template>
