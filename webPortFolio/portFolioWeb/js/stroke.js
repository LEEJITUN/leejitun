/*
 * Source: https://jakearchibald.com/2013/animated-line-drawing-svg/
 */

function autograph() {
    var parent = document.querySelector('.signature');
    path1 =  test(document.querySelector('.signature__path1'));
    path2 =  test(document.querySelector('.signature__path2'));
    path3 =  test(document.querySelector('.signature__path3'));
    path4 =  test(document.querySelector('.signature__path4'));
    path5 =  test(document.querySelector('.signature__path5'));
    
    
    path2 =  test(document.querySelector('.test'));
};

function test (path){
    path.style.visibility= 'visible';
    length = path.getTotalLength();

    path.style.transition = path.style.WebkitTransition = 'none';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();
    
    if(path == document.querySelector('.signature__path1')){
    path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 1s linear';
  
    }if(path == document.querySelector('.signature__path2')){
     path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 0.5s linear ';
     path.style.transitionDelay="0.5s";
        
    }else if(path == document.querySelector('.signature__path3')){
     path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 1s linear ';
     path.style.transitionDelay="1s";
    }else if(path == document.querySelector('.signature__path4')){
     path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 1s linear ';
     path.style.transitionDelay="2s";
    }else if(path == document.querySelector('.signature__path5')){
      
     path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 1s linear ';
     path.style.transitionDelay="2.8s";
    }
  
      path.style.strokeDashoffset = '0';


    
    return path;
};

function test2(path){
     path.style.fill = '#fff';
}

window.onload = function() {
    
   setTimeout(function() {
    autograph();
   }, 0.500);
};










