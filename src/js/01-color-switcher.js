function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
    body: document.querySelector('body')
}

let colorId = null;

refs.startBtn.addEventListener("click", onClickStartBtn);
refs.stopBtn.addEventListener("click", onClickStopBtn);

function onClickStartBtn() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    colorId = setInterval(() => {
        bodyChangeColor();
    }, 1000);
}
function onClickStopBtn() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(colorId);
}

    function bodyChangeColor() {
        refs.body.style.backgroundColor = getRandomHexColor();
    }