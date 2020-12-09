const keys=document.querySelectorAll(".key");
keys.forEach((key)=>{
  key.addEventListener("click",()=>playNote(key));
})
function playNote(key){
  const noteAudio=document.getElementById(key.dataset.note);
  noteAudio.currentTime=0; //to start over again on clcking continuously without waiting for the audio file to end
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended",()=>{
    key.classList.remove("active");
  })
}
