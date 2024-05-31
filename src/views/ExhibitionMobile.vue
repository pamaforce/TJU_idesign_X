<template>
  <div class="exhibition">
    <swiper
      :direction="'vertical'"
      :centered-slides-bounds="true"
      :loop="true"
      :slides-per-view="5"
      :auto-height="true"
      :grab-cursor="true"
      @slide-change="onSlideChange"
      @swiper="setSwiperRef"
    >
      <template v-for="(item,i) in exhibitions" :key="i">
        <swiper-slide
          :class="{
            'active-1': i === (activeIndex + 2) % 7 ,
            'active-2': i === (activeIndex + 1) % 7 || i === (activeIndex + 3) % 7,
            'active-3': i === (activeIndex) % 7 || i === (activeIndex + 4) % 7
          }"
          @click="toExhibition(i)"
        >
          <div class="bg-div" :style="{...(i === (activeIndex + 2) % 7 ?{background:item.background_active}:{})}"></div>
          <div
            class="icon-div"
            :style="{
              background: exhibitions[(activeIndex + 2) % 7].background_active
            }"
          >
            <img :src="i === (activeIndex + 2) % 7 ?item.icon_active_mobile:item.icon_mobile" />
          </div>
          <div class="content">
            <div
              class="name"
              :style="{
                color: i === (activeIndex + 2) % 7 ?'white': item.color
              }"
            >
              {{ item.name }}
            </div>
            <img :src="i === (activeIndex + 2) % 7 ?item.formula_active_mobile:item.formula_mobile" class="formula" />
            <transition name="fade">
              <img v-if="i === (activeIndex + 2) % 7" :src="item.brief_mobile" class="brief" />
            </transition>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>
<script setup lang='ts'>
import {watch,ref} from 'vue';
import {useRouter} from 'vue-router';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {exhibitionList} from '@/utils/constant';
import 'swiper/css';
const exhibitions = ref(exhibitionList.slice(1, -1));
const activeIndex = ref(0);
const swiperRef = ref(null);
const router = useRouter();
const props = defineProps({
    notMobile: Boolean
})
function onSlideChange(swiper: { realIndex: number; }) {
    activeIndex.value = swiper.realIndex;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setSwiperRef(swiper: any) {
    swiperRef.value = swiper;
}

function toExhibition(index: number) {
    if (index !== (activeIndex.value + 2) % 7) return;
    router.push( `/exhibition/${exhibitions.value[index].id}`);
}
watch(() => props.notMobile, (newValue: boolean) => {
    if (newValue) {
        router.push('/exhibition')
    }
});
</script>
<style scoped>
.exhibition{
    width: 100%;
    height: calc(100vh - 44px);
    overflow: hidden;
    .swiper {
        width: 100%;
    height: calc(100vh - 44px);
    }
    .swiper-slide {
        opacity: 0.8;
        text-align: center;
        font-size: 18px;
        display: flex;
        transition: all 0.3s;
        height: 95px !important;
        position: relative;
        background: white;
        .icon-div {
            width: 75px;
            height: 100%;
            opacity: 0.8;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 52px;
                height: 52px;
            }
        }
        .bg-div {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            opacity: 0.8;
            z-index: 0;
        }
        .content {
            z-index: 1;
            .name {
                font-size: 16px;
                position: absolute;
                top: 50%;
                left: 91px;
                transform: translateY(-50%);
            }
            .formula {
                position: absolute;
                height: 25px;
                top: 50%;
                transform: translateY(-50%);
                left: 131px;
                margin-top: -1px;
            }
            .brief {
                position: absolute;
                left: 91px;
                top: 88px;
            }
        }
    }
    .active-1 {
        height: 254px !important;
        .content {
            z-index: 1;
            .name {
                transition: all 0.6s;
                font-size: 20px;
                margin-top: -111px;
                transform: translateY(0);
            }
            .formula {
                transition: all 0.6s;
                height: 28px;
                left: 91px;
                margin-top: -69px;
            }
        }
    }
    .active-2 {
        height: 140px !important;
    }
    .active-3 {
        height: 95px !important;
    }
}
/* fade */
.fade-enter-active, .fade-leave-active {
    transition: all 1s ease-in-out;
}
.fade-enter-from,.fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>
