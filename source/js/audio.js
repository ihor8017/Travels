const playAudio = () => {
  const audioPlayer = document.querySelector(".tour-card__audio");
  const  playButton = audioPlayer.querySelector(".tour-card__play-button");
  let source = playButton.getAttribute('href');

  playButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    playButton.style.display = "none";
    const newIframe = document.createElement('iframe');
    newIframe.classList.add("video-player__audio");
    newIframe.style.display = "block";
    newIframe.style.width = "100%";
    newIframe.style.height = "100%";
    audioPlayer.style.zIndex = "6";
    newIframe.src = source;
    newIframe.title = "Audio records";
    playButton.style.display = "none";
    audioPlayer.appendChild(newIframe);
  });
}

export default playAudio;
