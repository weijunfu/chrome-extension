const body = document.getElementsByTagName('body')[0];


let div = document.createElement('div');

div.innerText = "Welcome to you!";

div.style.position="absolute";
div.style.top = "32px";
div.style.left = "32px";
div.style.width = "128px";
div.style.height = "128px";
div.style.zIndex = "9999";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.borderRadius = "50%";
div.style.backgroundColor = "aqua";
div.style.color="#fff";
div.style.fontWeight = "bold";


body.appendChild(div);
