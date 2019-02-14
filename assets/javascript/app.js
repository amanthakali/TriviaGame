$(document).ready (function(){
    
// to hide to page before starting
$('.page').hide();
// show the question once the start button is clicked
$('#show').click(function(){

  $('.page').show();
  // start the countdown
  var time = 60;
  var timer = setInterval(count,1000);
  function count(){
    time--;
    $("#display").text("Remaining time is: " +time);
    console.log(time);
   // if the time is 0 disableing the click 
    if (time === 0){
      clearInterval(timer);
      //$('#input').off("click","radio")
      $('input').off("click");
    }

  }
  

});

function timeConverter(t) {
  
  //     //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
    
      if (seconds < 10) {
         seconds = "0" + seconds;
      }
    
      if (minutes === 0) {
        minutes = "00";
      }
    
       else if (minutes < 10) {
         minutes = "0" + minutes;
       }
    
       return minutes + ":" + seconds;
     }


  $('input').click(function(){
    if (this.value ==='right'){
      choiceright++;
      console.log('Your answer is right');
    } else {
      console.log('You are wrong!');
    };
    console.log(choiceright);

   
  });
});
