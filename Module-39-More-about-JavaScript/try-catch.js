/* 
JavaScript এ by default কোন লাইনে এরর খাইলে পরের লাইনগুলো execute হয় না, মানে পরের লাইনের কোডগুলো চলে না। 
তবে try catch ব্যবহারের মাধ্যমে এ সমস্যার সমাধান করা যায়। 
কোন input value বা ডাটা Validation করতে হবে try ব্লকের ভিতরে। 
try ব্লকের ভিতরে custom error throw করে দিতে পারি। throw এর ভ্যালু হিসেবে ‍string, number, boolean, object ইত্যাদি যে কোন কিছু পাঠাতে পারি।


যে লাইনগুলোতে ভুল হওয়ার সম্ভাবনা রয়েছে, সেগুলোকে try ব্লকের ভিতরে রেখে কোড চালালে error গুলো catch ব্লকে দেখাবে এবং পরবর্তী লাইনের কোডগুলোও রান করবে।
UI তে error দেখাতে হলে, ডম থেকে ইলিমেন্টকে ধরে catch ব্লকের মধ্যে ইলিমেন্টের innerText হিসেবে error বসিয়ে দিলে হবে।
কোন error না হলে try ব্লকের ভিতরে কন্ডিশনের বাইরে ইলিমেন্টের innerText = ‘’ করে দিতে হবে।

try catch এর সাথে finally ব্যবহার করা যায়। error হোক বা না হোক finally ব্লকের কোড সবসময় রান করবে।

*/

const checkAge = () => {
    const age = document.getElementById('age')
    const ageText = age.value 
    const errTag = document.getElementById('err')
    try{
        const age = parseInt(ageText)
        if(isNaN(age)){
            console.log('number not found', age, ageText);
            // custom error throw
            throw 'Please provide only number'
        }else if(age < 18){
            throw 'Children is not allowed'
        }else if(age > 30){
            throw 'Oldest is not allowed'
        }
        errTag.innerHTML = ''
        
    }catch(err){
        console.log('Something wrong');
        errTag.innerHTML = 'Error : ' + err
    }finally{
        console.log('All done inside finally');
    }
} 