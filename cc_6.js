//Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let totalProfit = (sellingPrice - costPrice) * unitsSold;
    return totalProfit;
}; // Calculates the total profit

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`);
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`);
// Logs the profits to the console.

//Task 2: Sales Tax Computation
function calculateSalesTax(amount, taxRate) {
    let salesTax = amount * taxRate
    return Math.floor(salesTax);
}; // Calculates the sales tax

console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`);
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`);
// Logs the tax to the console.
