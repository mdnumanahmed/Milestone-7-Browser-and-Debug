
/* 
alert() = শুধুমাত্র তথ্য দেখাবে। কোন কিছু রিটার্ন করে না।
confirm() = ok দিলে true আর cancel দিলে false রিটার্ন করে।
prompt() = input বক্সের মাধ্যমে ডাটা কালেক্ট করে। ok দিলে input বক্সের data আর cancel দিলে null রিটার্ন করে।

*/
const showAlert =  () => {
    alert('Tumi office giye amake phone dio')
}

const madrashateAsbi = () => {
    const result = confirm('Tumi ki aj madrashate asbi?')
    console.log(result);
    if(result === true){
        alert('Office amar sathe dekha korbi, kotha ache.')
    }else{
        alert('call diye kotha bolbe.')
    }
}

const sayName = () => {
    const result = prompt('What is your name?')
    console.log(result);
    if(result === null){
        alert('Nam na bolle kam nai. ja fooooot')
    }else{
        alert(result + ' Thanks for share your name')
    }
}