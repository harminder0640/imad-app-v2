console.log('Loaded!');

//change the context of main-text div
var element = document.getElementById('main-text');

element.innerHTML='New value';

// move the image
var img=document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginLeft=marginLeft +10;
    img.style.marginLeft = marginLeft+'px';
    
}
img.onclick = function(){
var interval = setInterval(moveRight, 100);
};



//Counter code
var button = document.getElementaryById('counter');
var counter = 0;

button.onclick = function() {
    
      //Make a request to counter endpoint
      
      //Capture the response and store it in variable
      
      //Render the variable in correct span
      counter = counter + 1;
      var span = document.getElementaryById('count');
      span.innerHTML = counter.toString();
};