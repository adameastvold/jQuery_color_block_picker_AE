$(document).ready(function(){

// ====================================================================
                // This appends my div boxes to the container
// ====================================================================

  $('.container').append('<div class="box red"></div>' +
                         '<div class="box green"></div>' +
                         '<div class="box yellow"></div>' +
                         '<div class="box blue"></div>');

// ====================================================================
// This was my attempt to tackle .data(), but didn't end up using it :/
// ====================================================================

  // $('.red').data('color', 'red');
  // $('.green').data('color', 'green');
  // $('.yellow').data('color', 'yellow');
  // $('.blue').data('color', 'blue');

  // console.log($('.red').data(), $('.green').data(), $('.yellow').data(), $('.blue').data());

// ====================================================================
//
// ====================================================================

  var colorID = randomNumber(0, 3);
  var colorChosen;

  if(colorID == 0){
    $('.colorCaller').append('Red');
    colorChosen = 'red';
  } else if(colorID == 1){
    $('.colorCaller').append('Green');
    colorChosen = 'green';
  } else if(colorID == 2){
    $('.colorCaller').append('Yellow');
    colorChosen = 'yellow';
  } else if(colorID == 3){
    $('.colorCaller').append('Blue');
    colorChosen = 'blue';
  };

  console.log(colorID);

  $('.box').on('click', function(){
   if($(this).hasClass(colorChosen)){
     $('.answerCaller').text('yes');
   } else {
      $('.answerCaller').text('no');
   };
   $('.reset').append('<button type="button" class="resetButton">Play Again!</button>');
});

  $('.reset').click(function(){
    location.reload();
  });



});

//================================================================
//    This was the provided random number generator function
//================================================================

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//================================================================
