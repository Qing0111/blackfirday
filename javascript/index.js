  const loading = document.querySelector('.loading');

  window.onload = function() {
    setTimeout(function() {
      loading.classList.add('end');
      body.style.overflow = 'auto';
      setTimeout(function() {
        loading.style.display = 'none';
        scroll();
      }, 300);
    }, 1000);
  }
  
  const nav = document.querySelector('#nav');
  const banner = document.querySelector('#banner');
  const cards = document.querySelectorAll('#main-card .card');
  const about = document.querySelector('#about');
  const around = document.querySelector('#around');
  
  // 滾動監控
  function scroll() {
    if(scrollY > banner.offsetHeight) {
      nav.classList.add('fixed');
      document.body.style.paddingTop = nav.offsetHeight+'px';
    }else {
      nav.classList.remove('fixed');
      document.body.style.paddingTop = 0;
    }

    if(scrollY + 576 > about.offsetTop){
      about.querySelector('h2').classList.add('fade');
      about.querySelectorAll('.text p').forEach(text => {
        text.classList.add('fade');
      });
    }

    const mainCard = document.querySelector('#main-card');
    cards.forEach((card) => {
      // console.log(scrollY, card.offsetTop);
      if(scrollY + 700 > mainCard.offsetTop + card.offsetTop){
        card.querySelector('.pic').classList.add('fade');
        card.querySelector('.card-body').classList.add('opc');
        card.classList.add('topFade');
      }
    });

    if(scrollY + 600 > around.offsetTop){
      around.querySelector('.swiper').classList.add('fade');
    }
  }
  window.addEventListener('scroll', scroll);




  const cloudBanner = banner.querySelector('.moveCloud');

  // function mouseCloud(e) {
  //   // console.log(e.clientX - window.innerWidth / 2);
  //   let moveX = (e.clientX - window.innerWidth / 2) * 0.03;
  //   let moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  //   cloudBanner.style.transform = `translate3D(-${moveX}px,${moveY}px,${moveY}px)`
  // }
  // banner.addEventListener('mousemove', mouseCloud);





  // Initialize Swiper
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
