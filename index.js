
for(var i = 0; i < (document.querySelectorAll(".drum").length); i++)
{
//var j = this.innerHTML;
//console.log("This tag working" + j);
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
  this.style.color="white";
  var j = this.innerHTML;
  console.log(j);
  if(j ==='w'){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    console.log("w played");
  }
  else if(j == 'a'){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    console.log("a played");
  }
  else if(j === 's'){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    console.log("s played");
  }
  else if(j === 'd'){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    console.log("d played");
  }
  else if(j ==='j'){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    console.log("j played");
  }
  else if(j === 'k'){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    console.log("k played");
  }
  else if(j === 'l'){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    console.log("l played");
  }
  else{
    alert("Went Something wrong, Click again");
  }
});
}



// function handleClick(){
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
// }
