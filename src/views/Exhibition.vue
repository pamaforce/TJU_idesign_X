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
        :style="{marginLeft:item.status===2?(index===5?(marginTypeA+'px'): (index===6?(marginTypeB+'px'):(index===7?(marginTypeC+'px'):0))):0,cursor: item.status===2?'pointer':'auto',...(item.status===2&&index===7?{marginTop:-scrollTop+'px'}:{})}"
        alt="formula"
        class="formula"
        @click.stop="handleBack(index)"
      >
      <p class="name" :style="{color:hoverItem===index?'#fff':item.color, marginLeft:item.status===2? ((index===5)?(margins[index]+marginTypeA + 'px'):(index===6?(margins[index]+marginTypeB+'px'):((index===7)?(margins[index]+marginTypeC + 'px'):(margins[index] + 'px')))):0,cursor: item.status===2?'pointer':'auto',top: item.status===3?margins[index]+'px':'',...(item.status===2&&index===7?{marginTop:-scrollTop+'px'}:{})}" @click.stop="handleBack(index)">
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
        :style="{marginLeft:item.status===2?(index===5?(marginTypeA+'px'): (index===6?(marginTypeB+'px'):(index===7?(marginTypeC+'px'):0))):0,cursor: item.status===2?'pointer':'auto',...(item.status===2&&index===7?{marginTop:-scrollTop+'px'}:{})}"
        @click.stop="handleBack(index)"
      >
      <div
        v-if="item.status === 2"
        class="content"
        :class="{'enable-scroll': currentExhibition === 7}"
        @scroll="handleScroll"
        @wheel="handleWheel"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <template v-if="index===1">
          <div class="bar"></div>
          <transition :name="transitionName" mode="out-in">
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
                  <div v-for="key in getKeywordsList(designData[scrollIndex-1])" :key="key" class="design-keyword">
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
                  <span class="design-label-en">Designer：</span>
                  <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author-en">
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
            <div v-if="scrollIndex >= 0" ref="scrollContainer" class="scroll">
              <div class="scroll-item" @click="scrollToIndex(0)">
                <img :src="item.formula" class="first">
              </div>
              <div v-for="(design,i) in designData" :key="design.id" class="scroll-item">
                <img v-lazy="portalUrl+design.more.thumbnail" class="scroll-cover" @click="scrollToIndex(i+1)">
              </div>
            </div>
          </transition>
        </template>
        <template v-else-if="index===2">
          <div class="bar-2"></div>
          <transition name="fadeInDown" mode="out-in">
            <div v-if="scrollIndex >= 0" ref="scrollContainer" class="scroll-2">
              <transition :name="transitionName" mode="out-in">
                <div
                  v-if="scrollIndex===0"
                  class="scroll-item scroll-border"
                  style="opacity: 1"
                >
                  <img
                    :src="
                      item.formula"
                    class="first"
                    @click="scrollToIndex(0)"
                  >
                </div>
                <div v-else class="blank"></div>
              </transition>
              <div v-for="(design,i) in designData" :key="design.id">
                <div
                  class="scroll-item"
                  :class="{ 'design-active': i === scrollIndex - 1,'design-inactive':i<=scrollIndex+2&&i>=scrollIndex-1,}"
                  @click="scrollToIndex(i+1)"
                >
                  <transition :name="transitionName">
                    <div v-show="i==scrollIndex-1||i==scrollIndex+1||i===scrollIndex" :key="i" class="actual-content">
                      <p class="design-title-cn" :title="design.post_title">
                        {{ design.post_title }}
                      </p>
                      <p class="design-title-en" :title="design.post_title">
                        {{ design.post_title_en }}
                      </p>
                      <div class="design-keywords">
                        <div v-for="key in getKeywordsList(design)" :key="key" :title="key" class="design-keyword">
                          {{ key }}
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </transition>
          <transition name="fadeInDown" mode="out-in">
            <img v-if="scrollIndex===0" key="intro-2" class="intro-2" src="@/assets/image/intro_2.svg">
          </transition>
          <transition :name="transitionName" mode="out-in">
            <div v-if="scrollIndex > 0" :key="designData[scrollIndex-1].id" class="design-info-2">
              <p class="design-no">
                {{ scrollIndex.toString().padStart(2, '0') }}
              </p>

              <img v-lazy="portalUrl+designData[scrollIndex-1].more.thumbnail" class="design-cover" @click="toDetail(scrollIndex-1)">
              <div class="design-authors">
                <span class="design-label">作者：</span>
                <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author">
                  {{ author.zh_names }}
                </span>
              </div>
              <div class="design-authors">
                <span class="design-label-en">Designer：</span>
                <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author-en">
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
          </transition>
        </template>
        <template v-else-if="index===3">
          <div class="bar-3"></div>
          <transition name="fadeInDown" mode="out-in">
            <template v-if="scrollIndex === 0">
              <img key="intro-3" class="intro-3" src="@/assets/image/intro_3.svg">
            </template>
          </transition>
          <transition :name="transitionName" mode="out-in">
            <template v-if="scrollIndex > 1">
              <div :key="designData[scrollIndex-2].id" class="design-info-3">
                <p class="design-title-cn" :title="designData[scrollIndex-2].post_title">
                  {{ designData[scrollIndex-2].post_title }}
                </p>
                <p class="design-title-en" :title="designData[scrollIndex-2].post_title">
                  {{ designData[scrollIndex-2].post_title_en }}
                </p>
                <div class="design-keywords">
                  <div v-for="key in getKeywordsList(designData[scrollIndex-2])" :key="key" class="design-keyword">
                    {{ key }}
                  </div>
                </div>
                <div class="design-authors">
                  <span class="design-label">作者：</span>
                  <span v-for="author in designData[scrollIndex-2].more.authors" :key="author.xuehao" class="design-author">
                    {{ author.zh_names }}
                  </span>
                </div>
                <div class="design-authors">
                  <span class="design-label-en">Designer：</span>
                  <span v-for="author in designData[scrollIndex-2].more.authors" :key="author.xuehao" class="design-author-en">
                    {{ author.en_names }}
                  </span>
                </div>
                <div class="design-desc">
                  <span class="design-label">简介：</span>
                  <div class="design-desc-text">
                    <p class="design-desc-cn" :title="designData[scrollIndex-2].intro_zh">
                      {{ designData[scrollIndex-2].intro_zh }}
                    </p>
                    <p class="design-desc-en" :title="designData[scrollIndex-2].intro_en">
                      {{ designData[scrollIndex-2].intro_en }}
                    </p>
                  </div>
                </div>
                <div class="design-btn" @click="toDetail(scrollIndex-2)">
                  作品详情
                </div>
              </div>
            </template>
          </transition>
          <transition name="fadeInDown" mode="out-in">
            <div v-if="scrollIndex >= 0" ref="scrollContainer" class="scroll-3">
              <div class="scroll-item scroll-formula" @click="scrollToIndex(0)">
                <img :src="item.formula" class="first">
              </div>
              <div v-for="(design,i) in designData" :key="design.id" class="scroll-item" :class="{ 'scroll-left': i % 2 == 1}">
                <div class="scroll-content">
                  <div class="scroll-title">
                    <p class="scroll-no">
                      {{ (i+1).toString().padStart(2, '0') }}
                    </p>
                    <p class="scroll-title-cn" :title="design.post_title">
                      {{ design.post_title }}
                    </p>
                    <p class="scroll-title-en" :title="design.post_title">
                      {{ design.post_title_en }}
                    </p>
                  </div>
                  <div>
                    <img v-if="i>0" v-lazy="portalUrl+designData[i-1].more.thumbnail" class="scroll-cover" @click="scrollToIndex(i+1)">
                  </div>
                </div>
              </div>
              <div key="extra" class="scroll-item" :class="{ 'scroll-left': designData.length % 2 == 1}">
                <div class="scroll-content">
                  <div class="scroll-title">
                  </div>
                  <div>
                    <img v-lazy="portalUrl+designData[designData.length-1].more.thumbnail" class="scroll-cover" @click="scrollToIndex(designData.length+1)">
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </template>
        <template v-else-if="index===4">
          <div class="bar-4"></div>
          <transition name="fadeInLeft" mode="out-in">
            <template v-if="scrollIndex === 0">
              <img key="intro-4" class="intro-4" src="@/assets/image/intro_4.svg">
            </template>
          </transition>
          <transition :name="transitionName" mode="out-in">
            <template v-if="scrollIndex > 0">
              <div :key="designData[scrollIndex-1].id" class="design-info-4">
                <div class="design-authors">
                  <span class="design-label">作者：</span>
                  <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author">
                    {{ author.zh_names }}
                  </span>
                </div>
                <div class="design-authors">
                  <span class="design-label-en">Designer：</span>
                  <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author-en">
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
          <transition name="fadeInLeft" mode="out-in">
            <div v-if="scrollIndex >= 0" ref="scrollContainer" class="scroll-4">
              <div class="scroll-item" @click="scrollToIndex(0)">
                <img :src="item.formula" class="first">
              </div>
              <div v-for="(design,i) in designData" :key="design.id" class="scroll-item">
                <p class="scroll-no">
                  {{ (i+1).toString().padStart(2, '0') }}
                </p>
                <p class="scroll-title-cn" :title="design.post_title">
                  {{ design.post_title }}
                </p>
                <p class="scroll-title-en" :title="design.post_title">
                  {{ design.post_title_en || 'Nothing' }}
                </p>
                <div class="design-keywords">
                  <div v-for="key in getKeywordsList(design)" :key="key" :title="key" class="design-keyword">
                    {{ key }}
                  </div>
                </div>
                <img v-lazy="portalUrl+design.more.thumbnail" class="scroll-cover" @click="scrollToIndex(i+1)">
              </div>
            </div>
          </transition>
        </template>
        <template v-else-if="index===5">
          <div class="bar-5"></div>
          <transition :name="transitionName" mode="out-in">
            <template v-if="scrollIndex === 0">
              <img key="intro-5" class="intro-5" src="@/assets/image/intro_5.svg">
            </template>
            <template v-else-if="scrollIndex > 0">
              <div :key="designData[scrollIndex-1].id" class="design-info-5">
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
                  <div v-for="key in getKeywordsList(designData[scrollIndex-1])" :key="key" class="design-keyword">
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
                  <span class="design-label-en">Designer：</span>
                  <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author-en">
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
            <div v-if="scrollIndex >= 0" ref="scrollContainer" class="scroll-5">
              <div class="scroll-item" @click="scrollToIndex(0)">
                <img :src="item.formula" class="first">
              </div>
              <div v-for="(design,i) in designData" :key="design.id" class="scroll-item">
                <img v-lazy="portalUrl+design.more.thumbnail" class="scroll-cover" @click="scrollToIndex(i+1)">
              </div>
            </div>
          </transition>
        </template>
        <template v-else-if="index===6">
          <div class="bar-6"></div>
          <transition name="fadeInDown" mode="out-in">
            <div v-if="scrollIndex >= 0" ref="scrollContainer" class="scroll-6">
              <transition :name="transitionName" mode="out-in">
                <div
                  v-if="scrollIndex===0"
                  class="scroll-item scroll-border"
                  style="opacity: 1"
                >
                  <img
                    :src="
                      item.formula"
                    class="first"
                    @click="scrollToIndex(0)"
                  >
                </div>
                <div v-else class="blank"></div>
              </transition>
              <div v-for="(design,i) in designData" :key="design.id">
                <div
                  class="scroll-item"
                  :class="{ 'design-active': i === scrollIndex - 1,'design-inactive':i<=scrollIndex+2&&i>=scrollIndex-1,}"
                  @click="scrollToIndex(i+1)"
                >
                  <transition :name="transitionName">
                    <div v-show="i==scrollIndex-1||i==scrollIndex+1||i===scrollIndex" :key="i" class="actual-content">
                      <p class="design-title-cn" :title="design.post_title">
                        {{ design.post_title }}
                      </p>
                      <p class="design-title-en" :title="design.post_title">
                        {{ design.post_title_en }}
                      </p>
                      <div class="design-keywords">
                        <div v-for="key in getKeywordsList(design)" :key="key" :title="key" class="design-keyword">
                          {{ key }}
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </transition>
          <transition name="fadeInDown" mode="out-in">
            <img v-if="scrollIndex===0" key="intro-6" class="intro-6" src="@/assets/image/intro_6.svg">
          </transition>
          <transition :name="transitionName" mode="out-in">
            <div v-if="scrollIndex > 0" :key="designData[scrollIndex-1].id" class="design-info-6">
              <p class="design-no">
                {{ scrollIndex.toString().padStart(2, '0') }}
              </p>

              <img v-lazy="portalUrl+designData[scrollIndex-1].more.thumbnail" class="design-cover" @click="toDetail(scrollIndex-1)">
              <div class="design-authors">
                <span class="design-label">作者：</span>
                <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author">
                  {{ author.zh_names }}
                </span>
              </div>
              <div class="design-authors">
                <span class="design-label-en">Designer：</span>
                <span v-for="author in designData[scrollIndex-1].more.authors" :key="author.xuehao" class="design-author-en">
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
          </transition>
        </template>
        <template v-else-if="index===7">
          <transition name="fadeInDown">
            <template v-if="scrollIndex === 0">
              <img key="intro-7" class="intro-7" src="@/assets/image/intro_7.svg">
            </template>
          </transition>
          <transition name="fadeInDown">
            <template v-if="scrollIndex === 0">
              <div class="x-container">
                <swiper
                  :effect="'coverflow'"
                  :grab-cursor="true"
                  :centered-slides="true"
                  :slides-per-view="'auto'"
                  :loop="true"
                  slide-to-clicked-slide
                  :coverflow-effect="{
                    depth: 0,
                    modifier:1,
                    scale: 0.8,
                    rotate:0,
                    slideShadows:false
                  }"
                  :pagination="{
                    clickable:true
                  }"
                  :autoplay="{
                    delay: 5000,
                  }"
                  :modules="[EffectCoverflow,Pagination]"
                  class="x-videos"
                >
                  <swiper-slide v-for="(video,i) in coverList" :key="i" class="x-video">
                    <img :src="video" class="x-cover" alt="cover" />
                    <img class="useVideo-class" src="@/assets/image/play.svg" @click="showVideo(i)" />
                  </swiper-slide>
                </swiper>
                <div class="x-imgs">
                  <img
                    v-for="(src,i) in XImgList"
                    :key="i"
                    v-preview:name="1"
                    v-lazy="src"
                  >
                </div>

                <div v-if="show" class="video-class" @click="show = false">
                  <div class="main-video-class" @click.stop>
                    <video-player
                      :src="videoSrc"
                      controls
                      :width="videoWidth"
                      class="video-player vjs-custom-skin vjs-big-play-centered"
                    />
                  </div>
                </div>
              </div>
            </template>
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {onMounted, onUnmounted, ref, nextTick, type ComponentOptionsBase, type ComponentPublicInstance,onActivated, watch, computed} from 'vue';
import {exhibitionList as rawExhibitionList, type Exhibition, portalUrl,imgList,videoList,coverList} from '@/utils/constant';
import {getRootFontSize} from '@/utils/rem';
import require from '@/utils/require';
import {useRouter} from 'vue-router';
import service from '@/utils/request';
import {useTriggerStore} from '@/stores/triggerStore';
import {vPreview} from 'vue3-image-preview';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import {VideoPlayer} from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
const triggerStore = useTriggerStore();
const XImgList = ref(imgList.reverse());
const show = ref(false);
const videoWidth = ref(0);
const videoSrc = ref('');
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
const marginTypeC = ref<number>(0);
const scrollIndex = ref<number>(-1);
const scrollTop = ref<number>(0);
const hoverItem = ref(-1);
const currentExhibition = ref(0);
const itemHeightsRem = [26.8125,26.8125,11.375,16,34.625,26.8125,11.375,11.375,11.375,11.375];
let itemList = '';
let snapTimer: number | undefined = undefined;
const props = defineProps({
    notMobile: Boolean
})
function getClass(statue: number) {
    return `status-${statue}`;
}
watch(() => triggerStore.triggered, (newValue: boolean) => {
    if (newValue) {
        handleInit();
        triggerStore.resetTrigger(); // 执行后重置触发状态
    }
});
watch(() => props.notMobile, (newValue: boolean) => {
    if (!newValue) {
        router.push('/exhibition_mobile')
    }
});
function updateSize() {
    videoWidth.value = 75 * getRootFontSize();
}
function showVideo(index: number) {
    updateSize();
    videoSrc.value = videoList[index];
    show.value = true;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getKeywordsList(item:any) {
    const keywords = item.keywords_zh || '';
    return keywords.split(/[|｜]/).filter((k: string) => k.trim() !== '');
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
    scrollIndex.value = -1;
    for(let i = 0; i < exhibitionList.value.length; i++) {
        if(i === index) {
            scrollTop.value = 0;
            currentExhibition.value = i;
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
    marginTypeA.value = 79.625 * getRootFontSize();
    marginTypeB.value = 87.3125 * getRootFontSize();
    marginTypeC.value = 88.9375 * getRootFontSize();
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
    return require(`${item.iconAnimationPath}/frame_${item.currentFrame}-min.png`);
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
        handleInit();
    }
    else {
        handleClick(index);
    }
}
function toDetail(index: number) {
    router.push( `/exhibition/${designData.value[index].category_id}/${designData.value[index].id}?list=${itemList}&current=${index}`);
}
const lastDirection = ref('down');
function scrollContent(direction: 'down' | 'up') {
    if (!scrollContainer.value[0]) return;
    let itemHeight = itemHeightsRem[currentExhibition.value] * getRootFontSize();
    const SCROLL_STEP = itemHeight;
    let newMarginTop = parseInt(getComputedStyle(scrollContainer.value[0]).marginTop) || 0;
    if(currentExhibition.value === 4) newMarginTop = parseInt(getComputedStyle(scrollContainer.value[0]).marginLeft) || 0;
    lastDirection.value = direction;
    newMarginTop += (direction === 'down' ? -SCROLL_STEP : SCROLL_STEP);

    // 确保滚动不会超出容器边界
    if (currentExhibition.value === 4) newMarginTop = Math.max(Math.min(newMarginTop, 0), -scrollContainer.value[0].scrollWidth + itemHeight);
    else newMarginTop = Math.max(Math.min(newMarginTop, 0), -scrollContainer.value[0].scrollHeight + itemHeight);

    if(currentExhibition.value===4) scrollContainer.value[0].style.marginLeft = `${newMarginTop}px`;
    else scrollContainer.value[0].style.marginTop = `${newMarginTop}px`;
    // 吸附逻辑
    if (snapTimer) {
        clearTimeout(snapTimer);
    }

    snapTimer = setTimeout(() => {
        snapToClosestItem(newMarginTop, itemHeight);
    }, 300);
}

function snapToClosestItem(currentMarginTop:number, itemHeight:number) {
    let newMarginTop = currentMarginTop;
    const remainder = currentMarginTop % itemHeight;

    if (Math.abs(remainder) > itemHeight / 2) {
        newMarginTop -= remainder + itemHeight;
    }
    else {
        newMarginTop -= remainder;
    }

    if (currentExhibition.value === 4) newMarginTop = Math.max(Math.min(newMarginTop, 0), -scrollContainer.value[0].scrollWidth + itemHeight);
    else newMarginTop = Math.max(Math.min(newMarginTop, 0), -scrollContainer.value[0].scrollHeight + itemHeight);

    if (currentExhibition.value === 3 && Math.abs(Math.ceil((newMarginTop - itemHeight / 2) / itemHeight)) === 1) {
        if (lastDirection.value === 'down') {
            scrollIndex.value= Math.abs(Math.ceil((newMarginTop - itemHeight / 2) / itemHeight))+1;
            newMarginTop -= itemHeight;
        }
        else {
            scrollIndex.value= Math.abs(Math.ceil((newMarginTop - itemHeight / 2) / itemHeight))-1;
            newMarginTop += itemHeight;
        }
    }
    else {
        scrollIndex.value = Math.abs(Math.ceil((newMarginTop - itemHeight / 2) / itemHeight));
    }

    if(currentExhibition.value===4) scrollContainer.value[0].style.marginLeft = `${newMarginTop}px`;
    else scrollContainer.value[0].style.marginTop = `${newMarginTop}px`;
}
function handleWheel(event: WheelEvent) {
    scrollContent(event.deltaY > 0 ? 'down' : 'up');
}
let touchStartY = 0;
let touchEndY = 0;
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event: TouchEvent) {
    touchStartY = event.touches[0].clientY;
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event: TouchEvent) {
    touchEndY = event.touches[0].clientY;
    touchEndX = event.touches[0].clientX;
    event.preventDefault(); // 可以选择阻止默认滚动行为
}

function handleTouchEnd() {
    if (currentExhibition.value === 4) {
        if (touchEndX < touchStartX) {
            scrollContent('down');
        }
        else if (touchEndX > touchStartX) {
            scrollContent('up');
        }
    }
    else {
        if (touchEndY < touchStartY) {
            scrollContent('down');
        }
        else if (touchEndY > touchStartY) {
            scrollContent('up');
        }
    }
}
function handleKeyDown(event: KeyboardEvent) {
    if (currentExhibition.value === 4) {
        if (event.key === 'ArrowRight') {
            scrollContent('down');
        }
        else if (event.key === 'ArrowLeft') {
            scrollContent('up');
        }
    }
    else {
        if (event.key === 'ArrowDown') {
            scrollContent('down');
        }
        else if (event.key === 'ArrowUp') {
            scrollContent('up');
        }
    }
}
function scrollToIndex(index: number) {
    if (!scrollContainer.value[0]) return;
    if (index !== 0 && scrollIndex.value === index) {
        if (currentExhibition.value === 3) {
            toDetail(index - 2);
        }
        else {
            toDetail(index - 1);
        }
        return;
    }
    let itemHeight = itemHeightsRem[currentExhibition.value] * getRootFontSize();
    let newMarginTop = -index * itemHeight;
    scrollIndex.value = index;
    if(currentExhibition.value===4) scrollContainer.value[0].style.marginLeft = `${newMarginTop}px`;
    else scrollContainer.value[0].style.marginTop = `${newMarginTop}px`;
}
function handleResize() {
    setTimeout(() => {
        updateMargins();
        updateSize();
        if (scrollIndex.value > 0) {
            scrollContent('down');
            scrollContent('up');
        }
    },500)
}
function handleInit() {
    exhibitionList.value = resetExhibitionList();
    scrollIndex.value = -1;
}
function handleScroll(event: Event) {
    const target = event.target as HTMLElement;
    scrollTop.value = target.scrollTop;
}
onMounted(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    handleInit();
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('keydown', handleKeyDown);
});
router.beforeEach((to, from, next) => {
    fromDetail.value = (from.name === 'Detail' && to.name === 'Exhibition');
    next();
});
onActivated(() => {
    if (!fromDetail.value) {
        handleInit();
    }
    if (!props.notMobile) {
        router.push('/exhibition_mobile')
    }
})
const lastScrollIndex = ref(0);

