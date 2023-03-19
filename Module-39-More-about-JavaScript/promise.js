/* 
Promise: 
The Promise object represents the eventual completion {or failure} of an asynchronous operation and its resulting value. 
A Promise is in one of these states:
1. Pending : initial state, neither fulfilled nor rejected.
2. Resolve : The operation was completed successfully.
3. Reject : The operation failed.

Promise হচ্ছে েএকটি asynchronous বিহেভিয়ার।
Promise fulfilled হলে একটা অবজেক্ট রিটার্ন করে।
Promise তৈরি করার পর ব্যবহার করতে হয়
 fulfilled হলে .then() এর ভিতরের কোড কাজ করবে। 
 .then() এর মধ্যে যে কোন নামে ডাটা get করা যায়। 
 reject হলে .catch() এর ভিতরের কোড কাজ করবে।
 .catch() এর মধ্যে error (reject) এর ডাটা দেখাবে।


Fetch API
1. The fetch() method starts the process of fetching a resources from a server
2. The fetch() method returns a Promise that resolves to a Response object.
3. A fetch() method only rejects when a network error is encountered

Async / Await
-> "async/await" is a special syntax to work with promises in more comfortable way.
-> it is surprisingly easy to understand and use.
-> The await keyword can only be used inside an async function
-> The await keyword makes the function pause the execution and wait for a  resolved promise before it continue.


*/
// create promise
const getData = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random()*10)
    if(num < 5){
        resolve(44444)
    }
    else{
        reject('Data not available')
    }
})

// consume promise
getData
    .then(value => console.log(value))
    .catch(err => {
        console.log('Err', err);
    })

console.log(getData);