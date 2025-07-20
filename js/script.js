
$(function(){

    // var P1 = $('.Img16').offset().top - 100;
    // var P2 = $('.Img17').offset().top - 600;
    // var P3 = $('.Img18').offset().top - 400;
    // var P4 = $('.Img19').offset().top - 450;
    // var P5 = $('.Img20').offset().top - 120;
    var P6 = $('.Img21').offset().top - 450;
    var P7 = $('.Img22').offset().top - 250;
    var P8 = $('.Img23').offset().top - 230;
    var P9 = $('.Img24').offset().top - 1500;
    var P10 = $('.Img25').offset().top - 650;
    var P11 = $('.Img26').offset().top - 750;

    var T = $('.content-text').offset().top - 550;

    $(window).scroll(function(){

        var N = $(window).scrollTop();
        console.log(N);

        // if(N > P1){
        //     $('.Img16').animate({opacity: 1},500);
        // }

        // if(N > P2){
        //     $('.Img17').animate({left: 306, opacity: 1},500);
        // }

        // if(N > P3){
        //     $('.Img18').animate({opacity: 1},500);
        // }

        // if(N > P4){
        //     $('.Img19').animate({top: 585, opacity: 1},500);
        // }

        // if(N > P5){
        //     $('.Img20').animate({opacity: 1},500);
        // }

        if(N > P6){
            $('.Img21').animate({opacity: 1},500);
        }

        if(N > P7){
            $('.Img22').animate({opacity: 1},500);
        }

        if(N > P8){
            $('.Img23').animate({opacity: 1},500);
        }

        if(N > P9){
            $('.Img24').animate({opacity: 1},500);
        }

        if(N > P10){
            $('.Img25').animate({opacity: 1},500);
        }

        if(N > P11){
            $('.Img26').animate({opacity: 1},500);
        }

        if(N > T){
            $('.content-text').animate({opacity: 1},500);
        }


    })
  


    

})







