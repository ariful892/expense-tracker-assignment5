//calculate total expense
function getTotalExpense() {
    const income = parseFloat(document.getElementById('income-field').value);
    const foodField = document.getElementById('food-field');
    const foodCost = parseFloat(foodField.value);
    const rentField = document.getElementById('rent-field');
    const rentCost = parseFloat(rentField.value);
    const clothesField = document.getElementById('clothes-field');
    const clothesCost = parseFloat(clothesField.value);
    if (income < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0 || isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
        return document.getElementById('error-positive').style.display = 'block';
    }
    else {
        const totalExpense = foodCost + rentCost + clothesCost;
        document.getElementById('expense-balance-field').style.display = 'block';
        return totalExpense;
    }

}
//calculate remaining balance after expense
function getRemainingBalance() {
    const incomeField = document.getElementById('income-field');
    const userIncome = parseFloat(incomeField.value);
    const totalExpense = getTotalExpense();
    let errorCheck = false;
    if (totalExpense > userIncome) {
        // document.getElementById('expense-balance-field').style.display = 'none';

        errorCheck = true;
        return errorCheck;
    }
    else {
        const userRemainingBalance = userIncome - totalExpense;
        return userRemainingBalance;
    }

}

//calculate expense and remaining balance
document.getElementById('calculate-btn').addEventListener('click', function () {
    const remainingBalance = getRemainingBalance();
    console.log(remainingBalance);
    if (remainingBalance == true) {
        document.getElementById('expense-balance-field').style.display = 'none';
        document.getElementById('alert-message').style.display = 'block';
    }
    else {
        document.getElementById('total-expense').innerText = getTotalExpense();
        document.getElementById('balance').innerText = remainingBalance;
    }

});

//calculate saving amount and remaing balance
document.getElementById('save-btn').addEventListener('click', function () {
    const remainingBalance = getRemainingBalance();
    if (isNaN(remainingBalance) || remainingBalance <= 0) {
        document.getElementById('saving-alert-message').style.display = 'block';
    }

    else {
        const savePercentage = document.getElementById('save-percentage').value;
        const savingAmount = remainingBalance / savePercentage;
        const balanceAfterSaving = remainingBalance - savingAmount;
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = balanceAfterSaving;
        document.getElementById('saving-amount-field').style.display = 'block';
    }
});