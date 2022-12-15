// Menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navButtonText.classList.add('visually-hidden');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const links = document.querySelectorAll('.main-nav__item');

const navLinckHandleClick = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
}

links.forEach(link => {
  link.addEventListener('click', navLinckHandleClick)
})


// Div.Why-to-invest hide/show more info
const showButns = document.querySelectorAll(".why-to-invest__item-more-btn");

// Desktop onPortretImgHover
const onItemMouseOver = (item) => {
  if (window.screen.width > 1023) {
    item.classList.add('why-to-invest__item--active')
  }
};

const onItemMouseOut = (item) => {
  if (window.screen.width > 1023) {
    item.classList.remove('why-to-invest__item--active')
  }
};

// Mobile onButtonsMoreClick
showButns.forEach(sBtn => {
  sBtn.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('why-to-invest__item--active');
  });
})


// Video
const video = document.querySelector("#video")
const playButton = document.querySelector("#play-btn")

const changeVidoeForMob = () => {
  if (window.screen.width < 1024) {
    console.log('hi');
    video.setAttribute("src", "video/video-mob.mp4")

  }
}

changeVidoeForMob();

const handlePlayClick = () => {
  playButton.style.display = "none";
  video.setAttribute("controls", "controls")
  video.play()
}
