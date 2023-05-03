
const urlEle = document.getElementById('url');
const responseEle = document.getElementById('response');

urlEle.addEventListener('keyup', (event)=>{
    if('Enter' == event.code) {

        let url = urlEle.value;

        if(url) {
            console.log(url);

            fetch(url, {
                method: 'GET'
            }).then(resp => {
                if(resp.ok) {
                    return resp.text();
                }

                throw new Error('Response was not ok!');
            }).then(data => {
                responseEle.value = data;
            }).catch(error => {
                responseEle.value = error;
            })
        }
    }
})

