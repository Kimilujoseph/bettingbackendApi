
const calculateprofitLoss = (odds, stack) => {

    const amountToWin = stack * odds;
    const profit = amountToWin - stack;
    console.log("profitfunction", profit)
    return profit

}

const calculateTotal = (odds, stack) => {
    const commision = 20;
    const amountToWin = stack * odds;
    const profit = amountToWin - stack;
    const total = profit + commision
    return total
}


module.exports = { calculateprofitLoss, calculateTotal }