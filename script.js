let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Increment
incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

// Decrement
decrementBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

// Reset
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Update UI
function updateDisplay() {
    countDisplay.textContent = count;

    // Optional color change
    if (count > 0) {
        countDisplay.style.color = "lightgreen";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "white";
    }
}