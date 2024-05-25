<template>
  <PageHeader />
  <router-view v-slot="{ Component }" :not-mobile="notMobile">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router';
import PageHeader from './components/PageHeader.vue';
import {ref, onMounted, onUnmounted} from 'vue';
import {DIVIDER_WIDTH} from '@/utils/constant';
const notMobile = ref(document.body.clientWidth > DIVIDER_WIDTH);

function updateMobileStatus() {
    notMobile.value = document.body.clientWidth > DIVIDER_WIDTH;
}

onMounted(() => {
    window.addEventListener('resize', updateMobileStatus);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateMobileStatus);
});
</script>
<style scoped></style>