watch(scrollIndex, (newVal, oldVal) => {
    lastScrollIndex.value = oldVal;
});

const transitionName = computed(() => {
    if (currentExhibition.value === 2) return scrollIndex.value > lastScrollIndex.value ? 'fadeInDownHalf' : 'fadeInUpHalf';
    else if (currentExhibition.value === 4) return scrollIndex.value > lastScrollIndex.value ? 'fadeInLeft' : 'fadeInRight';
    else return scrollIndex.value > lastScrollIndex.value ? 'fadeInDown' : 'fadeInUp';
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

      & .content {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

        /* 展区1 */
        & .bar {
          position: absolute;
          top: 200px;
          left: 0;
          width: 100%;
          height: 466px;
          background: linear-gradient(270deg, rgba(143, 87, 160, 0) 0%, rgba(143, 87, 160, 0.1) 100%);
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
          transition: all 0.3s ease-out;
          display: flex;
          flex-direction: column;

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
          & .design-label-en {
            font-weight: 700;
            font-size: 18px;
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
              margin-right: 24px;
              font-size: 18px;
              letter-spacing: 0.05em;
            }

            & .design-author-en {
              margin-right: 12px;
              font-size: 14px;
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
        }

        /* 展区2 */
        & .bar-2 {
          position: absolute;
          top: 210px;
          left: 0;
          width: 896px;
          height: 182px;
          background: linear-gradient(270deg, rgba(147, 201, 132, 0) 0%, rgba(147, 201, 132, 0.1) 100%);
        }
        & .intro-2 {
          position: absolute;
          right: 116px;
          width: 845px;
          top: 270px;
          pointer-events: none;
        }
        & .scroll-2 {
          position: absolute;
          left: 82px;
          top: 210px;
          width: 697px;
          transition: all 0.3s ease-out;
          display: flex;
          flex-direction: column;

          & .blank{
            width: 697px;
            height: 112px;
            margin: 35px 0;
          }
          & .scroll-border{
            border-left: 6px solid rgba(0, 0, 0, 0.85);
            padding-left: 48px;
          }
          & .scroll-item{
            cursor: pointer;
            width: 697px;
            height: 112px;
            margin: 35px 0;

            & .first {
              width: 112px;
              height: 421px;
              margin-top: 112px;
              transform: rotate(-90deg);
              transform-origin: top left;
            }
            & .design-title-cn{
              font-size: 20px;
              letter-spacing: 0.05em;
              font-weight: 700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 1px;
            }

            & .design-title-en{
              font-size: 16px;
              letter-spacing: 0.05em;
              font-weight: 700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: 8px;
            }

            & .design-keywords {
              display: flex;
              gap: 12px;
              margin-top: 22px;
              width: 660px;
              flex-wrap: nowrap;

              & .design-keyword {
                border: 1px solid rgba(0, 0, 0, 0.85);
                font-size: 14px;
                padding: 3px 12px;
                border-radius: 4px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
          & .design-inactive {
            opacity: 0.5;
          }
          & .design-active {
            opacity: 1;
            .design-title-cn{
              font-size: 26px;
            }
            .design-title-en{
              font-size: 20px;
              margin-top: 2px;
            }

            & .design-keywords {
              margin-top: 12px;

              & .design-keyword {
                font-size: 16px;
                padding: 3px 11px;
              }
            }
          }
          & .actual-content {
            border-left: 6px solid rgba(0, 0, 0, 0.85);
            padding-left: 48px;
          }
        }
        & .design-info-2 {
          position: relative;
          width: 866px;
          left: 896px;
          margin-top: 56px;
          display: flex;
          flex-direction: column;

          & .design-no {
            font-size: 64px;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: 11px;
            width: 866px;
            text-align: right;
          }

          & .design-cover {
            width: 100%;
            height: 486px;
            margin-bottom: 36px;
            cursor: pointer;
          }

          & .design-authors {
            width: 795px;
            display: flex;
            align-items: flex-end;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 1px;

            & .design-author {
              margin-right: 24px;
              font-size: 18px;
              letter-spacing: 0.05em;
            }

            & .design-author-en {
              margin-right: 14px;
              font-size: 14px;
              letter-spacing: 0.05em;
            }
          }
          & .design-label {
            font-weight: 700;
            font-size: 20px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }
          & .design-label-en {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }
          & .design-desc {
            width: 860px;
            display: flex;
            margin-top: 20px;

            & .design-desc-text {

              & .design-desc-cn {
                width: 795px;
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
            & .design-btn {
              align-self:flex-end;
              font-size: 18px;
              letter-spacing: 0.05em;
              font-weight: 700;
              color: #fff;
              padding: 13px 40px;
              border-radius: 50px;
              background-color: #93C984;
              cursor: pointer;
              width: max-content;
              margin-top: 30px;

              &:hover {
                opacity: 0.7;
              }
            }
        }

        /* 展区3 */
        & .bar-3 {
          position: absolute;
          top: 200px;
          left: 0;
          width: 100%;
          height: 453px;
          background: linear-gradient(270deg, rgba(247, 135, 74, 0) 0%, rgba(247, 135, 74, 0.1) 86%, rgba(247, 135, 74, 0) 100%);
        }
        & .intro-3 {
          position: absolute;
          left: 56px;
          top: 175px;
          width: 682px;
          pointer-events: none;
        }
        & .scroll-3 {
          position: absolute;
          right: 136px;
          top: 230px;
          width: 912px;
          transition: all 0.3s ease-out;
          display: flex;
          flex-direction: column;

          & .scroll-item{
            width: 912px;
            height: 256px;
            position: relative;

            & .first {
              height: 502px;
              width: 155px;
              margin-top: 280px;
              margin-left: 420px;
              transform: rotate(-90deg);
              transform-origin: top left;
            }
            & .scroll-content {
                display: flex;

                & .scroll-title {
                    width: 456px;
                    height: 256px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                    position: relative;
                    padding: 10px;

                    & .scroll-no{
                        font-size: 92px;
                        letter-spacing: 0.05em;
                    }
                    & .scroll-title-cn{
                      font-size: 20px;
                      letter-spacing: 0.05em;
                      font-weight: 700;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      margin-bottom: 1px;
                      width: 100%;
                    }
                    & .scroll-title-en{
                      font-size: 16px;
                      letter-spacing: 0.05em;
                      font-weight: 700;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 100%;
                    }
                }
                & .scroll-cover {
                  height: 256px;
                  width: 456px;
                  cursor: pointer;
                }
            }
          }
          & .scroll-formula{
            margin-bottom: 100px;
          }
          & .scroll-left{
            & .scroll-content {
                flex-direction: row-reverse;

                & .scroll-title {
                    align-items: flex-end;
                }
                & .scroll-title-cn{
                    text-align: right;
                }
                & .scroll-title-en{
                    text-align: right;
                }
            }
          }
        }
        & .design-info-3 {
          position: absolute;
          left: 87px;
          top: 245px;
          width: 590px;
          font-size: 50px;

          & .design-title-cn{
            font-size: 30px;
            letter-spacing: 0.05em;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 1px;
          }

          & .design-title-en{
            font-size: 18px;
            letter-spacing: 0.05em;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          & .design-keywords {
            display: flex;
            gap: 12px;
            margin-top: 18px;
            margin-bottom: 24px;
            width: 590px;
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
          & .design-label-en {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }

          & .design-authors {
            width: 590px;
            display: flex;
            align-items: flex-end;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 1px;

            & .design-author {
              margin-right: 24px;
              font-size: 18px;
              letter-spacing: 0.05em;
            }

            & .design-author-en {
              margin-right: 14px;
              font-size: 16px;
              letter-spacing: 0.05em;
            }
          }

          & .design-desc {
            width: 860px;
            display: flex;
            margin-top: 20px;

            & .design-desc-text {

              & .design-desc-cn {
                width: 524px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 16px;
                letter-spacing: 0.05em;
              }

              & .design-desc-en {
                width: 524px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                letter-spacing: 0.05em;
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
              background-color: #F7874A;
              cursor: pointer;
              width: max-content;
              margin-top: 30px;


              &:hover {
                opacity: 0.7;
              }
          }
        }

        /* 展区4 */
        & .bar-4 {
          position: absolute;
          top: 0;
          left: 623.5px;
          width: 553px;
          height: calc(100% - 80px);
          background: linear-gradient(180deg, rgba(240, 88, 131, 0) 0%, rgba(240, 88, 131, 0.1) 46%, rgba(240, 88, 131, 0) 100%);
        }
        & .intro-4 {
          position: absolute;
          left: 56px;
          top: 175px;
          width: 505px;
          pointer-events: none;
        }
        & .scroll-4 {
          position: absolute;
          left: 641px;
          top: 110px;
          height: 508px;
          transition: all 0.3s ease-out;
          display: flex;

          & .scroll-item{
            width: 518px;
            height: 508px;
            margin-right: 36px;

            & .first {
              height: 473px;
              width: 99px;
              margin-top: 345px;
              margin-left: 25px;
              transform: rotate(-90deg);
              transform-origin: top left;
            }

            & .scroll-no {
              font-size: 64px;
              font-weight: 700;
              letter-spacing: 0.05em;
              margin-bottom: 10px;
            }

            & .scroll-title-cn{
              font-size: 20px;
              letter-spacing: 0.05em;
              font-weight: 700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 1px;
              width: 518px;
            }

            & .scroll-title-en{
              font-size: 16px;
              letter-spacing: 0.05em;
              font-weight: 700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 518px;
            }

            & .design-keywords {
              display: flex;
              gap: 12px;
              width: 518px;
              flex-wrap: nowrap;
              margin-bottom: 24px;
              margin-top: 12px;

              & .design-keyword {
                border: 1px solid rgba(0, 0, 0, 0.85);
                font-size: 16px;
                padding: 3px 11px;
                border-radius: 4px;
                flex-shrink: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            & .scroll-cover{
                width: 518px;
                height: 291px;
            }
          }
        }
        & .design-info-4 {
          position: absolute;
          left: 641px;
          top: 640px;
          width: 518px;

          & .design-label {
            font-weight: 700;
            font-size: 20px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }
          & .design-label-en {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }

          & .design-authors {
            width: 518px;
            display: flex;
            align-items: flex-end;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 1px;

            & .design-author {
              margin-right: 24px;
              font-size: 18px;
              letter-spacing: 0.05em;
            }

            & .design-author-en {
              margin-right: 14px;
              font-size: 16px;
              letter-spacing: 0.05em;
            }
          }

          & .design-desc {
            width: 518px;
            display: flex;
            margin-top: 16px;

            & .design-desc-text {

              & .design-desc-cn {
                width: 452px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 16px;
                letter-spacing: 0.05em;
              }

              & .design-desc-en {
                width: 452px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                letter-spacing: 0.05em;
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
              background-color: #F05883;
              cursor: pointer;
              width: max-content;
              margin-top: 24px;


              &:hover {
                opacity: 0.7;
              }
          }
        }

        /* 展区5 */
        & .bar-5 {
          position: absolute;
          top: 200px;
          left: 0;
          width: 100%;
          height: 466px;
          background: linear-gradient(270deg, rgba(252, 193, 67, 0) 0%, rgba(252, 193, 67, 0.1) 100%);
        }
        & .intro-5 {
          position: absolute;
          right: 62px;
          top: 255px;
          width: 838px;
          pointer-events: none;
        }
        & .scroll-5 {
          position: absolute;
          left: 44px;
          top: 230px;
          width: 721px;
          transition: all 0.3s ease-out;
          display: flex;
          flex-direction: column;

          & .scroll-item{
            width: 721px;
            height: 405px;
            margin-bottom: 24px;

            & .first {
              height: 743px;
              width: 155px;
              margin-top: 280px;
              margin-left: 12px;
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
        & .design-info-5 {
          position: absolute;
          right: 62px;
          top: 125px;
          width: 855px;
          font-size: 50px;
          display: flex;
          flex-direction: column;

          & .design-no {
            align-self: flex-end;
            font-size: 86px;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: 3px;
            margin-right: 48px;
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
          & .design-label-en {
            font-weight: 700;
            font-size: 18px;
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
              margin-right: 24px;
              font-size: 18px;
              letter-spacing: 0.05em;
            }

            & .design-author-en {
              margin-right: 12px;
              font-size: 14px;
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

          & .design-btn {
              font-size: 18px;
              letter-spacing: 0.05em;
              font-weight: 700;
              color: #fff;
              padding: 13px 40px;
              border-radius: 50px;
              background-color: #FCC143;
              cursor: pointer;
              width: max-content;
              margin-top: 30px;


              &:hover {
                opacity: 0.7;
              }
          }
        }

        /* 展区6 */
        & .bar-6 {
          position: absolute;
          top: 210px;
          right: 0;
          width: 896px;
          height: 182px;
          background: linear-gradient(90deg, rgba(223, 237, 237, 0.05) 0%, rgba(79, 144, 202, 0.1) 100%);
        }
        & .intro-6 {
          position: absolute;
          left: 56px;
          width: 845px;
          top: 270px;
          pointer-events: none;
        }
        & .scroll-6 {
          position: absolute;
          right: 125px;
          top: 210px;
          width: 697px;
          transition: all 0.3s ease-out;
          display: flex;
          flex-direction: column;

          & .blank{
            width: 697px;
            height: 112px;
            margin: 35px 0;
          }
          & .scroll-border{
            border-right: 6px solid rgba(0, 0, 0, 0.85);
            padding-right: 48px;
          }
          & .scroll-item{
            cursor: pointer;
            width: 697px;
            height: 112px;
            margin: 35px 0;
            display: flex;
            flex-direction: column;

            & .first {
              width: 112px;
              height: 289px;
              margin-top: 112px;
              margin-right: 241px;
              transform: rotate(-90deg);
              transform-origin: top left;
              align-self: flex-end;
            }
            & .design-title-cn{
              font-size: 20px;
              letter-spacing: 0.05em;
              font-weight: 700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 1px;
              width: 660px;
              text-align: right;
            }

            & .design-title-en{
              font-size: 16px;
              letter-spacing: 0.05em;
              font-weight: 700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: 8px;
              width: 660px;
              text-align: right;
            }

            & .design-keywords {
              display: flex;
              gap: 12px;
              margin-top: 22px;
              width: 660px;
              flex-wrap: nowrap;
              justify-content: flex-end;

              & .design-keyword {
                border: 1px solid rgba(0, 0, 0, 0.85);
                font-size: 14px;
                padding: 3px 12px;
                border-radius: 4px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
          & .design-inactive {
            opacity: 0.5;
          }
          & .design-active {
            opacity: 1;
            .design-title-cn{
              font-size: 26px;
            }
            .design-title-en{
              font-size: 20px;
              margin-top: 2px;
            }

            & .design-keywords {
              margin-top: 12px;

              & .design-keyword {
                font-size: 16px;
                padding: 3px 11px;
              }
            }
          }
          & .actual-content {
            border-right: 6px solid rgba(0, 0, 0, 0.85);
            padding-right: 48px;
          }
        }
        & .design-info-6 {
          position: relative;
          width: 853px;
          left: 56px;
          margin-top: 56px;
          display: flex;
          flex-direction: column;

          & .design-no {
            font-size: 64px;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: 11px;
            width: 866px;
          }

          & .design-cover {
            width: 100%;
            height: 486px;
            margin-bottom: 36px;
            cursor: pointer;
          }

          & .design-authors {
            width: 795px;
            display: flex;
            align-items: flex-end;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 1px;

            & .design-author {
              margin-right: 24px;
              font-size: 18px;
              letter-spacing: 0.05em;
            }

            & .design-author-en {
              margin-right: 14px;
              font-size: 14px;
              letter-spacing: 0.05em;
            }
          }
          & .design-label {
            font-weight: 700;
            font-size: 20px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }
          & .design-label-en {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.05em;
            flex-shrink: 0;
          }
          & .design-desc {
            width: 860px;
            display: flex;
            margin-top: 20px;

            & .design-desc-text {

              & .design-desc-cn {
                width: 795px;
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
            & .design-btn {
              align-self:flex-end;
              font-size: 18px;
              letter-spacing: 0.05em;
              font-weight: 700;
              color: #fff;
              padding: 13px 40px;
              border-radius: 50px;
              background-color: #4F90CA;
              cursor: pointer;
              width: max-content;
              margin-top: 30px;

              &:hover {
                opacity: 0.7;
              }
            }
        }

        /* 展区7 */
        & .intro-7 {
          position: absolute;
          left: 77px;
          width: 940px;
          top: 65px;
          pointer-events: none;
        }
        & .x-container{
            position: relative;
            width: 100%;
            margin-top: 460px;
            display: flex;
            flex-direction: column;
            align-items: center;

            & .x-videos {
                width: 1688px;
                height: 370px;
                margin-bottom: 62px;

                & .x-video {
                    width: 585px ;
                    height: 328px;
                    position: relative;

                    & .x-cover {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            & .x-imgs {
                width: 1688px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 32px;
                padding-bottom: 64px;
                & img {
                    width: 395px;
                    height: 221px;
                    object-fit: cover;
                }
            }
            & .video-class {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 9999;
              background-color: rgba(0, 0, 0, 0.6);

              & .main-video-class {
                position: relative;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 1200px;
              }
            }
            & .useVideo-class {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-25px, -25px);
              width: 50px;
              height: 50px;
              cursor: pointer;
            }
        }
      }
      & .enable-scroll {
        overflow: auto;
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


/* fadeInDown */
.fadeInDown-enter-active, .fadeInDown-leave-active {
    transition: all 0.3s ease-in-out;
}
.fadeInDown-enter-from {
    opacity: 0;
    transform: translateY(30px);
}
.fadeInDown-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
.fadeInDown-enter-to, .fadeInDown-leave-from {
    opacity: 1;
    transform: translateY(0);
}

/* fadeInUp */
.fadeInUp-enter-active, .fadeInUp-leave-active {
    transition: all 0.3s ease-in-out;
}
.fadeInUp-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}
.fadeInUp-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.fadeInUp-enter-to, .fadeInUp-leave-from {
    opacity: 1;
    transform: translateY(0);
}

/* fadeInDownHalf */
.fadeInDownHalf-enter-active, .fadeInDownHalf-leave-active {
    transition: all 0.2s ease-in-out;
}
.fadeInDownHalf-enter-from{
    opacity: 0;
    transform: translateY(30px);
}
.fadeInDownHalf-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
.fadeInDownHalf-enter-to, .fadeInDownHalf-leave-from {
    opacity: 0.5;
    transform: translateY(0);
}

/* fadeInUpHalf */
.fadeInUpHalf-enter-active, .fadeInUpHalf-leave-active {
    transition: all 0.2s ease-in-out;
}
.fadeInUpHalf-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}
.fadeInUpHalf-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.fadeInUpHalf-enter-to, .fadeInUpHalf-leave-from {
    opacity: 0.5;
    transform: translateY(0);
}

/* fadeInRight */
.fadeInRight-enter-active, .fadeInRight-leave-active {
    transition: all 0.3s ease-in-out;
}
.fadeInRight-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.fadeInRight-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.fadeInRight-enter-to, .fadeInRight-leave-from {
    opacity: 1;
    transform: translateX(0);
}

/* fadeInLeft */
.fadeInLeft-enter-active, .fadeInLeft-leave-active {
    transition: all 0.3s ease-in-out;
}
.fadeInLeft-enter-from {
    opacity: 0;
    transform: translateX(30px);
}
.fadeInLeft-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
.fadeInLeft-enter-to, .fadeInLeft-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
