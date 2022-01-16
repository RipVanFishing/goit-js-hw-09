const refs = {
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
    
}


console.log(refs.startBtn);
console.log(refs.stopBtn);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener("click", onClickStartBtn);
refs.stopBtn.addEventListener("click", onClickStopBtn);

function onClickStartBtn() {
    refs.startBtn.classList.add("js_disabled");
    body.
}
function onClickStopBtn() {
    refs.startBtn.classList.remove("js_disabled");
}