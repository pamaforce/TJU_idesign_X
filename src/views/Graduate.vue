<template>
  <div class="graduate">
    <div class="intro">
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
      <div class="member teacher-1" @mouseenter="showDesc(-1)" @mouseleave="showDesc(-3)">
        <transition name="scale">
          <div v-if="isVisible(7.75)">
            <img v-preview:name="4" src="@/assets/image/graduate/-1.jpg">
            <p>李巨韬</p>
          </div>
        </transition>
      </div>
      <div class="member teacher-2" @mouseenter="showDesc(-2)" @mouseleave="showDesc(-3)">
        <transition name="scale">
          <div v-if="isVisible(7.75)">
            <img v-preview:name="4" src="@/assets/image/graduate/-2.jpeg">
            <p>张赫晨</p>
          </div>
        </transition>
      </div>
      <div
        v-for="(item, i) in randomGraduateList"
        :key="i"
        class="member"
        :style="{left:offsetList[i][0]+'rem',marginTop:offsetList[i][1]+'em'}"
        @mouseenter="showDesc(i)"
        @mouseleave="showDesc(-3)"
      >
        <transition name="scale">
          <div v-if="isVisible(offsetList[i][0])" :key="i">
            <img v-lazy="item[3]" v-preview:name="3" :alt="item[0]" />
            <p>{{ item[0] }}</p>
          </div>
        </transition>
      </div>
      <div class="width-box"></div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {ref, onMounted, onUnmounted, onActivated} from 'vue';
import {graduateList, teacherList,offsetList} from '@/utils/constant';
import {vPreview} from 'vue3-image-preview';
import {getRootFontSize} from '@/utils/rem';
const randomGraduateList = ref([...graduateList]);
const members = ref<HTMLElement | null>(null);
const currentNo = ref(-3);
const currentDesc = ref(['Name', 'Desc', 'Plan', 'Extra']);
const rootFontSize = ref(getRootFontSize());
const scrollLeft = ref(0);
const clientWidth = ref(0);
import {debounce} from '@/utils/debounce';

let targetScroll = 0;
let currentScroll = 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shuffleArray(array:any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // ES6 destructuring swap
    }
}
function setRem() {
    if (!members.value) return;
    const memberHeight = members.value.clientHeight;
    members.value.style.fontSize = `${memberHeight / 64}px`;
}
function isVisible(left: number) {
    const hideMargin = 3.125;
    return ((left + 10 + hideMargin) * rootFontSize.value >= scrollLeft.value) &&
           (left * rootFontSize.value <= scrollLeft.value + clientWidth.value);
}
function showDesc(index: number) {
    currentNo.value = index;
    if (currentNo.value === -1) {
        currentDesc.value = [teacherList[0][0], teacherList[0][1], teacherList[0][3], teacherList[0][2]];
    }
    else if (currentNo.value === -2) {
        currentDesc.value = [teacherList[1][0], teacherList[1][1], teacherList[1][3], teacherList[1][2]];
    }
    else if (currentNo.value >= 0) {
        currentDesc.value = [randomGraduateList.value[index][0], randomGraduateList.value[index][1], randomGraduateList.value[index][2], ''];
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
    // 当差值足够小就停止动画
    if (Math.abs(targetScroll - currentScroll) > 1) {
        requestAnimationFrame(smoothScroll);
    }
    else {
        currentScroll = targetScroll;
        members.value.scrollLeft = currentScroll;
    }
}

function handleWheel(event: WheelEvent) {
    if (!members.value) return;

    event.preventDefault();
    targetScroll += event.deltaY;
    targetScroll = Math.max(0, Math.min(targetScroll, members.value.scrollWidth - members.value.clientWidth));
    requestAnimationFrame(smoothScroll);
}

const debouncedSetRem = debounce(setRem, 250);
function handleResize() {
    debouncedSetRem();
    setTimeout(() => {
        rootFontSize.value = getRootFontSize();
    },500)
}
onMounted(() => {
    setRem();
    members.value?.addEventListener('wheel', handleWheel, {passive: false});
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    members.value?.removeEventListener('wheel', handleWheel);
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
</style>
