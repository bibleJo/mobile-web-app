$(document).ready(function(){
    $(window).scroll(function(){

        sc = $(window).scrollTop(); //현재 스크롤 위치

        if(sc >= 400){
            $('.sec01 > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
        }
        if(sc >= 1200){
            $('.sec02 > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
        }
        if(sc >= 2000){
            $('.sec03 > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
        }
        if(sc >= 2800){
            $('.sec04 > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
        }
        if(sc >= 3600){
            $('.sec05 > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
        }
        if(sc >= 4400){
            $('.sec06 > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
        }
        if(sc >= 5200){
            $('.sec07 > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
        }
    })

    $('.main > .inner > div').animate({'marginTop':'0' , 'opacity':'1'}, 1000)
    

})