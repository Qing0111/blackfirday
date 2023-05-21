const nav = document.querySelector('#nav');
const banner = document.querySelector('#product-banner');

function scroll() {
  if(scrollY > banner.offsetHeight) {
    nav.classList.add('fixed');
    document.body.style.paddingTop = nav.offsetHeight+'px';
  }else {
    nav.classList.remove('fixed');
    document.body.style.paddingTop = 0;
  }
}
scroll();
window.addEventListener('scroll', scroll);

const breadBtns = document.querySelectorAll('#product .bread div');
const fruitBtns = document.querySelectorAll('#product .fruit div');
const coffeeBtns = document.querySelectorAll('#product .coffee div');
const bounce = document.querySelector('#bounce');
const types = document.querySelectorAll('#bounce [data-type]')
const close = document.querySelectorAll('#bounce .modal .fa-x');



breadBtns.forEach(function(item) {
  item.addEventListener('click', function() {
    types.forEach(type => {
      type.classList.add('d-none')
      if(type.dataset.type == 'bread'){
        type.classList.remove('d-none');
        // console.log();
        type.querySelector('.card-img img').setAttribute('src',item.querySelector('img').getAttribute('src'))
      }
    });
    bounce.classList.add('active');
    body.style.overflow = 'hidden';
  });
});
fruitBtns.forEach(function(item) {
  item.addEventListener('click', function(e) {

    types.forEach(type => {
      type.classList.add('d-none')
      if(type.dataset.type == 'fruit'){
        type.classList.remove('d-none');
        type.querySelector('.card-img img').setAttribute('src',item.querySelector('img').getAttribute('src'))
      }
    });
    bounce.classList.add('active');
    body.style.overflow = 'hidden';
  });
});
coffeeBtns.forEach(function(item) {
  item.addEventListener('click', function(e) {

    types.forEach(type => {
      type.classList.add('d-none')
      if(type.dataset.type == 'coffee'){
        type.classList.remove('d-none');
        type.querySelector('.card-img img').setAttribute('src',item.querySelector('img').getAttribute('src'))
      }
    });
    bounce.classList.add('active');
    body.style.overflow = 'hidden';
  });
});

// 點擊旁邊取消彈跳視窗
window.addEventListener('click', function(e) {
  // console.log(e.target.getAttribute('id'));
  if(e.target.getAttribute('id') == 'bounce'){
    bounce.classList.remove('active');
    body.style.overflow = 'auto';
  }
});

close.forEach((item) => {
  item.addEventListener('click', function() {
    bounce.classList.remove('active');
    body.style.overflow = 'auto';
  })
});

const cardTops = document.querySelectorAll('#product .card')
const treeFades = document.querySelectorAll('#product .card-body .tree');
const outputFades = document.querySelectorAll('#product .card-body .output div');


// 滾動飄入
function scrollFade() {
  cardTops.forEach((item) => {
    // console.log(scrollY, item.offsetTop);
    if(scrollY + 624 > item.offsetTop){
      item.querySelector('.tree').classList.add('fade');
      item.querySelectorAll('.output div').forEach(i => {
        i.classList.add('fade');
      });
    }
  });
}
scrollFade();
window.addEventListener('scroll', scrollFade);