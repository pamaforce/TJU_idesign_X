export function debounce(func: () => void, wait: number): () => void {
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
