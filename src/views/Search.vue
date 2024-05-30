<template>
  <div class="search">
    <img alt="back" src="@/assets/image/back.svg" class="back" @click="goBack" />
    <div class="input-wrapper">
      <input
        v-model="inputValue"
        type="text"
        class="custom-input"
        placeholder="请输入搜索关键词"
        @input="updateInputWidth"
        @keydown.enter="search"
      >
      <span ref="inputContent" class="input-content">{{ inputValue }}</span>
      <img
        v-if="inputValue"
        :style="{ left: iconStartLeft + 'px' }"
        src="@/assets/image/l.svg"
        alt="icon start"
        class="icon"
      />
      <img
        v-if="inputValue"
        :style="{ left: iconEndLeft + 'px' }"
        src="@/assets/image/r.svg"
        alt="icon end"
        class="icon"
      />
      <img
        v-if="inputValue"
        src="@/assets/image/clear.svg"
        alt="clear"
        class="clear-icon"
        @click="clearInput"
      />
    </div>

    <transition name="fadeInDown" mode="out-in">
      <div v-if="hasResult" class="results-content">
        <p class="result-count">
          共<span class="num">{{ resultCount }}</span>个搜索结果
        </p>
        <div class="results">
          <div v-for="item in resultList" :key="item.id" class="design" @click="toDetail(item)">
            <p class="design-title-cn" :title="item.post_title">
              {{ item.post_title }}
            </p>
            <p class="design-title-en" :title="item.post_title">
              {{ item.post_title_en }}
            </p>
            <div v-if="props.notMobile" class="design-authors">
              <span class="design-label">作者：</span>
              <span v-for="author in item.more.authors" :key="author.xuehao" class="design-author">
                {{ author.zh_names }}
              </span>
            </div>
            <div v-if="props.notMobile" class="design-authors">
              <span class="design-label-en">Designer：</span>
              <span v-for="author in item.more.authors" :key="author.xuehao" class="design-author-en">
                {{ author.en_names }}
              </span>
            </div>
            <div v-if="props.notMobile" class="design-desc">
              <span class="design-label">简介：</span>
              <div class="design-desc-text">
                <p class="design-desc-cn" :title="item.intro_zh">
                  {{ item.intro_zh }}
                </p>
                <p class="design-desc-en" :title="item.intro_en">
                  {{ item.intro_en }}
                </p>
              </div>
            </div>
            <div v-if="props.notMobile" class="design-keywords">
              <div v-for="key in item.keywords_zh.split('|')" :key="key" class="design-keyword">
                {{ key }}
              </div>
            </div>
            <img v-lazy="portalUrl+item.more.thumbnail" class="design-cover" alt="cover" />
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
            <div class="line-4"></div>
          </div>
        </div>
      </div>
      <div v-else class="hint">
        <div class="recent">
          <p class="label">
            最近搜索 <span class="clear" @click="clearRecentSearches">清除</span>
          </p>
          <div class="content">
            <p v-for="item in recentSearches" :key="item" @click="selectSearch(item)">
              {{ item }}
            </p>
          </div>
        </div>
        <div class="recommend">
          <p class="label">
            热门推荐
          </p>
          <div class="content">
            <p v-for="item in randomRecommendList" :key="item" @click="selectSearch(item)">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang='ts'>
import {computed, onMounted, onUnmounted, ref, watch} from 'vue';
import {useRouter} from 'vue-router';
import {nextTick} from 'vue';
import {getRootFontSize} from '@/utils/rem';
import {debounce} from '@/utils/debounce';
import service from '@/utils/request';
import {portalUrl} from '@/utils/constant';

