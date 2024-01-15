document.addEventListener('DOMContentLoaded', function () {
    const counterDisplay = document.getElementById('counter-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    let count = 0;

    // Update display function
    function updateDisplay() {
        counterDisplay.textContent = count;
    }

    // Increment button click event
    incrementBtn.addEventListener('click', function () {
        count++;
        updateDisplay();
        // Add creativity: Apply animation on increment
        counterDisplay.classList.add('increment-animation');
        setTimeout(() => {
            counterDisplay.classList.remove('increment-animation');
        }, 300);
    });

    // Decrement button click event
    decrementBtn.addEventListener('click', function () {
        count--;
        updateDisplay();
        // Add creativity: Apply animation on decrement
        counterDisplay.classList.add('decrement-animation');
        setTimeout(() => {
            counterDisplay.classList.remove('decrement-animation');
        }, 300);
    });

    // Reset button click event
    resetBtn.addEventListener('click', function () {
        count = 0;
        updateDisplay();
        // Add creativity: Apply animation on reset
        counterDisplay.classList.add('reset-animation');
        setTimeout(() => {
            counterDisplay.classList.remove('reset-animation');
        }, 300);
    });
});
