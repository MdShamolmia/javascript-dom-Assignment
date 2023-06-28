document.getElementById('btn-calculate').addEventListener('click', function () {
    const calculateField = document.getElementById('input-field');
    const calculateFieldString = calculateField.value;
    const previousCalculateAmount = parseFloat(calculateFieldString);

    calculateField.value = '';

    const newTotalAmount = previousCalculateAmount * 6;
    const expensesTotalAmount = document.getElementById('Expenses-amount');
    expensesTotalAmount.innerText = newTotalAmount;

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const coachField = document.getElementById('coach-field');
    const coachFieldString = coachField.value;
    const coachFieldNumber = parseFloat(coachFieldString);

    coachField.value = '';

    const managerField = document.getElementById('Manager-field');
    const managerFieldString = managerField.value;
    const managerFieldNumber = parseFloat(managerFieldString);

    managerField.value = '';

    const playerExpenses = document.getElementById('Expenses-amount');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesNumber = parseFloat(playerExpensesString);

    const allCalculateAmount = managerFieldNumber + coachFieldNumber + playerExpensesNumber;
    const allTotalAmount = document.getElementById('total-amount');
    allTotalAmount.innerText = allCalculateAmount;
})
