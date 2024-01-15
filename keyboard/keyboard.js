document.addEventListener('DOMContentLoaded', function () {
    const keyDisplay = document.getElementById('key-display');
    const keycodeDisplay = document.getElementById('keycode-display');
    let keyHistory = [];

    document.addEventListener('keydown', function (event) {
        const pressedKey = event.key;
        const keyCode = event.keyCode;

        // Display pressed key and keycode
        keyDisplay.textContent = `Pressed Key: ${pressedKey}`;
        keycodeDisplay.textContent = `Keycode: ${keyCode}`;

        // Store key history
        keyHistory.push({ key: pressedKey, code: keyCode });
        console.log("Key History:", keyHistory);

        const audio = new Audio('./assets/Pikachu.mp3');
        audio.play();
    });
});
