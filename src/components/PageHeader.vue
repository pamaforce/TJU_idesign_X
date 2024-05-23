<template>
  <div class="blank"></div>
  <div class="header">
    <img src="@/assets/image/logo.svg" class="icon" @click="goToHome">
    <div
      class="tabs"
      @mouseleave="() => updateLine(null)"
    >
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        :ref="el => tabRefs[index] = el as HTMLElement"
        :class="{ 'tab': true, 'active-tab': index === activeTab }"
        @click="() => changeTab(index)"
        @mouseover="() => updateLine(tabRefs[index])"
      >
        {{ tab.name }}
      </span>
      <div class="line" :style="lineStyle"></div>
      <img src="@/assets/image/search.svg" class="icon" @click="goToSearch">
    </div>
  </div>
</template>
<script setup lang='ts'>
import {nextTick, onMounted, ref, watch} from 'vue';
import {useRouter, useRoute} from 'vue-router';

interface Tab {
  name: string;
  route: string;
}
interface LineStyle {
  width: string;
  left: string;
  transition?: string;
}
const router = useRouter();
const route = useRoute();
const activeTab = ref(-1);
const lineStyle = ref<LineStyle>({width: '0px', left: '0px'});
const hasLineAnimated = ref(false);
const lastElement = ref<HTMLElement | null>(null);
const tabs = ref<Tab[]>([
  {name: '展厅', route: '/exhibition'},
  {name: '毕业生', route: '/graduate'},
  {name: '年展组', route: '/sponsor'}
]);
const tabRefs = ref<HTMLElement[]>([]);

const changeTab = (index: number) => {
  activeTab.value = index;
  router.push(tabs.value[index].route);
  updateLine(tabRefs.value[index]);
};

const goToHome = () => {
  router.push('/');
};

const goToSearch = () => {
  router.push('/search');
};
const updateLine = (element: HTMLElement | null, animate = true) => {
  if (!element) {
    if (activeTab.value !== -1) {
      updateLine(tabRefs.value[activeTab.value]);
      return;
    }
    let lastEl = lastElement.value as HTMLElement;
    lineStyle.value = {
      width: '0px',
      left: `${lastEl.offsetLeft + lastEl.offsetWidth/2 }px`
    };
    hasLineAnimated.value = false;
  }
  else {
    const computedStyle = window.getComputedStyle(element);
    const paddingLeft = parseInt(computedStyle.paddingLeft, 10);
    const paddingRight = parseInt(computedStyle.paddingRight, 10);
    if (!hasLineAnimated.value) {
      lineStyle.value = {
        width: '0px',
        left: `${element.offsetLeft + element.offsetWidth/2 }px`,
        transition: 'none'
      };
      hasLineAnimated.value = true;
    }
    nextTick(() => {
      lineStyle.value = {
        width: `${element.offsetWidth  - paddingLeft - paddingRight + 10}px`,
        left: `${element.offsetLeft + paddingLeft - 5}px`,
        transition: hasLineAnimated.value && animate ? 'all 0.3s ease' : 'none'
      };
    })
    lastElement.value = element;
  }
};

const updateActiveTabFromRoute = () => {
  if (route.path === '/' || route.path === '/search') {
    activeTab.value = -1;
    lineStyle.value = {width: '0px', left: '0px', transition: 'none'};
  }
 else {
    const foundIndex = tabs.value.findIndex(tab => route.path.includes(tab.route));
    if (foundIndex !== -1) {
      activeTab.value = foundIndex;
      nextTick(() => {
        const initialTabElement = tabRefs.value[activeTab.value];
        if (initialTabElement) {
          updateLine(initialTabElement, false);
        }
      });
    }
 else {
      activeTab.value = -1;
      lineStyle.value = {width: '0px', left: '0px', transition: 'none'};
    }
  }
};

onMounted(() => {
  updateActiveTabFromRoute();
});

watch(() => route.path, () => {
  updateActiveTabFromRoute();
});
</script>
<style scoped>
.blank {
    height: 80px;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    background: white;
    padding: 0 120px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    
    & .icon {
        height: 56px;
        cursor: pointer;
    }

    & .tabs {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        
        & .tab {
            font-size: 16px;
            padding: 0 50px;
            height: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            color: rgba(0, 0, 0, 0.6);
        }
        & .active-tab {
          color: rgba(0, 0, 0, 0.85);
        }

        & .line {
            position: absolute;
            bottom: 0;
            height: 3px;
            background-color: rgba(0, 0, 0, 0.6);
            transition: all 0.3s;
        }

        & .icon {
            width: 24px;
            height: 24px;
            margin-left: 100px;
        }
    }
}
</style>