Circles.create({
  id: 'circles-1',
  value: 550.20,
  maxValue: 615,
  radius: 60,
  width: 10,
  duration: 1,
  textClass: 'BTU-circlesTxt',
  colors: ['#9EBCA8', '#6C9B7C'],
});

Circles.create({
  id: 'circles-2',
  value: 93.8,
  maxValue: 110,
  radius: 60,
  width: 10,
  duration: 1,
  textClass: 'BTU-circlesTxt',
  decimalClass: 'BTU-circlesTxt',
  colors: ['#E191BF', '#DE2891'],
});

Circles.create({
  id: 'circles-3',
  value: 3.87,
  maxValue: 4.5,
  radius: 60,
  width: 10,
  duration: 1,
  textClass: 'BTU-circlesTxt',
  colors: ['#A9E4E8', '#0DBECB'],
});


jQuery("#carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },
    952: {
      items: 2
    },
    1024: {
      items: 2
    },

    1366: {
      items: 3
    }
  }
});

var sidebar = document.querySelector("#sidebar-wrapper");
var btn = document.querySelector(".BTU-toggler");
var drop = document.querySelector(".BTU-collapse");
var w = drop.offsetHeight;

btn.addEventListener("click", () => {
    sidebar.style.transition = "all 0.5s";
    sidebar.classList.toggle("headMargin");
})