<template>
  <div class="exhibition-detail">
    <div
      class="background-1"
      :style="{backgroundColor: neighbors.current.background_default}"
    ></div>
    <img v-if="currentIndex>0&&designData[currentIndex-1]" :src="portalUrl+designData[currentIndex-1].more.thumbnail" class="background-img" />
    <div class="background-2"></div>
    <img alt="back" src="@/assets/image/back.svg" class="back" @click="goBack" />
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
      :modules="[EffectCoverflow]"
      class="designs"
      @slide-change="onSlideChange"
    >
      <swiper-slide class="design" :style="{background:neighbors.current.color_mobile}">
        <p class="first-name">
          {{ neighbors.current.name }}
        </p>
        <img :src="neighbors.current.formula_active_mobile" class="first-formula">
        <div class="first-intro">
          <img :src="neighbors.current.intro_mobile">
        </div>
      </swiper-slide>
      <swiper-slide v-for="(item,i) in designData" :key="i" class="design">
        <img v-preview:name="route.params.category_id" v-lazy="portalUrl+item.more.thumbnail" class="design-cover" :alt="item.post_title">
        <p class="design-title-cn" :title="item.post_title">
          {{ item.post_title }}
        </p>
        <p class="design-title-en" :title="item.post_title">
          {{ item.post_title_en }}
        </p>
        <div class="design-keywords">
          <div v-for="key in getKeywordsList(item)" :key="key" class="design-keyword">
            {{ key }}
          </div>
        </div>
        <div class="design-authors">
          <span class="design-label">作者：</span>
          <div>
            <span v-for="author in item.more.authors" :key="author.xuehao" class="design-author">
              {{ author.zh_names }}
            </span>
          </div>
        </div>
        <div class="design-authors">
          <span class="design-label-en">Designer：</span>
          <div>
            <span v-for="author in item.more.authors" :key="author.xuehao" class="design-author-en">
              {{ author.en_names }}
            </span>
          </div>
        </div>
        <img src="@/assets/image/mobile/go.svg" class="design-go" @click="toDetail(item,i)" />
      </swiper-slide>
    </swiper>
    <div class="btns">
      <div
        class="btn"
        :style="{
          border: '2px solid ' + neighbors.previous.color_mobile,
          color: neighbors.previous.color_mobile
        }"
        @click="toExhibition(neighbors.previous.id)"
      >
        上一展区
      </div>
      <div
        class="btn"
        :style="{
          border: '2px solid ' + neighbors.next.color_mobile,
          color: neighbors.next.color_mobile
        }"
        @click="toExhibition(neighbors.next.id)"
      >
        下一展区
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {portalUrl, type Exhibition} from '@/utils/constant';
import service from '@/utils/request';
import {onActivated, onMounted, ref, watch} from 'vue';
import {useRouter, useRoute, onBeforeRouteLeave} from 'vue-router';
import {exhibitionList} from '@/utils/constant';
import {vPreview} from 'vue3-image-preview';
const exhibitions = ref(exhibitionList.slice(1, -1));
const router = useRouter();
const route = useRoute();
const currentIndex = ref(0);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const designData: any = ref([]);
const neighbors = ref<{ current:Exhibition,next: Exhibition; previous: Exhibition }>({current:exhibitions.value[0],next:exhibitions.value[0],previous:exhibitions.value[0]})
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import {EffectCoverflow} from 'swiper/modules';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routeHistory = ref<any>([]);
onBeforeRouteLeave((to, from) => {
    routeHistory.value.push(from);
});
function goBack()  {
    for (let i = routeHistory.value.length - 2; i >= 0; i--) {
        if (routeHistory.value[i].name !== 'ExhibitionDetailXMobile'&&routeHistory.value[i].name !== 'ExhibitionDetailMobile') {
            router.push(routeHistory.value[i].fullPath);
            return;
        }
    }
    router.push('/exhibition_mobile');
}
function onSlideChange(swiper: { realIndex: number; }) {
    currentIndex.value = swiper.realIndex;
}
let itemList = '';
function fetchList() {
    designData.value = [];
    service( `/portal/api_v1/get_cates_lists?per_page=9999&current_page=1&category_id=${route.params.category_id}`).then((data) => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toDetail(item:any,index:number) {
    router.push( `/exhibition/${item.category_id}/${item.id}?list=${itemList}&current=${index}&from=/exhibition/${item.category_id}`);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getKeywordsList(item:any) {
    const keywords = item.keywords_zh || '';
    return keywords.split(/[|｜]/).filter((k: string) => k.trim() !== '');
}
function toExhibition(id: number) {
    router.push(`/exhibition/${id}`);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function findNeighbors(exhibitions: any, targetId: number) {

    const len = exhibitions.value.length;

    let currentIndex = -1;

    for (let i = 0; i < len; i++) {
        if (exhibitions.value[i].id === targetId) {
            currentIndex = i;
            break;
        }
    }


    if (currentIndex === -1) return {
        current: exhibitions.value[0],
        previous: exhibitions.value[0],
        next: exhibitions.value[0]
    };

    const prevIndex = (currentIndex - 1 + len) % len;
    const nextIndex = (currentIndex + 1) % len;

    return {
        current: exhibitions.value[currentIndex],
        previous: exhibitions.value[prevIndex],
        next: exhibitions.value[nextIndex]
    };
}
function handleInit() {
    fetchList();
    neighbors.value = findNeighbors(exhibitions, parseInt(route.params.category_id as string)||0);
}
watch(()=>route.params.category_id,()=>{
    handleInit()
})
const fromDetail = ref(false)
router.beforeEach((to, from, next) => {
    fromDetail.value = (from.name === 'Detail' && to.name === 'ExhibitionDetailMobile');
    next();
});
onActivated(() => {
    if (!fromDetail.value) {
        handleInit();
    }
})
onMounted(() => {
    handleInit();
})
</script>
<style scoped>
.exhibition-detail{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #f4f1f1;
    .background-1{
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .background-img{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
    }
    .background-2{
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(25px);
    }
    .back{
        position: absolute;
        cursor: pointer;
        width: 24px;
        height: 24px;
        left: 16px;
        top: 10px;
    }
    .designs{
        margin-top: 120px;
        .design {
            .first-name {
                font-size: 24px;
                margin-left: 24px;
                margin-top: 24px;
                font-weight: 700;
                color: white;
                align-self: flex-start;
            }
            .first-formula {
                height: 36px;
                align-self: flex-start;
                margin-left: 24px;
            }
            .first-intro {
                margin-top: 12px;
                width: 260px;
                height: calc(100% - 120px);
                overflow: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 229px;
                }
            }
            width: 277px;
            height: 419px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            border-radius: 15px;
            position: relative;
            .image-preview-el {
                width: 251px;
                height: 134px;
                margin-top: 13px;
                border-radius: 10px;
                margin-bottom: 17px;
            }
            & .design-go {
                width: 24px;
                height: 24px;
                position: absolute;
                right: 20px;
                bottom: 24px;
                cursor: pointer;
            }
            & .design-title-cn{
              font-size: 14px;
              letter-spacing: 0.05em;
              font-weight: 700;
              width: 240px;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            & .design-title-en{
              font-size: 10px;
              letter-spacing: 0.05em;
              width: 240px;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            & .design-keywords {
              display: flex;
              gap: 8px;
              margin: 10px 0;
              width: 240px;
              flex-wrap: wrap;
              & .design-keyword {
                border: 1px solid rgba(0, 0, 0, 0.85);
                font-size: 12px;
                padding: 3px 7px;
                border-radius: 4px;
                flex-shrink: 0;
              }
            }
            & .design-label {
              font-weight: 700;
              font-size: 12px;
              letter-spacing: 0.05em;
              flex-shrink: 0;
            }
            & .design-label-en {
              font-weight: 700;
              font-size: 10px;
              letter-spacing: 0.05em;
              flex-shrink: 0;
            }
            & .design-authors {
              width: 240px;
              margin-bottom: 1px;
              display: flex;
              align-items: flex-start;
              & div {
                display: flex;
                flex-wrap: wrap;
              }
              & .design-author {
                margin-right: 8px;
                font-size: 12px;
                letter-spacing: 0.05em;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              & .design-author-en {
                margin-right: 8px;
                font-size: 10px;
                letter-spacing: 0.05em;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
        }
    }
    .btns {
        position: absolute;
        width: 100%;
        bottom: 100px;
        left: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 38px;
        .btn {
            width: 119px;
            height: 44px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }
    }
}
</style>
