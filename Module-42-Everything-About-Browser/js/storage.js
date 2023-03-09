/* 
Local Storage
localStorage.getItem('key') = Local Storage এর ডাটা পাওয়ার জন্য getItem('') মেথড ব্যবহার করা হয়। getItem(’’) এর প্যারামিটারে string হিসেবে আইটেমের নাম বলে দিতে হয়।  

localStorage.setItem('key','value') = Local Storage এ কোন ডাটা স্টোর করার জন্য setItem('') মেথড ব্যবহার করা হয়। setItem(’’) এ দুটি প্যারামিটার হবে। প্রথম প্যারামিটারে string হিসেবে আইটেমের নাম এবং ২য় প্যারামিটারে ভ্যালু বলে দিতে হয়।  

Local Storage এ যে সব ডাটা স্টোর করা হয়, সবগুলোকে string এ কনভার্ট করে নেয়। যদিও ভ্যালু হিসেবে এ্যারে বা অবজেক্ট দেয়া হয়। 
ভ্যালু হিসেবে numbers array দিলে তা string এ কনভার্ট করে শুধু নাম্বারগুলো দেখাবে।
ভ্যালু হিসেবে object দিলে তা [object Object] হিসেবে দেখাবে।
মানে কোন object কে .toString() মেথড ব্যবহার করে string এ কনভার্ট করলে [object Object] রিটার্ন করে। 
আর যদি object কে “({})” এভাবে string এর মধ্যে দেয়া হয়, তাহলে সঠিকভাবে দেখাবে

তাই Local Storage এ কোন object স্টোর করতে হলে প্রথমে object কে JSON.stringify() করে নিতে হবে। তারপর stringify object কে ভ্যালু হিসেবে সেট করা যাবে মানে Local Storage এ সঠিক ভাবে দেখা যাবে। 
আর যখন Local Storage থেকে কোন object কে গেট করবো, তখনে JSON.parse() নিয়ে ব্যবহার করতে হবে।


localStorage.removeItem('key') = Local Storage এর কোন ডাটা ডিলেট করার জন্য আইটেমের নাম দিতে হয়। 

localStorage.clear() = Local Storage এর সব ডাটা ডিলেট করার জন্য localStorage.clear() মেথড ব্যবহার করা হয়।



================================================
Session Storage
-> Store data in browser for a session
-> Save data key/value pair in the browser
-> Data is deleted when browser is closed.
-> Data is not available for future session

Local Storage
-> Stores data in browser without any expiration date.
-> Save data key/value pair in the browser
-> Data is not deleted when browser is closed.
-> Data is available for future session

                    Cookie      vs      Local Storage  vs    Session Storage
expire              Manually set        Never               on tab close
storage location    Browser & Server    Browser Only        Browser Only
sent with request   Yes                 No                  No
capacity            4kb                 10mb                5mb
Browser             HTML4/5             HTML5               HTML5
*/

const setData = () => {
    const student = {
        name: 'Abul Mia',
        age : 20,
        isGenius : true,
        merit: 'First'
    }
    localStorage.setItem('student', JSON.stringify(student))
}

const getData = () => {
    const std = localStorage.getItem('student')
    console.log(JSON.parse(std));
}