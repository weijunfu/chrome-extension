
document.getElementById('getAll').addEventListener('click', ()=>{
    chrome.cookies.getAll(genParams('getAll'), (cookies)=>{

        let text = 'Number of cookies = ' + cookies.length + '\r\n';

        for(let cookie of cookies) {

            text += 'domain=' + cookie.domain + '\r\n';
            text += 'path=' + cookie.path + '\r\n';
            text += cookie.name + '=' + cookie.value + '\r\n';
            text += "----------------------------\r\n";
        }

        document.getElementById('cookie').value = text;
    })
});

document.getElementById('set').addEventListener('click', ()=>{
   chrome.cookies.set(genParams('set'), (cookie)=>{
       console.log('set', cookie);
   });
});

document.getElementById('remove').addEventListener('click', ()=>{
    chrome.cookies.remove(genParams('remove'), (details)=>{
        console.log('remove', details);
    });
})

const genParams = (opt) => {

    const domain = getInputValue('domain');
    const path = getInputValue('path');
    const name = getInputValue('name');
    const value = getInputValue('value');

    let data = {};

    switch (opt) {
        case 'getAll':

            if(domain != '') {
                data['domain'] = domain;
            }

            if(name != '') {
                data['name'] = name;
            }

            break;

        case 'set':
            data['url'] = 'https://' + domain + path;
            data['name'] = name;
            data['value'] = value;
            break;

        case 'remove':
            data['url'] = 'https://' + domain + path;
            data['name'] = name;
            break
    }

    console.log(opt, data);

    return data;
}

const getInputValue = (id) => {
    return document.getElementById(id).value;
}
