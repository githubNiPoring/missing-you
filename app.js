const text = document.getElementById("text");
const yes = document.getElementById("yesBtn");
const no = document.getElementById("noBtn");
const container = document.getElementById("wrapper");

// const contRect = container.getBoundingClientRect();
// const noRect = no.container.getBoundingClientRect();

yes.addEventListener('click', () => {
    text.innerHTML = "YEHEY!!!";
});

no.addEventListener('mouseover', () => {
    const posX = Math.floor(Math.random() * (500 - 1) + 1);
    const posY = Math.floor(Math.random() * (500 - 1) + 1);

    no.style.left = posX + "px"; 
    no.style.top = posY + "px";
});
