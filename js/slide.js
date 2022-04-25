// var ul = document.querySelector('.swiper-slide');
 
//         function move(){
//             var curIndex = 0;
//             setInterval(function(){
//                 ul.style.transition = '1s';
//                 ul.style.transform = "translate3d(-"+400*(curIndex+1)+"px, 0px, 0px)";
//                 curIndex++;
//                 if(curIndex === 3){
//                     setTimeout(function(){
//                         ul.style.transition = '0s';
//                         ul.style.transform = "translate3d(0px, 0px, 0px)";
//                     },201)
//                     curIndex = 0;
//                 }

//             },2000);}
        
//         document.addEventListener("DOMContentLoaded",function(){
//             move();
//  });

window.addEventListener('load', function(){

    // var container = document.getElementsByClassName('swiper-container')[0];  
    // var controller = document.getElementsByClassName('swiper-pagination')[0];
    var liList = document.getElementsByClassName('swiper-pagination-bullet');
    var n = 0; 

    
    // var picture = document.getElementsByClassName("swiper-slide")[0];
    var pictureLi = document.getElementsByClassName("slide");
    // var taggetx = 0; 

    

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