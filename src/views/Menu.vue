<template>
  <div class="menu">
    <img src="@/assets/image/mobile/close.svg" class="close" @click="router.go(-1)" />
    <p class="title" @click="router.push('/exhibition')">
      线上展厅
    </p>
    <p class="title-en" @click="router.push('/exhibition')">
      Online Exhibition Hall
    </p>
    <p class="title" @click="router.push('/graduate')">
      毕业生
    </p>
    <p class="title-en" @click="router.push('/graduate')">
      Graduate
    </p>
    <p class="title" @click="router.push('/sponsor')">
      年展组
    </p>
    <p class="title-en" @click="router.push('/sponsor')">
      Annual Exhibition Group
    </p>
  </div>
</template>
<script setup ts>
import {useRouter} from 'vue-router';
const router = useRouter();
</script>
<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 16px;

    & .close{
        align-self: flex-end;
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-bottom: 120px;
    }

    & .title {
        font-size: 18px;
        font-weight: 700;
    }

    & .title-en {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 64px;
    }
}
</style>
