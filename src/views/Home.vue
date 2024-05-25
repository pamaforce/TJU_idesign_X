<template>
  <div class="home" @wheel="handleWheel">
    <img src="@/assets/image/banner_3.svg" class="banner-3" alt="banner_3" />
    <img src="@/assets/image/banner_5.svg" class="banner-5" alt="banner_5" />
    <img src="@/assets/image/banner_4.svg" class="banner-4" alt="banner_4" />
    <img src="@/assets/image/banner_2.svg" class="banner-2" alt="banner_2" />
    <img src="@/assets/image/banner_6.svg" class="banner-6" alt="banner_6" />
    <img src="@/assets/image/banner_1.svg" class="banner-1" alt="banner_1" />

    <transition name="fadeInDown" mode="out-in">
      <template v-if="state===1">
        <div key="1">
          <img src="@/assets/image/text_1.svg" class="text-1" alt="text-1" />
          <img src="@/assets/image/text_2.svg" class="text-2" alt="text-2" />
          <img src="@/assets/image/text_3.svg" class="text-3" alt="text-3" />
          <img src="@/assets/image/text_4.svg" class="text-4" alt="text-4" />
        </div>
      </template>
      <template v-else>
        <div key="2">
          <div class="blur-background"></div>
          <img src="@/assets/image/text_5.svg" class="text-5" alt="text-5" />
          <img src="@/assets/image/text_6.svg" class="text-6" alt="text-6" />
          <img
            ref="text7El"
            src="@/assets/image/text_7.svg"
            class="text-7"
            alt="text-7"
            @click="toExhibition"
          />
          <img src="@/assets/image/text_8.svg" class="text-8" :class="{'rotate-together-1':isSnapped}" alt="text-8" />
          <img
            ref="cursorEl"
            src="@/assets/image/cursor.svg"
            class="cursor"
            :class="{'rotate-together-2':isSnapped}"
            alt="cursor"
            :style="cursorStyle"
          />
        </div>
      </template>
    </transition>
  </div>
