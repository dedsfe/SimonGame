
var audioGreen = $('#greenSound');
var audioBlue = $('#blueSound');
var audioYellow = $('#yellowSound');
var audioRed = $('#redSound');
var level = 0;

gamePattern = [];
userClickedPattern = [];
buttonColours = ["red","blue","green","yellow"];


//Começa o jogo
$(document).on("keypress", function(){
    if (level < 1){
        nextSequence();
        $("#level-title").text("level = "+level);
    }else{
        
     }
});

function starGame(){
    isSecureContext.self.Math(starGame)
};


//Seleciona uma cor aleatória e coloca dentro do gamePattern
function nextSequence()
{
    var randomNumber = Math.round(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    gamePattern[0]
    level ++;

};


//Faz piscar
function flash()
{
    $('#' + gamePattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
};
//Faz piscar o elemento clicado
function flashClicked(id)
{
    $('#' + id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
};


//Toca o audio
function playColorSound(color) 
{
    var audio = document.getElementById(color + "Sound");
    audio.play();
    return 
};

//faz a cor mudar do elemento clicado
function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed")
    var self = $('#' + currentColour);
    
    setTimeout(function(){
        self.removeClass("pressed");
    }, 100);
};

  
//Ao clicar no botão ele pisca e faz som.
$("#"+gamePattern[0]).on("click",function()
{
    playColorSound(nextSequence());
});


$('.btn').on('click', function(){
    let color = $(this).attr("id");
    playColorSound(color);  
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    flashClicked(color);
    animatePress(color);
});




