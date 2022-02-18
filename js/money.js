document.getElementById('calculate-button').addEventListener('click', function() {
    const incomeCost = document.getElementById('income-input');
    const incomeInput = incomeCost.value;
    const incomeValue = parseFloat(incomeInput);
    document.getElementById('income-input').value = '';

    const foodCost = document.getElementById('food-input').value;
    const foodValue = parseFloat(foodCost);
    document.getElementById('food-input').value = '';
    
    
    const rentCost = document.getElementById('rent-input').value;
    const rentValue = parseFloat(rentCost);
    document.getElementById('rent-input').value = '';
   
    const clothesCost = document.getElementById('clothes-input').value;
    const clothesValue = parseFloat(clothesCost);
    document.getElementById('clothes-input').value = '';
   

    //expenses cost
    const totalExpenses = foodValue + rentValue + clothesValue;
    const expensesCost = document.getElementById('total-expense');
    expensesCost.innerText = totalExpenses;

    //balance cost
    const balance = incomeValue - totalExpenses;
    const balanceValue = document.getElementById('price-balance');
    balanceValue.innerText = balance;

})

//error message

function errorMessage() {
    const error = document.getElementById('income-input').value;
    if (error > 0) {
        const showError = document.getElementById('valid-num');
        showError.style.display = 'block';

    } else {
        showError.style.display = 'none';
        alert('Only Integer Number');
    }

}


document.getElementById('save').addEventListener('click', function() {

    const incomeCost = document.getElementById('income-input');
    const incomeInput = incomeCost.value;
    // const incomeValue = parseFloat(incomeInput);

    const saveInput = document.getElementById('save-input');
    const saveValue = saveInput.value;
    const savingAmount = parseFloat(incomeInput / 100) * saveValue;
    const saveTotal = document.getElementById('price-saving');
    saveTotal.innerText = savingAmount;

    const remaining = document.getElementById('price-remaining');
    const balanceTotal = document.getElementById('price-balance').innerText;

    const remainingAmount = parseFloat(balanceTotal - savingAmount);
    remaining.innerText = remainingAmount;
    const balanceValue = document.getElementById('price-balance');
    balanceValue.innerText = balance;

    

});