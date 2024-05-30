<template>
  <PageHeader v-if="!isSearchRoute&&!isLoading" />
  <router-view v-slot="{ Component }" :not-mobile="notMobile">
    <keep-alive>
      <component :is="Component" :start-loading="startLoading" :stop-loading="stopLoading" />
    </keep-alive>
  </router-view>
  <div v-if="isLoading" class="loading-overlay">
    <img src="@/assets/image/loading.gif" alt="Loading..." />
  </div>
</template>

<script setup lang="ts">
import {RouterView,useRoute} from 'vue-router';
import PageHeader from './components/PageHeader.vue';
import {ref, onMounted, onUnmounted, computed} from 'vue';
import {DIVIDER_WIDTH} from '@/utils/constant';
const notMobile = ref(document.body.clientWidth > DIVIDER_WIDTH);
const route = useRoute();
const isSearchRoute = computed(() => route.name === 'Search');
const isLoading = ref(false);

function updateMobileStatus() {
    notMobile.value = document.body.clientWidth > DIVIDER_WIDTH;
}
function startLoading() {
    isLoading.value = true;
}

function stopLoading() {
    isLoading.value = false;
}
onMounted(() => {
    window.addEventListener('resize', updateMobileStatus);
    console.log(
        '%cIf you find bugs in the website, you can email to %c3020205094@tju.edu.cn %cand let\'s make it better together! :)',
        'color: #43bb88;font-size:19px;font-weight: bold;',
        'color: #4267fc;font-size:19px;font-weight: bold;font-style: italic;',
        'color: #43bb88;font-size:19px;font-weight: bold;'
    );
});

onUnmounted(() => {
    window.removeEventListener('resize', updateMobileStatus);
});
</script>
<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  & img{
    width: 420px;
    height: 350px;
    margin-top: -40px;
  }
}
</style>
