$(function(){
    $('#gnb>ul>li:nth-child(1)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":800
        },1000);
    })
    $('#gnb>ul>li:nth-child(2)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":1900
        },1000);
    })
    $('#gnb>ul>li:nth-child(3)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":3200
        },1000);
    })
    $('#gnb>ul>li:nth-child(4)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":6600
        },1000);
    })
    $('#gnb>ul>li:nth-child(5)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":7470
        },1000);
    })
    $('#gnb>ul>li:nth-child(6)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":9000
        },1000);
    })
    
    
        
    $('.indicator>li:nth-child(1)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":0
        },1000);
    })
    $('.indicator>li:nth-child(2)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":990
        },1000);
    })
    $('.indicator>li:nth-child(3)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":1940
        },1000);
    })
    $('.indicator>li:nth-child(4)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":3262
        },1000);
    })
    $('.indicator>li:nth-child(5)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":6500
        },1000);
    })
    $('.indicator>li:nth-child(6)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":7400
        },1000);
    })
    $('.indicator>li:nth-child(7)').on('click',function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop":9000
        },1000);
    })
    
    
    
    $(window).on('scroll',function(){
        var han = $(window).scrollTop();
        
        if(han>= 0 && han< 799){
            $('.indicator>li').removeClass();
            $('.indicator>li').eq(0).addClass('on')
        }
        if(han>= 800 && han< 1899){
            $('.indicator>li').removeClass();
            $('.indicator>li').eq(1).addClass('on')
        }
        if(han>= 1900 && han< 3199){
            $('.indicator>li').removeClass();
            $('.indicator>li').eq(2).addClass('on')
        }
        if(han>= 3200 && han< 6599){
            $('.indicator>li').removeClass();
            $('.indicator>li').eq(3).addClass('on')
        }
        if(han>= 6600 && han< 7469){
            $('.indicator>li').removeClass();
            $('.indicator>li').eq(4).addClass('on')
        }
        if(han>= 7470 && han< 8500){
            $('.indicator>li').removeClass();
            $('.indicator>li').eq(5).addClass('on')
        }
        if(han>= 8501 && han< 10000){
            $('.indicator>li').removeClass();
            $('.indicator>li').eq(6).addClass('on')
        }
    })
    
    
})













