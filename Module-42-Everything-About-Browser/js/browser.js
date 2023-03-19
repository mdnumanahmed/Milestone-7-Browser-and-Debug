/* 
Browser কিভাবে কাজ করে?
Browser হলো এক ধরণের desktop software যা pc তে install করে ব্যবহার করতে হয়। কোন একটি Browser এর static website দেখানোর steps:
-> Browser আমাদের HTML File টাকে parse করে একটি tree তৈরি করে, যা আমাদের কাছে DOM Tree হিসেবে পরিচিত।
-> HTML File এর উপর style দেয়ার জন্য CSS Stylesheet কে parse করে একটি Style Tree তৈরি করে যা আমাদের কাছে Style Structure / Style Rules হিসেবে পরিচিত।
-> DOM Tree এবং Style Tree মিলে তৈরি হয় Render Tree, যা Website এর Layout কে নির্দেশ করে। DOM Tree / Render Tree তে কোন কিছু Update হলে সেই অনুযায়ী re-rendering হয়। 
-> Render Tree পাওয়ার পর সেটার উপর Paint করা হয়। Re-render হলে Re-paint (reflow) হয়। 
-> সর্বশেষে User Interface (UI) এ output টা display হয়।


==================================================
Browser API

API: Application Programming Interface
A set of protocols and definitions that allows communication between two applications. 

Different types of API:
1. Web APIs: An Application Programming Interface for the Web.
2. Browser APIs: Extend the functionality of a Web Browser.
3. Server APIs: Extend the functionality of a Web Server.
4. Third Party APIs: are not built into your Browser.
    a. YouTube API
    b. Tweeter API
    c. Facebook API


Categories of Browser API
1. Storage API: Give the ability to store data on the client side.
    a. Cookies
    b. Local Storage
    c. Session Storage
    d. Indexed DB

2. Fetch API: 
    a. Makes asynchronous HTTP request to a server
    b. Response format can be JSON, Plain Text or XML
    c. Replacement for old XHR

3. Form Data API: 
    a. Construct a set of key/value pairs
    b. Represents form fields and values.

4. Drag and Drop API: Helps to implement drag and drop feature and build image upload system.
    a. Drag and Drop API
    b. File Reader API

5. DOM API: Allows to manipulate HTML and CSS in creating, removing and also dynamically apply new styles to your pages. 

6. Geolocation API: Helps to find out the Geographical location of an user.

7. Canvas API: Supports the creation of graphics using JavaScript and HTML.

8. Notification API: Helps to display desktop notification to users.

9. History API: Uses the history.pushState() method.

10. Audio and Video API: Can manage, display and create different media types.
    a. Web Audio API
    b. WebRTC (Web Real Time Communication) API
    c. HTML Media Element
    d. Media Capture and Stream API


===============================================
BOM vs DOM

BOM
-> Browser Object Model
-> Used to access and manipulation of the Browser Window.
-> Each Browser has own standards for implementing BOM
-> Consists of the objects navigator, history, screen, location etc.
-> BOM is a superset of DOM. BOM has many objects, methods and properties that are not part of the DOM structure.

DOM
-> Document Object Model
-> Used to manipulate the HTML Document.
-> Has a set standard of rules to be used across documents.
-> Represent the contents of web page.
-> DOM is a subset of BOM.

*/