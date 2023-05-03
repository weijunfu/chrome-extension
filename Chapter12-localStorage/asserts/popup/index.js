
const keyEle = document.getElementById('key');
const valueEle = document.getElementById('value');

document.getElementById('set').addEventListener('click', () => {
    set(keyEle.value, valueEle.value);
});

document.getElementById('get').addEventListener('click', () =>{

    let value = getByKey(keyEle.value);

    if(value == undefined) {
        alert('Not Exist!')
        return;
    }

    valueEle.value = value;
});

document.getElementById('delete').addEventListener('click', () => {
   deleteByKey(keyEle.value)
});

document.getElementById('getAll').addEventListener('click', () => {
    let len = localStorage.length;
    for(let i=0; i<len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];

        console.log(key, "=", value);
    }
})

document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear();
})

// set a value
const set = (key, value) => {
    localStorage[key] = JSON.stringify(value);

    console.log('localStorage set key=' + key + " value=" +value);
}

// get a value
const getByKey = (key) => {
    let value = localStorage[key];

    console.log('localStorage get key=' + key + " value="+value);

    if(undefined == value) {
        console.log('not exist key='+key);
        return ;
    }

    return JSON.parse(value);
}

// delete a value
const deleteByKey = (key) => {
    localStorage.removeItem(key);

    console.log("localStorage delete: key=" + key);
}

// get all value
const getAll = () => {

}

// clear all
const clear = () => {

}

const setToServiceWorker = (key, value) => {

}

const getFromServiceWorker = (key) => {

}