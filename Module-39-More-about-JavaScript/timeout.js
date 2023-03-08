/* 

setTimeout : A time event function used to call another function after certain time period but execute the function only once.
for clearing timeout function clearTimeout() is used
setInterval : Same as setTimeout with a slice difference that execution of the function occur continuously according to the specified time interval. Here the time interval work like a gap between the executions. 
for clearing interval function clearInterval() is used

setTimeout : কোন কাজ নির্দিষ্ট সময়ের পর একবার করতে চাইলে setTimeout ব্যবহার হয়। 
setInterval : কোন কাজ নির্দিষ্ট সময়ের ব্যবধারে বার বার করতে চাইলে setInterval ব্যবহার হয়।

setTimeout, setInterval উভয় ফাংশনই দুটি প্যারামিটার নেয়। ১. ফাংশন ২. সময়।
উভয় ফাংশনই তাদের id ধরে রাখে। আমরা এ ফাংশনগুলোকে কোন ভ্যারিয়েবলে স্টোর করার মাধ্যমে তাদের আইডি পাই।
clearTimeout(), clearInterval() ফাংশনের ্প্যারামিটারে ঐ id দিয়ে তাদের কাজকে থামিয়ে দিতে পারি।


*/

{
    // practice module
    const timeoutId = setTimeout(()=> {
        console.log('Load setTimeout Function');
    }, 4000)
    
    let num = 0;
    const intervalId = setInterval(()=> {
        console.log('num : ', num++);
        if(num === 10){
            clearInterval(intervalId)
        }
    },1000)
}



// Small project
// select dom element
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let value = document.getElementById("value");
let number = 0;

{
  // Approach One

  /* let intervalId;
  start.onclick = () => {
    intervalId = setInterval(() => {
      number++;
      value.innerText = number;
    }, 1000);
  };
  stop.onclick = () => {
    clearInterval(intervalId);
  };

  reset.onclick = () => {
    value.innerText = 0;
  }; */
}

{
  // Approach Two

  const items = document.querySelectorAll(".counter");
  let intervalId;
  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("id"));
      const id = e.target.getAttribute("id");
      if (id === "start") {
        intervalId = setInterval(() => {
          number++;
          value.innerText = number;
        }, 1000);
      } else if (id === "stop") {
        clearInterval(intervalId);
      } else if (id === "reset") {
        value.innerText = 0;
      }
    });
  });
}

{
  const hours = document.getElementById('hours')
  const minutes = document.getElementById('minutes')
  const seconds = document.getElementById('seconds')
  const clock = document.querySelectorAll('.clock')
  let secondId
  let number = 0
  clock.forEach(button => {
    button.addEventListener('click', function(e){
      const id = e.target.getAttribute('id')
      if(id === 'startWatch'){
        secondId = setInterval(() => {
          number++
          seconds.innerText = number === 60 ? number % 60 : number
          minutes.innerText = number === 60 ? number / 60 : 0 
        })
      }
      else if(id === 'stopWatch'){
        clearInterval(secondId)
      }
      else if(id === 'resetWatch'){
        seconds.innerText = 0
      }
    })
  })
}
