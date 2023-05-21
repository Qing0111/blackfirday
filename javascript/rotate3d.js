
const pics = document.querySelectorAll('#main-card .card .pic');
pics.forEach(pic => {
  pic.addEventListener('mousemove', function(e) {
    let mouseX = (e.offsetX - pic.offsetWidth/2) * 0.014;
    let mouseY = -(e.offsetY - pic.offsetHeight/2) * 0.035;
    // console.log(mouseY);
    pic.style.transform = `translateX(0) rotate3d(0, 1, 0, ${mouseX}deg) rotate3d(1, 0, 0, ${mouseY}deg)`;
  });
});