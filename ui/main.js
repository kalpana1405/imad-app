console.log('Loaded!');

//move the image!
var button = document.getElementById('counter');
var counter = 0;
var img= document.getElementById('sk');

var marginLeft=0;
function moveRight (){
marginLeft= marginLeft + 1;
img.style.marginLeft = marginLeft + 'px' ;    
}
img.onclick= function (){
    var interval = setInterval(moveRight,50);
    
    // its not working simultaneously with annimation 
    //document.write('told you');
}

//counter

button.onclick= function(){
    //make a request toi the counter endpoint
    
    //capture the response and store it in a variable
    
    //resend the variable in a correct span
    counter = counter + 1 ; 
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
    
    
};
//