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

//Task 5: Currency Conversion
function convertCurrency(amount, exchangeRate) {
    return (amount * exchangeRate);
}
console.log(`Converted Amount: $${convertCurrency(100, 1.1).toFixed(2)}`);
console.log(`Converted Amount: $${convertCurrency(250, 0.85).toFixed(2)}`);
// converts the currency and logs it to the console.

//Task 6: Higher Order Function for Bulk Orders.
let orders = [200, 600, 1200, 450, 800];


function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

console.log(applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount));
// Declared an array of discounted orders and logged them to the console.

//Task 7: Business Expense Tracker
let tracker = createExpenseTracker();
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        return `Total Expenses: $${totalExpenses}`;
    };
};

console.log(tracker(200));
console.log(tracker(150));
// Created a function that tracks business expenses and logs them to the console.

//Task 8: Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return "Max Level Reached";
    }
    return `Years to Level 10: ${(10 - employeeLevel) * 2}`;
}

console.log(calculateYearsToPromotion(7));
console.log(calculateYearsToPromotion(5));
// Created a function the calculates the amount of years left to reach level 10 and logged everything to the console.