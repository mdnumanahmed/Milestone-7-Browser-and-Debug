
/* 
JavaScript by nature Single-threaded. it means sequentially line by line.
JavaScript is a Single-threaded and synchronous language. But can works asynchronously.

Single-threaded
-> Single-threaded means only one statement is executed at a time.
-> JavaScript has only one call stack.
-> JavaScript runs code line by line.
-> Must finish executing a piece of code before moving onto the next.


Asynchronous functions in JavaScript:
fetch(), setTimeout(), setInterval()

*/
// it works sequentially line by line
function one(){
    console.log('A');
    setTimeout(function(){
        console.log('do some');
    },2000)
    
    two()
}

function two(){
    console.log('B');
    three()
    console.log('D');
}

function three(){
    console.log('C');
}

one()

