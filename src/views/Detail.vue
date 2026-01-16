<template>
  <div class="detail-class">
    <div class="back-class noSelect" @click="toBack">
      <div></div>
      <span>返回</span>
    </div>
    <p class="title-class">
      {{ data.post_title }}
    </p>
    <p class="title-en-class">
      {{ data.post_title_en }}
    </p>
    <div class="row-1">
      <div>
        <div class="row-2">
          <div>
            <div class="t1-class">
              <div class="t1-label-class">
                <p>指导教师</p>
                <p>Supervisor</p>
              </div>
              <div class="t1-content-class">
                <p>{{ data.tutors_zh }}</p>
                <p>{{ data.tutors_en }}</p>
              </div>
            </div>
          </div>
          <div class="center-class">
            <div style="display: inline-block">
              <div class="t1-class">
                <div class="t1-label-class">
                  <p>课程名称</p>
                  <p>Course Name</p>
                </div>
                <div class="t1-content-class">
                  <p>{{ data.course_zh }}</p>
                  <p>{{ data.course_en }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="t1-class">
            <div class="t1-label-class">
              <p>设计师</p>
              <p>Designer</p>
            </div>
            <div class="t1-content-class authors-class">
              <div
                v-for="(item, i) in data.authors"
                :key="i"
                class="author-class"
              >
                <img
                  v-preview:name="1"
                  :src="portalUrl + item.url"
                />
                <p>{{ item.zh_names }}</p>
                <p>{{ item.en_names }}</p>
                <p>{{ item.grade }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-class">
        <div style="display: inline-block">
          <div class="t1-class">
            <div class="t1-label-class">
              <p>关键词</p>
              <p>Keywords</p>
            </div>
            <div class="t1-content-class">
              <p v-for="item in data.keywords_zh" :key="item">
                {{ item }}
              </p>
              <p v-for="item in data.keywords_en" :key="item">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="width-flex">
      <div class="width-class">
        <img
          v-preview:name="1"
          :src="data.thumbnail"
          style="width: 100%"
        />
      </div>
      <div
        class="intro-class width-class"
      >
        <p>{{ data.intro_zh }}</p>
        <p>{{ data.intro_en }}</p>
      </div>
    </div>
    <div class="photos-class">
      <div class="flex-class">
        <div style="position: relative">
          <div
            v-show="data.isVideo"
            style="position: absolute; width: 100%; height: 100%"
            @click="showVideo"
          >
            <img class="useVideo-class" src="@/assets/image/play.svg" />
          </div>
          <img
            v-preview:name="1"
            :src="portalUrl + data.photos[0].url"
            style="width: 100%"
          />
        </div>
        <img
          v-preview:name="1"
          :src="portalUrl + data.photos[1].url"
          style="width: 100%"
        />
      </div>
      <div class="great-class">
        <img
          v-preview:name="1"
          :src="portalUrl + data.photos[2].url"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="flex-class">
        <img
          v-preview:name="1"
          :src="portalUrl + data.photos[3].url"
          style="width: 100%"
        /><img
          v-preview:name="1"
          :src="portalUrl + data.photos[4].url"
          style="width: 100%"
        />
      </div>
    </div>
    <div class="copyright-class">
      <p>
        本页面的所有内容均为原创。对未经许可擅自使用者，我们保留追究其法律责任的权利。
      </p>
      <p>
        We own the intelligent rights for all original substance in this page
        and hold the right to investigate legal responsibilities to who use it
        without permission.
      </p>
    </div>
    <div class="fork-class noSelect">
      <div
        :class="{ 'fork-icon-class-1': true, 'disable-class': !canPre }"
        @click="navigate(-1)"
      ></div>
      <div class="fork-text-class" @click="toBack">
        返回作品列表
      </div>
      <div
        :class="{ 'fork-icon-class-2': true, 'disable-class': !canNext }"
        @click="navigate(1)"
      ></div>
    </div>
    <div v-if="show" class="video-class" @click="show = false">
      <div class="main-video-class" @click.stop>
        <video-player
          :src="data.src"
          controls
          :width="videoWidth"
          class="video-player vjs-custom-skin vjs-big-play-centered"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch, onMounted, onUnmounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getRootFontSize} from '@/utils/rem';
import service from '@/utils/request.js';
import {portalUrl} from '@/utils/constant';
import {vPreview} from 'vue3-image-preview';
import {VideoPlayer} from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
const props = defineProps({
    list: {
        type: String,
        default: ''
    },
    from: {
        type: String,
        default: ''
    },
    current: {
        type: String,
        default: ''
    },
    notMobile: Boolean
});
const show = ref(false);
const canPre = ref(false);
const canNext = ref(false);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data = ref<any>({photos: [{url: ''}, {url: ''}, {url: ''}, {url: ''}, {url: ''}],
    authors: []});
const route = useRoute();
const router = useRouter();

const videoWidth = ref(0);
function toBack() {
    router.push(props.from || '/exhibition');
}

function navigate(offset:number) {
    if ((offset === -1 && canPre.value) || (offset === 1 && canNext.value)) {
        const arr = props.list.split('_');
        const newIndex = parseInt(props.current) + offset;
        router.push({
            path: `/exhibition/${route.params.category_id}/${arr[newIndex]}`,
            query: {
                list: props.list,
                current: newIndex,
                from: props.from
            }
        });
    }
}

async function findDetail() {
    if (route.params.category_id && route.params.id) {
        const response = await service(`/portal/api_v1/get_design_detail?category_id=${route.params.category_id}&id=${route.params.id}`);
        const newData = response.data;
        data.value = {
            ...data.value,
            post_title: newData.post_title,
            post_title_en: newData.post_title_en,
            course_zh: newData.course_zh,
            course_en: newData.course_en,
            keywords_zh: newData.keywords_zh?.split('|'),
            keywords_en: newData.keywords_en?.split('|'),
            intro_zh: newData.intro_zh,
            intro_en: newData.intro_en,
            tutors_zh: newData.tutors_zh,
            tutors_en: newData.tutors_en,
            thumbnail: portalUrl + newData.more.thumbnail,
            photos: newData.more.photos || [],
            authors: newData.more.authors || [],
            isVideo: newData.more.files?.length > 0,
            src: portalUrl + newData.more.files?.[0]?.url
        }
    }
}

function showVideo() {
    show.value = true;
}

function initData() {
    findDetail();
    canPre.value = props.list !== undefined && props.current !== undefined && parseInt(props.current) > 0;
    canNext.value = props.list !== undefined && props.current !== undefined && parseInt(props.current) < props.list.split('_').length - 2;
}
function updateSize() {
    videoWidth.value = 75 * getRootFontSize();
}

watch(() => route.path, () => {
    initData();
});

function handleResize() {
    setTimeout(() => {
        updateSize();
    },500)
}
onMounted(() => {
    initData();
    updateSize();
    window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<style scoped>
p {
  text-emphasis: none !important;
  white-space: unset !important;
  overflow: unset !important;
  font-weight: 300;
  color: #262626;
}
* {
  overflow-y: hidden !important;
}
.detail-class {
  padding: 50px 150px;
  overflow-y: visible;
}
.disable-class {
  opacity: 0.6;
  cursor: not-allowed !important;
}
.fork-class {
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fork-class div {
  border: 1px solid #4e4e4e;
  border-radius: 5px;
  cursor: pointer;
}
.fork-icon-class-1 {
  width: 32px;
  height: 32px;
  background-image: url("@/assets/image/left.webp");
  background-size: 24px 24px;
  background-position: center center;
  background-repeat: no-repeat;
}
.fork-icon-class-2 {
  width: 32px;
  height: 32px;
  background-image: url("@/assets/image/right.webp");
  background-size: 24px 24px;
  background-position: center center;
  background-repeat: no-repeat;
}
.fork-text-class {
  padding: 5px 25px;
  margin: 0 25px;
  font-size: 20px;
}
.title-class {
  font-size: 36px;
  letter-spacing: 3px;
  margin-bottom: 5px;
}
.title-en-class {
  margin-bottom: 40px;
  letter-spacing: 1px;
  font-size: 24px;
}
.t1-class {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 15px;
}
.t1-label-class {
  vertical-align: top;
  min-width: 100px;
}
.t1-label-class p {
  white-space: nowrap;
  margin-bottom: 0;
  font-size: 20px;
  line-height: 32px;
  text-align: right;
}
.t1-content-class {
  margin: 0 15px;
  padding-left: 15px;
  border-left: 2px solid #4e4e4e;
  text-align: left;
}
.t1-content-class p {
  white-space: nowrap;
  margin-bottom: 0;
  font-size: 18px;
  line-height: 32px;
}
.authors-class {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.author-class {
  margin: 0 10px;
  margin-bottom: 10px;
  text-align: center;
  width: 85px;
}
.author-class img {
  width: 85px;
  height: 85px;
}
.author-class p {
  white-space: normal;
  word-wrap: break-word;
  margin-bottom: 0;
  width: 85px;
}
.right-class {
  text-align: right;
}
.center-class {
  text-align: center;
}
.offset-2-class {
  padding: 12px;
  margin-left: 12px;
}
.intro-class p {
  margin-left: 20px;
  text-align: justify;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 5px;
}
.flex-class {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36%;
}
.great-class {
  width: 27%;
}
.photos-class {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 12px 0;
}
.copyright-class {
  margin-top: 15px;
  display: block;
}
.copyright-class p {
  margin-bottom: 5px;
  text-align: center;
  font-size: 20px;
}
.useVideo-class {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-25px, -25px);
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.video-class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
}
.main-video-class {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
}
.back-class {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 125px;
  cursor: pointer;
}
.back-class div {
  width: 25px;
  height: 25px;
  border-radius: 50% 50%;
  background-image: url("@/assets/image/back.webp");
  background-size: 18px 18px;
  background-position: 3px center;
  background-repeat: no-repeat;
  background-color: #4e4e4e;
  margin-right: 7px;
}
.back-class span {
  font-size: 22px;
  line-height: 24px;
}
.row-1 {
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: 20px;
}
.row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.width-class {
  width: 50%;
}
.width-flex {
  display: flex;
  flex-wrap: nowrap;
}
@media screen and (max-width: 620px) {
  .width-class {
    width: 100%;
  }
  .width-flex {
    flex-wrap: wrap;
  }
  .row-1 {
    grid-template-columns: 1fr;
  }
  .row-2 {
    grid-template-columns: 1fr;
  }
  .copyright-class p {
    font-size: 14px;
  }
  .detail-class {
    padding: 20px;
    overflow-y: visible;
    background-color: #f8f8f8;
    padding-top: 20px;
  }
  .title-class {
    font-size: 22px;
  }
  .title-en-class {
    font-size: 16px;
  }
  .intro-class p {
    margin-left: 0px;
    padding-left: 0;
    font-size: 14px;
  }
  .author-class {
    width: 55px;
  }
  .author-class p {
    width: 55px;
    font-size: 10px;
  }
  .author-class img {
    width: 55px;
    height: 55px;
  }
  .right-class,
  .center-class {
    text-align: left;
  }
  .offset-1-class {
    margin-left: 21px;
  }
  .offset-2-class {
    margin-left: 32px;
  }
  .offset-3-class {
    padding: 12px;
    margin-left: 16px;
  }
  .t1-label-class {
    min-width: 90px;
  }
  .t1-label-class p {
    font-size: 14px;
  }
  .t1-content-class p {
    font-size: 11px;
    line-height: 21px;
  }
  .photos-class {
    flex-wrap: wrap;
  }
  .flex-class {
    display: block;
    width: calc(100vw - 30px);
    margin: 0;
  }
  .great-class {
    width: calc(100vw - 30px);
    height: calc(177.78vw - 53.33px);
    margin: 5px 0;
  }
  .main-video-class {
    width: 100vw;
    height: 56.25vw;
  }
  .fork-text-class {
    font-size: 15px;
  }
  .back-class {
    margin-bottom: 10px;
    width: 125px;
  }
  .back-class div {
    width: 20px;
    height: 20px;
    border-radius: 50% 50%;
    background-image: url("@/assets/image/back.webp");
    background-size: 10px 10px;
    background-position: 5px center;
    background-repeat: no-repeat;
    background-color: #4e4e4e;
    margin-right: 5px;
  }
  .back-class span {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
