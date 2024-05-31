<template>
  <div class="graduate">
    <div v-if="props.notMobile" class="intro">
      <transition name="fadeDelay">
        <p v-if="currentNo === -3" class="title-1">
          天津大学工业设计
        </p>
      </transition>
      <transition name="fadeDelay">
        <p v-if="currentNo === -3" class="title-2">
          2020届毕业生
        </p>
      </transition>
      <transition name="fade">
        <p v-if="currentNo !== -3" class="name">
          {{ currentDesc[0] }}
        </p>
      </transition>
      <div class="divider" :class="{'active-divider':currentNo !== -3}"></div>
      <transition name="fade">
        <p v-if="currentNo !== -3" class="plan">
          {{ currentDesc[2] }}
        </p>
      </transition>
      <transition name="fade">
        <div v-if="currentNo !== -3" class="desc">
          <p>
            {{ currentDesc[1] }}
          </p>
          <p>
            {{ currentDesc[3] }}
          </p>
        </div>
      </transition>
    </div>
    <div ref="members" class="members">
      <img src="@/assets/image/mobile/graduate.svg" class="title" />
      <div class="member teacher-1" @mouseenter="showDesc(-1)" @mouseleave="showDesc(-3)">
        <transition name="scale">
          <template v-if="props.notMobile">
            <div v-if="isVisible(7.75)">
              <img v-preview:name="4" src="@/assets/image/graduate/-1.jpg">
              <p>李巨韬</p>
            </div>
          </template>
          <template v-else>
            <div v-if="isVisible(1)" @click="showInfo">
              <img src="@/assets/image/graduate/-1.jpg">
              <p>李巨韬</p>
            </div>
          </template>
        </transition>
      </div>
      <div class="member teacher-2" @mouseenter="showDesc(-2)" @mouseleave="showDesc(-3)">
        <transition name="scale">
          <template v-if="props.notMobile">
            <div v-if="isVisible(7.75)">
              <img v-preview:name="4" src="@/assets/image/graduate/-2.jpeg">
              <p>张赫晨</p>
            </div>
          </template>
          <template v-else>
            <div v-if="isVisible(1)" @click="showInfo">
              <img src="@/assets/image/graduate/-2.jpeg">
              <p>张赫晨</p>
            </div>
          </template>
        </transition>
      </div>
      <div
        v-for="(item, i) in randomGraduateList"
        :key="i"
        class="member"
        :style="{
          left: props.notMobile ? offsetList[i][0] : offsetListMobile[i][0] + 'rem',
          marginTop: props.notMobile ?offsetList[i][1]: offsetListMobile[i][1] + 'em'
        }"
        @mouseenter="showDesc(i)"
        @mouseleave="showDesc(-3)"
      >
        <transition name="scale">
          <div v-if="props.notMobile&&isVisible(offsetList[i][0])" :key="i">
            <img v-lazy="item[3]" v-preview:name="3" :alt="item[0]" />
            <p>{{ item[0] }}</p>
          </div>
        </transition>
        <transition name="scale">
          <div v-if="!props.notMobile&&isVisible(offsetListMobile[i][0])" :key="i" @click="showInfo">
            <img v-lazy="item[3]" :alt="item[0]" />
            <p>{{ item[0] }}</p>
          </div>
        </transition>
      </div>
      <div class="width-box"></div>
      <div v-if="!props.notMobile" class="percent">
        <div class="grey" :style="{width: scrollPercentage + '%'}"></div>
        <div class="circle" :style="{left: scrollPercentage + '%'}"></div>
      </div>
    </div>
    <div v-if="show" class="dialog" @click="show=false">
      <div class="content" @click.stop>
        <div class="top">
          <img v-preview :src="currentDesc[4]" class="avatar">
          <div>
            <p class="name">
              {{ currentDesc[0] }}
            </p>
            <p class="plan">
              {{ currentDesc[2] }}
            </p>
          </div>
        </div>
        <div>
          <p class="p-1">
            {{ currentDesc[1] }}
          </p>
          <p class="p-2">
            {{ currentDesc[3] }}
          </p>
        </div>
        <img src="@/assets/image/mobile/exit.svg" class="close" @click="show=false" />
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {ref, onMounted, onUnmounted, onActivated} from 'vue';
import {graduateList, teacherList,offsetList,offsetListMobile} from '@/utils/constant';
import {vPreview} from 'vue3-image-preview';
import {getRootFontSize} from '@/utils/rem';
const randomGraduateList = ref([...graduateList]);
const members = ref<HTMLElement | null>(null);
const currentNo = ref(-3);
const currentDesc = ref(['Name', 'Desc', 'Plan', 'Extra','']);
const rootFontSize = ref(getRootFontSize());
const scrollLeft = ref(0);
const clientWidth = ref(0);
const scrollPercentage = ref(0);
const show = ref(false);
import {debounce} from '@/utils/debounce';
import require from '@/utils/require';

