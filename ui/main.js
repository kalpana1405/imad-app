console.log('Loaded!');

//move the image!

var img= document.getElementById('sk');

var marginLeft=0;

function moveRight (){

img.style.marginLeft = marginLeft + 'px' ;    
    
}

img.onclick= function (){
    var interval = setInterval(moveRight,100);
}