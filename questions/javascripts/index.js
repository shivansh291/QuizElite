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
  const footer = document.querySelector('footer')
  const childTimer = document.querySelector('.timer')
  let timerTime = timeVal;
  timer(timerTime)
  setInterval(function() {
    timerTime = timerTime - 1
    if (timerTime == 0) {
      if (footer.contains(childTimer)){
        removeTimer()
      }
    }
  },
    1000);
}

export function getRandomNumberBetweenOneAndThree() {
  return Math.floor(Math.random() * 3) + 1;
}

export function useAnswerIsCorrect() {
  const correctAnswer = document.querySelector('#correct')
  const footer = document.querySelector('footer')
  correctAnswer.addEventListener('click',
    () => {
      const songElement = document.createElement('audio')
      songElement.src = ""
      songElement.controls = true
      footer.appendChild(songElement)
      removeTimer()
    })
}
