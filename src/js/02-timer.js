import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    startBtn: document.querySelector('[data-start]'),
    dayValue: document.querySelector('[data-days]'),
    hoursValue: document.querySelector('[data-hours]'),
    minuteValue: document.querySelector('[data-minutes]'),
    secondValue: document.querySelector('[data-seconds]')
}


refs.startBtn.disabled = true;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
          return Notiflix.Notify.warning('Выберите дату в будущем');
    }
        clearInterval(intervalId);
        refs.startBtn.disabled = false;
        function onClickStartBtn() {
            intervalId = setInterval(() => {
                const deltaTime = selectedDates[0] - new Date();
                if (deltaTime < 1000) {
                    clearInterval(intervalId);
                }
                const endTime = convertMs(deltaTime);
                updateTime(endTime);
            }, 1000);
        }
        refs.startBtn.addEventListener("click", onClickStartBtn);
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

function updateTime({ days, hours, minutes, seconds }) {
  refs.dayValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minuteValue.textContent = `${minutes}`;
  refs.secondValue.textContent = `${seconds}`;
}




