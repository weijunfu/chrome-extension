
const widthEle = document.getElementById('width');
const heightEle = document.getElementById('height');

document.getElementById("change").addEventListener('click', ()=>{

    setWindowSize(widthEle.value, heightEle.value);

});

/**
 * 修改窗口大小
 *  注意：在窗口最大化时，是无法改变窗口大小
 * @param w
 * @param h
 */
const setWindowSize = (w, h) => {
    chrome.windows.getCurrent(function(window) {
        // Update the window size
        chrome.windows.update(
            window.id,
            {
                width: parseInt(w),
                height: parseInt(h)
            });
    });
}