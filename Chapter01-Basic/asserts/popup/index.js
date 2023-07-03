console.log("Hello World!");


const init = () => {

    chrome.management.getAll((apps) => {
        console.log('apps', apps);

        for (let i = 0; i < apps.length; i++) {
            let app = apps[i];

            let {isApp, enabled, name, description} = app;

            console.log(isApp, enabled, name, description);

            if(!app.isApp) {
                continue;
            }

            if(!app.enabled) {
                continue;
            }

            let largestIcon = {size:0, url: null};

            for(let j=0; j<app.icons.length; j++) {
                let icon = app.icons[j];

                if(icon.size < largestIcon.size) {
                    continue;
                }

                largestIcon = icon;
            }

            let img = document.createElement('img');
            img.src = largestIcon.url;
            img.width = 64;
            document.body.appendChild(img);

            let btn = document.createElement('input');
            btn.type = 'button';
            btn.value = app.name;
            btn.onclick = () => {
                chrome.management.launchApp(app.id);
            }
            document.body.appendChild(btn);

            let br = document.createElement("br");
            document.body.appendChild(br);
        }
    })
}

window.onload = init();
