 let clip = document.querySelector(".vid") 
  
/* Applying mouseover event on video clip  
and then we call play() function to play  
the video when the mouse is over the video */ 
clip.addEventListener("mouseover", function (e) { 
    clip.play(); 
})