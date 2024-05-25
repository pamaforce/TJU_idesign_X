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
      <p class="name" :style="{color:hoverItem===index?'#fff':item.color, marginLeft:item.status===2? ((index===5)?(margins[index]+marginTypeA + 'px'):((index===7)?(margins[index]+marginTypeB + 'px'):(margins[index] + 'px'))):0,cursor: item.status===2?'pointer':'auto',top: item.status===3?margins[index]+'px':'' }" @click.stop="handleBack(index)">
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
      <div v-if="item.status === 2" class="content">
        <template v-if="true">
          <div class="bar"></div>
          <transition name="fadeInDown" mode="out-in">
            <template v-if="scrollIndex === 0">
              <img key="intro" class="intro" src="@/assets/image/intro_1.svg">
            </template>
            <template v-else-if="scrollIndex > 0">
              <div :key="designData[scrollIndex-1].id" class="design-info">
                <p class="design-no">
                  {{ scrollIndex.toString().padStart(2, '0') }}
                </p>
                <p class="design-title-cn" :title="designData[scrollIndex-1].post_title">
                  {{ designData[scrollIndex-1].post_title }}
                </p>
                <p class="design-title-en" :title="designData[scrollIndex-1].post_title">
                  {{ designData[scrollIndex-1].post_title_en }}
                </p>
                <div class="design-keywords">
                  <div v-for="key in designData[scrollIndex-1].keywords_zh.split('|')" :key="key" class="design-keyword">
                    {{ key }}
                  </div>
                </div>
                <div class="design-authors">
                  <span class="design-label">作者：</span>
                  <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author">
                    {{ author.zh_names }}
                  </span>
                </div>
                <div class="design-authors">
                  <span class="design-label">Designer：</span>
                  <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author">
                    {{ author.en_names }}
                  </span>
                </div>
                <div class="design-desc">
                  <span class="design-label">简介：</span>
                  <div class="design-desc-text">
                    <p class="design-desc-cn" :title="designData[scrollIndex-1].intro_zh">
                      {{ designData[scrollIndex-1].intro_zh }}
                    </p>
                    <p class="design-desc-en" :title="designData[scrollIndex-1].intro_en">
                      {{ designData[scrollIndex-1].intro_en }}
                    </p>
                  </div>
                </div>
                <div class="design-btn" @click="toDetail(scrollIndex-1)">
                  作品详情
                </div>
              </div>
            </template>
          </transition>
          <transition name="fadeInDown" mode="out-in">
            <div v-if="scrollIndex >= 0" ref="scrollContainer" class="scroll" @wheel="handleWheel">
              <div class="scroll-item" @click="scrollToIndex(0)">
                <img :src="item.formula" class="first">
              </div>
              <div v-for="(design,i) in designData" :key="design.id" class="scroll-item">
                <img :src="portalUrl+design.more.thumbnail" class="scroll-cover" @click="scrollToIndex(i+1)">
              </div>
            </div>
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {onMounted, onUnmounted, ref, nextTick, type ComponentOptionsBase, type ComponentPublicInstance,onActivated} from 'vue';
import {exhibitionList as rawExhibitionList, type Exhibition, portalUrl} from '@/utils/constant';
import {getRootFontSize} from '@/utils/rem';
import require from '@/utils/require';
import {useRouter} from 'vue-router';
import service from '@/utils/request';
const router = useRouter();
const fromDetail = ref(false);
const exhibitionList = ref<Exhibition[]>(resetExhibitionList());
const formulaRefs = ref<HTMLElement[]>([]);
const scrollContainer = ref<HTMLElement[]>([]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const designData:any = ref([]);
const margins = ref<number[]>([]);
const marginTypeA = ref<number>(0);
const marginTypeB = ref<number>(0);
const scrollIndex = ref<number>(-1);
const hoverItem = ref(-1);
let itemList = '';
let snapTimer: number | undefined = undefined;
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
    scrollIndex.value = -1;
    for(let i = 0; i < exhibitionList.value.length; i++) {
        if(i === index) {
            exhibitionList.value[i].status = 2;
            fetchList(i);
        }
        else if(i === index - 1 || i === index + 1 ) {
            exhibitionList.value[i].status = 3;
        }
        else {
            exhibitionList.value[i].status = 0;
        }
        exhibitionList.value[i].currentFrame = 0;
    }
    nextTick(() => {
        setTimeout(()=>{
            scrollIndex.value = 0;
        },200)
    })
}
function fetchList(index: number) {
    designData.value = [];
    service( `/portal/api_v1/get_cates_lists?per_page=9999&current_page=1&category_id=${exhibitionList.value[index].id}`).then((data) => {
        for (let i = 0; i < data.data.data.length; i++) {
            let y = [],x = [];
            for (let j = 0;j < data.data.data[i].more.authors?.length || 0;j++) {
                x.push(data.data.data[i].more.authors[j].en_names);
                y.push(data.data.data[i].more.authors[j].zh_names);
            }
            itemList += data.data.data[i].id + '_';
            designData.value.push({
                ...data.data.data[i],
                title: data.data.data[i].post_title,
                src:portalUrl + data.data.data[i].more.thumbnail,
                authors: y,
                authors_en: x,
                term: data.data.data[i].post_term,
                id: data.data.data[i].id
            });
        }
    });
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
        scrollIndex.value = -1;
    }
    else {
        handleClick(index);
    }
}
function toDetail(index: number) {
    router.push( `/exhibition/${designData.value[index].category_id}/${designData.value[index].id}?list=${itemList}&current=${index}`);
}
function handleWheel(event: WheelEvent) {
    event.preventDefault();
    let itemHeight = 26.8125 * getRootFontSize();
    const SCROLL_STEP = itemHeight;
    let newMarginTop = 0;
    if (!scrollContainer.value[0]) return;
    newMarginTop = parseInt(getComputedStyle(scrollContainer.value[0]).marginTop) || 0;

    newMarginTop += (event.deltaY > 0 ? -SCROLL_STEP : SCROLL_STEP);

    newMarginTop = Math.min(newMarginTop, 0);
    newMarginTop = Math.max(newMarginTop, -scrollContainer.value[0].scrollHeight + itemHeight);
    scrollContainer.value[0].style.marginTop = `${newMarginTop}px`;

    // 吸附逻辑
    if (snapTimer) {
        clearTimeout(snapTimer);
    }

    snapTimer = window.setTimeout(() => {
        const currentMarginTop = parseInt(getComputedStyle(scrollContainer.value[0]).marginTop);
        const remainder = currentMarginTop % itemHeight;

        if (Math.abs(remainder) > itemHeight / 2) {
            newMarginTop = currentMarginTop - remainder - itemHeight;
        }
        else {
            newMarginTop = currentMarginTop - remainder;
        }
        newMarginTop = Math.min(newMarginTop, 0);
        newMarginTop = Math.max(newMarginTop, -scrollContainer.value[0].scrollHeight + itemHeight);
        scrollIndex.value = parseInt(Math.abs((newMarginTop-itemHeight/2) / itemHeight)+'');
        scrollContainer.value[0].style.marginTop = `${newMarginTop}px`;
    }, 300);
}
function scrollToIndex(index: number) {
    if (!scrollContainer.value[0]) return;
    let itemHeight = 26.8125 * getRootFontSize();
    let newMarginTop = -index * itemHeight;
    scrollIndex.value = index;
    scrollContainer.value[0].style.marginTop = `${newMarginTop}px`;
}
function handleResize() {
    setTimeout(() => {
        updateMargins();
    },500)
}
onMounted(() => {
    window.addEventListener('resize', handleResize);
    exhibitionList.value = resetExhibitionList();
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
router.beforeEach((to, from, next) => {
    fromDetail.value = (from.name === 'Detail' && to.name === 'Exhibition');
    next();
});
onActivated(() => {
    if (!fromDetail.value) {
        exhibitionList.value = resetExhibitionList();
    }
})

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

      & .content {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

        & .bar {
          position: absolute;
          top: 200px;
          left: 0;
          width: 100%;
          height: 466px;
          background: linear-gradient(270deg, rgba(143, 87, 160, 0) 0%, rgba(143, 87, 160, 0.1) 100%);

        }

        & .design-info {
          position: absolute;
          left: 87px;
          top: 125px;
          width: 860px;
          font-size: 50px;

          & .design-no {
            font-size: 86px;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: 3px;
          }

          & .design-title-cn{
            font-size: 36px;
            letter-spacing: 0.05em;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 2px;
          }

          & .design-title-en{
            font-size: 24px;
            letter-spacing: 0.05em;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          & .design-keywords {
            display: flex;
            gap: 12px;
            margin: 20px 0;
            width: 860px;
            flex-wrap: wrap;

            & .design-keyword {
              border: 1px solid rgba(0, 0, 0, 0.85);
              font-size: 16px;
              padding: 3px 11px;
              border-radius: 4px;
              flex-shrink: 0;
            }
          }

          & .design-label {
            font-weight: 700;
            font-size: 20px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }

          & .design-authors {
            width: 860px;
            display: flex;
            align-items: flex-end;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 2px;

            & .design-author {
              margin-right: 12px;
              font-size: 18px;
              letter-spacing: 0.05em;
            }
          }

          & .design-desc {
            width: 860px;
            display: flex;
            margin-top: 20px;

            & .design-desc-text {

              & .design-desc-cn {
                width: 800px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 16px;
                letter-spacing: 0.05em;
              }

              & .design-desc-en {
                width: 800px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                letter-spacing: 0.05em;
              }
            }
          }
        }

        & .design-btn {
          font-size: 18px;
          letter-spacing: 0.05em;
          font-weight: 700;
          color: #fff;
          padding: 13px 40px;
          border-radius: 50px;
          background-color: #AF98B4;
          cursor: pointer;
          width: max-content;
          margin-top: 30px;


          &:hover {
            opacity: 0.7;
          }
        }

        & .intro {
          position: absolute;
          left: 87px;
          top: 257px;
          width: 920px;
          pointer-events: none;
        }

        & .scroll {
          position: absolute;
          right: 44px;
          top: 230px;
          width: 721px;
          transition: margin-top 0.3s ease-out;

          & .scroll-item{
            width: 721px;
            height: 405px;
            margin-bottom: 24px;

            & .first {
              height: 540px;
              width: 155px;
              margin-top: 280px;
              margin-left: 90px;
              transform: rotate(-90deg);
              transform-origin: top left;
            }

            & .scroll-cover {
              height: 405px;
              width: 721px;
              cursor: pointer;
            }
          }
        }
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
        z-index: 2;
      }

      & .name {
        position: absolute;
        top: 41px;
        left: 160px;
        width: 202px;
        font-size: 24px;
        transition: all 0.3s ease-in-out;
        z-index: 2;
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
        z-index: 2;
      }
    }

    & .status-3 {
      width: 60px !important;

      & .formula {
        left: 2px;
        top: 36px;
      }

      & .name {
        margin-top: 55px;
        left: 12px;
        font-size: 18px;
        letter-spacing: 5px;
        writing-mode: vertical-lr;
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
