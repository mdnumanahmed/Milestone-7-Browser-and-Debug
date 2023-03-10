const Name = localStorage.setItem('name', 'Shakib Khan')
const age = localStorage.setItem('age', 50)

const name = localStorage.getItem('name')
console.log(name);
const old = localStorage.getItem('age')
console.log(old);

localStorage.removeItem('name')
localStorage.removeItem('age')

const person = {
    firstName: 'Abraham',
    lastName: 'Linkon'
}
const stringifiedPerson = JSON.stringify(person)
localStorage.setItem('person', stringifiedPerson)
const getPerson = localStorage.getItem('person')
const convertedPerson = JSON.parse(getPerson)
console.log(convertedPerson);

// Increment value and store in local storage
const counter = document.getElementById('counter')
// if have data in localStorage set it initial value or 0
let count = localStorage.getItem('counter') || 0
const increment = () => {
    count++
    counter.innerText = count
    // set item to localStorage
    localStorage.setItem('counter', count)    
}
// get item from localStorage and update ui
counter.innerText = localStorage.getItem('counter')

// Level = 3: 

// {
//     const sendName = () => {
//         const inputValue = document.getElementById('name-filed').value 
//         localStorage.setItem('name', inputValue)    
//     }
//     const removeName = () => {
//         localStorage.removeItem('name')    
//     }
//     const sendEmail = () => {
//         const inputValue = document.getElementById('email-filed').value 
//         localStorage.setItem('email', inputValue)    
//     }
//     const removeEmail = () => {
//         localStorage.removeItem('email')    
//     }
//     const sendMsg = () => {
//         const inputValue = document.getElementById('msg-filed').value 
//         localStorage.setItem('msg', inputValue)    
//     }
//     const removeMsg = () => {
//         localStorage.removeItem('msg')    
//     }
    
//     const reset = () => {
//         localStorage.clear()
//     }
// }

// Level 4
// Load all data


    const nameField = document.getElementById('name-field') 
    const emailField = document.getElementById('email-field') 
    const msgField = document.getElementById('msg-field') 
    const loadData = () => {
        const name = nameField.value 
        const email = emailField.value 
        const msg = msgField.value 
        nameField.value = ''
        emailField.value = ''
        msgField.value = ''
        const user = {
            name: name,
            email: email,
            message: msg
        }
        saveDataToLocalStorage(user)
    }

    const savedInLocalStorage = () => {
        let user = {}
        const storedData = localStorage.getItem('user')
        if(storedData){
            user = JSON.parse(storedData)
        }
        return user
    }

    const saveDataToLocalStorage = ({name, email, message}) => {
        const data = savedInLocalStorage()
        data.name = name
        data.email = email
        data.message = message
        const stringifiedUser = JSON.stringify(data)
        localStorage.setItem('user', stringifiedUser)
    }
