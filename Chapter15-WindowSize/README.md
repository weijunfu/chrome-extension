
# 说明

## 权限
+ `windows`

## 步骤

+ 事件监听
```javascript
document.getElementById("change").addEventListener('click', ()=>{
    ...
});
```

+ 获取当前窗口对象
```javascript
chrome.windows.getCurrent(function(window) {
        ...
    });
```

+ 设置窗口对象
```javascript
// Update the window size
chrome.windows.update(
    window.id,
    {
        width: parseInt(w),
        height: parseInt(h)
    });
```