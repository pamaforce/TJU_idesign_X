function setRem(): void {
    const PC_WIDTH: number = 1920;
    const PE_WIDTH: number = 414;
    const SCALE_LARGE: number = PC_WIDTH / 16;
    const SCALE_SMALL: number = PE_WIDTH / 16;
    const DIVIDER_WIDTH: number = 620;

    // 获取 HTML 文档宽度
    const htmlWidth: number = document.documentElement.clientWidth || document.body.clientWidth;
    // 获取 HTML 的 DOM 元素
    const htmlDom: HTMLElement = document.getElementsByTagName('html')[0];

    // 计算并设置根元素的字体大小
    const scale: number = htmlWidth >= DIVIDER_WIDTH ? SCALE_LARGE : SCALE_SMALL;
    htmlDom.style.fontSize = `${htmlWidth / scale}px`;
}

// 防抖函数，使用具体的函数类型
function debounce(func: () => void, wait: number): () => void {
    let timeout: number | undefined = undefined;
    return function(): void {
        const later = () => {
            timeout = undefined;
            func();
        };

        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(later, wait);
    };
}

// 初始化
setRem();

// 窗口大小变化时重新设置 rem，使用防抖优化
window.onresize = debounce(setRem, 250);