const router = useRouter();
const inputValue = ref('');
const inputContent = ref<HTMLElement|null>(null);
const iconStartLeft = ref(0);
const iconEndLeft = ref(0);
const resultCount = ref(0);
const hasResult = ref(false);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resultList = ref<any>([]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const recommendList = ref<any>([]);
const recentSearches = ref(JSON.parse(localStorage.getItem('recentSearches') || '[]'));
const randomRecommendList = computed(() => {
    const shuffled = [...recommendList.value].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
});

const props = defineProps({
    notMobile: Boolean
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toDetail(item:any) {
    router.push( `/exhibition/${item.category_id}/${item.id}?from=/search`);
}
async function search() {
    resultList.value = [];
    if (inputValue.value === '') return;
    updateRecentSearches(inputValue.value);
    try {
        const responseByTitle = await service(`/portal/api_v1/get_search_in_exhibition?cate_ids=66,67,68,69,70,71&per_page=99999&keyword=${inputValue.value}&current_page=1`);
        const responseByKeyWord = await service(`/portal/api_v1/get_works_by_keywords?cate_ids=66,67,68,69,70,71&per_page=99999&keyword=${inputValue.value}`);
        const newData = [...responseByTitle.data.data, ...responseByKeyWord.data.data];
        const uniqueDataMap = new Map();
        for (const item of newData) {
            if (!uniqueDataMap.has(item.id)) {
                uniqueDataMap.set(item.id, item);
            }
        }

        const uniqueData = Array.from(uniqueDataMap.values());
        hasResult.value = true;
        resultList.value = uniqueData;
        resultCount.value = uniqueData.length;
    }
    catch (error) {
        console.error('搜索请求失败:', error);
    }
}
const debouncedSearch = debounce(search, 300);

async function getRecommend() {
    recommendList.value = [];
    try {
        const response = await service(`http://idesign.tju.edu.cn/portal/api_v1/get_keywords_by_key?cate_ids=66,67,68,69,70.71`);
        const newData = response.data;
        recommendList.value = newData;
    }
    catch (error) {
        console.error('推荐请求失败:', error);
    }
}
function goBack() {
    if (inputValue.value) clearInput();
    else router.push('/');
}

function clearInput() {
    inputValue.value = '';
}

function updateInputWidth() {
    nextTick(() => {
        if (!inputContent.value) return;
        const contentWidth = inputContent.value.offsetWidth;
        if(props.notMobile) iconStartLeft.value = -0.5 * getRootFontSize();
        else iconStartLeft.value = 0;
        if(props.notMobile) iconEndLeft.value = contentWidth + 0.7* getRootFontSize();
        else iconEndLeft.value = contentWidth + 0.9* getRootFontSize();

    });
}
function updateRecentSearches(searchTerm: string) {
    if (!recentSearches.value.includes(searchTerm)) {
        recentSearches.value = [searchTerm, ...recentSearches.value].slice(0, 10);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches.value));
    }
}

function selectSearch(item: string) {
    inputValue.value = item;
    search();
}

function clearRecentSearches() {
    recentSearches.value = [];
    localStorage.removeItem('recentSearches');
}

watch(inputValue, (newValue, oldValue) => {
    updateInputWidth();
    if (newValue !== oldValue) debouncedSearch();
    if (newValue === '') hasResult.value = false;
});
onMounted(() => {
    window.addEventListener('resize', updateInputWidth);
    getRecommend();
});

onUnmounted(() => {
    window.removeEventListener('resize', updateInputWidth);
});
</script>
<style scoped>
.search {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.back {
    width: 36px;
    height: 36px;
    position: absolute;
    left: 120px;
    top: 40px;
    cursor: pointer;
}
.input-wrapper {
    position: relative;
    margin-top: 150px;
    width: 100%;
    max-width: 1392px;
}
.custom-input {
    width: 100%;
    padding: 8px 10px;
    font-size: 18px;
    letter-spacing: 0.05em;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 2px solid rgba(0,0,0,0.85);
    box-sizing: border-box;
}
.input-content {
    font-size: 18px;
    letter-spacing: 0.05em;
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
}
.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 50px;
    width: 14px;
}
.clear-icon {
    cursor: pointer;
    position: absolute;
    right: 0;
    bottom: 6px;
    width: 24px;
    height: 24px;
}
.result-count {
    width: 1678px;
    text-align: start;
    font-size: 18px;
    letter-spacing: 0.05em;
    margin-top: 60px;
}
.num {
    font-size: 24px;
    letter-spacing: 0.05em;
    margin: 0 2px;
}
.hint {
    width: 1392px;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
}
.recent,.recommend {
    width: 550px;
}

.recent .label,.recommend .label{
    font-size: 18px;
    font-weight: 700;
}

.recent .content,.recommend .content{
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    gap: 12px 36px;
    padding: 27px 16px;
}
.recent .content p,.recommend .content p{
    cursor: pointer;
}
.clear {
    font-size: 12px;
    opacity: 0.8;
    cursor: pointer;
    display: none;
    font-weight: 400;
    margin-left: 12px;
}
.recent:hover .label .clear {
    display: inline;
}
.results {
    position: relative;
    width: 1678px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 334px);
    overflow: auto;
    margin-top: 60px;
}
.design {
    width: 100%;
    height: 275px;
    padding-left: 46px;
    padding-top: 64px;
    position: relative;
    cursor: pointer;
    margin-bottom: 24px;
}
.design-title-cn{
    width: 750px;
    font-size: 20px;
    letter-spacing: 0.05em;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
}
.design-title-en{
    width: 720px;
    font-size: 16px;
    letter-spacing: 0.05em;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 22px;
}
.design-label {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.05em;
    flex-shrink: 0;
}
.design-label-en {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.05em;
    flex-shrink: 0;
}
.design-authors {
    width: 950px;
    display: flex;
    align-items: flex-end;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
}
.design-author {
    margin-right: 12px;
    font-size: 18px;
    letter-spacing: 0.05em;
}
.design-author-en {
    margin-right: 12px;
    font-size: 14px;
    letter-spacing: 0.05em;
}
.design-desc {
    width: 950px;
    display: flex;
    margin-top: 22px;
}
.design-desc-cn {
    width: 890px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    letter-spacing: 0.05em;
}
.design-desc-en {
    width: 890px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    letter-spacing: 0.05em;
}
.design-keywords {
    position: absolute;
    right: 680px;
    top: 64px;
    width: 200px;
    display: flex;
    flex-direction: row-reverse;
    gap: 12px;
    flex-wrap: wrap;
}
.design-keyword {
    border: 1px solid rgba(0, 0, 0, 0.85);
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 4px;
    flex-shrink: 0;
}
.design-cover {
    width: 408px;
    height: 229px;
    position: absolute;
    right: 4px;
    bottom: 0;
}
.line-1 {
    position: absolute;
    left: 24px;
    top: 24px;
    border-radius: 0 2px 2px 0;
    width: 190px;
    height: 3px;
    transition: all 0.2s ease-in-out;
    background: #666;
}
.line-2 {
    position: absolute;
    left: 24px;
    top: 24px;
    border-radius: 0 0 2px 2px;
    width: 3px;
    height: 42px;
    transition: all 0.2s ease-in-out;
    background: #666;
}
.line-3 {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 3px;
    height: 0;
    transition: all 0.2s ease-in-out;
    background: #666;
    border-radius: 0 0 0 0;
}
.line-4 {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 0;
    height: 3px;
    transition: all 0.2s ease-in-out;
    background: #666;
    border-radius: 0 0 0 0;
}
.design:hover .line-1 {
    left: 32px;
    width: 160px;
    border-radius: 2px 2px 2px 2px;
}
.design:hover .line-2 {
    top: 32px;
    height: 30px;
    border-radius: 2px 2px 2px 2px;
}
.design:hover .line-3 {
    top: 0px;
    height: 18px;
    border-radius: 2px 2px 2px 2px;
}
.design:hover .line-4 {
    left: 0px;
    width: 18px;
    border-radius: 2px 2px 2px 2px;
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

@media screen and (max-width: 620px) {
    .back{
        width: 24px;
        height: 24px;
        left: 16px;
        top: 10px;
    }
    .input-wrapper {
        position: relative;
        margin-top: 44px;
        width: 343px;
    }
    .custom-input {
        width: 100%;
        padding: 8px 10px;
        font-size: 12px;
        border-bottom: 1.5px solid rgba(0,0,0,0.85);
    }
    .input-content {
        font-size: 12px;
        letter-spacing: 0.05em;
    }
    .icon {
        height: 25px;
        width: 7px;
    }
    .clear-icon {
        width: 16px;
        height: 16px;
    }
    .results-content {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .result-count {
        width: 327px;
        text-align: start;
        font-size: 14px;
        letter-spacing: 0.05em;
        margin-top: 26px;
    }
    .num {
        font-size: 18px;
        letter-spacing: 0.05em;
        margin: 0 2px;
    }
    .results {
        width: 338px;
        height: calc(100vh - 155px);
        margin-top: 26px;
    }
    .design {
        width: 100%;
        height: 69px;
        padding-left: 19px;
        padding-top: 20px;
        position: relative;
        cursor: pointer;
        margin-bottom: 12px;
    }
    .design-title-cn{
        width: 202px;
        font-size: 12px;
        letter-spacing: 0.05em;
        font-weight: 700;
        margin-bottom: 0;
    }
    .design-title-en{
        width: 202px;
        font-size: 10px;
        letter-spacing: 0.05em;
        font-weight: 700;
        margin-bottom: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: unset;
    }
    .design-cover {
        width: 91px;
        height: 51px;
        position: absolute;
        right: 0;
        bottom: 3px;
    }
    .line-1 {
        left: 12px;
        top: 12px;
        border-radius: 0;
        width: 32px;
        height: 2px;
    }
    .line-2 {
        left: 12px;
        top: 12px;
        border-radius: 0;
        width: 2px;
        height: 23px;
    }
    .line-3 {
        left: 12px;
        top: 12px;
        width: 2px;
        height: 0;
        border-radius: 0 ;
    }
    .line-4 {
        left: 12px;
        top: 12px;
        width: 0;
        height: 2px;
        border-radius: 0;
    }
    .design:hover .line-1 {
        left: 17px;
        width: 23px;
        border-radius: 0;
    }
    .design:hover .line-2 {
        top: 17px;
        height: 14px;
        border-radius: 0;
    }
    .design:hover .line-3 {
        top: 0px;
        height: 9px;
        border-radius: 0;
    }
    .design:hover .line-4 {
        left: 0px;
        width: 9px;
        border-radius: 0;
    }
    .hint {
        width: 327px;
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
        position: relative;
    }
    .recent,.recommend {
        width: 100%;
    }

    .recent .label,.recommend .label{
        font-size: 18px;
        font-weight: 700;
    }

    .recent .content,.recommend .content{
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        gap: 10px 16px;
        padding: 16px 0px;
        margin-bottom: 16px;
    }
    .recent .content p,.recommend .content p{
        cursor: pointer;
    }
    .clear {
        font-size: 11px;
        opacity: 0.8;
        cursor: pointer;
        display: inline;
        font-weight: 400;
        margin-left: 8px;
    }
}
</style>
