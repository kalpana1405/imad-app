console.log('Loaded!');

//move the image!

var img= document.getElementById('sk');

var margineLeft=0;

function moveRight (){

img.style.margineLeft = margineLeft + 'px' ;    
    
}

img.onclick= function (){
    var interval = setInterval(moveRight,100);
}