function rollDice() {
    // Generate random numbers from 1 through 6.
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the total.
    const total = die1 + die2;

    // Display the random results.
    document.getElementById("die1").value = die1;
    document.getElementById("die2").value = die2;

    // Display the calculated total.
    document.getElementById("total").value = total;

    // Update the status message.
    document.getElementById("message").textContent =
        `You rolled ${die1} and ${die2}. Total: ${total}`;
}
