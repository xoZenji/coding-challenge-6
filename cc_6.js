//Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let totalProfit = (sellingPrice - costPrice) * unitsSold;
    return totalProfit;
}; // Calculates the total profit

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`);
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`);
// Logs the profits to the console.
