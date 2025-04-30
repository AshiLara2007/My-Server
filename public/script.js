document.addEventListener("DOMContentLoaded", () => {
    const joinButtons = document.getElementById("join-buttons");
    const startButton = document.getElementById("start");
    const container = document.getElementById("container");

    startButton.addEventListener("click", () => {
        // Move the join buttons above the start button
        container.insertBefore(joinButtons, startButton);

        // Show a confirmation message
        const confirmed = document.createElement("p");
        confirmed.textContent = "✅ You joined the channels!";
        confirmed.style.color = "green";
        confirmed.style.fontWeight = "bold";
        container.insertBefore(confirmed, joinButtons);
    });
});
