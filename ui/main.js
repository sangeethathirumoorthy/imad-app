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
var button=document.getElementById("counter");
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById("counter");
    span.innerHTML=counter.toString();
}