import { refs } from './refs';

const { body, startBtnEl, stopBtnEl } = refs;

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const onStartClick = () => {
  timerId = setInterval(() => {
    startBtnEl.removeEventListener('click', onStartClick);
    const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = `${colors[randomColorIndex]}`;
  }, 1000);
};

const onStopClick = () => {
  clearInterval(timerId);
  startBtnEl.addEventListener('click', onStartClick);
};

startBtnEl.addEventListener('click', onStartClick);
stopBtnEl.addEventListener('click', onStopClick);
