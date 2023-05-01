
chrome.runtime.onMessage.addListener((request, sender, response) => {

    switch (request.key) {
        case 'greeting':
            console.log(request.msg);
            break;
    }

    return true;

})
