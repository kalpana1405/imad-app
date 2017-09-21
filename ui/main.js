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

// submit name

var nameInput= document.getElementById('name');
var name= nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick= function(){
    // make a request to the server and send the name
    
    //capture a list of names and render it as a list 
    var name= ['name1', 'name2', 'name3', 'name4'];
    var list ='';
    for (var i =0; i<name.length;i++){
     list += '<li>' + name[i]+ '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};































