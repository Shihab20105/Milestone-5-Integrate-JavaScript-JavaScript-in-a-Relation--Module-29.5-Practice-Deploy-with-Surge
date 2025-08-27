/*            29_5-1 Practice Money master and handle a few validation */

// ===============================
// Calculate Expense & Balance
// ===============================
const calculateExpense = () => {
  // Get input values
  const income = parseFloat(document.getElementById("income").value);
  const food = parseFloat(document.getElementById("food").value);
  const rent = parseFloat(document.getElementById("rent").value);
  const clothes = parseFloat(document.getElementById("clothes").value);

  // Validate inputs
  if (
    isNaN(income) || income < 0 ||
    isNaN(food) || food < 0 ||
    isNaN(rent) || rent < 0 ||
    isNaN(clothes) || clothes < 0
  ) {
    alert("Inputs must be positive numbers.");
    return;
  }

  // Calculate total expense
  const expense = food + rent + clothes;

  // Validate expense <= income
  if (expense > income) {
    alert("Expenses cannot be more than income.");
    return;
  }

  // Calculate balance
  const balance = income - expense;

  // Display results
  document.getElementById("total-expense").innerText = expense.toFixed(2);
  document.getElementById("balance").innerText = balance.toFixed(2);
};

// ===============================
// Calculate Savings & Remaining Balance
// ===============================
const calculateSavings = () => {
  // Get inputs
  const income = parseFloat(document.getElementById("income").value);
  const balance = parseFloat(document.getElementById("balance").innerText);
  const savePercentage = parseFloat(document.getElementById("save").value);

  // Validate save percentage
  if (isNaN(savePercentage) || savePercentage < 0) {
    alert("Provide a positive saving value.");
    return;
  }

  // Calculate saving amount
  const savingAmount = (savePercentage / 100) * income;

  // Validate saving amount
  if (savingAmount > balance) {
    alert("Saving amount is greater than your current balance.");
    return;
  }

  // Calculate remaining balance
  const remainingBalance = balance - savingAmount;

  // Display results
  document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
  document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
};

// ========================================================================================//
//                              Things For Remember
// ======================================================================================= //
/*
Bootstrap has two parts:

1. CSS (for styling) -

<link 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
/>

👉 This one you already included at the top — it’s what gives you Bootstrap’s styles (buttons, grid system, forms, spacing, etc.).
Without this, the page will look plain.

2. JS Bundle (for interactivity) -

<script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
  crossorigin="anonymous">
</script>

👉 This is optional.
It’s only required if you want Bootstrap’s interactive components like:
* Collapse menus
* Dropdowns
* Modals
* Tooltips
* Carousels

If your project only uses layout (grid, rows, columns, forms, buttons, etc.), you don’t actually need the JS script.

✅ In your case:
* You’re using only forms, grid, and buttons → the CSS link is enough.
* The JS script isn’t needed, unless later you add Bootstrap features like modals or dropdowns.
*/
