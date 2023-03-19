/* 
Execution Context
-> an execution context is an environment
-> inside the execution context a piece of javascript code get executed.
-> variable, parameters and other information related to the piece of code get stored in the execution context

Execution Context are two types:
1. Global execution context (GEC) = accessible everywhere
2. Functional execution context (FEC) when call the function, get access all variable and other info of declared function. 
every function has own execution context. 

Execution Context has two phase:
1. Creation Phase is like parsing of code. just compile all code. no execute any code. 
2. Execution phase: execute the code line by line, assign the value to the variable and execute the function calls.

Call Stack
Call stack is used by JavaScript to keep track of multiple function calls
in order to manage the execution context, The JavaScript engine uses a call stack

*/