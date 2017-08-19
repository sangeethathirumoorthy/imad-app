/*console.log('Loaded!');
//var changes
var element=document.getElementById("main-text");
element.innerHTML="NEW VALUE"

// move the image
var img=document.getElementById('madi1');

var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
   var interval=setInterval(moveRight,50);
};*/
//programtoincrement the counter using the span
var button=document.getElementById("counter");
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
}
/*var button=document.getElementById("counter");
button.onclick=function()
{  //create a request to the counter endpoint
    var request=new XMLHttpRequest();
    
   //capture the response and store it in a variable
   request.onreadystatechange=function()
   {
       if(request.readystate===XMLHttpRequest.DONE)
       {
           //TAKE SOME ACTION
           if(request.status===200)
           {
               var counter=request.responseText;
               var span=document.getElementById("count");
               span.innerHTML=counter.toString();
           }
       }
    };
 request.open('GET',"http://tsangeetha.imad.hasura-app.io/counter",true);
 request.send(null);
   
   };*/
