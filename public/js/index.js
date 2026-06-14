document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".video-button");
  const overlay = document.querySelector(".overflow");
  const video = document.querySelector(".overflow video");
  const videos = document.querySelector(".overflow .videos");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-video");

      overlay.style.display = 'flex';
      videos.style.display = 'block';

      video.querySelector("source").src = src;
      video.load();
      video.play();
    });
  });
});