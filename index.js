const container = document.querySelector(".hard");
const boxes = document.querySelectorAll(".box1");

let isPaused = false;

boxes.forEach(box1 => {
    box.addEventListener("click", () => {
        if (isPaused) {
            container.style.animationPlayState = "running";
        } else {
            container.style.animationPlayState = "paused";
        }
        isPaused = !isPaused;
    });
});