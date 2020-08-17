var i = 0;
var image= [];
var time = 1000;


images[0] = '/img/surf.png';
images[1] = '/img/surf2.png';
images[2] = '/img/surf3.png';

function changeslider(){
 document.slide.src = images[i];

 if(i < images.length -1){
    i++;
 } else{
     i = 0;
 }

    setTimeout("changeslider()", time);
}

window.onload = changeslider;