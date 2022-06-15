// var index = 0;   //이미지에 접근하는 인덱스
// window.onload = function () {
//   slideShow();
// }

// function slideShow() {
//   var i;
//   var x = document.getElementsByClassName("slide");  //slide에 대한 dom 참조
//   // const slideBtn = document.getElementsByClassName("swiper-pagination");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
//   }
//   index++;
//   if (index > x.length) {
//     index = 1;  //인덱스가 초과되면 1로 변경
//   }
//   x[index - 1].style.display = "flex";  //해당 인덱스는 block으로
//   setTimeout(slideShow, 4000);   //함수를 4초마다 호출

// }

window.addEventListener('load', function(){
    var liList = document.getElementsByClassName('swiper-pagination-bullet');
    var n = 0; 
    var pictureLi = document.getElementsByClassName("slide");

    for(var i=0; i < liList.length; i++){
        liList[i].index = i;

        liList[i].addEventListener('click', function(e){
              e.preventDefault();
              n = e.currentTarget.index
    
              for(var j=0; j < liList.length; j++){//
                     if(j == n){
                        liList[j].classList.add("on");   
                        pictureLi[j].classList.add("active");
                     }
                     else{
                        liList[j].classList.remove("on");
                        pictureLi[j].classList.remove("active")   
                     }
              }
        });
        
    }
    
});

function fullchange(e) {
    e.setAttribute('src', './images/paletarichacircle2.png');
  }

  function fullchange2(e) {
    e.setAttribute('src', './images/paletaricha.png');
  }

  function fullchange3(e) {
    e.setAttribute('src', './images/paletkokecircle2.png');
  }

  function fullchange4(e) {
    e.setAttribute('src', './images/paletkoke.png');
  }

  function fullchange5(e) {
    e.setAttribute('src', './images/paletkongacircle2.png');
  }

  function fullchange6(e) {
    e.setAttribute('src', './images/paletkonga.png');
  }

  AOS.init({
    duration: 2000
    });