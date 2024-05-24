<template>
  <div class="exhibition">
    <div
      v-for="(item,index) in exhibitionList"
      :key="index"
      class="item"
      :class="getClass(item.status)"
      :style="{background: hoverItem===index?item.background_active:(item.status===3?item.background_default:item.background), animationDelay: `${index * 0.1}s`, cursor: item.status===2?'auto':'pointer'}"
      @mouseover="handleMouseOver(index)"
      @mouseleave="handleMouseLeave"
      @click="handleClick(index)"
    >
      <img
        :ref="(el) => setFormulaRef(el, index)"
        :src="hoverItem===index?item.formula_active:(item.status===3?item.formula_default:item.formula)"
        :style="{marginLeft:item.status===2?(index===5?(marginTypeA+'px'): (index===7?(marginTypeB+'px'):0)):0,cursor: item.status===2?'pointer':'auto'}"
        alt="formula"
        class="formula"
        @click.stop="handleBack(index)"
      >
      <p class="name" :style="{color:hoverItem===index?'#fff':item.color, marginLeft:item.status===2? ((index===5)?(margins[index]+marginTypeA + 'px'):((index===7)?(margins[index]+marginTypeB + 'px'):(margins[index] + 'px'))):0,cursor: item.status===2?'pointer':'auto' }" @click.stop="handleBack(index)">
        {{ item.name }}
      </p>
      <div class="desc" :style="{color:hoverItem===index?'#fff': ''}">
        <p class="desc_cn">
          {{ item.desc }}
        </p>
        <p class="desc_en">
          {{ item.desc_en }}
        </p>
      </div>
      <img :src="getIconSource(item)" alt="icon" class="icon">
      <img
        :src="item.icon"
        alt="logo"
        class="logo"
        :style="{marginLeft:item.status===2?(index===5?(marginTypeA+'px'): (index===7?(marginTypeB+'px'):0)):0,cursor: item.status===2?'pointer':'auto'}"
        @click.stop="handleBack(index)"
      >
    </div>
  </div>
</template>
<script setup lang='ts'>
import {onMounted, ref, type ComponentOptionsBase, type ComponentPublicInstance} from 'vue';
import {exhibitionList as rawExhibitionList, type Exhibition} from '@/utils/constant';
import {getRootFontSize} from '@/utils/rem';
import require from '@/utils/require';
const exhibitionList = ref<Exhibition[]>(resetExhibitionList());
const formulaRefs = ref<HTMLElement[]>([]);
const margins = ref<number[]>([]);
const marginTypeA = ref<number>(0);
const marginTypeB = ref<number>(0);
const hoverItem = ref(-1);
function getClass(statue: number) {
    return `status-${statue}`;
}
function handleMouseOver(index: number) {
    if(exhibitionList.value[index].status !== 1 && exhibitionList.value[index].status !== 3) return;
    hoverItem.value = index;
    if(exhibitionList.value[index].status === 1) startAnimation(index);
}
function handleMouseLeave() {
    if (hoverItem.value === -1) return;
    if(exhibitionList.value[hoverItem.value].status === 1) startReverseAnimation(hoverItem.value);
    hoverItem.value = -1;
}
function handleClick(index: number) {
    if(exhibitionList.value[index].status !== 1 && exhibitionList.value[index].status !== 3) return;
    hoverItem.value = -1;
    if (index === 0) index = exhibitionList.value.length - 2;
    if (index === exhibitionList.value.length - 1) index = 1;
    updateMargins();
    marginTypeA.value = 79.625 * getRootFontSize();
    marginTypeB.value = 88.9375 * getRootFontSize();
    for(let i = 0; i < exhibitionList.value.length; i++) {
        if(i === index) {
            exhibitionList.value[i].status = 2;
        }
        else if(i === index - 1 || i === index + 1 ) {
            exhibitionList.value[i].status = 3;
        }
        else {
            exhibitionList.value[i].status = 0;
        }
        exhibitionList.value[i].currentFrame = 0;
    }
}
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
const setFormulaRef = (el: Element |ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>| null, index: number) => {
    if (el instanceof HTMLElement) {
        formulaRefs.value[index] = el;
    }
    else {
        if (formulaRefs.value[index]) {
            formulaRefs.value.splice(index, 1);
        }
    }
};
const updateMargins = () => {
    formulaRefs.value.forEach((formula, index) => {
        if (formula) {
            const height = formula.offsetHeight;
            margins.value[index] = height;
        }
    });
};
function resetExhibitionList() {
    return rawExhibitionList.map(item => ({...item}));
}
function getIconSource(item: Exhibition) {
    return require(`${item.iconAnimationPath}/frame_${item.currentFrame}.png`);
}
function startAnimation(index: number) {
    const item = exhibitionList.value[index];
    let lastTimestamp = performance.now();

    if (item.animationFrameId !== null) {
        cancelAnimationFrame(item.animationFrameId);
    }

    function animate(timestamp: number) {
        const frameDuration = 500 / item.iconFrames;
        if (timestamp - lastTimestamp > frameDuration) {
            if (item.currentFrame < item.iconFrames - 1) {
                item.currentFrame++;
                lastTimestamp = timestamp;
                item.animationFrameId = requestAnimationFrame(animate);
            }
            else {
                stopAnimation(index);
            }
        }
        else {
            item.animationFrameId = requestAnimationFrame(animate);
        }
    }

    item.animationFrameId = requestAnimationFrame(animate);
}

