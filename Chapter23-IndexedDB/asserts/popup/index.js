const myDB = "ijunfu-db";
const store = 'ijunfu-store';

const openDatabase = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(myDB, 1);

        request.onerror = (event) => {
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(store)) {
                db.createObjectStore(store, { keyPath: 'key' });
            }
        };
    });
}

const addData = (db, store, data) => {
    return new Promise((resolve, reject) => {
       const transaction = db.transaction(store, 'readwrite');
       const objectStore = transaction.objectStore(store);
       const request = objectStore.add(data);

       request.onerror = (event) => {
           reject(event.target.error);
       };

       request.onsuccess = (event) => {
           resolve();
       }
    });
}

const getData = (db, store, key) => {
    console.log(key);
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(store, 'readonly');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.get(key);

        request.onerror = (event) => {
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            console.log(event);
            resolve(event.target.result);
        }
    });
}

const deleteData = (db, store, key) => {
    return new Promise((resolve, reject)=>{
        const transaction = db.transaction(store, 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.delete(key);

        request.onerror = (event) => {
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            console.log('delete', event);

            resolve(event.target.result);
        }
    });
}

const getAllData = (db, store) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(store, 'readonly');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.getAll();

        request.onerror = (event) => {
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        }
    });
}

const myKey = document.getElementById('myKey');

const content = document.getElementById('content');

document.getElementById('save').addEventListener('click', async ()=>{
    try {
        const db = await openDatabase();
        console.log('open db success');

        const key = document.getElementById('myKey').value;
        const value = document.getElementById('myValue').value;
        console.log('key', key, 'value', value);

        await addData(db, store, {key, value, id: new Date().getTime()})
        console.log('save data success');

        db.close();
        console.log('close db success');
    } catch (error) {
        console.log('IndexedDB error:', error);
    }
});

document.getElementById('get').addEventListener('click', async () => {
    const myKeyValue = myKey.value;

    const db = await openDatabase();
    console.log('open db success');

    await getData(db, store, myKeyValue).then(res => {
       console.log('get', res);
       content.innerText = JSON.stringify(res);
    }).catch(err => console.error('get', err));

    db.close();
    console.log('close db success');
});

document.getElementById('getAll').addEventListener('click', async () => {
    try {
        const db = await openDatabase();
        console.log('open db success');

        await getAllData(db, store).then(res=>{
            console.log('getAll', res);
            content.innerText = JSON.stringify(res);
        });

        db.close();
        console.log('close db success');
    } catch (error) {
        console.log('IndexedDB error:', error);
    }
});

document.getElementById('delete').addEventListener('click', async () => {
    try {
        const db = await openDatabase();
        console.log('open db success');

        await deleteData(db, store, myKey.value).then(res=>{
            console.log('getAll', res);
            content.innerText = JSON.stringify(res);
        });

        db.close();
        console.log('close db success');

        alert("success");
    } catch (error) {
        console.log('IndexedDB error:', error);
    }
});

document.getElementById('clear').addEventListener('click', () => content.innerText="");