const props = defineProps({
    notMobile: Boolean
});
let targetScroll = 0;
let currentScroll = 0;
let touchStartX = 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shuffleArray(array:any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // ES6 destructuring swap
    }
}
function showInfo() {
    show.value = true;
}
function setRem() {
    if (!members.value) return;
    const memberHeight = members.value.clientHeight;
    let fontRem = props.notMobile? 64:45.3125;
    members.value.style.fontSize = `${memberHeight / fontRem}px`;
}
function isVisible(left: number) {
    const hideMargin = props.notMobile? 3.125:1;
    return ((left + 10 + hideMargin) * rootFontSize.value >= scrollLeft.value) &&
           (left * rootFontSize.value <= scrollLeft.value + clientWidth.value);
}
function showDesc(index: number) {
    currentNo.value = index;
    if (currentNo.value === -1) {
        currentDesc.value = [teacherList[0][0], teacherList[0][1], teacherList[0][3], teacherList[0][2],require('image/graduate/-1.jpg')];
    }
    else if (currentNo.value === -2) {
        currentDesc.value = [teacherList[1][0], teacherList[1][1], teacherList[1][3], teacherList[1][2],require('image/graduate/-2.jpeg')];
    }
    else if (currentNo.value >= 0) {
        currentDesc.value = [randomGraduateList.value[index][0], randomGraduateList.value[index][1], randomGraduateList.value[index][2], '',randomGraduateList.value[index][3]];
    }
}
function smoothScroll() {
    if (!members.value) return;

    // 计算目标滚动位置与当前滚动位置的差异，并进行平滑过渡
    currentScroll += (targetScroll - currentScroll) * 0.1;
    currentScroll = Math.max(0, Math.min(currentScroll, members.value.scrollWidth - members.value.clientWidth));
    members.value.scrollLeft = currentScroll;
    scrollLeft.value = members.value.scrollLeft;
    clientWidth.value = members.value.clientWidth;
    // 计算最大滚动距离
    const maxScrollDistance = members.value.scrollWidth - members.value.clientWidth;

    // 计算当前滚动的百分比
    scrollPercentage.value = (currentScroll / maxScrollDistance)*100;
    // 当差值足够小就停止动画
    if (Math.abs(targetScroll - currentScroll) > 1) {
        requestAnimationFrame(smoothScroll);
    }
    else {
        currentScroll = targetScroll;
        members.value.scrollLeft = currentScroll;
    }
}
const debouncedSetRem = debounce(setRem, 250);
function handleResize() {
    debouncedSetRem();
    setTimeout(() => {
        rootFontSize.value = getRootFontSize();
    },500)
}
function handleWheel(event: WheelEvent) {
    updateScroll(event.deltaY);
    event.preventDefault();
}
function handleTouchStart(event: TouchEvent) {
    if (!members.value) return;
    touchStartX = event.touches[0].clientX;
}
function handleTouchMove(event: TouchEvent) {
    if (!members.value || event.touches.length === 0) return;

    let newTouchCurrentX = event.touches[0].clientX;
    let deltaX = touchStartX - newTouchCurrentX;
    touchStartX = newTouchCurrentX;

    updateScroll(deltaX);
    event.preventDefault();
}
function updateScroll(deltaX: number) {
    if (!members.value) return;

    targetScroll += deltaX;
    targetScroll = Math.max(0, Math.min(targetScroll, members.value.scrollWidth - members.value.clientWidth));
    requestAnimationFrame(smoothScroll);
}
onMounted(() => {
    setRem();
    const membersEl = members.value;
    if (membersEl) {
        membersEl.addEventListener('wheel', handleWheel, {passive: false});
        membersEl.addEventListener('touchstart', handleTouchStart, {passive: false});
        membersEl.addEventListener('touchmove', handleTouchMove, {passive: false});
    }
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    const membersEl = members.value;
    if (membersEl) {
        membersEl.removeEventListener('wheel', handleWheel);
        membersEl.removeEventListener('touchstart', handleTouchStart);
        membersEl.removeEventListener('touchmove', handleTouchMove);
    }
    window.removeEventListener('resize', handleResize);
});
onActivated(() => {
    targetScroll = 0;
    currentScroll = 0;
    if (members.value) {
        members.value.scrollLeft = 0;
    }
    requestAnimationFrame(smoothScroll);
    shuffleArray(randomGraduateList.value);
});
</script>
<style scoped>
.graduate{
  display: flex;
  width: 100%;
  position: relative;
  height: calc(100vh - 80px);

  & .intro{
    width: 547px;
    height: calc(100vh - 80px);
    background: rgba(0, 0, 0, 0.6);
    position: relative;
    color: #fff;

    & .title-1 {
        position: absolute;
        left: 120px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 36px;
        margin-top: -115px;
    }

    & .title-2 {
        position: absolute;
        left: 120px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 36px;
        margin-top: -43px;
    }

    & .name{
        position: absolute;
        left: 120px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 36px;
        font-weight: 700;
        transition: all 0.3s;
        margin-top: -189.5px;
    }

    & .plan {
        position: absolute;
        right: 66px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        margin-top: -115.5px;
    }

    & .divider {
        position: absolute;
        left: 120px;
        top: 50%;
        transform: translateY(-50%);
        width: 360px;
        height: 2px;
        background-color: #fff;
        transition: all 0.3s;
        margin-top: -5.5px;
    }

    & .desc {
        position: absolute;
        left: 121px;
        width: 361px;
        top: 50%;
        font-size: 17px;
        margin-top: -42px;
        line-height: 24px;
        text-align: justify;
        text-indent: 2em;
    }

    & .active-divider {
        margin-top: -144.5px;
    }
  }

  & .members{
    flex: 1;
    overflow: auto;
    height: calc(100vh - 80px);
    background-color: #AEAEAE;
    position: relative;

    & .member {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        & img {
            width: 160px;
            height: 160px;
            object-fit: cover;
            object-position: top;
            margin-bottom: 16px;
        }

        & p {
            font-size: 20px;
            color: #3D3D3D;
            width: 160px;
            text-align: center;
            font-weight: 700;
        }
    }

    & .width-box {
        width: 230rem;
        height: 0;
    }

    & .teacher-1 {
        margin-top: -185px;
        left: 124px;

        & img {
            width: 200px;
            height: 200px;
        }

        & p {
            width: 200px;
            font-size: 24px;
        }
    }

    & .teacher-2 {
        margin-top: 185px;
        left: 124px;

        & img {
            width: 200px;
            height: 200px;
        }

        & p {
            width: 200px;
            font-size: 24px;
        }
    }
  }
}
/* fade */
.fade-enter-active, .fade-leave-active {
    transition: all 0.1s ease-in-out;
}
.fade-enter-from,.fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
/* fadeDelay */
.fadeDelay-enter-active {
    transition: all 0.1s ease-in-out;
    transition-delay: 0.3s;
}
.fadeDelay-leave-active {
    transition: all 0.2s ease-in-out;
}
.fadeDelay-enter-from,.fadeDelay-leave-to {
    opacity: 0;
}
.fadeDelay-enter-to, .fadeDelay-leave-from {
    opacity: 1;
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

.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  & .content {
    width: 307px;
    padding: 34px;
    padding-top: 14px;
    background-color: white;
    position: relative;

    & .top {
      display: flex;
      margin-bottom: 20px;

      & img {
        width: 142px !important;
        height: 142px !important;
        object-fit: cover;
        object-position: top;
        margin-right: 20px;
      }

      & .name {
        color: #3D3D3D;
        font-size: 18px;
        font-weight: 700;
        margin-top: 12px;
      }

      & .plan {
        color: rgba(0, 0, 0, 0.6);;
        font-size: 14px;
        margin-top: 8px;
      }
    }

    & .p-1{
      text-align: justify;
      text-indent: 2em;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
    }
    & .p-2{
      text-align: justify;
      text-indent: 2em;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
    }

    & .close {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
  }
}

@media screen and (max-width: 620px) {
.graduate{
  height: calc(100vh - 44px);
  & .title {
    position: absolute;
    left: 24px;
    top: 56px;
    width: 154px;
  }
  & .members{
    flex: 1;
    overflow: auto;
    height: calc(100vh - 44px);
    background-color: black;

    & .member {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        & img {
            width: 107px;
            height: 107px;
            object-fit: cover;
            object-position: top;
            margin-bottom: 4px;
        }

        & p {
            font-size: 14px;
            color: #fff;
            width: 107px;
            text-align: center;
            font-weight: 700;
        }
    }

    & .percent {
      width: 343px;
      height: 10px;
      position: fixed;
      left: 16px;
      bottom: 50px;
      background-color: white;
      border-radius: 13px;
      .grey {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 13px;
      }
      .circle {
        width: 15px;
        height: 15px;
        position: absolute;
        top: -2.5px;
        margin-left: -5px;
        border-radius: 50%;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
      }
    }

    & .width-box {
        width: 166rem;
        height: 0;
    }

    & .teacher-1 {
        margin-top: -105px;
        left: 16px;

        & img {
            width: 160px;
            height: 160px;
        }

        & p {
            width: 160px;
            font-size: 14px;
            color: #fff;
        }
    }

    & .teacher-2 {
        margin-top: 105px;
        left: 16px;

        & img {
            width: 160px;
            height: 160px;
        }

        & p {
            width: 160px;
            font-size: 14px;
            color: #fff;
        }
    }
  }
}
}
</style>
