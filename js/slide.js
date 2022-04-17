window.addEventListener('load', function(){
    var n = 0; 
    var slide = document.getElementsByClassName("swiper-slide")[0]; 
    var infoArray = [];
    for(var i= 0; i < slide.children.length; i++){
       if(slide.children[i].tagName == "NAV"){
          var swiperslide = slide.children[i];
       }
       else{
          infoArray.push(slide.children[i]);
       }
    }
    


    var navLi = swiperslide.children[0].children;//nav ul li를 의미
    //console.log(navLi);

    navLi[n].classList.add("on");
    infoArray[n].classList.add("active");

    for(var i=0; i < navLi.length; i++ ){
        navLi[i].index = i; // 수업시간에 이부분이 빠졌음

        navLi[i].addEventListener('click', function(e){
            e.preventDefault();
            n = e.currentTarget.index;// 현재 클릭한 대상의 인덱스

            //클래스를 적용하고 없애기를 할때 기본형식
            for (var j = 0; j < navLi.length; j++) {
                    if (j == n) {
                        navLi[j].classList.add("on");
                        infoArray[j].classList.add("active");
                    }
                    else {
                        navLi[j].classList.remove("on");
                        infoArray[j].classList.remove("active");
                    }
                }
        });
     }
    });