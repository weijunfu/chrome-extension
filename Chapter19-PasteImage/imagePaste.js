document.addEventListener('paste', (e) => {
    e.preventDefault();

    const items = e.clipboardData.items;
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    for(let i=0; i<items.length; i++) {

        if(items[i].type.indexOf('image') != -1) {

            const image = new Image();
            image.src = window.URL.createObjectURL(items[i].getAsFile());
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image,0,0);
            }
            return
        }
    }
})