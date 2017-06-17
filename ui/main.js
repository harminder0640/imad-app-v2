
//Counter code
var button = document.getElementById("counter");
//counter = 0;

button.onclick = function() {
    
  

      //Create the request object
      var request = new XMLHttpRequest();
      
      //Capture the response and store it in variable
      request.onreadyStatechange = function() {
      if (request.readystate===XTMLHttpRequest.DONE) {
            //Take some action
      if(request.status === 200) {
          var counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
      }
      }
      
      };
      
       request.open('GET','http://harminder0640.imad.hasura-app.io/counter',true);
   request.send(null);
      
      };
      var submit = document.getElementById('submit_btn');
submit.onclick= function(){
   
   var request = new XMLHttpRequest();
    request.onreadyStatechange = function() {
      if (request.readystate===XTMLHttpRequest.DONE) {
            //Take some action
      if(request.status === 200) {
      
      var names = request.responseText;
          names = JSON.parse(names);
  var list = '';
for (var i=0; i<names.length; i++) {
    list +='<li>' + names[i]'</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
       };
      };
          //Not done yet
      };
      
    //Make the request
      var nameInput = document.getElementById('name');
     var name = nameInput.value;
    request.open('GET','http://harminder0640.imad.hasura-app.io/submit-name?name=' + name,true);
   request.send(null);
    
};


    