</template>
<script setup lang='ts'>
import {computed, onActivated, onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const cursorPosition = ref({x: 0, y: 0});
const cursorEl = ref<HTMLElement|null>(null);
const text7El = ref<HTMLElement | null>(null);

const isSnapped = ref(false);

const state = ref(1);
const cursorStyle = computed(() => {
    if (state.value === 2 && cursorEl.value) {
        const rect = cursorEl.value.getBoundingClientRect();
        if (isSnapped.value && text7El.value) {
            const text7Rect = text7El.value.getBoundingClientRect();
            return {
                left: `${text7Rect.left + text7Rect.width / 2 - rect.width / 2}px`,
                top: `${text7Rect.top + text7Rect.height / 2 - rect.height / 2}px`
            };
        }
        else {
            return {
                left: `${cursorPosition.value.x - rect.width / 2}px`,
                top: `${cursorPosition.value.y - rect.height / 2}px`
            };
        }
    }
    return {};
});
function updateCursorPosition(event: MouseEvent) {
    cursorPosition.value = {x: event.clientX, y: event.clientY};
    checkSnapToText7();
}
function checkSnapToText7() {
    if (text7El.value) {
        const rect = text7El.value.getBoundingClientRect();
        isSnapped.value = (cursorPosition.value.x > rect.left && cursorPosition.value.x < rect.right &&
                           cursorPosition.value.y > rect.top && cursorPosition.value.y < rect.bottom);
    }
}
function handleWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
        state.value = 2;
    }
    else if (event.deltaY < 0) {
        state.value = 1;
    }
}
function toExhibition() {
    router.push('/exhibition');
}
onMounted(() => {
    window.addEventListener('mousemove', updateCursorPosition);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursorPosition);
});
const needInit = ref(false)
router.beforeEach((to, from, next) => {
    needInit.value = (to.name === 'Home');
    next();
});
onActivated(() => {
    if (needInit.value) {
        state.value = 1;
    }
})
</script>
<style scoped>
.home {
    position: relative;
    height: calc(100vh - 80px);
    overflow: hidden;
    & .banner-1{
        position: absolute;
        left: -325px;
        top: 242px;
        width: 1216.62px;
        height: 747px;
        animation: banner_1 1.3s forwards;
        pointer-events: none;
    }
    & .banner-2{
        position: absolute;
        left: 638px;
        top: 81px;
        width: 1508px;
        height: 929px;
        animation: banner_2 1.2s forwards;
        pointer-events: none;
    }
    & .banner-3{
        position: absolute;
        left: 7px;
        top: 52.5px;
        width: 1599px;
        height: 943.38px;
        animation: banner_3 1.1s forwards;
        pointer-events: none;
    }
    & .banner-4{
        position: absolute;
        left: -294px;
        top: 2.5px;
        width: 1578px;
        height: 965.89px;
        animation: banner_4 1s forwards;
        pointer-events: none;
    }
    & .banner-5{
        position: absolute;
        left: 388px;
        top: -35px;
        width: 1707.82px;
        height: 1029px;
        animation: banner_5 0.9s forwards;
        pointer-events: none;
    }
    & .banner-6{
        position: absolute;
        left: -649px;
        top: -350px;
        width: 1968.85px;
        height: 1188px;
        animation: banner_6 0.8s forwards;
        pointer-events: none;
    }
    & .text-1{
        position: absolute;
        right: 125px;
        top: 155px;
        width: 552px;
        height: 78px;
        animation: text_1 1.4s forwards;
        pointer-events: none;
    }
    & .text-2{
        position: absolute;
        right: 125px;
        top: 233px;
        width: 519px;
        height: 78px;
        animation: text_2 1.5s forwards;
        pointer-events: none;
    }
    & .text-3{
        position: absolute;
        right: 125px;
        top: 330px;
        width: 698px;
        height: 130px;
        animation: text_3 1.7s forwards;
        pointer-events: none;
    }
    & .text-4{
        position: absolute;
        right: 125px;
        top: 647px;
        width: 267px;
        height: 223px;
        animation: text_4 1.8s forwards;
        pointer-events: none;
    }
    & .blur-background {
        position: absolute;
        right: 106px;
        top: 0;
        width: 721px;
        height: 100%;
        opacity: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
        backdrop-filter: blur(10px);
        animation: fade_blur 1s forwards;
    }
    & .text-5{
        position: absolute;
        right: 136px;
        top: 85px;
        width: 545px;
        height: 277px;
        animation: text_5 1.2s forwards;
        pointer-events: none;
    }
    & .text-6{
        position: absolute;
        right: 136px;
        top: 386px;
        width: 661px;
        height: 235px;
        animation: text_6 1.2s forwards;
        pointer-events: none;
    }
    & .text-7{
        position: absolute;
        right: 136px;
        top: 700px;
        width: 173.81px;
        height: 173.56px;
        opacity: 0;
        animation: text_7 8s linear infinite, fade 1.2s linear 0.5s forwards;
        cursor: pointer;
    }
    & .text-8{
        position: absolute;
        right: 192px;
        top: 757px;
        width: 60.73px;
        height: 60.76px;
        pointer-events: none;
        opacity: 0;
        animation: fade 1.2s linear 0.5s forwards;
    }
    & .cursor {
        position: absolute;
        width: 60.73px;
        height: 60.76px;
        margin-top: -80px;
        pointer-events: none;
    }
    & .rotate-together-1 {
        animation: fade 1.2s linear 0.5s forwards, text_7 8s linear infinite;
    }
    & .rotate-together-2 {
        animation: text_7 8s linear infinite;
    }
}
@keyframes banner_1 {
    0% {
        transform: translateX(0) translateY(0);
        opacity: 0;
    }
    46% {
        transform: translateX(317px) translateY(204px);
        opacity: 0;
    }
    47% {
        opacity: 0;
    }
    85% {
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0);
    }
}
@keyframes banner_2 {
    0% {
        transform: translateX(0) translateY(0);
        opacity: 0;
    }
    42% {
        transform: translateX(-692px) translateY(474.5px);
        opacity: 0;
    }
    83% {
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0);
    }
}
@keyframes banner_3 {
    0% {
        transform: translateX(0) translateY(0);
        opacity: 0;
    }
    36% {
        transform: translateX(393.5px) translateY(295.81px);
        opacity: 0;
    }
    63% {
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0);
    }
}
@keyframes banner_4 {
    0% {
        transform: translateX(0) translateY(0);
        opacity: 0;
    }
    30% {
        transform: translateX(-495px) translateY(434.55px);
        opacity: 0;
    }
    60% {
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0);
    }
}
@keyframes banner_5 {
    0% {
        transform: translateX(0) translateY(0);
        opacity: 0;
    }
    22% {
        transform: translateX(-458.09px) translateY(240.5px);
        opacity: 0;
    }
    55% {
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0);
    }
}
@keyframes banner_6 {
    0% {
        transform: translateX(0) translateY(0);
        opacity: 0;
    }
    12.5% {
        transform: translateX(-535.43px) translateY(176px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateX(0) translateY(0);
    }
}
@keyframes text_1 {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    79% {
        transform: translateY(-41.5px);
        opacity: 0;
    }
    93% {
        opacity: 1;
    }
    100% {
        transform: translateY(0);
    }
}
@keyframes text_2 {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    79% {
        transform: translateY(-22px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes text_3 {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    76% {
        transform: translateY(-23px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes text_4 {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    83% {
        transform: translateY(-12px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes fade_blur {
    0% {
        opacity: 0;
        backdrop-filter: blur(0px);
    }
    100% {
        opacity: 1;
        backdrop-filter: blur(10px);
    }
}
@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes text_5 {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    33% {
        transform: translateY(-20px);
        opacity: 0;
    }
    83% {
        opacity: 1;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes text_6 {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    50% {
        transform: translateY(-17.5px);
        opacity: 0;
    }
    87% {
        opacity: 1;
    }
    100% {
        transform: translateY(0);
    }
}
@keyframes text_7 {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-30px);
    }
}

/* 进入动画 */
.fadeInDown-enter-from, .fadeInDown-enter-active {
    opacity: 0;
    transform: translateY(-30px);
}
.fadeInDown-enter-to, .fadeInDown-enter-active {
    opacity: 1;
    transform: translateY(0);
    animation: fadeInDown 0.3s ease-in-out forwards;
}

/* 离开动画 */
.fadeInDown-leave-from, .fadeInDown-leave-active {
    opacity: 1;
    transform: translateY(0);
}
.fadeInDown-leave-to, .fadeInDown-leave-active {
    opacity: 0;
    transform: translateY(-30px);
    animation: fadeInUp 0.3s ease-in-out forwards;
}
</style>
