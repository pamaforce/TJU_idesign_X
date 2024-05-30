<template>
  <div class="sponsor">
    <svg
      v-if="showSvg"
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
    <div v-for="(group,i) in sponsorList" :key="i" class="group" :style="{ top: group.top +'rem',left:group.left+'rem'}">
      <transition name="scale" appear>
        <div v-if="scrollPercentage>=group.percent" class="group-name">
          {{ group.group }}
        </div>
      </transition>
      <template v-for="(person,j) in group.member" :key="i +' '+ j">
        <transition name="scale-top" appear>
          <div v-if="scrollPercentage>=person.percent" class="person" :style="{ top: person.top +'rem',left:person.left+'rem'}">
            <div class="person-bar"></div>
            <img v-preview:name="2" v-lazy="person.avatar" :alt="person.name" class="person-avatar" />
            <div class="person-name">
              {{ person.name }}
            </div>
            <div class="person-role">
              {{ person.role }}
            </div>
          </div>
        </transition>
      </template>
    </div>
    <transition name="scale" appear>
      <div v-if="scrollPercentage>=0.9061" class="thanks">
        感谢观看
      </div>
    </transition>
    <PageFooter />
  </div>
</template>
<script setup lang='ts'>
import PageFooter from '@/components/PageFooter.vue';
import {onMounted, ref, onUnmounted, nextTick,onActivated} from 'vue';
import {sponsorList} from '@/utils/constant';
import {vPreview} from 'vue3-image-preview';

const scrollPercentage = ref(0);
const showSvg = ref(true);
const svgElement = ref<SVGSVGElement | null>(null);
const originalViewBoxWidth = 1684;
const originalViewBoxHeight = 4806;
let pathLength = 0;

function adjustViewBox() {
    nextTick(() => {
        if (!svgElement.value) return;
        const path = document.getElementById('path') as SVGPathElement | null;
        if (!path) return;
        pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        let initialOffset = pathLength * 0.99;
        path.style.strokeDashoffset = initialOffset.toString();
        const width = svgElement.value.clientWidth;
        const height = (width * originalViewBoxHeight) / originalViewBoxWidth;
        svgElement.value.setAttribute('viewBox', `0 0 ${originalViewBoxWidth} ${originalViewBoxHeight}`);
        svgElement.value.style.height = `${height}px`;
        handleScroll();
    });
}
function handleResize() {
    setTimeout(() => {
        showSvg.value = false;
        nextTick(() => {
            showSvg.value = true;
            adjustViewBox();
        })
    },500)
}
function handleScroll() {
    const path = document.getElementById('path') as SVGPathElement | null;
    if (!path) return;
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    scrollPercentage.value = scrollPosition / totalHeight;

    let initialOffset = pathLength * 0.99;
    const newOffset = initialOffset * (1 - 1.1 * scrollPercentage.value);
    path.style.strokeDashoffset = Math.max(0, newOffset).toString();

}
function handleInit() {
    scrollPercentage.value = 0;
    adjustViewBox();
    handleScroll();
}
onMounted(() => {
    nextTick(() => {
        adjustViewBox();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    });
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
});

onActivated(() => {
    handleInit();
})
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
  transition: all 0.2s;
}
.text {
    position: absolute;
    width: 550px;
    right: 120px;
    top: 36px;
    user-select: none;
    pointer-events: none;
}
.group {
  position: absolute;
  margin-top: -27px;

  & .group-name {
    width: 203px;
    height: 54px;
    background: #626262;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    font-weight: 700;
  }

  & .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 22px;
    position: absolute;

    & .person-bar {
      width: 52px;
      height: 10px;
      background: #626262;
      margin-bottom: 24px;
    }

    & img {
      width: 180px;
      height: 180px;
      margin-bottom: 16px;
      object-fit: cover;
      object-position: top;
    }

    & .person-name {
      font-size: 20px;
      margin-bottom: 6px;
      width: 180px;
      text-align: center;
      font-weight: 700;
    }

    & .person-role {
      font-size: 16px;
      text-align: center;
      width: 180px;
    }
  }
}
& .thanks {
  position: absolute;
  left: 1418px;
  top: 4777px;
  width: 208px;
  height: 60px;
  border-radius: 30px;
  background: #626262;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}
/* scale */
.scale-enter-active, .scale-leave-active {
    transition: all 0.3s ease-in-out;
}
.scale-enter-from, .scale-leave-to {
    opacity: 0;
    transform: scale(0);
}
.scale-enter-to, .scale-leave-from {
    opacity: 1;
    transform: scale(1);
}

/* scale-top */
.scale-top-enter-active, .scale-top-leave-active {
    transition: all 0.3s ease-in-out;
    transform-origin: top center;
}
.scale-top-enter-from, .scale-top-leave-to {
    opacity: 0;
    transform: scale(0);
}
.scale-top-enter-to, .scale-top-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>
