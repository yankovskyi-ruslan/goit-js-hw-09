function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

btnStop.disabled = true;

function onChangeColorStart() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStop.disabled = false;
    btnStart.disabled = true;
};

function onChangeColorStop() {
    clearInterval(timerId);
    btnStop.disabled = true;
    btnStart.disabled = false;

}

btnStart.addEventListener('click', onChangeColorStart);
btnStop.addEventListener('click', onChangeColorStop);

