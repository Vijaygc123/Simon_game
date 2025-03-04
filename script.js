// // var sounds=document.getElementsByClassName("go");
// var sounds = document.querySelectorAll(".go");



// for(let i=0;i<sounds.length;i++){
//     sounds[i].addEventListener("click",function(){
//         var check=this.id;
//         sound(check);
//         clr(check);


//     });
// }
// function sound(key) {
// switch(key){

//     case 'green':
//         var green=new Audio("sounds/green.mp3");
//         green.play();
//         break;

//     case 'blue':
//         var blue=new Audio("sounds/blue.mp3");
//         blue.play();
//         break;
//     case 'red':
//         var red=new Audio("sounds/red.mp3");
//         red.play();
//         break;
//     case 'yellow':
//         var yellow=new Audio("sounds/yellow.mp3"); 
//         yellow.play();        
//     default:
//         console.log("No Input Selected");
// }
// };




// var arr=["green","red","yellow","blue"];
// function clr(colorCliked){
//     var randomnum=Math.floor(Math.random()*4);
//     var randColor=arr[randomnum];
    
//     var randColorId=document.getElementById(randColor);
//     if(randColorId){
//         randColorId.classList.add("blink");

//     setTimeout(()=>{
//         randColorId.classList.remove("blink");
        
//     },500);
// }


// };


var randColor=["green","red","yellow","blue"];

 var getColorPattern=[];
 var userColor=[];

 var level=0;
 var start=false;
 var targetId;

 $(document).keypress( function(){
    
    if(!start){
        $("#curser").text("Level " + level);
        sequence();
        start=true;
    }
 });
 function reset(){
    clearTimeout(targetId);
    targetId=setTimeout(()=>{
        if(start){
            $("#curser").text("Time out!  Click any key to start");
            

            $("body").addClass("gameover");
            setTimeout(()=>{
                $("body").removeClass("gameover");
            },200);
            playSound("wrong");
        }
        startOver();

    },10000);
    
   
  

 }

  
 

    $(".go").click (function(){


    var userChooseColor=$(this).attr("id");
    userColor.push(userChooseColor);
    playSound(userChooseColor);
    addAnimation(userChooseColor);
        checkAnswer(userColor.length-1);
        reset();
 });

 function checkAnswer(crr){
    if(getColorPattern[crr]===userColor[crr]){
        console.log("sucess");

    
    if(getColorPattern.length === userColor.length){
        setTimeout(()=>{
            sequence();

        },1000);
    }
}
        else{
            console.log("wrong");

            playSound("wrong");

            $("body").addClass("gameover");
            setTimeout(()=>{
                $("body").removeClass("gameover");
            },200);

            $("#curser").text("Game Over press any key to start");

            startOver();

        }
        
    }
 

 function sequence(){
    userColor=[];

    level++;
    $("#curser").text("Level " + level);

    var randNum=Math.floor(Math.random()*4);
    var randColorId=randColor[randNum];
    getColorPattern.push(randColorId);
    // if ($("#" + randColorId).length){
    $("#" +randColorId).fadeIn(100).fadeOut(100).fadeIn(100);
    // }

   
    playSound(randColorId);

 };

function playSound(next){
    var audio=new Audio("sounds/" + next + ".mp3");
    audio.play();
};

function addAnimation(click){
    $("#" + click).addClass("blink");

    setTimeout(()=>{
        $("#" + click).removeClass("blink");
    },100);
};

function startOver(){
    level=0;
    getColorPattern=[];
    start=false;
    clearTimeout(targetId);

}