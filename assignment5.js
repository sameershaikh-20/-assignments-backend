function atmWithdrawal(balance, withdrawAmount) {
  console.log("Initial Balance: ₹" + balance);
  console.log("Withdrawal Amount per transaction: ₹" + withdrawAmount);
  console.log("-----------------------------------------");

  while (true) {
    if (balance < withdrawAmount) {
      console.log("Insufficient balance! Cannot withdraw ₹" + withdrawAmount);
      console.log("Final Remaining Balance: ₹" + balance);
      break;
    }

    balance = balance - withdrawAmount;
    console.log("Withdrawn: ₹" + withdrawAmount + " | Remaining Balance: ₹" + balance);
  }
}

atmWithdrawal(500, 150);
