const cursor = document.querySelector("#cursor") as HTMLElement;
const pannel = document.querySelector("#color-pannel") as HTMLElement;
const canvas = document.querySelector("#canvas") as HTMLElement;
let colorBoxes: NodeListOf<HTMLElement>;

let selectedColor: string = "#000";

const colors: string[] = [
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
  "#006EE6",
  "#003A73",
  "#FF7F50",
];

function addColorsToPannel() {
  colors.forEach((color) => {
    const clrElem = document.createElement("button") as HTMLElement;
    clrElem.style.backgroundColor = color;
    clrElem.setAttribute("data-color", color);
    clrElem.classList.add("colors");
    pannel.appendChild(clrElem);
  });
  getColors();
}

function getColors() {
  colorBoxes = document.querySelectorAll<HTMLElement>(".colors");
}

function randomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}
function removeActiveClass() {
  colorBoxes.forEach((color) => color.classList.remove("active"));
}

function setActiveClass(target: HTMLElement) {
  removeActiveClass();
  target.classList.add("active");
}

function setCursorColor() {
  if (selectedColor === "#000") {
    cursor.style.color = "#fff";
  } else {
    cursor.style.color = "#000";
  }
}
canvas.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  console.log(target);
  target.setAttribute("fill", selectedColor);
});

window?.addEventListener("mousemove", (e) => {
  const x: number = e.clientX;
  const y: number = e.clientY;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
});

pannel.addEventListener("mouseenter", () => {
  cursor.style.display = "none";
});
pannel.addEventListener("mouseleave", () => {
  cursor.style.display = "block";
});
pannel.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const clr = target.getAttribute("data-color");
  console.log(clr);

  if (clr) {
    selectedColor = clr;
    setActiveClass(target);
    // setCursorColor();
  }
});

// canvas.addEventListener("mouseleave", ()=>{
//   cursor.style.color = "#000"
// })
addColorsToPannel();
