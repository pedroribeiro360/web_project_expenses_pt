let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i of expenseEntries) {
  totalExpensesValue = totalExpensesValue + i[1];
  console.log(`Despesas Totais : ${totalExpensesValue}`);
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    return (balanceColor = "green");
  }
}

function calculateCategoryExpenses(valor) {
  let categoryTotalValor = 0;
  for (let i of expenseEntries) {
    if (valor === i[0]) {
      categoryTotalValor = categoryTotalValor + i[1];
    } else {
    }
  }
  return categoryTotalValor;
}
let categorySelector = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];
let categoriesTotals = [];
function calculateLargestCategory() {
  categoriesTotals = [];
  let largestfullcategory = 0;
  let largestCategory = 0;
  for (let i of categorySelector) {
    categoriesTotals.push([i, calculateCategoryExpenses(i)]);
  }
  for (let i = 0; i < categoriesTotals.length; i++) {
    if (largestCategory < categoriesTotals[i][1]) {
      largestCategory = categoriesTotals[i][1];
      largestfullcategory = categoriesTotals[i][0];
    }
  }

  return largestfullcategory;
}

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue = totalExpensesValue + values[1];
}
