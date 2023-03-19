// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');
const errMsg = document.getElementById('errMsg')


// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    if(selectedPlayer.children.length === 5){
        errMsg.classList.add('show')
        errMsg.innerHTML = 'Please provide only number'
        return 
    }
    errMsg.classList.remove('show')
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
            errMsg.classList.remove('show')
        } else{
            button.classList.remove('disabled');
            addPlayer(button.parentNode.children[0].innerText)
            errMsg.innerHTML = '5 Played already Selected'
            errMsg.classList.add('show')
        }
    })
} 

// A common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    if(isNaN(inputFieldValue)){
        errMsg.classList.add('show')
        errMsg.innerHTML = 'Please provide only number'
        return 
    }else{
        errMsg.classList.remove('show')
        inputField.value = ''
        return inputFieldValue
    }
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){
    const perPlayerBudget = getInputValue('per_player_budget');
    if(perPlayerBudget && perPlayerBudget > 0){
        errMsg.classList.remove('show')
        let totalPlayerExpense =  perPlayerBudget * 5;
        getValueOfElement( 'player_expense', totalPlayerExpense)  
    }else{
        errMsg.classList.add('show')
        errMsg.innerHTML = 'Please provide only positive number'
        return 
    }
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget = getInputValue('manager_budget');
    const coachBudget = getInputValue('coach_budget');

    let totalExpense = playerTotalBudget + parseFloat(managerBudget) + parseFloat(coachBudget);
        getValueOfElement( 'player_total_expense', totalExpense)
})

