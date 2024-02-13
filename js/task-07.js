const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

document.getElementById("text").style.fontSize = "56px";

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
});
