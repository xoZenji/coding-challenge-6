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

//Task 3: Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonus = {
        "Excellent": 0.2,
        "Good": 0.1,
        "Average": 0.05,
    };
    return salary * bonus[performanceRating];
}
console.log(`Excellent Bonus: $${calculateBonus(5000, "Excellent")}`);
console.log(`Good Bonus: $${calculateBonus(7000, "Good")}`);
// Declared bonus as an object with different bonuses based on performance. Then has it log everything to the console.

//Task 4: Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let subscriptionCost = {
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50,
    };
    return subscriptionCost[plan] * months - discount;
}
console.log(`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`);
console.log(`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);
// Declared subscriptionCost as an object with different prices based on subscription type. Then has it log everything to the console.
