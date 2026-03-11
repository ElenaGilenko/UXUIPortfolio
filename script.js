document.querySelectorAll('.back-to-top').forEach(button => {

  button.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

});

const videos = document.querySelectorAll(".section-video");

videos.forEach(video => video.pause());

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 });

videos.forEach(video => videoObserver.observe(video));


/* section bottm stage*/
const stage = document.querySelector('.stage');

const stageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio >= 0.5){
      stage.classList.add('move'); // Animation starten
    }
  });
}, { threshold: 0.5 });

stageObserver.observe(stage);
