export function onClickPlayPauseButton() {
  const playPauseButton = document.querySelector('.playPause');
  playPauseButton.textContent = 'Pause';
  playPauseButton.addEventListener('click', () => {
    if (playPauseButton.textContent === 'Pause') {
      playPauseButton.textContent = 'Play';
      playPauseButton.style.backgroundColor = "green"
    } else {
      playPauseButton.textContent = 'Pause';
      playPauseButton.style.backgroundColor = "red"
    }
  });
}

export function timer(seconds) {
  const timerElement = document.querySelector('.timer');
  const timerPlayButton = document.querySelector('.playPause');
  let secondsVal = seconds;

  const intervalId = setInterval(() => {
    if (timerPlayButton.textContent === "Pause") {
      if (secondsVal > 0) {
        secondsVal -= 1;
        timerElement.textContent = secondsVal;
      }
    }
  }, 1000);
}

export function removeTimer() {
  const parent = document.querySelector('footer')
  const child = document.querySelector('.timer')
  if (child) {
    parent.removeChild(child)
  }
  
}

export function removeTimerWhenTimeOver(timeVal) {
  const footer = document.querySelector('footer')
  const childTimer = document.querySelector('.timer')
  const playPauseButton = document.querySelector('.playPause')
  
  let timerTime = timeVal;
  timer(timerTime)
  setInterval(function() {
    if (playPauseButton.textContent == 'Pause') {
      timerTime = timerTime - 1
    }
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

export function useAnswerIsCorrect(team) {
  const correctAnswer = document.querySelector('#correct')
  const footer = document.querySelector('footer')
  correctAnswer.addEventListener('click',
    () => {
      const songElement = document.createElement('audio')
      songElement.src = `./assets/songs/${team}/${team}Correct${getRandomNumberBetweenOneAndThree()}.mp3`
      songElement.controls = true
      songElement.play()
      removeTimer()
    })
}

export function onClickNextButton() {
  const nextBtn = document.querySelector('.nextBtn');
  const songElement = new Audio("./assets/songs/next/ipl.mp3");

  nextBtn.addEventListener('click', (event) => {
    event.preventDefault();

    songElement.currentTime = 0; 
    songElement.play()
      .then(() => {
        console.log("Song is playing");
        setTimeout(() => {
          window.location.href = nextBtn.closest('a').href; 
        }, 2500);
      })
  });
}

export function useAnswerIsIncorrect() {
  const incorrectAnswers = document.querySelectorAll('.incorrect');
  
  incorrectAnswers.forEach((incorrectAnswer) => {
    incorrectAnswer.addEventListener('click', () => {
      const songElement = document.createElement('audio');
      songElement.src = `./assets/songs/wrong/wrong${getRandomNumberBetweenOneAndThree()}.mp3`;
      removeTimer()
      songElement.play();
    });
  });
}