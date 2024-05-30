<template>
  <div v-if="imagesLoaded" class="home">
    <div
      class="home"
      @wheel="handleWheel"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <img src="@/assets/image/banner_3.svg" class="banner-3" alt="banner_3" />
      <img src="@/assets/image/banner_5.svg" class="banner-5" alt="banner_5" />
      <img src="@/assets/image/banner_4.svg" class="banner-4" alt="banner_4" />
      <img src="@/assets/image/banner_2.svg" class="banner-2" alt="banner_2" />
      <img src="@/assets/image/banner_6.svg" class="banner-6" alt="banner_6" />
      <img src="@/assets/image/banner_1.svg" class="banner-1" alt="banner_1" />

      <transition name="fadeInDown" mode="out-in">
        <template v-if="state===1">
          <div key="1">
            <img :src="props.notMobile?require('image/text_1.svg'):require('image/mobile/title_cn.svg')" class="text-1" alt="text-1" />
            <img v-if="props.notMobile" src="@/assets/image/text_2.svg" class="text-2" alt="text-2" />
            <img :src="props.notMobile?require('image/text_3.svg'):require('image/mobile/title_en.svg')" class="text-3" alt="text-3" />
            <img src="@/assets/image/text_4.svg" class="text-4" alt="text-4" @click="changeState(2)" />
            <img src="@/assets/image/down.svg" class="down" alt="down" @click="changeState(2)" />
          </div>
        </template>
        <template v-else>
          <div key="2">
            <div class="blur-background"></div>
            <img :src="props.notMobile?require('image/text_5.svg'):require('image/mobile/desc_cn.svg')" class="text-5" alt="text-5" />
            <img :src="props.notMobile?require('image/text_6.svg'):require('image/mobile/desc_en.svg')" class="text-6" alt="text-6" />
            <img
              ref="text7El"
              src="@/assets/image/text_7.svg"
              class="text-7"
              alt="text-7"
              @click="toExhibition"
            />
            <img src="@/assets/image/text_8.svg" class="text-8" :class="{'rotate-together-1':isSnapped}" alt="text-8" />
            <img
              v-if="props.notMobile"
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
  </div>
</template>
<script setup lang='ts'>
import {computed, onActivated, onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import require from '@/utils/require'

const props = defineProps({
    startLoading: {
        type: Function,
        default: () => {}
    },
    stopLoading: {
        type: Function,
        default: () => {}
    },
    notMobile: Boolean
})
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
        changeState(2);
    }
    else if (event.deltaY < 0) {
        changeState(1);
    }
}
function changeState(val:number) {
    state.value = val;
}
function toExhibition() {
    router.push('/exhibition');
}
let touchStartY = 0;
let touchEndY = 0;
function handleTouchStart(event: TouchEvent) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event: TouchEvent) {
    touchEndY = event.touches[0].clientY;
}

function handleTouchEnd() {
    if (touchEndY < touchStartY) {
        state.value = 2;
    }
    else if (touchEndY > touchStartY) {
        state.value = 1;
    }
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
        state.value = 2;
    }
    else if (event.key === 'ArrowUp') {
        state.value = 1;
    }
}

onMounted(() => {
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('keydown', handleKeyDown);
    loadImages();
});

onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursorPosition);
    window.removeEventListener('keydown', handleKeyDown);
    props.stopLoading();
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
const imagesLoaded = ref(false);
const maxLoadTime = 10000;
const imagesToLoad = [
    require('image/banner_1.svg'),
    require('image/banner_2.svg'),
    require('image/banner_3.svg'),
    require('image/banner_4.svg'),
    require('image/banner_5.svg'),
    require('image/banner_6.svg'),
    require('image/text_1.svg'),
    require('image/text_2.svg'),
    require('image/text_3.svg'),
    require('image/text_4.svg'),
    require('image/text_5.svg'),
    require('image/text_6.svg'),
    require('image/text_7.svg'),
    require('image/text_8.svg'),
    require('image/mobile/title_cn.svg'),
    require('image/mobile/title_en.svg'),
    require('image/mobile/desc_cn.svg'),
    require('image/mobile/desc_en.svg'),
    require('image/cursor.svg')
];
const loadImages = () => {
    let loadedCount = 0;
    props.startLoading();
    const totalImages = imagesToLoad.length;

    const timer = setTimeout(() => {
        if (!imagesLoaded.value) {
            imagesLoaded.value = true;
            props.stopLoading();
        }
    }, maxLoadTime);

    imagesToLoad.forEach((src) => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                clearTimeout(timer);
                setTimeout(() => {
                    imagesLoaded.value = true;
                    props.stopLoading();
                },1000)
            }
        };
        img.src = src;
    });
};
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
        height: 917.5px;
        animation: banner_3 1.1s forwards;
        pointer-events: none;
    }
    & .banner-4{
        position: absolute;
        left: -294px;
        top: 2.5px;
        width: 1520px;
        height: 930px;
        animation: banner_4 1s forwards;
        pointer-events: none;
    }
    & .banner-5{
        position: absolute;
        left: 388px;
        top: -35px;
        width: 1708px;
        height: 1030px;
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
        top: 145px;
        width: 552px;
        height: 78px;
        animation: text_1 1.4s forwards;
        pointer-events: none;
    }
    & .text-2{
        position: absolute;
        right: 125px;
        top: 223px;
        width: 519px;
        height: 78px;
        animation: text_2 1.5s forwards;
        pointer-events: none;
    }
    & .text-3{
        position: absolute;
        right: 125px;
        top: 320px;
        width: 698px;
        height: 130px;
        animation: text_3 1.7s forwards;
        pointer-events: none;
    }
    & .text-4{
        position: absolute;
        right: 125px;
        top: 580px;
        width: 267px;
        height: 223px;
        animation: text_4 1.8s forwards;
        cursor: pointer;
    }
    .down {
        position: absolute;
        right: 228px;
        top: 820px;
        width: 50px;
        height: 50px;
        animation: text_4 1.8s forwards,upAndDown 2s linear 1.8s infinite;
        cursor: pointer;
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
        border-radius: 0.1px;
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
        animation: fade 1.2s linear 0.5s forwards, text_8 1s linear forwards;
    }
    & .rotate-together-2 {
        animation: text_8 1s linear forwards;
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
@keyframes banner_1_mobile {
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
@keyframes banner_2_mobile {
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
@keyframes banner_3_mobile {
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
@keyframes banner_4_mobile {
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
@keyframes banner_5_mobile {
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
@keyframes banner_6_mobile {
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
@keyframes upAndDown {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(20px);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}
@keyframes upAndDownMobile {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(5px);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
}
@keyframes fade_blur {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
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
        transform: rotate(-360deg);
    }
}
@keyframes text_8 {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(-45deg);
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


@media screen and (max-width: 620px) {
.home {
    height: calc(100vh - 44px);
    & .text-1{
        right: unset;
        left: 32px;
        top: 30px;
        width: 202px;
        height: 68px;
        animation: text_1 1.4s forwards;
    }
    & .text-3{
        right: unset;
        left: 32px;
        top: 98px;
        width: 228px;
        height: 42px;
        animation: text_3 1.7s forwards;
    }
    & .text-4{
        right: unset;
        left: 32px;
        top: 140px;
        width: 55px;
        height: 56px;
        animation: text_4 1.8s forwards;
    }
    & .down {
        right: unset;
        left: 47px;
        top: 190px;
        width: 24px;
        height: 24px;
        animation: text_4 1.8s forwards,upAndDownMobile 2s linear 1.8s infinite;
    }
    & .blur-background {
        position: absolute;
        right: unset;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    & .text-5{
        right: unset;
        left: 32px;
        top: 16px;
        width: 305px;
        height: 184px;
    }
    & .text-6{
        right: unset;
        left: 32px;
        top: 208px;
        width: 305px;
        height: 290px;
    }
    & .text-7{
        right: unset;
        left: calc(50% - 70px);
        top: unset;
        bottom: 55px;
        width: 140px;
        height: 140px;
    }
    & .text-8{
        right: unset;
        left: calc(50% - 25px);
        top: unset;
        bottom: 100px;
        width: 50px;
        height: 50px;
    }
    & .banner-1{
        left: -267px;
        top: 364px;
        width: 760px;
        height: 466px;
        animation: banner_1_mobile 1.3s forwards;
    }
    & .banner-2{
        left: -42px;
        top: 290px;
        width: 700px;
        height: 430px;
        animation: banner_2_mobile 1.2s forwards;
    }
    & .banner-3{
        left: -189px;
        top: 247px;
        width: 800px;
        height: 460px;
        animation: banner_3_mobile 1.1s forwards;
    }
    & .banner-4{
        left: -252px;
        top: 202px;
        width: 712px;
        height: 422px;
        animation: banner_4_mobile 1s forwards;
    }
    & .banner-5{
        left: -291px;
        top: 27px;
        width: 1110px;
        height: 668px;
        animation: banner_5_mobile 0.9s forwards;
    }
    & .banner-6{
        left: -370px;
        top: -63px;
        width: 965px;
        height: 583px;
        animation: banner_6_mobile 0.8s forwards;
    }
}
}
</style>
