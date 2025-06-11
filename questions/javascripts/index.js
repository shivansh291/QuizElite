export function timer(seconds) {
  const timerElement = document.querySelector('.timer')
  let secondsVal = seconds
  setInterval(function() {
    secondsVal = secondsVal - 1
    timerElement.textContent = secondsVal
  }, 1000);
}

export function removeTimer() {
  const parent = document.querySelector('footer')
  const child = document.querySelector('.timer')
  parent.removeChild(child)
}

export function removeTimerWhenTimeOver(timeVal) {
  let timerTime = timeVal;
  timer(timerTime)
  setInterval(function() {
    timerTime = timerTime - 1
    if (timerTime == 0) {
      removeTimer()
    }
  },
    1000);
}

function getRandomNumberBetweenOneAndThree() {
  return Math.floor(Math.random() * 3) + 1;
}
