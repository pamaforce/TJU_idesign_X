<template>
  <div class="exhibition-detail">
    <img alt="back" src="@/assets/image/back.svg" class="back" @click="router.go(-1)" />
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
    <div class="btns">
      <div
        class="btn"
        :style="{
          border: '2px solid #4F90CA',
          color: '#4F90CA'
        }"
        @click="toExhibition(71)"
      >
        上一展区
      </div>
      <div
        class="btn"
        :style="{
          border: '2px solid #8F57A0',
          color: '#8F57A0'
        }"
        @click="toExhibition(66)"
      >
        下一展区
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {coverList,imgList,videoList} from '@/utils/constant';
import {vPreview} from 'vue3-image-preview';
const router = useRouter();
const XImgList = ref(imgList.reverse());
const videoSrc = ref('');
const show = ref(false);
const videoWidth = ref(0);
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import {getRootFontSize} from '@/utils/rem';
import {VideoPlayer} from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

function toExhibition(id: number) {
    router.push(`/exhibition/${id}`);
}
function updateSize() {
    videoWidth.value = 21.25 * getRootFontSize();
}
function showVideo(index: number) {
    updateSize();
    videoSrc.value = videoList[index];
    show.value = true;
}
</script>
<style scoped>
.exhibition-detail{
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    background-color: #f4f1f1;
    .back{
        position: absolute;
        cursor: pointer;
        width: 24px;
        height: 24px;
        left: 16px;
        top: 10px;
    }
     & .x-container{
            position: relative;
            width: 100%;
            margin-top: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;

            & .x-videos {
                width: 100%;
                height: 196px;
                margin-bottom: 20px;

                & .x-video {
                    width: 286px;
                    height: 161px;
                    position: relative;

                    & .x-cover {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            & .x-imgs {
                width: 327px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
                padding-bottom: 64px;
                & img {
                    width: 152px;
                    height: 85px;
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
                width: 340px;
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
    .btns {
        position: fixed;
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