function startReverseAnimation(index: number) {
    const item = exhibitionList.value[index];
    let lastTimestamp = performance.now();

    if (item.animationFrameId !== null) {
        cancelAnimationFrame(item.animationFrameId);
    }

    function reverseAnimate(timestamp: number) {
        const frameDuration = 500 / item.iconFrames;
        if (timestamp - lastTimestamp > frameDuration) {
            if (item.currentFrame > 0) {
                item.currentFrame--;
                lastTimestamp = timestamp;
                item.animationFrameId = requestAnimationFrame(reverseAnimate);
            }
            else {
                stopAnimation(index);
            }
        }
        else {
            item.animationFrameId = requestAnimationFrame(reverseAnimate);
        }
    }

    item.animationFrameId = requestAnimationFrame(reverseAnimate);
}

function stopAnimation(index: number) {
    const item = exhibitionList.value[index];
    if (item.animationFrameId !== null) {
        cancelAnimationFrame(item.animationFrameId);
        item.animationFrameId = null;
    }
}

function handleBack(index: number) {
    if (exhibitionList.value[index].status === 2) {
        exhibitionList.value = resetExhibitionList();
    }
    else {
        handleClick(index);
    }
}
onMounted(() => {
    exhibitionList.value = resetExhibitionList();
});
</script>
<style scoped>
.exhibition{
    display: flex;
    position: relative;
    height: calc(100vh - 80px);
    overflow: hidden;

    & .item {
      width: 274px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      overflow: hidden;
      opacity: 0;
      margin-top: -30%;
      animation: fadeInMoveDown 1s ease-in-out forwards;
      animation-delay: 0s;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      user-select: none;

      & .formula {
        width: 56px;
        position: absolute;
        left: 215px;
        top: 60px;
        transition: all 0.3s ease-in-out;
      }

      & .name {
        position: absolute;
        top: calc(100% - 580px);
        left: 36px;
        width: 202px;
        font-size: 36px;
        font-weight: 700;
        transition: all 0.3s ease-in-out;
      }

      & .desc {
        width: 202px;
        height: 169px;
        font-size: 18px;
        margin-bottom: 90px;
        transition: all 0.3s ease-in-out;
      }

      & .desc_cn {
        font-size: 18px;
        margin-bottom: 6px;
      }

      & .desc_en {
        font-size: 14px;
      }

      & .icon {
        width: 180px;
        height: 180px;
        margin-bottom: 60px;
        transition: all 0.3s ease-in-out;
      }

      & .logo {
        position: absolute;
        top: 500px;
        left: 47px;
        width: 180px;
        height: 180px;
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }

    & .item:nth-child(2),
    & .item:nth-last-child(2) {
      width: 275px;
    }

    & .item:nth-child(odd) {
        animation-name: fadeInMoveUp;
    }

    & .status-0 {
      width: 0 !important;

      & .formula {
        opacity: 0;
      }

      & .name {
        opacity: 0;
      }

      & .desc {
        opacity: 0;
      }

      & .icon {
        opacity: 0;
      }
    }

    & .status-2 {
      width: 1800px !important;

      & .formula {
        left: 130px;
        top: 82px;
        transition: all 0.3s ease-in-out;
        transform: rotate(-90deg);
        transform-origin: top left;
      }

      & .name {
        position: absolute;
        top: 41px;
        left: 160px;
        width: 202px;
        font-size: 24px;
        transition: all 0.3s ease-in-out;
      }

      & .desc {
        opacity: 0;
      }

      & .icon {
        opacity: 0;
      }

      & .logo {
        top: 30px;
        left: 56px;
        width: 52px;
        height: 52px;
        opacity: 1;
      }
    }

    & .status-3 {
      width: 60px !important;

      & .formula {
        left: 2px;
        top: 36px;
      }

      & .name {
        opacity: 0;
      }

      & .desc {
        opacity: 0;
      }

      & .icon {
        opacity: 0;
      }
    }
}
@keyframes fadeInMoveUp {
    0% {
        opacity: 0;
        margin-top: 30%;
    }
    100% {
        opacity: 1;
        margin-top: 0;
    }
}

@keyframes fadeInMoveDown {
    0% {
        opacity: 0;
        margin-top: -30%;
    }
    100% {
        opacity: 1;
        margin-top: 0;
    }
}
</style>
