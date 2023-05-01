// save ToDo data
let todoList = [];

// click add btn
document.getElementById("add").addEventListener('click', ()=>{
    addItem();
})

// listener input enter
document.getElementById("myContent").addEventListener('keyup', (e)=>{
    if('Enter' === e.code) {
        addItem();
    }
})

// listen DOMContentLoaded
document.addEventListener('DOMContentLoaded', ()=>{
   let data = JSON.parse(get());

   todoList = data;

   reload();
});

// reload data
const reload = () => {

    let l = todoList;

    save(l);

    let list = document.getElementById("list");
    list.innerHTML = "";

    for(let i=0; i<todoList.length; i++) {
        let { content, isFinish } = todoList[i];

        let itemElement = genItem(content, isFinish);

        list.appendChild(itemElement);
    }

    let contentList = list.getElementsByClassName('content');
    for(let i=0;  i<contentList.length; i++) {
        contentList[i].addEventListener('click', ()=>updateStatus(i));
    }

    let delList = list.getElementsByClassName('del-btn');
    for(let i=0; i<delList.length; i++) {
        delList[i].addEventListener('click', () => del(i));
    }

    let upList = list.getElementsByClassName('up-btn');
    for(let i=0; i<upList.length; i++) {
        upList[i].addEventListener('click', ()=> up(i));
    }

    let downList = list.getElementsByClassName('down-btn');
    for(let i=0; i<downList.length; i++) {
        downList[i].addEventListener('click', () => down(i));
    }
}

// update finish status
const updateStatus = (index) => {
    let list = todoList;

    let isFinish = list[index].isFinish;

    list[index].isFinish = isFinish===0 ? 1 : 0;

    reOrder(list);
}

// move up
const up = (index) => {
    if(0 === index) return;

    let list = todoList;

    let tmp = list[index];
    list[index] = list[index-1];
    list[index-1]=tmp;

    reOrder(list);
}

// move down
const down = (index) => {

    if(todoList.length === index+1) return;

    let list = todoList;

    let tmp = list[index];
    list[index] = list[index+1];
    list[index+1]=tmp;

    reOrder(list);

}

// del a value
const del = (index) => {
    let list = todoList.filter(e => e.order!=(index+1));
    reOrder(list);
}

// rearrange
const reOrder = (list) => {
    for(let i=0; i<list.length; i++) {
        list[i].order = i+1;
    }

    todoList = list;

    reload();
}

// create  a item
const createItem = (content, order, isFinish) => {
    const item = {};

    item.content = content;
    item.order = order;
    item.isFinish = isFinish;

    return item;
}

// add a item
const addItem = () => {

    let value = document.getElementById("myContent").value.trim();

    if(value == undefined || value == null || value=="") {
        alert("Cannot empty!");
        return;
    }

    let item = createItem(value, todoList.length+1, 0);
    todoList.push(item);

    console.log(todoList)

    save(todoList);

    reload();
}

// gen a item
const genItem = (value, isFinish) => {
    let item = document.createElement('div');
    item.classList.add('item');

    let status = genStatusElement(isFinish);

    let content = genContentElement(value);

    let tools = genToolsElement();

    item.appendChild(status);
    item.appendChild(content);
    item.appendChild(tools);

    return item;
}

// gen a status element
const genStatusElement = (isFinish) => {
    let status = document.createElement('div')
    status.classList.add('status');

    let finishBtn = document.createElement('span');
    finishBtn.classList.add('iconfont', 'icon-finish');

    if(isFinish === 1) {
        finishBtn.classList.add('finish');
    } else {
        finishBtn.classList.add('unfinish');
    }

    status.appendChild(finishBtn);

    return status;
}

// gen a conten element
const genContentElement = (value) => {

    let content = document.createElement('div');
    content.classList.add('content');
    content.innerText = value;

    return content;
}

// gen a tools element
const genToolsElement = () => {
    let tools = document.createElement('div');
    tools.classList.add('tools');

    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('iconfont', 'icon-delete', 'del-btn');

    let upBtn = document.createElement('span');
    upBtn.classList.add('iconfont', 'icon-up', 'up-btn');

    let downBtn = document.createElement('span');
    downBtn.classList.add('iconfont', 'icon-down', 'down-btn');

    tools.appendChild(deleteBtn);
    tools.appendChild(upBtn);
    tools.appendChild(downBtn);

    return tools;
}