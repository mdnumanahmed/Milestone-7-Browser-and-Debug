const addToCart = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')

    const product = productField.value 
    const quantity = quantityField.value 
    productField.value = ''
    quantityField.value = ''
    displayProduct(product, quantity);
    saveCartToLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container')
    productContainer.innerHTML += `<li> ${product} : ${quantity} </li>`
}

// localStorage এ ডাটা আছে কি না? যদি থাকে, তাহলে JSON.parse করে রিটার্ন করো। না হলে {} অবজেক্ট রিটার্ন করো। 
const savedCardData = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart
}

/* localStorage এ ডাটা স্টোর করতে প্যারামিটারে ডাটাগুলো নিতে হবে। 
তারপর savedCardData ফাংশন এর মাধ্যমে localStorage এ থাকা পুর্বের ডাটাগুলো এনে ডাইনামিক্যোলি ডাটা গেট করতে হবে। পরে JSON.stringify করে localStorage.setItem() করতে হবে। */
const saveCartToLocalStorage = (product, quantity) => {
    let cart = savedCardData()
    cart[product] = quantity
    const stringifiedData = JSON.stringify(cart)
    localStorage.setItem('cart', stringifiedData)
}

const displayDataFromLocalStorage = () => {
    const cart = savedCardData()
    for(const product in cart){
        const quantity = cart[product]
        displayProduct(product, quantity)
    }
}

displayDataFromLocalStorage()

/* 
    Second time practice
{
    const getStoredCart = () => {
        let cart = {}
        const storedCart = localStorage.getItem('cart')
        if(storedCart){
            cart = JSON.parse(storedCart)
        }
        return cart;
    }

    const saveShoppingCartToLocalStorage = (product, quantity) => {
        const cart = getStoredCart()
        cart[product] = quantity;
        const stringifiedCart = JSON.stringify(cart)
        localStorage.setItem('cart', stringifiedCart)
    }

    const displayFromLocalStorage = () => {
        const cart = getStoredCart()
        console.log(cart);
        for(const product in cart){
            const quantity = cart[product]
            displayProduct(product, quantity)
        }
    }

    displayFromLocalStorage()   
}
*/
