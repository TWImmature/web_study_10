// main.js

document.addEventListener('DOMContentLoaded', async () => {
    await sequenceAnimations();
});

async function sequenceAnimations() {
    const aliceTumbling = [
        { transform: "rotate(0) scale(1)" },
        { transform: "rotate(360deg) scale(0)" },
    ];

    const aliceTiming = {
        duration: 2000,
        iterations: 1,
        fill: "forwards",
    };

    const alice1 = document.querySelector("#alice1");
    const alice2 = document.querySelector("#alice2");
    const alice3 = document.querySelector("#alice3");

    // Wait for the first animation to finish
    await alice1.animate(aliceTumbling, aliceTiming).finished;

    // Wait for the second animation to finish
    await alice2.animate(aliceTumbling, aliceTiming).finished;

    // Start the third animation
    alice3.animate(aliceTumbling, aliceTiming);
}
