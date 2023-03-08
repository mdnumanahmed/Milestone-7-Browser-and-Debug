/* 

1. What is Debugging?
-> Debug: Source Code এর মধ্যে কোথায় কি ভুল (bug) আছে, তা খঁজে বের করাকেই debugging বলে।
-> Debugging is the process of finding and fixing of errors or bugs in the source code. 
-> computer programmer study the code to determine why any errors occurred.
-> check the code step by step, and analyze and fix the issues.

2. How does Debugging process works?
-> Error Identification : Developer locate the exact line of code or code module causing the bug.
-> Error Analysis : Coders analyze the error by recording all program state changes and data values.
-> Fix and Validation : Developers fix the bug and run tests to ensure the software continues to work as expected.

Some Debugging Techniques:
1. Using console.log() method.
    The console.log() method displays the result in the console of the browser. If there is any mistake in the code, it generates the error message.
2. Setting Breakpoints
    Marking some lines of code at different point of the program can create breakpoints. When the program reaches marked point during execution, It pauses. This helps the developer to check for any available error and sort it out. 
3. Using the debugger keyword:
    We can also use the JavaScript debugger keyword. This places a halts in execution where you place the debugger keyword. 
4. Backtracking
    -> Backtracking uses difference solution until you find the right solution to the error.
    -> It is effective for debugging.
    -> You apply possible solutions to solve the problem in JS program. 
    -> If it doesn't work you retreat and select another move.


========================================================

Some types of error in JS:
1. Syntax Error:
    Syntax error is triggered when you write code that is not syntactically correct. For Example:
    -> Missing inverted comma
    -> Missing closing parentheses
    -> Improper alignment of curly braces {} or other characters.
2. Type Error:
    Type Error is created when some values doesn't turn out to be of a particular expected type
    -> calling objects that are not method.
    -> attempting to access properties of null or undefined objects.
    -> Treating a string as a number or vice versa
3. Reference Error:
    -> forgotten to define a value for the variable before using it.
    -> We might be trying to use an inaccessible variable in our code. 
    -> Making a typo in variable name. 
    -> Trying to access in block-scoped variable outside of their scopes.
4. Internal Error:
    Internal Error occurs when an exception occurs in JavaScript runtime engine. It may or may not indicate an issue with your code. 
    
    Internal Error occurs in two scenarios only:
    a. When a patch or update to the JavaScript runtime carries a bug that throws exceptions. 
    b. When your code contains entities that are too large for JavaScript engine. (e.g. too many switch cases, too large array initialization, too much recursion)
5. Range Error:
    Range Error throws when a value in not in an allowed range.
*/