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
/*var button=document.getElementById("counter");
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
}*/
var button=document.getElementById("counter");
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
 request.open('GET',"http://tsangeetha.imad.hasura-app.io/",true);
 request.send(null);
   
   };
   
   
   
   var nameInput=document.getElementById('name');
   var name=nameInput.value;
   var submit=document.getElementById('submit_btn');
   submit.onclick=function()
   {
        var request=new XMLHttpRequest();
    
   //capture the response and store it in a variable
   request.onreadystatechange=function()
   {
       if(request.readystate===XMLHttpRequest.DONE)
       {
           //TAKE SOME ACTION
           if(request.status===200)
           {
               var names=request.responseText;
               names=JSON.parse(names);
       var list=''
       for(var i=0;i<names.length;i++)
       {
           list+='<li>'+names[i]+'<li>';
    }
   
       var ul=document.getElementById('namelist');
       ul.innerHTML=list;
           }
       }
    };
 request.open('GET',"http://tsangeetha.imad.hasura-app.io/submit-name?name="+name,true);
 request.send(null);
      
   }