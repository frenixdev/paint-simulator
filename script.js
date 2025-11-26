"use strict";
const cursor = document.querySelector("#cursor");
const pannel = document.querySelector("#color-pannel");
const canvas = document.querySelector("#canvas");
//defining variables
let colorBoxes;
const skeletonArray = [
    "car",
    "home",
    "indicator",
    "airplane",
    "building",
];
let selectedColor = "#fff";
let curIndex = 0;
const colors = [
    "#FFB5E8",
    "#B5EAD7",
    "#C7CEEA",
    "#FFDAC1",
    "#E2F0CB",
    "#FF3F3F",
    "#FFB800",
    "#00C8FF",
    "#7A00FF",
    "#00FF85",
    "#6A994E",
    "#A7C957",
    "#386641",
    "#F2E8CF",
    "#BC4749",
    "#D9CAB3",
    "#F3A712",
    "#EB6F62",
    "#8E5572",
    "#3A3A3C",
    "#E0F2FF",
    "#A7D8FF",
    "#4FA8FF",
    "#003A73",
    "#FF7F50",
];
function addColorsToPannel() {
    colors.forEach((color) => {
        const clrElem = document.createElement("button");
        clrElem.style.backgroundColor = color;
        clrElem.setAttribute("data-color", color);
        clrElem.classList.add("colors");
        pannel.appendChild(clrElem);
    });
    getColors();
}
async function loadSVG() {
    const res = await fetch(`./src/svg/${skeletonArray[curIndex]}.svg`);
    canvas.innerHTML = await res.text();
}
function getColors() {
    colorBoxes = document.querySelectorAll(".colors");
}
function setActiveClass(target) {
    colorBoxes.forEach((color) => color.classList.remove("active"));
    target.classList.add("active");
}
//next prev button logic
const increaseIndex = () => {
    console.log(1);
    curIndex = curIndex === skeletonArray.length - 1 ? 0 : curIndex + 1;
    loadSVG();
};
function decreaseIndex() {
    console.log(curIndex);
    curIndex = curIndex === 0 ? skeletonArray.length - 1 : curIndex - 1;
    loadSVG();
}
//set cursor color
function setCursorColor() {
    if (selectedColor === "#000") {
        cursor.style.color = "#fff";
    }
    else {
        cursor.style.color = "#000";
    }
}
//all the event lisenerts
//all the event lisenerts
//all the event lisenerts
//all the event lisenerts
//all the event lisenerts
canvas.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);
    target.setAttribute("fill", selectedColor);
});
window?.addEventListener("mousemove", (e) => {
    const target = e.target;
    if (target.id === "next" || target.id === "prev" || target.closest?.("#color-pannel")) {
        cursor.style.display = "none";
    }
    else {
        cursor.style.display = "block";
    }
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
});
pannel.addEventListener("click", (e) => {
    const target = e.target;
    const clr = target.getAttribute("data-color");
    console.log(clr);
    if (clr) {
        selectedColor = clr;
        setActiveClass(target);
    }
});
// manually calling functions
addColorsToPannel();
loadSVG();
//# sourceMappingURL=script.js.map