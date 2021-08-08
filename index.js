const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
    body: document.body,
}

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function start() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    refs.buttonStart.disabled = true;
}

refs.buttonStart.addEventListener('click', start);
refs.buttonStop.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.buttonStart.disabled = false;
});