
const close = document.getElementById('close');

close.addEventListener('click', ()=>{

    chrome.tabs.query({active:true, currentWindow: true}, (tabs)=>{

        const currentTab = tabs[0];

        chrome.tabs.query({currentWindow: true}, (tab)=>{

            tab.map(t => {
                if(t.id != currentTab.id) {
                    chrome.tabs.remove(t.id);
                }
            })

        })

    })

})
