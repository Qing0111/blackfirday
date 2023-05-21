const nav = document.querySelector('#nav');
const banner = document.querySelector('#activity-banner');

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
window.addEventListener('scroll', scroll)


const tab = document.querySelectorAll('#tabs li a');
const cards = document.querySelectorAll('#activity .card');
const ecology = document.querySelector('#activity [data-type=ecology]');
const pick = document.querySelector('#activity [data-type=pick]');
const food = document.querySelector('#activity [data-type=food]');
const experience = document.querySelector('#activity [data-type=experience]');
const firefly = document.querySelector('#activity [data-type=firefly]');
const view = document.querySelector('#activity [data-type=view]');


// 點擊標籤到指定位置
tab.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    cards.forEach(card => {

      if(card.dataset.type == item.dataset.type){
        window.scrollTo({
          top: card.offsetTop - 84,
          behavior: "smooth",
        });
      }
    });
  });
});


// 滾動監控標籤
window.addEventListener('scroll', function() {
    
    if(scrollY >= ecology.offsetTop-280 && scrollY < pick.offsetTop-280){
      tab.forEach(item => {

        item.classList.remove('active');
        if(item.dataset.type == 'ecology'){
          item.classList.add('active');
        };
      });
    }else if(scrollY >= pick.offsetTop-280 && scrollY < food.offsetTop-280){
      tab.forEach(item => {

        item.classList.remove('active');
        if(item.dataset.type == 'pick'){
          item.classList.add('active');
        };
      });
    }else if(scrollY >= food.offsetTop-280 && scrollY < experience.offsetTop-280){
      tab.forEach(item => {

        item.classList.remove('active');
        if(item.dataset.type == 'food'){
          item.classList.add('active');
        };
      });
    }else if(scrollY >= experience.offsetTop-280 && scrollY < firefly.offsetTop-280){
      tab.forEach(item => {

        item.classList.remove('active');
        if(item.dataset.type == 'experience'){
          item.classList.add('active');
        };
      });
    }else if(scrollY >= firefly.offsetTop-280 && scrollY < view.offsetTop-280){
      tab.forEach(item => {

        item.classList.remove('active');
        if(item.dataset.type == 'firefly'){
          item.classList.add('active');
        };
      });
    }else if(scrollY >= view.offsetTop-280){
      tab.forEach(item => {

        item.classList.remove('active');
        if(item.dataset.type == 'view'){
          item.classList.add('active');
        };
      });
    }else{
      tab.forEach(item => {
        item.classList.remove('active');
      });
    }
  });