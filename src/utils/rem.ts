import {DIVIDER_WIDTH} from './constant';
import {debounce} from './debounce';
function setRem(): void {
    const PC_WIDTH: number = 1920;
    const PE_WIDTH: number = 414;
    const SCALE_LARGE: number = PC_WIDTH / 16;
    const SCALE_SMALL: number = PE_WIDTH / 16;

    // 获取 HTML 文档宽度
    const htmlWidth: number = document.documentElement.clientWidth || document.body.clientWidth;
    // 获取 HTML 的 DOM 元素
    const htmlDom: HTMLElement = document.getElementsByTagName('html')[0];

    // 计算并设置根元素的字体大小
    const scale: number = htmlWidth+DIVIDER_WIDTH >= DIVIDER_WIDTH ? SCALE_LARGE : SCALE_SMALL;
    htmlDom.style.fontSize = `${htmlWidth / scale}px`;
}


export function getRootFontSize(): number {
    // 获取HTML的DOM元素
    const htmlDom: HTMLElement = document.getElementsByTagName('html')[0];
    // 获取根元素的字体大小，并解析为数字
    const fontSizeString: string = window.getComputedStyle(htmlDom).fontSize;
    // 将fontSizeString（如 "16px"）转换为纯数字
    return parseFloat(fontSizeString);
}

// 初始化
setRem();

// 窗口大小变化时重新设置 rem，使用防抖优化
window.onresize = debounce(setRem, 250);
