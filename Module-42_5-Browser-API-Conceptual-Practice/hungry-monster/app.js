
const errMsg = document.getElementById('errorMessage')
const mealContainer = document.getElementById('mealCard');
//------------- handle search button-----------
const searchFood = () => {
    const searchField = document.getElementById('mealInput'); 
    const searchData = searchField.value   
    if(searchField.value.length === 0){
        errMsg.style.display = 'block'
        errMsg.innerText = 'Please provide some character to search meals'
        mealContainer.innerHTML = ''
        return
    }   
    else{
        errMsg.style.display = 'none'
        searchField.value = ''
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.meals === null){
                errMsg.style.display = 'block'
                errMsg.innerText = 'Meals not found, Please try again'
                mealContainer.innerHTML = ''
                return
            }else{
                errMsg.style.display = 'none'
                displayMealInfo(data.meals)
            }
        })
    }
}

const displayMealInfo = mealData => {    
    mealContainer.innerHTML = ''
    mealData.forEach(item => {
        const foodItemName = document.createElement('div');
        foodItemName.className = 'meal-items';
        itemPosition = item.idMeal;
        const mealInformation = `
        <img src ="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>
        `
        foodItemName.innerHTML = mealInformation;
        foodItemName.addEventListener('click', function () {
            mealIngredientsInfo(item.idMeal);
        });
        mealContainer.appendChild(foodItemName);
    });
}


//API Call by fetch for meal ingredients 

const mealIngredientsInfo = mealItemName => { 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.meals))
}

//meal ingredients details information

const displayDetails = mealItemDetails => {
    const mealItemsInformation = document.getElementById('mealItemsInfo');
    const items = mealItemDetails[0]
    console.log(items);
        const mealItemsInformations = document.createElement('div');
        mealItemsInformations.className = 'ingredients-info';
        const itemsName = document.createElement('h1');
        const ingredients = document.createElement('h5');
        ingredients.innerText = 'Ingredients';
        itemsName.innerText = items.strMeal;
        const ul = document.createElement('ul');
        ul.style.listStyle = 'circle'
        const imgUrl = document.createElement('img');
        imgUrl.src = items.strMealThumb;
        mealItemsInformations.appendChild(imgUrl);
        const li = `
        
         <li class="${items.strIngredient1 ? 'd-block ' : 'd-none'}">${items.strIngredient1}</li>
         <li class="${items.strIngredient2 ? 'd-block' : 'd-none'}">${items.strIngredient2}</li>
         <li class="${items.strIngredient3 ? 'd-block' : 'd-none'}">${items.strIngredient3}</li>
         <li class="${items.strIngredient4 ? 'd-block' : 'd-none'}">${items.strIngredient4}</li>
         <li class="${items.strIngredient5 ? 'd-block' : 'd-none'}">${items.strIngredient5}</li>
         <li class="${items.strIngredient6 ? 'd-block' : 'd-none'}">${items.strIngredient6}</li>
         <li class="${items.strIngredient7 ? 'd-block' : 'd-none'}">${items.strIngredient7}</li>
         <li class="${items.strIngredient8 ? 'd-block' : 'd-none'}">${items.strIngredient8}</li>
         <li class="${items.strIngredient9 ? 'd-block' : 'd-none'}">${items.strIngredient9}</li>
         <li class="${items.strIngredient10 ? 'd-block' : 'd-none'}">${items.strIngredient10}</li>
         <li class="${items.strIngredient11 ? 'd-block' : 'd-none'}">${items.strIngredient11}</li>
         <li class="${items.strIngredient12 ? 'd-block' : 'd-none'}">${items.strIngredient12}</li>
         <li class="${items.strIngredient13 ? 'd-block' : 'd-none'}">${items.strIngredient13}</li>
        `
        ul.innerHTML = li;
        mealItemsInformations.appendChild(itemsName);
        mealItemsInformations.appendChild(ingredients);
        mealItemsInformations.appendChild(ul);
        mealItemsInformation.appendChild(mealItemsInformations);

    ;

}


