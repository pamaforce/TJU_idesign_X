<template>
  <div class="sponsor">
    <svg
      ref="svgElement"
      class="path"
      width="1684"
      height="4806"
      viewBox="0 0 1684 4806"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="path"
        d="M0.999778 1.47343e-06L0.999728 372L1683 372L1683 723L480.5 723L480.5 1072L1336.5 1072L1336.5 1411.5L0.999682 1411.5L0.999723 1790.5L1681.5 1790.5L1681.5 2150.5L308 2150.5L308 2554.5L1506.5 2554.5L1506.5 2940L1.50026 2940L1.50024 3305L1681.5 3305L1681.5 3706.5L146.5 3706.5L146.5 4074.5L1444.5 4074.5L1444.5 4442L146.5 4442L146.5 4804.77L1446.5 4804.77"
        stroke="black"
        stroke-opacity="0.85"
        stroke-width="2"
      />
    </svg>
    <img src="@/assets/image/text_9.svg" class="text">
  </div>
  <PageFooter />
</template>
<script setup lang='ts'>
import PageFooter from '@/components/PageFooter.vue';
import {onMounted, ref, onUnmounted, nextTick} from 'vue';

const scrollPercentage = ref(0);
const svgElement = ref<SVGSVGElement | null>(null);
const originalViewBoxWidth = 1684;
const originalViewBoxHeight = 4806;

function adjustViewBox() {
    nextTick(() => {
        if (!svgElement.value) return;
        const width = svgElement.value.clientWidth;
        const height = (width * originalViewBoxHeight) / originalViewBoxWidth;
        svgElement.value.setAttribute('viewBox', `0 0 ${originalViewBoxWidth} ${originalViewBoxHeight}`);
        svgElement.value.style.height = `${height}px`;
    });
}

onMounted(() => {
    nextTick(() => {
        const path = document.getElementById('path') as SVGPathElement | null;
        if (!path) return;

        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        const initialOffset = pathLength * 0.99;
        path.style.strokeDashoffset = initialOffset.toString();

        adjustViewBox();
        window.addEventListener('resize', adjustViewBox);
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            scrollPercentage.value = scrollPosition / totalHeight;
            const newOffset = initialOffset * (1 - 1.1 * scrollPercentage.value);
            path.style.strokeDashoffset = Math.max(0, newOffset).toString();
        });
    });
});

onUnmounted(() => {
    window.removeEventListener('resize', adjustViewBox);
});
</script>
<style scoped>
.sponsor {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}
.path {
  width: 1684px;
  margin-bottom: 400px;
}
.text {
    position: absolute;
    width: 550px;
    right: 120px;
    top: 36px;
    user-select: none;
    pointer-events: none;
}
</style>
