<template>
  <div class="exhibition">
    <div
      v-for="(item,index) in exhibitionList"
      :key="index"
      class="item"
      :class="getClass(item.status)"
      :style="{background: hoverItem===index?item.background_active:(item.status===3?item.background_default:item.background), animationDelay: `${index * 0.1}s`}"
      @mouseover="handleMouseOver(index)"
      @mouseleave="handleMouseLeave"
      @click="handleClick(index)"
    >
      <img :src="hoverItem===index?item.formula_active:(item.status===3?item.formula_default:item.formula)" alt="formula" class="formula">
      <p class="name" :style="{color:hoverItem===index?'#fff':item.color}">
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
      <img :src="hoverItem===index?item.icon_active:item.icon" alt="icon" class="icon">
    </div>
  </div>
</template>
<script setup lang='ts'>
import {ref} from 'vue';
import {exhibitionList as rawExhibitionList,type Exhibition} from '@/utils/constant';
const exhibitionList = ref<Exhibition[]>(rawExhibitionList);
const hoverItem = ref(-1);
function getClass(statue: number) {
  return `status-${statue}`;
}
function handleMouseOver(index: number) {
  if(exhibitionList.value[index].status !== 1 && exhibitionList.value[index].status !== 3) return;
  hoverItem.value = index;
}
function handleMouseLeave() {
  hoverItem.value = -1;
}
function handleClick(index: number) {
  if(exhibitionList.value[index].status !== 1 && exhibitionList.value[index].status !== 3) return;
  hoverItem.value = -1;
  if (index === 0) index = exhibitionList.value.length - 2;
  if (index === exhibitionList.value.length - 1) index = 1;
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
  }
}
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
        right: 7px;
        top: 60px;
        transition: all 0.3s ease-in-out;
      }

      & .name {
        width: 202px;
        font-size: 36px;
        margin-bottom: 40px;
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
    }
    
    & .status-3 {
      width: 60px !important;

      & .formula {
        right: 2px;
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