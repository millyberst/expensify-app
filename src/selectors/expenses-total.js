
export default (expenses) => {
    const amountsArray = expenses.map((expense) => expense.amount);
    const getSum = (total, amount) => total + amount;
    return amountsArray.reduce(getSum,0);
}


