
let value = '';

chrome.runtime.onMessage.addListener((request, sender, response) => {

    console.log('request', request);

    let { method, value } = request;

    console.log(method, value);

    response({value});
});