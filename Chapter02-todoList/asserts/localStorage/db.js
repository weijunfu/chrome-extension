// save or get data

const  key = 'TodoList';

// Set a value in local storage
const save = (data) => localStorage[key] = JSON.stringify(data);

// Get a value from local storage
const get = () => localStorage[key];