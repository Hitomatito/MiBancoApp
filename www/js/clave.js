document.addEventListener("DOMContentLoaded", () => {
    const pinDots = document.querySelectorAll(".pin-dot");
    const keys = document.querySelectorAll(".key");
    let pin = "";

    keys.forEach((key) => {
        key.addEventListener("click", () => {
            if (pin.length < 6) {
                pin += key.textContent;
                pinDots[pin.length - 1].style.backgroundColor = "#17ABE3";

                if (pin.length === 6) {
                    // Redirigir a otra página después de completar el PIN
                    setTimeout(() => {
                        window.location.href = "dashboard.html";
                    }, 300);
                }
            }
        });
    });
});