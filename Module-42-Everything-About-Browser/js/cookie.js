/* 
What is Cookie?
-> Data stored in small text file.
-> Naturally sent by visited website.
-> Sent to users computer through browser
-> Is not a program, doesn't perform any function.
-> Stored in key value pair.

Purpose of cookie?
-> Session management: Cookie allow you to manage any information that the server should remember. For example: login, shopping carts etc.
-> Personalization: Cookie allow you to store preference, themes, settings specific to a user.
-> Tracking: cookies help to record and analyze user behaviors in advertizing . 

Parts of Cookie
-> Name = A unique name that identified the cookie. The cookie name are case-sensitive. 
-> Secure flag = 
-> Path
-> Expiration
-> Value
-> Domain

Types of Cookie: 
    1. First party Cookie
    2. Third party Cookie
    3. Http only Cookie


*/
document.cookie // get cookie (string)
document.cookie.split('; ') // separate the cookie by split()
document.cookie.split('; ').map(c => c.split('='))