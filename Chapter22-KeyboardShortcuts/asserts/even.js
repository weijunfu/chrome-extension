chrome.commands.onCommand.addListener((c) => {
    switch (c) {
        case 'command1':
            chrome.tabs.create({url:"https://www.youtube.com"})
            break;
        case 'command2':
            chrome.tabs.create({url: "https://www.google.com"})
            break;
    }
})