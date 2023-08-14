const playVideo = function () {
  const videoPlayer = document.querySelector(".tour-card__video");
  const  playButton = videoPlayer.querySelector(".tour-card__play-button");
  const previewer = videoPlayer.querySelector("picture");
  let source = playButton.getAttribute('href');

  playButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    playButton.style.display = "none";
    const newIframe = document.createElement('iframe');
    newIframe.classList.add("video-player__video");
    newIframe.style.display = "block";
    newIframe.style.width = "100%";
    newIframe.style.height = "100%";
    videoPlayer.style.zIndex = "6";
    newIframe.src = source;
    newIframe.title = "YouTube video player";
    newIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    newIframe.allowFullscreen = true;
    previewer.style.display = "none";
    videoPlayer.appendChild (newIframe);
  });
};

export default playVideo;
