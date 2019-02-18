
$(document).ready(function () {
  $("#timeOff").hide();
  // to hide to page before starting
  //$('.page').hide();
  $('.page').css({ 'visibility': 'hidden' });
  // show the question once the start button is clicked
  $('#show').click(function () {

    // $('.page').show();
    $('.page').css({ 'visibility': 'visible' });

    $('#show').hide();
    $('#grade').hide();
    // start the countdown
    var time = 20;
    var timer = setInterval(count, 1000);
    function count() {
      time--;
      $("#display").text("Remaining time is: " + time);
      console.log(time);
      // if the time is 0 disableing the click 
      if (time === 0) {
        clearInterval(timer);
        //$('#input').off("click","radio")
        document.getElementById('timeOff').innerHTML = "Your time is off....";
        $('.page').hide();
        $('input').off("click");
        //$('#show').show();
        $("#timeOff").show();
        $('#grade').show();


        console.log("You answered " + choiceright + " " + "correct.");
        $("#result").text("Right Answer: " + choiceright);
        $("#result1").text("Wrong Answer: " + choiceWrong);
        $("#result2").text("Not Answered: " + choiceNot);
      }

    }


  });

  function timeConverter(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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

  var choiceright = 0;
  var choiceWrong = 0;
  var choiceNot = 5;
  $("input[name='q1']").click(function () {
    if (this.value === 'right') {
      choiceright++;
      choiceNot--;
      console.log('Your answer is right');
    } else if (this.value !== 'right') {
      choiceWrong++;
      choiceNot--;
      console.log('You are wrong!');
    }
    else {
      choiceNot;
    }



    if (choiceright === 5) {
      $('#grade').text("You are javaScript Ninja");
    }
    else if (choiceright === 0) {
      $('#grade').text("You gotta learn javaScript");
    }
    else {
      $('#grade').text("You know some javaScript");

    }

    console.log(choiceright);


  });
  $('#submit').click(function () {
    $("#timeOff").show();
    $('.page').hide();
    $("#result").text("Right Answer: " + choiceright);
    $("#result1").text("Wrong Answer: " + choiceWrong);
    $("#result2").text("Not Answered: " + choiceNot);

    $('#grade').show();
    //alert("You got" + choiceright+ " "+"correct.");
    //$("#result").text("You answered " + choiceright+ " "+"correct.");
  });
});
