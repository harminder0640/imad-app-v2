



//Counter code
var button = document.getElementById("counter");
counter = 0;
button.onclick = function(){
    counter = counter +1;
    
    
      //Create the request object
    //  var request = new XMLHttpRequest();
      
      //Capture the response and store it in variable
      //request.onreadyStatechange = function() {
        //  if (request.readystate===XTMLHttpRequest.DONE) {
            //Take some action
          //  if(request.status === 200) {
            //    var counter = request.responseText;
                 var span = document.getElementById('count');
                  span.innerHTML = counter.toString();
         
          //Not done yet
      
      
    //Make the request
  //  request.open('GET','http://harminder0640.imad.hasura-app.io/counter',true);
    //request.send(null);
    
};


