
window.onload = () => {
    chrome.runtime.getPlatformInfo(info => {
        let { arch, nacl_arch, os } = info;

        document.getElementById('cpu').innerText = arch + ' & ' + nacl_arch;

        document.getElementById('os').innerText = os;

    })
}
