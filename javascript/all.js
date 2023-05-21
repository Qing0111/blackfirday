const burger = document.querySelector('.burger .fa-bars');
const mobileMenu = document.querySelector('#mobile-menu');
const cross = document.querySelector('.burger .fa-x')
const body = document.querySelector('body');
const tabs = document.querySelectorAll('#mobile-menu .navbar a');

burger.addEventListener('click', function() {
  mobileMenu.classList.add('active');
  body.style.overflow = 'hidden';
});
cross.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
  body.style.overflow = 'auto';
});
tabs.forEach(function(item) {
  item.addEventListener('click', function(e) {
    // if(item.classList.contains('active')){
    //   e.preventDefault();
    //   return;
    // }
    mobileMenu.classList.remove('active');
    body.style.overflow = 'auto';
  });
});

let obj = {};
// 抓取天氣
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-8D16676E-55B5-4C88-A449-E3A627C1158C')
.then(function(response) {
  return response.json();
}).then(function(data) {
  // console.log(data.records.location);
  data.records.location.forEach(item => {
    if(item.locationName.includes('臺中')){
      obj = item.weatherElement[0].time[1].parameter.parameterName;
      window.addEventListener('mousedown', floatCloud);
    }
  })
});

// 點擊出現圖片
function floatCloud(e) {

  let cloud = document.createElement('span');
  cloud.className = 'mousedownCloud';
 
  let x = e.pageX;
  let y = e.pageY;

  cloud.style.left = x+'px';
  cloud.style.top = y+'px';
  let size = Math.random() * 60;
  cloud.style.width = size+20+'px';
  cloud.style.height = size+20+'px';

  if(obj.includes('陰天') || obj.includes('雲')){
    cloud.style.backgroundImage = "url('../image/thundercloud.png')";
  }
  if(obj.includes('晴')){
    cloud.style.backgroundImage = "url('../image/sun.png')";
  }else if(obj.includes('雨')){
    cloud.style.backgroundImage = "url('../image/raining.png')";
  }

  body.appendChild(cloud);

  setTimeout(function() {
    cloud.remove();
  }, 1000);
}



