//calculate total expense
function getTotalExpense() {
    const foodField = document.getElementById('food-field');
    const foodCost = parseFloat(foodField.value);
    const rentField = document.getElementById('rent-field');
    const rentCost = parseFloat(rentField.value);
    const clothesField = document.getElementById('clothes-field');
    const clothesCost = parseFloat(clothesField.value);
    // console.log(foodCost, rentCost, clothesCost);
    const totalExpense = foodCost + rentCost + clothesCost;
    return totalExpense;
}
//calculate remaining balance after expense
function getRemainingBalance(income, expense) {
    const incomeField = document.getElementById('income-field');
    const userIncome = parseFloat(incomeField.value);
    const totalExpense = getTotalExpense();
    const userRemainingBalance = userIncome - totalExpense;
    return userRemainingBalance;
}

//calculate expense and remaining balance
document.getElementById('calculate-btn').addEventListener('click', function () {
    const remainingBalance = getRemainingBalance();
    const totalExpenseField = document.getElementById('total-expense').innerText = getTotalExpense();
    document.getElementById('balance').innerText = remainingBalance;
    document.getElementById('expense-balance-field').style.display = 'block';
});

//calculate saving amount and remaing balance
document.getElementById('save-btn').addEventListener('click', function () {
    const savePercentage = document.getElementById('save-percentage').value;
    const balanceAfterSaving = getRemainingBalance();
});