
var audioGreen = $('greenSound');
var audioBlue = $('blueSound');
var audioYellow = $('yellowSound');
var audioRed = $('redSound');




gamePattern = []
buttonColours = ["red","blue","green","yellow"];

function nextSequence() {
    var randomNumber = Math.round(Math.random() * buttonColours.length);
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    return gamePattern[0]
}

function flashAudio(){
    $('#' + nextSequence()).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    audio.play($('#'+nextSequence()+'Sound'));
}


