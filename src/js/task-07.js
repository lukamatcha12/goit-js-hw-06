const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector(".text-element"); 

fontSizeControlEl.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value + "px";
});