/*            29_5-1 Practice Money master and handle a few validation */

// Function to calculate total expense and balance
const calculateExpense = () => {
  // Get and convert input values to numbers
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
    alert("Please enter positive numbers in all fields.");
    return;
  }

  // Calculate total expense
  const expense = food + rent + clothes;

  // Validate that expense is not more than income
  if (expense > income) {
    alert("Expenses cannot be more than income.");
    return;
  }

  // Calculate remaining balance
  const balance = income - expense;

  // Display results
  document.getElementById("total-expense").innerText = expense.toFixed(2);
  document.getElementById("balance").innerText = balance.toFixed(2);
};

// Function to calculate savings and remaining balance
const calculateSavings = () => {
  const income = parseFloat(document.getElementById("income").value);
  const balance = parseFloat(document.getElementById("balance").innerText);
  const savePercentage = parseFloat(document.getElementById("save").value);

  // Validate inputs
  if (isNaN(savePercentage) || savePercentage < 0) {
    alert("Please enter a positive saving percentage.");
    return;
  }

  // Calculate saving amount
  const savingAmount = (savePercentage / 100) * income;

  // Validate saving amount is not more than balance
  if (savingAmount > balance) {
    alert("Saving amount cannot be greater than your current balance.");
    return;
  }

  // Calculate remaining balance after savings
  const remainingBalance = balance - savingAmount;

  // Display results
  document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
  document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
};


// ========================================================================================//
//                              Things For Remember
// ========================================================================================//

/* 

'<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>'
is not recommended for standard projects.

Why it’s not recommended:

1. It’s experimental / unofficial.
2. Many Tailwind classes may not work properly.
3. Most tutorials, documentation, and community examples use the official CDN.
4. Harder to customize (colors, fonts, plugins) than the official one.

Recommended approach:
* Use the official Tailwind CDN instead:
'<script src="https://cdn.tailwindcss.com"></script>'
* Fully supported, reliable, and up-to-date.
* Works in plain HTML immediately — no config file needed.
* Allows optional inline customization via 'tailwind.config' if you want.

💡 So for your Money Master project, replace the experimental CDN with the official one, and all your Tailwind classes will work reliably.
*/
