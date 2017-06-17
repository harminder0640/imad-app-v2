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
var button = document.getElementById('counter');

button.onclick = function() {
    
      //Create the request object
      var request = new XMLHttpRequest();
      
      //Capture the response and store it in variable
      request.onreadystatechange = function() {
          if (request.readystate===XTMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                  span.innerHTML = counter();
            }
          }
          //Not done yet
      };
      
    //Make the request
    request.open('GET','http://harminder0640.imad.hasura-app.io/counter',true);
    request.send(null);
    
};


